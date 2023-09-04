import { Button, Checkbox, Tooltip } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect, useRef} from 'react';
import { EditorContext, EditorContextType } from '../../../context/editorContext';
import { StoreContext, StoreContextType } from '../../../context/storeContext';
import { handleActions } from '../EditorPresetContainer/actions/HandleActions';

export const PlaceOrder = () => {


    const {
        checkout,
        redirectCheckout,
        hasDesigner,
        acceptTerms,
        setAcceptTerms
    } = useContext(StoreContext) as StoreContextType;

    const {
        currentCustomTemplate,
        currentEditorStep,
        updateStep,
        currentLicensePlate
    } = useContext(EditorContext) as EditorContextType;

    const showTotal = () => {
        if (hasDesigner) {
            const amount = (parseInt(currentCustomTemplate?.selectedVariant?.price?.amount) + 50).toFixed(2)
            return `${amount}`
        }
        if (currentCustomTemplate?.selectedVariant?.price?.amount) {
            const amount = parseInt(currentCustomTemplate?.selectedVariant?.price?.amount).toFixed(2)
            return `${amount}`
        }
        return parseInt('0').toFixed(2)
    }

    const termsCols = {
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6
    }

    const priceDetailsCols = {
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6
    }

    const placeOrderCols = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }

    const actionButtonsCols = {
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6
    }

    const checkboxReference = useRef<any>();

    useEffect(() => {
        if(currentEditorStep?.currentSubStep === "termsAndConditions"){
            checkboxReference.current.focus();
            // console.log(checkboxReference)
        }
    }, [checkboxReference])



    const handleAction = (
        actionType: 'back' | 'forward' | 'cancel',
    ) => {
        const handle = handleActions(
            actionType,
            currentCustomTemplate,
            currentEditorStep,
            currentLicensePlate
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
            {/* Details? */}
            {
                currentEditorStep?.currentSubStep && currentEditorStep?.currentSubStep !== "termsAndConditions" &&
                <Container className={`editorContainer__order`}>
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

                </Container>
            }

            {/* Details */}

            {
                currentEditorStep?.currentSubStep === "termsAndConditions" && (
                    <Container className={`placeOrder__container animate__animated animate__fadeIn`}>
                        <Row className="placeOrder__row-terms-final animate__animated animate__bounceInUp">
                            <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                                className={`placeOrder__action`}
                            >
                                <Checkbox
                                    className='placeOrder__terms'
                                    ref={checkboxReference}
                                    autoFocus
                                    onChange={(e) => {
                                        setAcceptTerms(e.target.checked)
                                    }}>
                                    I Accept the <a href={'#'}> Terms and Conditions</a>
                                </Checkbox>
                            </Col>
                        </Row>

                        <Row className={`placeOrder__row-details-final g-2 animate__animated animate__bounceInUp`}>
                            <Col
                                className={`placeOrder__details-final`}
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                xl={12}
                            >
                                <h1
                                    className={`placeOrder__price-final`}
                                >
                                    Total: ${showTotal()}
                                </h1>
                            </Col>
                        </Row>
                        <Row className={`placeOrder__row-order g-2 animate__animated animate__bounceInUp`}>
                            <Col {...placeOrderCols} className={`placeOrder__action`}>
                                <Button
                                    disabled={acceptTerms ? false : true}
                                    className={`placeOrder__button-final`}
                                    onClick={() => redirectCheckout?.(currentCustomTemplate)}
                                >
                                    Place Order
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                )
            }

            {currentEditorStep?.currentSubStep !== "termsAndConditions" && (
                <Container className={`placeOrder__container`}>
                    <Row className={`placeOrder__row-details g-2`}>
                        <Col
                            {...termsCols}
                            className={`placeOrder__action`}
                        >
                            <Checkbox
                                className='placeOrder__terms'
                                onChange={(e) => {
                                    setAcceptTerms(e.target.checked)
                                }}>
                                <a>Terms and Conditions</a>
                            </Checkbox>
                        </Col>

                        <Col
                            className={`placeOrder__details`}
                            {...priceDetailsCols}
                        >
                            <h1
                                className={`placeOrder__price`}
                            >
                                Total: ${showTotal()}
                            </h1>
                        </Col>
                    </Row>
                    <Row className={`placeOrder__row-order g-2`}>
                        <Col {...placeOrderCols} className={`placeOrder__action`}>
                            <Button
                                disabled={acceptTerms ? false : true}
                                className={`placeOrder__button`}
                                onClick={() => redirectCheckout?.(currentCustomTemplate)}
                            >
                                Place Order
                            </Button>
                        </Col>
                    </Row>
                </Container>
            )}


        </>
    )
}