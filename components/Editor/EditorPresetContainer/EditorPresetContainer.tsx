import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { editorActions } from '../../../utils/editorActions';
import { Button } from 'antd';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons'
import { IEditorSteps } from '../../../interfaces/editor.interface';
import { EditorActionContainer } from '../EditorActionContainer/EditorActionContainer';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../context/editorContext';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { FinishSelect } from '../EditorActions/FinishSelect/FinishSelect';
import { StoreContext, StoreContextType } from '../../../context/storeContext';
import { PlaceOrder } from '../BottomButton/PlaceOrder';
import { PresetActions } from './actions/PresetActions';
import { useRouter } from "next/navigation";
import { handleActions } from './actions/HandleActions';

export const EditorPresetContainer = (
    props: any
) => {
    const {
        currentLicensePlate,
        currentEditorStep,
        updateStep,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const actionButtonsCols = {
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6
    }

    const router = useRouter();

    const handleAction = (
        actionType: 'back' | 'forward' | 'cancel',
    ) => {
        const handle = handleActions(
            actionType,
            currentCustomTemplate,
            currentEditorStep,
            currentLicensePlate
        )

        if(handle?.step === undefined){
            updateStep?.(
                1,
                undefined,
                undefined,
                false,
                undefined
            )
            // Reset count to 0 on dynamic route change.
            router.push('/products')
        }

        if(handle){
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
            {/* Actions */}
            {/* <Container className={`editorContainer__main`}>
        
            // Actions

            </Container> */}
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
                    <PresetActions
                        step={currentEditorStep}

                    />
                }

                {!currentEditorStep?.currentSubStep &&
                    <Row className={`editorContainer__actions g-2`}>
                        {/* <FinishSelect
                            title="State Text"
                            type="finish"
                        /> */}
                        {/* {
                            editorActions.map((editor, index) => {
                                return (
                                    <Col
                                        style={
                                            currentTemplate?.templateId === '1' && index === 2 && !sessionStorage.getItem('preset') ? {
                                                display: 'none'
                                            } : {

                                            }
                                        }
                                        className={`editorAction__main`}
                                        {...editorCols}
                                        key={index}
                                        onClick={() => updateStep?.(3, editor.subStep, editor.description)}
                                    >
                                        <div className={`editorAction__card`}>
                                            <FontAwesomeIcon
                                                className={`editorAction__icon`}
                                                icon={editor.icon ?? faFillDrip}
                                            />
                                            <hr />
                                            <p className={`editorAction__name`}>
                                                {editor.name}
                                            </p>
                                        </div>
                                    </Col>
                                )
                            })
                        } */}
                    </Row>
                }

            </Container>

            {/* Details? */}
            <Container className={`editorContainer__order`}>
                {
                    currentEditorStep?.currentSubStep &&
                    <Row className={`editorContainer__order-row-steps g-2`}>
                        <Col
                            className={`editorContainer__order-step-back g-2`}
                            {...actionButtonsCols}
                        >
                            <Button
                                className={`editorContainer__order-step-back-button g-2`}
                                onClick={
                                    () => handleAction(
                                        'back'
                                    )

                                }
                            >
                                {currentEditorStep.currentSubStep === "backgroundSetting" ? "Cancel" : "Back"}
                            </Button>
                        </Col>
                        <Col
                            {...actionButtonsCols}
                            className={`editorContainer__order-step-next g-2`}
                        >
                            <Button
                                className={`editorContainer__order-step-next-button g-2`}
                                onClick={
                                    () => handleAction(
                                        'forward'
                                    )
                                }
                            >
                                {currentEditorStep.currentSubStep === "extraDetails" ? "Complete" : "Next"}
                                {/* {currentEditorStep.currentSubStep === "backgroundSetting" ? "Cancel" : "Back"} */}
                            </Button>
                        </Col>
                    </Row>
                }
            </Container>
            {/* Details */}
        </>
    )
}