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
        currentTemplate,
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
                (step.currentSubStep === "editorBgImageColor" && 
                    currentCustomTemplate?.backgroundSettings?.background?.file?.name === "hexagon.svg")
                     && (
                    <ColorSelect
                        title="Background Image"
                        type="backgroundUrl"
                    />
                )
            }

{
                (step.currentSubStep === "editorBgImageColor" && 
                    currentCustomTemplate?.backgroundSettings?.background?.file?.name === "hexagon-down" 
                        || step.currentSubStep === "editorBgImageColor" && 
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "hexagon-up"
                            || step.currentSubStep === "editorBgImageColor" && 
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "honeycomb-lambo"
                            || step.currentSubStep === "editorBgImageColor" && 
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "honeycomb-lambo-down"
                            || step.currentSubStep === "editorBgImageColor" && 
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "honeycomb-lambo-up"
                            || step.currentSubStep === "editorBgImageColor" && 
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
                step.currentSubStep === "editorEnableBgBorder" && (
                    <Switcher
                        type="backgroundStrokeEnabled"
                        text="Background Border"
                        checkedDefault={currentCustomTemplate?.backgroundSettings?.stroke?.enabled ?? false}
                    />
                )
            }

            {
                step.currentSubStep === "editorBgBorder" && (
                    <ColorSelect
                        title="Background Border"
                        type="backgroundStroke"
                    />
                )
            }

            {
                step.currentSubStep === "editorEnableBgPinstripe" && (
                    <Switcher
                        type="backgroundPinstripeEnabled"
                        text="Background Pinstripe"
                        checkedDefault={currentCustomTemplate?.backgroundSettings?.pinstripe?.enabled ?? false}
                    />
                )
            }

            {
                step?.currentSubStep === "editorBgPinstripe" && (
                    <ColorSelect
                        title="Background Pinstripe"
                        type="backgroundPinstripe"
                    />
                )
            }

            {
                step?.currentSubStep === "editorCharacterColor" && (
                    <ColorSelect
                        title="Plate Characters"
                        type="plateNumberColor"
                    />
                )
            }

            {
                step?.currentSubStep === "editorEnableCharacterStroke" && (
                    <Switcher
                        type="plateNumberStrokeEnabled"
                        text="Plate Character Border"
                        checkedDefault={currentCustomTemplate?.plateNumber?.stroke?.enabled ?? false}
                    />
                )
            }

            {
                step?.currentSubStep === "editorCharacterStrokeColor" && (
                    <ColorSelect
                        title="Plate Character Stroke Color"
                        type="plateNumberStrokeColor"
                    />
                )
            }

            {
                step?.currentSubStep === "editorEnableCharacterShadow" && (
                    <Switcher
                        type="plateNumberShadowEnabled"
                        text="Plate Character Shadow"
                        checkedDefault={currentCustomTemplate?.plateNumber?.shadow?.enabled ?? false}
                    />
                )
            }
            {/* PLATE CHARACTERS END */}

            {/* STATE START */}
            {
                step.currentSubStep === "editorStateColor" && (
                    <ColorSelect
                        title="State Text"
                        type="stateColor"
                    />
                )
            }

            {
                step.currentSubStep === "editorEnableStateStroke" && (
                    <Switcher
                        type="stateStrokeEnabled"
                        text="State Text Border"
                        checkedDefault={currentCustomTemplate?.state?.stroke?.enabled ?? false}
                    />
                )
            }

            {
                step.currentSubStep === "editorStateStrokeColor" && (
                    <ColorSelect
                        title="State Text Border"
                        type="stateStrokeColor"
                    />
                )
            }

            {
                step.currentSubStep === "editorEnableStateGlow" && (
                    <Switcher
                        type="stateGlowEnabled"
                        text="State Text Glow"
                        checkedDefault={currentCustomTemplate?.state?.glow?.enabled ?? false}
                    />
                )
            }

            {
                step.currentSubStep === "editorStateGlowColor" && (
                    <ColorSelect
                        title="State Glow Color"
                        type="stateGlowColor"
                    />
                )
            }

            {
                step.currentSubStep === "editorEnableStateShadow" && (
                    <Switcher
                        type="stateShadowEnabled"
                        text="State Text Shadow"
                        checkedDefault={currentCustomTemplate?.state?.shadow?.enabled ?? false}
                    />
                )
            }
            {/* STATE END */}

            {/* BOTTOM TEXT START */}
            {
                step.currentSubStep === "editorBottomColor" && (
                    <ColorSelect
                        title="Bottom Text"
                        type="bottomTextColor"
                    />
                )
            }

            {
                step.currentSubStep === "editorEnableBottomStroke" && (<Switcher
                    type="bottomTextStrokeEnabled"
                    text="Bottom Text Border"
                    checkedDefault={currentCustomTemplate?.bottomText?.stroke?.enabled ?? false}
                />)
            }


            {step.currentSubStep === "editorBottomStrokeColor" && (
                <ColorSelect
                    title="Bottom Text Border"
                    type="bottomTextStrokeColor"
                />
            )}

            {step.currentSubStep === "editorEnableBottomGlow" && (
                <Switcher
                    type="bottomTextGlowEnabled"
                    text="Bottom Text Glow"
                    checkedDefault={currentCustomTemplate?.bottomText?.glow?.enabled ?? false}
                />)}


            {step.currentSubStep === "editorBottomGlowColor" && (
                <ColorSelect
                    title="Bottom Text Glow"
                    type="bottomTextGlow"
                />
            )}


            {step.currentSubStep === "editorEnableBottomShadow" && (
                <Switcher
                    type="bottomTextShadowEnabled"
                    text="Bottom Text Shadow"
                    checkedDefault={currentCustomTemplate?.bottomText?.shadow?.enabled ?? false}
                />
            )}
            {/* BOTTOM TEXT END */}

            {/* Main Logo Start */}
            {
                step.currentSubStep === "editorMainLogoUpload" && (
                    <Uploader
                        title={'Main Logo'}
                        type={'mainLogo'}
                    />
                )
            }

            {step.currentSubStep === "editorEnableMainLogoGlow" && (
                <Switcher
                    type="mainLogoGlowEnabled"
                    text="Main Logo Glow"
                    checkedDefault={currentCustomTemplate?.mainLogo?.glow?.enabled ?? false}
                />
            )}

            {
                step?.currentSubStep === "editorMainLogoGlowColor" && (
                    <ColorSelect
                        type="mainLogoGlow"
                        title="Main Logo Glow"
                    />
                )
            }

            {
                step?.currentSubStep === "editorMainLogoMove" && (
                    <MoveSwitcher
                        type="moveLogo"
                        text="Main Logo Move"
                    />
                )
            }
            {/* Main Logo End */}

            {/* Bottom Logo Start */}
            {
                step.currentSubStep === "editorBottomLogoUpload" && (
                    <Uploader
                        title={'Bottom Logo'}
                        type={'bottomLogo'}
                    />
                )
            }

            {step.currentSubStep === "editorEnableBottomLogoGlow" && (
                <Switcher
                    type="bottomLogoGlowEnabled"
                    text="Bottom Logo Glow"
                    checkedDefault={currentCustomTemplate?.bottomLogo?.glow?.enabled ?? false}
                />
            )}

            {
                step?.currentSubStep === "editorBottomLogoGlowColor" && (
                    <ColorSelect
                        type="bottomLogoGlow"
                        title="Bottom Logo Glow"
                    />
                )
            }

            {
                step?.currentSubStep === "editorBottomLogoMove" && (
                    <MoveSwitcher
                        type="bottomLogo"
                        text="Bottom Logo Move"
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


            {/* {
                                step.currentSubStep === "backgroundSetting" && isPreset && currentCustomTemplate?.backgroundLogo?.enabled && (
                                    <PresetColorSelect
                                        title="Background Logo"
                                        type="backgroundLogo"
                                    />
                                )
                            }
                                                        {
                                step.currentSubStep === "backgroundSetting" && isPreset && (
                                    <PresetColorSelect
                                        title="Background"
                                        type="backgroundSetting"
                                    />
                                )
                            }
                            {
                                step.currentSubStep === "backgroundSetting" && isPreset && (
                                    <MoveSwitcher
                                        type="movePattern"
                                        text="Pattern Move"
                                    />
                                )
                            } */}
        </Row>
    )
}