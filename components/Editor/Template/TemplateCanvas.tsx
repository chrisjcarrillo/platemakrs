import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from 'antd';
// Canvas Background 
import { Background } from '../Background/Background';

// Canvas Logo
import { Logo } from '../Logo/Logo';
import { EditorContext } from '../../../context/editorContext';
import { EditorContextType } from '../../../context/editorContext';
import { useContext, useRef } from 'react';
import { FinishEffect } from '../FinishEffect/FinishEffect';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { StateSvg } from '../../shared/StateSvg/StateSvg';
import { stateSvg } from '../../../utils/helpers/stateSvg';

import { ITemplate } from '../../../interfaces/template.interface';
import { ICustomPlateTemplate } from '../../../interfaces/customTemplate.interface';
import { initialLicensePlate, initialState } from '../../../utils/helpers';
import { InterfaceContext, InterfaceContextType } from '../../../context/interfaceContext';
import { BottomLogo } from '../BottomLogo/BottomLogo';
import { useRouter } from 'next/navigation';

const TemplateCanvas = (
    props: {
        popupPreview?: boolean,
    }
) => {

    const canvasRef = useRef(null);
    const router = useRouter();

    const {
        showDecision,
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType

    const {
        currentLicensePlate,
        currentCustomTemplate,
        currentTemplate,
        currentEditorStep,
        updateStep,
    } = useContext(EditorContext) as EditorContextType;

    const { popupPreview } = props;

    const actionSettings = {
        xs: 2,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 2
    }

    const headerSettings = {
        xs: 8,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8
    }

    const stepDecision = (
        stepType?: 'BACK' | 'NEXT' 
    ) => {
        if(stepType === "NEXT"){
            if(isPreset){
                if(currentEditorStep?.currentStep === 1 && currentLicensePlate){
                    updateStep?.(3)
                }
            } else if (!isPreset){
                currentEditorStep?.currentStep === 1
                    ? currentEditorStep?.currentStep ?? 1 + 1 : 3
            }
        } else if (stepType === "BACK") {
            if(isPreset){
                if(currentEditorStep?.currentStep === 1){
                    router.push('/products')
                }
                if(currentEditorStep?.currentStep === 3){
                    updateStep?.(1)
                }
            } else if (!isPreset) {
                currentEditorStep?.currentStep === 1 ? 1 :
                                                currentEditorStep?.currentStep === undefined ? 1 : currentEditorStep?.currentStep - 1
            }
        }
        return // Where the step should go
    }

    return (
        <>
            <Container
                className={`canvas__tools-main`}
            >
                {!popupPreview && (
                    <Row className="canvas__tools">
                        <Col {...actionSettings}>
                            <div className='header__tools-left-back'>
                                <Button
                                    size='small'
                                    disabled={currentEditorStep?.currentStep === 1 && !isPreset ? true : false}
                                    className='header__tools-left-back-button'
                                    shape="circle"
                                    icon={<ArrowLeftOutlined rev={''}  />}
                                    onClick={() =>
                                        stepDecision('BACK')
                                    }
                                />
                            </div>
                        </Col>
                        <Col {...headerSettings}>
                            <div className="editor__title">
                                <h2 className="editor__title-text">License Plate Preview </h2>
                            </div>
                        </Col>
                        <Col {...actionSettings}>
                            <div className="header__tools-right-forward">
                                <Button
                                    size='small'
                                    disabled={
                                        currentEditorStep?.currentStep === 1
                                            || currentEditorStep?.currentStep === 3
                                            || currentEditorStep?.currentStep === 2 && currentTemplate === undefined ? true : false}
                                    className="header__tools-right-forward-button"
                                    shape="circle"
                                    icon={<ArrowRightOutlined rev={''}  />}
                                    onClick={() => stepDecision('NEXT')}
                                />
                            </div>
                        </Col>

                    </Row>
                )}
            </Container>

            <Container
                className={`canvas__main ${showDecision ? 'zIndexHigh' : ''}`}
                style={
                    popupPreview ? { backgroundColor: '#ffffff' } : {}
                }
            >
                <div
                    className="canvas__main-container"
                >
                    <FinishEffect
                        customTemplate={currentCustomTemplate}
                    />
                    <div
                        ref={canvasRef}
                        className={`canvas__main-inner-container`}
                        style={
                            currentCustomTemplate === undefined
                                ? {
                                    border: currentTemplate?.backgroundSettings?.stroke?.enabled ? `5px solid ${currentTemplate?.backgroundSettings?.stroke?.color}` : 'unset'
                                } : {
                                    border: currentCustomTemplate?.backgroundSettings?.stroke?.enabled ? `5px solid ${currentCustomTemplate?.backgroundSettings?.stroke?.color}` : 'unset'
                                }
                        }
                    >
                        {currentEditorStep?.currentStep === 2 && currentTemplate === undefined && (
                            <div className="canvas__main-preview">
                                <div className='canvas__main-preview-bullet'>
                                    Select your template before starting
                                </div>
                            </div>
                        )}

                        {/* START Top State */}
                        <div
                            className={`canvas__state-container ${currentEditorStep?.currentStep === 2 && currentTemplate === undefined ? 'preview' : ''}`}
                        >
                            {
                                stateSvg.find(state => state.stateId === currentLicensePlate?.state) && (
                                    <StateSvg
                                        svg={stateSvg.find(state => state.stateId === currentLicensePlate?.state)}
                                        color={`${currentCustomTemplate?.state?.color ?? '#ffffff'}`}
                                        textShadow={`${currentCustomTemplate?.state?.glow?.enabled ? `${currentCustomTemplate?.state.glow.color ?? '#000000'} 0px 0px 5px, ${currentCustomTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px` : ``}`}
                                        textStrokeColor={`${currentCustomTemplate?.state?.stroke?.enabled ? `${currentCustomTemplate?.state?.stroke.color ?? '#000000'}` : `#000000`}`}
                                        textStrokeWidth={`${currentCustomTemplate?.state?.stroke?.enabled ? '1px' : ''}`}
                                        filter={`${currentCustomTemplate?.state?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`}
                                    />
                                )
                            }
                            {
                                !stateSvg.find(state => state.stateId === currentLicensePlate?.state) && (
                                    <a
                                        className={`canvas__state-text ${currentEditorStep?.currentStep === 2 ? 'add-shadow' : ''}`}
                                        style={
                                            currentCustomTemplate === undefined
                                                ? {
                                                    color: `${currentTemplate?.state?.color ?? '#ffffff'}`,
                                                    textShadow: `${currentTemplate?.state?.glow?.enabled ? `${currentTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px, ${currentTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px` : `unset`}`,
                                                    WebkitTextStrokeColor: `${currentTemplate?.state?.stroke?.enabled ? `${currentTemplate?.state?.stroke?.color}` : `'#000000`}`,
                                                    WebkitTextStrokeWidth: `${currentTemplate?.state?.stroke?.enabled ? '1px' : '0px'}`,
                                                    filter: `${currentTemplate?.state?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : 'unset'}`
                                                } : {
                                                    color: `${currentCustomTemplate?.state?.color ?? '#ffffff'}`,
                                                    textShadow: `${currentCustomTemplate?.state?.glow?.enabled ? `${currentCustomTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px, ${currentCustomTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px` : `unset`}`,
                                                    WebkitTextStrokeColor: `${currentCustomTemplate?.state?.stroke?.enabled ? `${currentCustomTemplate?.state?.stroke?.color}` : `#000000`}`,
                                                    WebkitTextStrokeWidth: `${currentCustomTemplate?.state?.stroke?.enabled ? '1px' : '0px'}`,
                                                    filter: `${currentCustomTemplate?.state?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : 'unset'}`
                                                }
                                        }
                                    >
                                        {currentLicensePlate?.state ?? initialState}
                                    </a>
                                )
                            }

                        </div>
                        {/* END Top State */}

                        {/* START License Plate Digits*/}
                        <div
                            className={`canvas__license-container ${currentEditorStep?.currentStep === 2 && currentTemplate === undefined ? 'preview add-shadow' : ''}`}
                        >
                            <div
                                className={`canvas__license-inner-container canvas--align-${
                                    currentLicensePlate?.platePosition ?? currentCustomTemplate?.startPlatePosition} ${currentEditorStep?.currentStep === 2 ? 'add-shadow' : ''}`}
                            >
                                <a
                                    className="canvas__license-text"
                                    style={
                                        currentCustomTemplate === undefined ? {
                                            color: `${currentTemplate?.plateNumber?.color ?? '#ffffff'}`,
                                            WebkitTextStrokeColor: `${currentTemplate?.plateNumber?.stroke?.enabled ? `${currentTemplate?.plateNumber?.stroke?.color ?? '#000000'}` : ``}`,
                                            WebkitTextStrokeWidth: `${currentTemplate?.plateNumber?.stroke?.enabled ? '2px' : ''}`,
                                            filter: `${currentTemplate?.plateNumber?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`
                                        } : {
                                            color: `${currentCustomTemplate?.plateNumber?.color ?? '#ffffff'}`,
                                            WebkitTextStrokeColor: `${currentCustomTemplate?.plateNumber?.stroke?.enabled ? `${currentCustomTemplate?.plateNumber?.stroke?.color ?? '#000000'}` : ``}`,
                                            WebkitTextStrokeWidth: `${currentCustomTemplate?.plateNumber?.stroke?.enabled ? '2px' : ''}`,
                                            filter: `${currentCustomTemplate?.plateNumber?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`
                                        }

                                    }
                                >
                                    {
                                        currentLicensePlate?.plateNumber ? 
                                            currentLicensePlate?.plateNumber : 
                                                currentCustomTemplate?.startPlateText ? currentCustomTemplate?.startPlateText : initialLicensePlate
                                    }
                                </a>
                            </div>
                        </div>
                        {/* END License Plate Digits*/}

                        {/* START Bottom letters */}
                        <div
                            className={`canvas__bottomText-container 
                                ${currentEditorStep?.currentStep === 2 && currentTemplate === undefined ? 'preview add-shadow' : ''} 
                                ${!currentLicensePlate?.bottomTextEnabled && !currentLicensePlate?.bottomText ? 'canvas__bottomText-space' : ''}`
                            }
                        >
                            {
                                currentLicensePlate?.bottomTextEnabled
                                && currentLicensePlate?.bottomText && (
                                    <a
                                        className={`canvas__bottomText-text`}
                                        style={
                                            currentCustomTemplate === undefined
                                                ? {
                                                    color: `${currentTemplate?.bottomText?.color ?? '#ffffff'}`,
                                                    textShadow: `${currentTemplate?.bottomText?.glow?.enabled ? `${currentTemplate?.bottomText?.glow?.color ?? '#000000'} 0px 0px 5px, ${currentTemplate?.bottomText?.glow?.color ?? '#000000'} 0px 0px 5px` : ``}`,
                                                    WebkitTextStrokeColor: `${currentTemplate?.bottomText?.stroke?.enabled ? `${currentTemplate?.bottomText.stroke.color ?? '#000000'}` : ``}`,
                                                    WebkitTextStrokeWidth: `${currentTemplate?.bottomText?.stroke?.enabled ? '1px' : ''}`,
                                                    filter: `${currentTemplate?.bottomText?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`
                                                } : {
                                                    color: `${currentCustomTemplate?.bottomText?.color ?? '#ffffff'}`,
                                                    textShadow: `${currentCustomTemplate?.bottomText?.glow?.enabled ? `${currentCustomTemplate?.bottomText?.glow?.color ?? '#000000'} 0px 0px 5px, ${currentCustomTemplate?.bottomText?.glow?.color ?? '#000000'} 0px 0px 5px` : ``}`,
                                                    WebkitTextStrokeColor: `${currentCustomTemplate?.bottomText?.stroke?.enabled ? `${currentCustomTemplate?.bottomText.stroke.color ?? '#000000'}` : ``}`,
                                                    WebkitTextStrokeWidth: `${currentCustomTemplate?.bottomText?.stroke?.enabled ? '1px' : ''}`,
                                                    filter: `${currentCustomTemplate?.bottomText?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`
                                                }
                                        }
                                    >
                                        {/* Bottom Text */}
                                        {
                                            currentLicensePlate?.bottomTextEnabled
                                                && currentLicensePlate?.bottomText ? currentLicensePlate?.bottomText : null
                                        }
                                    </a>
                                )
                            }
                            {/* START Bottom Logo*/}
                            {
                                currentCustomTemplate?.bottomLogo?.enabled === true && currentLicensePlate === undefined
                                    || currentCustomTemplate?.bottomLogo?.enabled === true && currentLicensePlate?.bottomTextEnabled === false ? (
                                    <BottomLogo
                                        canvasReference={canvasRef}
                                        type="CANVAS"
                                        logoType="BOTTOM"
                                    /> ): null
                                
                            }
                            {/* END Bottom Logo*/}
                        </div>
                        {/* END Bottom letters */}

                        {/* START Logo*/}
                        {currentTemplate?.mainLogo?.enabled &&
                            <Logo
                                canvasReference={canvasRef}
                                type="CANVAS"
                                logoType="REGULAR"
                                initialPosition={currentLicensePlate?.platePosition}
                            />
                        }
                        {/* END Logo*/}

                        {/* START Background*/}
                        <Background
                            type="CANVAS"
                            template={currentTemplate}
                            customTemplate={currentCustomTemplate}
                            canvasReference={canvasRef}
                        />
                        {/* END Background*/}

                    </div>
                </div>
            </Container>
        </>
    )
}

export default TemplateCanvas;