import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Canvas Background 
import { Background } from '../Background/Background';

// Canvas Logo
import { Logo } from '../Logo/Logo';
import { EditorContext } from '../../../context/editorContext';
import { EditorContextType } from '../../../context/editorContext';
import { useContext } from 'react';

import { FinishEffect } from '../FinishEffect/FinishEffect';

import { ITemplate } from '../../../interfaces/template.interface';
import { useRef } from 'react';
import { InputRef } from 'antd';

const PreviewCanvas = (
    props: {
        template?: ITemplate | undefined
    }
) => {

    const {
        currentTemplate,
        currentCustomTemplate,
        currentLicensePlate,
    } = useContext(EditorContext) as EditorContextType;

    const initialState = "Florida";
    const initalLicensePlate = "SAM PLE";

    const columnSettings = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }

    const { template } = props;

    const previewCanvasRef = useRef();

    console.info(
        'templateTest',
        template
    )

    return (
        <div
            className="previewCanvas__main-container"
        >
            <FinishEffect
                customTemplate={currentCustomTemplate}
            />
            <div
                className="previewCanvas__main-inner-container previewCanvas__main-inner-preview"
                ref={previewCanvasRef}
                style={{
                    border: template?.backgroundSettings?.stroke?.enabled ? `2px solid ${template?.backgroundSettings?.stroke?.color}` : 'unset'
                }}
            >
                {/* START Top State */}
                <div
                    className={`previewCanvas__state-container`}
                >
                    <a
                        className={`previewCanvas__state-text add-shadow}`}
                        style={{
                            color: `${template?.state?.color ?? '#ffffff'}`,
                            textShadow: `${template?.state?.glow?.enabled && template?.state.glow.color ? `${template?.state.glow.color ?? '#000000'} 0px 0px 5px, ${template?.state.glow.color ?? '#000000'} 0px 0px 5px` : ``}`,
                            WebkitTextStrokeColor: `${template?.state?.stroke?.enabled ? `${template?.state.stroke.color ?? '#000000'}` : ``}`,
                            WebkitTextStrokeWidth: `${template?.state?.stroke?.enabled ? '1px' : ''}`,
                            filter: `${template?.state?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`
                        }}
                    >
                        {currentLicensePlate?.state ?? initialState}
                    </a>
                </div>
                {/* END Top State */}

                {/* START License Plate Digits*/}
                <div
                    className={`previewCanvas__license-container`}
                >

                    <div
                        className={`previewCanvas__license-inner-container previewCanvas--align-${currentLicensePlate?.platePosition ?? null}`}
                    >
                        <a
                            className="previewCanvas__license-text add-shadow"
                            style={{
                                color: `${template?.plateNumber?.color ?? '#ffffff'}`,
                                WebkitTextStrokeColor: `${template?.plateNumber?.stroke?.enabled ? `${template?.plateNumber.stroke.color}` : `#000000`}`,
                                WebkitTextStrokeWidth: `${template?.plateNumber?.stroke?.enabled ? '1px' : '0px'}`,
                                filter: `${template?.plateNumber?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : 'unset'}`
                            }

                            }
                        >
                            {currentLicensePlate?.plateNumber ?? initalLicensePlate}
                        </a>
                    </div>
                </div>
                {/* END License Plate Digits*/}

                {/* START Bottom letters */}
                <div
                    className={`previewCanvas__bottomText-container ${!currentLicensePlate?.bottomTextEnabled && !currentLicensePlate?.bottomText ? 'previewCanvas__bottomText-space' : ''}`}
                >
                    <a
                        className={`previewCanvas__bottomText-text add-shadow`}
                        style={{
                            color: `${template?.bottomText?.color ?? '#ffffff'}`,
                            textShadow: `${template?.bottomText?.glow?.enabled && template?.bottomText.glow.color ? `${template?.bottomText.glow.color ?? '#000000'} 0px 0px 5px, ${template?.bottomText.glow.color ?? '#000000'} 0px 0px 5px` : `unset`}`,
                            WebkitTextStrokeColor: `${template?.bottomText?.stroke?.enabled ? `${template?.bottomText.stroke.color ?? '#000000'}` : ``}`,
                            WebkitTextStrokeWidth: `${template?.bottomText?.stroke?.enabled ? '1px' : ''}`,
                            filter: `${template?.bottomText?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`
                        }
                        }
                    >
                        {
                            currentLicensePlate?.bottomTextEnabled && currentLicensePlate?.bottomText ? currentLicensePlate?.bottomText : ''
                        }
                    </a>
                </div>
                {/* END Bottom letters */}

                {template?.mainLogo?.enabled &&
                    <Logo
                        currentPreviewTemplate={template}
                        type="PREVIEW"
                        canvasReference={previewCanvasRef}
                    />
                }

                <Background
                    type="PREVIEW"
                    canvasReference={previewCanvasRef}
                    template={template}
                    customTemplate={currentCustomTemplate}
                />
            </div>
        </div>
    )
}

export default PreviewCanvas;