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

export const PresetActions = (
    props: {
        step: IEditorSteps,
    }
) => {
    const { step } = props;

    const {
        currentTemplate,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const {
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType;

    return (
        <Row className={`editorContainer__actions g-2`}>
            
            {/* - Background Color */}
            {
                step.currentSubStep === "presetBgImageColor" && (
                    <PresetColorSelect
                        title="Background Image"
                        type="backgroundSetting"
                    />
                )
            }
            {/* - Background Color */}

            {/* - Background Color */}
            {
                step.currentSubStep === "presetBgColor" && (
                    <ColorSelect
                        title="Background"
                        type="backgroundColor"
                    />
                )
            }
            {/* - Background Color */}

            {/* - Background Border */}
            {
                step.currentSubStep === "presetBgBorder" && (
                    <ColorSelect
                        title="Background Border"
                        type="backgroundStroke"
                    />
                )
            }
            {/* - Background Color*/}
            {/* - Background Color */}

            {/* Plate Character*/}
            {
                step.currentSubStep === "presetCharacterColor" && (
                    <ColorSelect
                        title="Plate Characters"
                        type="plateNumberColor"
                    />
                )
            }
            {
                step.currentSubStep === "presetCharacterStrokeColor" && (
                    <ColorSelect
                        title="Plate Character Stroke"
                        type="plateNumberStrokeColor"
                    />
                )
            }
            {/* Plate Character*/}

            {/* State Character*/}
            {
                step.currentSubStep === "presetStateColor" && (
                    <ColorSelect
                        title="State Text"
                        type="stateColor"
                    />
                )
            }
            {
                step.currentSubStep === "presetStateStrokeColor" && (
                    <ColorSelect
                        title="State Text Border"
                        type="stateStrokeColor"
                    />
                )
            }
            {
                step.currentSubStep === "presetStateGlowColor" && (
                    <ColorSelect
                        title="State Glow"
                        type="stateGlowColor"
                    />
                )
            }

            {/* State Character*/}

            {/* Bottom Text */}
            {
                step.currentSubStep === "presetBottomColor" && (
                    <ColorSelect
                        title="Bottom Text"
                        type="bottomTextColor"
                    />
                )
            }

            {
                step.currentSubStep === "presetBottomStrokeColor" && (
                    <ColorSelect
                        title="Bottom Text Border"
                        type="bottomTextStrokeColor"
                    />
                )
            }
            {
                step.currentSubStep === "presetBottomGlowColor" && (
                    <ColorSelect
                        title="Bottom Text Glow"
                        type="bottomTextGlow"
                    />
                )
            }

            {/* Main Logo*/}
            {
                step.currentSubStep === "presetMainLogoColor" && (
                    <PresetColorSelect 
                        type='mainLogo'
                        title="Main Logo"
                    />
                )
            }

            {
                step.currentSubStep === "presetMainLogoGlowColor" && (
                    <ColorSelect 
                        type="mainLogoGlow"
                        title="Main Logo Glow"
                    />
                )
            }
    
            {
                step.currentSubStep === "presetMainLogoMove" && (
                    <MoveSwitcher
                        type="moveLogo"
                        text="Main Logo Move"
                    />
                )
            }
            {/* Main Logo */}

            {/* Bottom Logo*/}
            {
                step.currentSubStep === "presetBottomLogoColor" && (
                    <PresetColorSelect 
                        type='bottomLogo'
                        title="Bottom Logo"
                    />
                )
            }

            {
                step.currentSubStep === "presetBottomLogoGlow" && (
                    <ColorSelect 
                        type="bottomLogoGlow"
                        title="Bottom Logo Glow"
                    />
                )
            }
    
            {
                step.currentSubStep === "presetBottomLogoMove" && (
                    <MoveSwitcher
                        type="bottomLogo"
                        text="Bottom Logo Move"
                    />
                )
            }
            {/* Bottom Logo*/}

            {/* Background Logo*/}
            {
                step.currentSubStep === "presetBackgroundLogoColor" && (
                    <PresetColorSelect 
                        type='backgroundLogo'
                        title="Background Logo"
                    />
                )
            }
            {
                step.currentSubStep === "presetBackgroundLogoMove" && (
                    <MoveSwitcher
                        type="moveBackgroundLogo"
                        text="Move Background Logo"
                    />
                )
            }
            {/* Background logo */}

        </Row>
    )
}