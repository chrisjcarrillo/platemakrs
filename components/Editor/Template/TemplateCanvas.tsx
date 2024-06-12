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
import { useContext, useEffect, useState, useRef } from 'react';
import { FinishEffect } from '../FinishEffect/FinishEffect';
import { ArrowLeftOutlined, ArrowRightOutlined, EditOutlined } from '@ant-design/icons';
// import { topStateSvg } from '../../shared/topStateSvg/topStateSvg';
// import { topStateSvg } from '../../../utils/helpers/toptopStateSvg';
import { initialLicensePlate, initialState } from '../../../utils/helpers';
import { InterfaceContext, InterfaceContextType } from '../../../context/interfaceContext';
import { BottomLogo } from '../BottomLogo/BottomLogo';
import { useRouter } from 'next/navigation';
import { StoreContext, StoreContextType } from '../../../context/storeContext';
import html2canvas from 'html2canvas';
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject, uploadString } from 'firebase/storage';
import { TopActions } from '../../../utils/actions/TopActions';
import { premadeTemplates } from '../../../utils/premadeTemplates';
import { IShopifyVariant } from '../../../interfaces/shopify/variants.interface';
import { ICustomPlateTemplate } from '../../../interfaces/customTemplate.interface';
import { topStateSvg } from '../../../utils/helpers/topStateSvg';
import { StateSvg } from '../../shared/StateSvg/StateSvg';

