import Row from 'react-bootstrap/Row';
import { IEditorSteps } from "../../../../interfaces/editor.interface"

import { ColorSelect } from '../../EditorActions/ColorSelect/ColorSelect';
import { Uploader } from '../../EditorActions/Uploader/Uploader';
import { BrightnessSlider } from '../../EditorActions/BrightnessSlider/BrightnessSlider';
import { Switcher } from '../../EditorActions/Switcher/Switcher';
import { BackgroundSelect } from '../../EditorActions/BackgroundSelect/BackroundSelect';
import { ILicensePlate } from '../../../../interfaces/licensePlate.interface';
import { Tabs } from 'antd';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';
import { InterfaceContext, InterfaceContextType } from '../../../../context/interfaceContext';
import { MoveSwitcher } from '../../EditorActions/MoveSwitcher/MoveSwitcher';
import { PatternRepeatSelect } from '../../EditorActions/PatternRepeatSelect/PatternRepeatSelect';
import { GradientSelect } from '../../EditorActions/GradientSelect/GradientSelect';
import { PresetColorSelect } from '../../EditorActions/PresetColorSelect/PresetColorSelect';
import { AddonSwitch } from '../../EditorActions/AddonSwitch/AddonSwitch';
import { FinishSelect } from '../../EditorActions/FinishSelect/FinishSelect';
import { NoteInput } from '../../EditorActions/NoteInput/NoteInput';

export const PresetActions = (
    props: {
        step: IEditorSteps,
    }
) => {
    const { step } = props;

    const {
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const {
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType;

    return (
        <Row className={`editorContainer__actions g-2`}>

            {/* - Background Color */}
            {
                step?.currentSubStep === "presetBgImageColor" && currentCustomTemplate?.backgroundSettings?.background?.file?.name !== "hexagon.svg" && (
                    <PresetColorSelect
                        title="Background Image"
                        type="backgroundSetting"
                    />
                )
            }
            {/* - Background Color */}

            {/* - Background Color */}
            {
                step?.currentSubStep === "presetBgImageColor" && currentCustomTemplate?.backgroundSettings?.background?.file?.name === "hexagon.svg" && (
                    <ColorSelect
                        title="Background"
                        type="backgroundUrl"
                    />
                )
            }
            {/* - Background Color */}

            {/* - Background Color */}
            {
                step?.currentSubStep === "presetBgColor" && (
                    <ColorSelect
                        title="Background"
                        type="backgroundColor"
                    />
                )
            }
            {/* - Background Color */}

            {/* - Background Border */}
            {
                step?.currentSubStep === "presetBgBorder" && (
                    <ColorSelect
                        title="Background Border"
                        type="backgroundStroke"
                    />
                )
            }

            {
                step?.currentSubStep === "presetBgPinstripe" && (
                    <ColorSelect
                        title="Background Pinstripe"
                        type="backgroundPinstripe"
                    />
                )
            }
            {/* - Background Color*/}
            {/* - Background Color */}

            {/* Plate Character*/}
            {
                step?.currentSubStep === "presetCharacter" && (
                    <ColorSelect
                        title="Plate Characters"
                        type="plateNumberColor"
                    />
                )
            }
            {
                step?.currentSubStep === "presetCharacter" && currentCustomTemplate?.plateNumber?.stroke?.enabled && (
                    <ColorSelect
                        title="Plate Character Stroke"
                        type="plateNumberStrokeColor"
                    />
                )
            }
            {/* Plate Character*/}

            {/* State Character*/}
            {
                step?.currentSubStep === "presetState" && (
                    <ColorSelect
                        title="State Text"
                        type="stateColor"
                    />
                )
            }
            {
                step?.currentSubStep === "presetState" && currentCustomTemplate?.state?.stroke?.enabled && (
                    <ColorSelect
                        title="State Text Border"
                        type="stateStrokeColor"
                    />
                )
            }
            {
                step?.currentSubStep === "presetState" && currentCustomTemplate?.state?.glow?.enabled && (
                    <ColorSelect
                        title="State Glow"
                        type="stateGlowColor"
                    />
                )
            }

            {/* State Character*/}

            {/* Bottom Text */}
            {
                step?.currentSubStep === "presetBottomText" && (
                    <ColorSelect
                        title="Bottom Text"
                        type="bottomTextColor"
                    />
                )
            }

            {
                step?.currentSubStep === "presetBottomText" && currentCustomTemplate?.bottomText?.stroke?.enabled && (
                    <ColorSelect
                        title="Bottom Text Border"
                        type="bottomTextStrokeColor"
                    />
                )
            }
            {
                step?.currentSubStep === "presetBottomText" && currentCustomTemplate?.bottomText?.glow?.enabled && (
                    <ColorSelect
                        title="Bottom Text Glow"
                        type="bottomTextGlow"
                    />
                )
            }

            {/* Main Logo*/}
            {
                step?.currentSubStep === "presetMainLogo" && (
                    <PresetColorSelect
                        type='mainLogo'
                        title="Main Logo"
                    />
                )
            }

            {
                step?.currentSubStep === "presetMainLogo" && currentCustomTemplate?.mainLogo?.glow?.enabled && (
                    <ColorSelect
                        type="mainLogoGlow"
                        title="Main Logo Glow"
                    />
                )
            }

            {/* Main Logo */}

            {/* Bottom Logo*/}
            {
                step?.currentSubStep === "presetBottomLogo" && (
                    <PresetColorSelect
                        type='bottomLogo'
                        title="Bottom Logo"
                    />
                )
            }

            {
                step?.currentSubStep === "presetBottomLogo" && currentCustomTemplate?.bottomLogo?.glow?.enabled &&  (
                    <ColorSelect
                        type="bottomLogoGlow"
                        title="Bottom Logo Glow"
                    />
                )
            }

            {/* Bottom Logo*/}

            {/* Background Logo*/}
            {
                step?.currentSubStep === "presetBackgroundLogo" && (
                    <PresetColorSelect
                        type='backgroundLogo'
                        title="Background Logo"
                    />
                )
            }
            {/* Background logo */}





            {/* Bottom Logo*/}
            {
                step?.currentSubStep === "presetDetailLogo1" && (
                    <PresetColorSelect
                        type='detailLogo1'
                        title="Detail 1 Logo"
                    />
                )
            }

            {
                step?.currentSubStep === "presetDetailLogo1" && currentCustomTemplate?.detailLogo1?.glow?.enabled && (
                    <ColorSelect
                        type="detailLogo1"
                        title="Detail 1 Logo Glow"
                    />
                )
            }
            {/* Bottom Logo*/}


            {/* Bottom Logo*/}
            {
                step?.currentSubStep === "presetDetailLogo2" && (
                    <PresetColorSelect
                        type='detailLogo2'
                        title="Detail 2 Logo"
                    />
                )
            }


            {
                step?.currentSubStep === "presetDetailLogo2" && currentCustomTemplate?.detailLogo2?.glow?.enabled && (
                    <ColorSelect
                        type="detailLogo2"
                        title="Detail 2 Logo Glow"
                    />
                )
            }
            {/* Bottom Logo*/}

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

            {
                step?.currentSubStep === "termsAndConditions" && (
                    <></>
                )
            }

        </Row>
    )
}