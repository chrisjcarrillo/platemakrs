import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'antd';
import { EditorActionContainer } from '../EditorActionContainer/EditorActionContainer';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../context/editorContext';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { handleActions } from '../EditorPresetContainer/actions/HandleActions';
import { StoreContext, StoreContextType } from '../../../context/storeContext';

export const EditorContainer = (props:{
    presetTemplate?: boolean
}) => {
    // This Will contain all EditorActionCards
    const {
        currentLicensePlate,
        currentEditorStep,
        updateStep,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const {
        extras
    } = useContext(StoreContext) as StoreContextType;

    const { presetTemplate } = props;
    
    const handleAction = (
        actionType: 'back' | 'forward' | 'cancel',
    ) => {
        const handle = handleActions(
            actionType,
            currentCustomTemplate,
            currentEditorStep,
            currentLicensePlate,
            presetTemplate,
            extras
        )
        if (handle?.step === undefined) {
            updateStep?.(
                1,
                undefined,
                undefined,
                false,
                undefined
            )
            // Reset count to 0 on dynamic route change.
        } else {
            updateStep?.(
                3,
                handle?.subStep,
                handle?.subTitle,
                false,
                handle?.title
            )
        }
    }

    return (
        <>
            <Container className={`editorContainer__main`}>

                <Row className={`editorContainer__title`}>
                    <Col
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        xl={2}
                    >
                        <Button
                            disabled={
                                currentEditorStep?.currentSubStep === undefined ||
                                    currentEditorStep?.currentSubStep === "" ?
                                    true : false
                            }
                            size='small'
                            className='header__tools-left-back-button'
                            shape="circle"
                            icon={<ArrowLeftOutlined rev={''} />}
                            onClick={
                                () => handleAction(
                                    'back'
                                )
                            }
                        />
                    </Col>
                    <Col
                        xs={8}
                        sm={8}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        {
                            currentEditorStep?.currentSubStep !== undefined
                            && <h2 className={`editorContainer__title-text`}>{currentEditorStep?.currentStepTitle}</h2>
                        }
                        <p
                            className={`editorContainer__title-subtext`}>
                            {currentEditorStep?.currentStepDescription ?? 'Using the options below'}
                        </p>
                    </Col>
                    <Col
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        xl={2}
                    >
                    </Col>
                </Row>

                {currentEditorStep?.currentSubStep &&
                    <EditorActionContainer
                        step={currentEditorStep}
                    />
                }
            </Container>
        </>
    )
}