const TemplateCanvas = (
    props: {
        popupPreview?: boolean,
        canvasRef: any
    }
) => {

    const router = useRouter();

    const {
        extras,
        extrasPremade
    } = useContext(StoreContext) as StoreContextType;

    const {
        editLogoUi,
        setEditLogoUi,
        isPreset,
    } = useContext(InterfaceContext) as InterfaceContextType

    const {
        currentLicensePlate,
        currentCustomTemplate,
        currentEditorStep,
        updateStep,
        setCurrentCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const { popupPreview, canvasRef } = props;

    const editLogoButtonSettings = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }

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
        stepType: 'BACK' | 'NEXT'
    ) => {
        if (extrasPremade && stepType === "BACK") {
            let currentTemp = JSON.parse(localStorage.getItem('previousTemplate'))
            setCurrentCustomTemplate(template => ({
                ...template,
                ...currentTemp
            }))
        } else {
            // TODO: If extraPremade is true, set the previous localStorage(customTemplateId)
            const currentDecision = TopActions(stepType, currentEditorStep, isPreset)
            if (currentDecision?.updateStep) {
                updateStep?.(currentDecision?.step)
            }
            if (!currentDecision?.updateStep) {
                if (stepType === "BACK") {
                    if (currentEditorStep?.currentStep === 1) {
                        setCurrentCustomTemplate?.(undefined)
                    }
                }
                router.push(currentDecision?.page)
            }
        }
    }

    const formatDisplayText = text => {
        return text.replace(/-/g, '<span class="custom-dash">-</span>');
    };

    return (
        <>
            <Container
                className={`canvas__tools-main animate__animated animate__fadeIn ${extras ? 'remove--sticky' : ''}`}
                id={'canvas-top'}
            >
                <Row className="canvas__tools">

                    <Col {...actionSettings}>
                        {(!isPreset || isPreset && currentEditorStep?.currentStep === 1) && (
                            <div className='header__tools-left-back'>
                                <Button
                                    size='small'
                                    className='header__tools-left-back-button'
                                    shape="circle"
                                    icon={<ArrowLeftOutlined rev={''} />}
                                    onClick={() =>
                                        stepDecision('BACK')
                                    }
                                />
                            </div>
                        )}
                    </Col>
                    <Col {...headerSettings}>
                        <div className="editor__title">
                            <h2 className="editor__title-text">License Plate Preview</h2>
                        </div>
                    </Col>
                    <Col {...actionSettings}>
                        {(!isPreset || isPreset && currentEditorStep?.currentStep === 1) && (
                            <div className="header__tools-right-forward">
                                <Button
                                    size='small'
                                    disabled={
                                        currentEditorStep?.currentStep === 1
                                            || currentEditorStep?.currentStep === 3
                                            || currentEditorStep?.currentStep === 2 ? true : false}
                                    className="header__tools-right-forward-button"
                                    shape="circle"
                                    icon={<ArrowRightOutlined rev={''} />}
                                    onClick={() => stepDecision('NEXT')}
                                />
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>

            <Container
                className={`canvas__main animate__animated animate__fadeIn ${editLogoUi ? 'zIndexHigh add--sticky' : ''} ${extras ? 'remove--sticky' : ''}`}
                style={
                    popupPreview ? { backgroundColor: '#ffffff' } : {}
                }
            >
                <div
                    className="canvas__main-container"
                >
                    <div
                        ref={canvasRef}
                        className={`canvas__main-inner-container`}
                        style={{
                            border: currentCustomTemplate?.backgroundSettings?.stroke?.enabled ? `5px solid ${currentCustomTemplate?.backgroundSettings?.stroke?.color}` : 'unset'
                        }}
                    >
                        {currentEditorStep?.currentStep === 2 && !popupPreview && (
                            <div className="canvas__main-preview">
                                <div className='canvas__main-preview-bullet'>
                                    Select your template before starting
                                </div>
                            </div>
                        )}

                        {/* START Top State */}
                        <div
                            className={`canvas__state-container ${currentEditorStep?.currentStep === 2 && !popupPreview ? 'preview' : ''}`}
                        >
                            {
                                topStateSvg.find(state => state.stateId === currentLicensePlate?.state) && (
                                    <StateSvg
                                        svg={topStateSvg.find(state => state.stateId === currentLicensePlate?.state)}
                                        color={`${currentCustomTemplate?.state?.color ?? '#ffffff'}`}
                                        textShadow={`${currentCustomTemplate?.state?.glow?.enabled ? `${currentCustomTemplate?.state.glow.color ?? '#000000'} 0px 0px 5px, ${currentCustomTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px` : ``}`}
                                        textStrokeColor={`${currentCustomTemplate?.state?.stroke?.enabled ? `${currentCustomTemplate?.state?.stroke.color ?? '#000000'}` : `#000000`}`}
                                        textStrokeWidth={`${currentCustomTemplate?.state?.stroke?.enabled ? '1px' : ''}`}
                                        filter={`${currentCustomTemplate?.state?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`}
                                    />
                                )
                            }
                            {
                                !topStateSvg.find(state => state.stateId === currentLicensePlate?.state) && (
                                    <a
                                        className={`canvas__state-text ${currentEditorStep?.currentStep === 2 && !popupPreview ? 'add-shadow' : ''}`}
                                        style={{
                                            color: `${currentCustomTemplate?.state?.color ?? '#ffffff'}`,
                                            textShadow: `${currentCustomTemplate?.state?.glow?.enabled ? `${currentCustomTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px, ${currentCustomTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px` : `unset`}`,
                                            WebkitTextStrokeColor: `${currentCustomTemplate?.state?.stroke?.enabled ? `${currentCustomTemplate?.state?.stroke?.color}` : `#000000`}`,
                                            WebkitTextStrokeWidth: `${currentCustomTemplate?.state?.stroke?.enabled ? '1px' : '0px'}`,
                                            filter: `${currentCustomTemplate?.state?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : 'unset'}`
                                        }}
                                    >
                                        {currentLicensePlate?.state ?? initialState}
                                    </a>
                                )
                            }

                        </div>
                        {/* END Top State */}

                        {/* START License Plate Digits*/}
                        <div
                            className={`canvas__license-container ${currentEditorStep?.currentStep === 2 && !popupPreview ? 'preview add-shadow' : ''}`}
                        >
                            <div
                                className={`canvas__license-inner-container canvas--align-${currentLicensePlate?.platePosition ?? currentCustomTemplate?.startPlatePosition} ${currentEditorStep?.currentStep === 2 ? 'add-shadow' : ''}`}
                            >
                                <a
                                    className="canvas__license-text"
                                    style={{
                                        color: `${currentCustomTemplate?.plateNumber?.color ?? '#ffffff'}`,
                                        WebkitTextStrokeColor: `${currentCustomTemplate?.plateNumber?.stroke?.enabled ? `${currentCustomTemplate?.plateNumber?.stroke?.color ?? '#000000'}` : ``}`,
                                        WebkitTextStrokeWidth: `${currentCustomTemplate?.plateNumber?.stroke?.enabled ? '2px' : ''}`,
                                        filter: `${currentCustomTemplate?.plateNumber?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: currentLicensePlate?.plateNumber ?
                                            formatDisplayText(currentLicensePlate?.plateNumber) :
                                            currentCustomTemplate?.startPlateText ? currentCustomTemplate?.startPlateText : initialLicensePlate
                                    }}
                                />
                            </div>
                        </div>
                        {/* END License Plate Digits*/}

                        {/* START Bottom letters */}
                        <div
                            className={`canvas__bottomText-container 
                                ${currentEditorStep?.currentStep === 2 && !popupPreview ? 'preview add-shadow' : ''}
                                ${!currentLicensePlate?.bottomTextEnabled && !currentLicensePlate?.bottomText ? 'canvas__bottomText-space' : ''}`
                            }
                            style={{
                                zIndex: 20
                            }}
                        >
                            {
                                currentLicensePlate?.bottomTextEnabled
                                && currentLicensePlate?.bottomText && (
                                    <a
                                        className={`canvas__bottomText-text`}
                                        style={{
                                            color: `${currentCustomTemplate?.bottomText?.color ?? '#ffffff'}`,
                                            textShadow: `${currentCustomTemplate?.bottomText?.glow?.enabled ? `${currentCustomTemplate?.bottomText?.glow?.color ?? '#000000'} 0px 0px 5px, ${currentCustomTemplate?.bottomText?.glow?.color ?? '#000000'} 0px 0px 5px` : ``}`,
                                            WebkitTextStrokeColor: `${currentCustomTemplate?.bottomText?.stroke?.enabled ? `${currentCustomTemplate?.bottomText.stroke.color ?? '#000000'}` : ``}`,
                                            WebkitTextStrokeWidth: `${currentCustomTemplate?.bottomText?.stroke?.enabled ? '1px' : ''}`,
                                            filter: `${currentCustomTemplate?.bottomText?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`
                                        }}
                                    >
                                        {/* Bottom Text */}
                                        {
                                            currentLicensePlate?.bottomTextEnabled
                                                && currentLicensePlate?.bottomText ? currentLicensePlate?.bottomText : null
                                        }
                                    </a>
                                )
                            }
                        </div>
                        {/* END Bottom letters */}

                        {/* START Logo*/}
                        {currentCustomTemplate?.mainLogo?.enabled &&
                            <Logo
                                canvasReference={canvasRef}
                                type="CANVAS"
                            />
                        }
                        {/* END Logo*/}
                        {/* START Bottom Logo*/}
                        {
                            currentCustomTemplate?.bottomLogo?.enabled
                                && !currentLicensePlate?.bottomTextEnabled ? (
                                <BottomLogo
                                    canvasReference={canvasRef}
                                    type="CANVAS"
                                    logoType="BOTTOM"
                                />
                            ) : null

                        }
                        {/* END Bottom Logo*/}

                        {/* START Background*/}
                        <Background
                            type="CANVAS"
                            customTemplate={currentCustomTemplate}
                            canvasReference={canvasRef}
                        />
                        {/* END Background*/}

                    </div>
                </div>
            </Container>

            {
                (currentCustomTemplate?.mainLogo?.enabled
                    || currentCustomTemplate?.bottomLogo?.enabled
                    || currentCustomTemplate?.detailLogo1?.enabled
                    || currentCustomTemplate?.detailLogo2?.enabled) && (
                    <Container
                        className={`editLogo__main-action`}
                    >
                        <Row
                            className={`editLogo__main-action-row`}
                        >
                            <Col
                                className={`editLogo__main-action-col`}
                                {...editLogoButtonSettings}
                            >
                                <Button className={`editLogo__main-action-button`} onClick={() => setEditLogoUi(true)}>
                                    Edit Logo <EditOutlined />
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </>
    )
}

export default TemplateCanvas;