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

export const EditorContainer = (
    props: any
) => {
    // This Will contain all EditorActionCards

    const {
        checkout,
        redirectCheckout
    } = useContext(StoreContext) as StoreContextType;

    const {
        currentLicensePlate,
        currentEditorStep,
        updateStep,
        currentTemplate,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const editorCols = {
        xs: 4,
        sm: 4,
        md: 4,
        lg: 4,
        xl: 4
    }
    const actionDetailsCols = {
        xs: 5,
        sm: 5,
        md: 5,
        lg: 5,
        xl: 5
    }
    const actionPlaceOrderCols = {
        xs: 7,
        sm: 7,
        md: 7,
        lg: 7,
        xl: 7
    }

    const actionButtonsCols = {
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6
    }

    return (
        <>
            {/* Actions */}
            {/* <Container className={`editorContainer__main`}>

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
                            disabled={currentEditorStep?.currentSubStep === undefined || currentEditorStep?.currentSubStep === "" ?
                                true : false}
                            size='small'
                            className='header__tools-left-back-button'
                            shape="circle"
                            icon={<ArrowLeftOutlined rev={''} />}
                            onClick={() => updateStep?.(3, "")}
                        //     updateStep?.( 
                        //         currentEditorStep?.currentStep === 1 ? 1 : 
                        //         currentEditorStep?.currentStep === undefined ? 1 : currentEditorStep?.currentStep - 1 )
                        // }
                        />
                    </Col>
                    <Col
                        xs={8}
                        sm={8}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        {currentEditorStep?.currentSubStep === undefined &&
                            <h2 className={`editorContainer__title-text`}>Begin Customizing</h2>
                        }
                        <p className={`editorContainer__title-subtext`}>{currentEditorStep?.currentStepDescription ?? 'Using the options below'}</p>
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
                        licensePlate={currentLicensePlate}
                        step={currentEditorStep}
                    />
                }
                {!currentEditorStep?.currentSubStep &&
                    <Row className={`editorContainer__actions g-2`}>
                        <FinishSelect
                            title="State Text"
                            type="finish"
                        />
                        {
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
                        }
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
                                    () => updateStep?.(
                                        3,
                                        currentEditorStep.currentSubStep === "textSetting" ? "backgroundSetting" :
                                            currentEditorStep.currentSubStep === "extraDetails" ? "textSetting" : "",
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
                                    () => updateStep?.(
                                        3,
                                        currentEditorStep.currentSubStep === "backgroundSetting" ? "textSetting" :
                                        currentEditorStep.currentSubStep === "textSetting" ? "extraDetails" : ""
                                    )
                                }
                            >
                                {currentEditorStep.currentSubStep === "extraDetails" ? "Complete" : "Next"}
                                {/* {currentEditorStep.currentSubStep === "backgroundSetting" ? "Cancel" : "Back"} */}
                            </Button>
                        </Col>
                    </Row>
                }
                <Row className={`editorContainer__order-row g-2`}>
                    <Col
                        className={`editorContainer__order-details g-2`}
                        {...actionDetailsCols}
                    >
                        <h1
                            className={`editorContainer__order-price`}
                        >
                            ${(parseInt(currentCustomTemplate?.selectedVariant?.price?.amount ? currentCustomTemplate?.selectedVariant?.price?.amount : 10).toFixed(2))}
                        </h1>
                    </Col>
                    <Col
                        {...actionPlaceOrderCols}
                        className={`editorContainer__order-action g-2`}
                    >
                        <Button
                            className={`editorContainer__order-button g-2`}
                            onClick={() => redirectCheckout?.(currentCustomTemplate)}
                        >
                            Place Order
                        </Button>
                    </Col>
                </Row>

            </Container>
            {/* Details */}
        </>
    )
}