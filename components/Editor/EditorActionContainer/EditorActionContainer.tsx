import Row from 'react-bootstrap/Row';
import { IEditorSteps } from "../../../interfaces/editor.interface"
import { ColorSelect } from '../EditorActions/ColorSelect/ColorSelect';
import { FinishSelect } from '../EditorActions/FinishSelect/FinishSelect';
import { Uploader } from '../EditorActions/Uploader/Uploader';
import { Switcher } from '../EditorActions/Switcher/Switcher';
import { BackgroundSelect } from '../EditorActions/BackgroundSelect/BackroundSelect';
import { ILicensePlate } from '../../../interfaces/licensePlate.interface';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../context/editorContext';
import { InterfaceContext, InterfaceContextType } from '../../../context/interfaceContext';
import { AddonSwitch } from '../EditorActions/AddonSwitch/AddonSwitch';
import { NoteInput } from '../EditorActions/NoteInput/NoteInput';
import { MoveSwitcher } from '../EditorActions/MoveSwitcher/MoveSwitcher';
import { PresetColorSelect } from '../EditorActions/PresetColorSelect/PresetColorSelect';

export const EditorActionContainer = (
    props: {
        licensePlate?: ILicensePlate,
        step: IEditorSteps,
    }
) => {
    const { licensePlate, step } = props;

    const {
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const {
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType;

    return (
        <Row className={`editorContainer__actions g-2`}>

            {/* Does the template have a background === carbon fiber */}
            {
                step.currentSubStep === "editorBgImage" && (
                    <BackgroundSelect
                        title="Background Image"
                        type="backgroundUrl"
                    />
                )
            }

            {
                (step.currentSubStep === "editorBgImage" && 
                    currentCustomTemplate?.backgroundSettings?.background?.file?.name === "hexagon.svg")
                     && (
                    <ColorSelect
                        title="Background Image"
                        type="backgroundUrl"
                    />
                )
            }

{
                (step.currentSubStep === "editorBgImage" && 
                    currentCustomTemplate?.backgroundSettings?.background?.file?.name === "hexagon-down" 
                        || step.currentSubStep === "editorBgImage" && 
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "hexagon-up"
                            || step.currentSubStep === "editorBgImage" && 
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "honeycomb-lambo"
                            || step.currentSubStep === "editorBgImage" && 
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "honeycomb-lambo-down"
                            || step.currentSubStep === "editorBgImage" && 
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "honeycomb-lambo-up"
                            || step.currentSubStep === "editorBgImage" && 
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "honeycomb-8") && (
                    <PresetColorSelect
                        title="Background Image"
                        type="backgroundSetting"
                    />
                )
            }

            {
                step.currentSubStep === "editorBgColor" && (
                    <ColorSelect
                        title="Background"
                        type="backgroundColor"
                    />
                )
            }

            {
                step?.currentSubStep === "editorCharacter" && (
                    <ColorSelect
                        title="Plate Characters"
                        type="plateNumberColor"
                    />
                )
            }

            {
                step?.currentSubStep === "editorCharacter" && (
                    <Switcher
                        type="plateNumberStrokeEnabled"
                        text="Plate Character Border"
                        checkedDefault={currentCustomTemplate?.plateNumber?.stroke?.enabled ?? false}
                    />
                )
            }

            {
                step?.currentSubStep === "editorCharacter" && currentCustomTemplate?.plateNumber?.stroke?.enabled  && (
                    <ColorSelect
                        title="Plate Character Stroke Color"
                        type="plateNumberStrokeColor"
                    />
                )
            }
            {/* PLATE CHARACTERS END */}

            {/* STATE START */}
            {
                step.currentSubStep === "editorState" && (
                    <ColorSelect
                        title="State Text"
                        type="stateColor"
                    />
                )
            }

            {
                step.currentSubStep === "editorState" && (
                    <Switcher
                        type="stateStrokeEnabled"
                        text="State Text Border"
                        checkedDefault={currentCustomTemplate?.state?.stroke?.enabled ?? false}
                    />
                )
            }

            {
                step.currentSubStep === "editorState" && currentCustomTemplate?.state?.stroke?.enabled  && (
                    <ColorSelect
                        title="State Text Border"
                        type="stateStrokeColor"
                    />
                )
            }
            {/* STATE END */}

            {/* BOTTOM TEXT START */}
            {
                step.currentSubStep === "editorBottomText" && (
                    <ColorSelect
                        title="Bottom Text"
                        type="bottomTextColor"
                    />
                )
            }

            {
                step.currentSubStep === "editorBottomText" && (<Switcher
                    type="bottomTextStrokeEnabled"
                    text="Bottom Text Border"
                    checkedDefault={currentCustomTemplate?.bottomText?.stroke?.enabled ?? false}
                />)
            }

            {step.currentSubStep === "editorBottomText" && currentCustomTemplate?.bottomText?.stroke?.enabled && (
                <ColorSelect
                    title="Bottom Text Border"
                    type="bottomTextStrokeColor"
                />
            )}
            {/* BOTTOM TEXT END */}

            {/* Main Logo Start */}
            {
                step.currentSubStep === "editorMainLogo" && (
                    <Uploader
                        title={'Main Logo'}
                        type={'mainLogo'}
                    />
                )
            }

            {step.currentSubStep === "editorMainLogo" && (
                <Switcher
                    type="mainLogoGlowEnabled"
                    text="Main Logo Glow"
                    checkedDefault={currentCustomTemplate?.mainLogo?.glow?.enabled ?? false}
                />
            )}

            {
                step?.currentSubStep === "editorMainLogo" && currentCustomTemplate?.mainLogo?.glow?.enabled && (
                    <ColorSelect
                        type="mainLogoGlow"
                        title="Main Logo Glow"
                    />
                )
            }
            {/* Main Logo End */}

            {/* Bottom Logo Start */}
            {
                step.currentSubStep === "editorBottomLogo" && (
                    <Uploader
                        title={'Bottom Logo'}
                        type={'bottomLogo'}
                    />
                )
            }

            {step.currentSubStep === "editorBottomLogo" && (
                <Switcher
                    type="bottomLogoGlowEnabled"
                    text="Bottom Logo Glow"
                    checkedDefault={currentCustomTemplate?.bottomLogo?.glow?.enabled ?? false}
                />
            )}

            {
                step?.currentSubStep === "editorBottomLogo" && currentCustomTemplate?.bottomLogo?.glow?.enabled && (
                    <ColorSelect
                        type="bottomLogoGlow"
                        title="Bottom Logo Glow"
                    />
                )
            }
            {/* Bottom Logo End */}

            {
                step?.currentSubStep === "selectFinish" && (
                    <FinishSelect
                        title="State Text"
                        type="finish"
                    />)
            }

            {
                step?.currentSubStep === "addonDesigner" && (
                    <AddonSwitch />
                )
            }

            {
                step?.currentSubStep === "addonNotes" && (
                    <NoteInput />
                )
            }
        </Row>
    )
}