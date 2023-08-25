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
                        title="Plate Character Stroke Color"
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
                        title="State Glow Color"
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
                        title="Bottom Text Glow Color"
                        type="bottomTextGlow"
                    />
                )
            }
            {
                step.currentSubStep === "presetBottomGlowColor" && (
                    <ColorSelect
                        title="Bottom Text Glow Color"
                        type="bottomTextGlow"
                    />
                )
            }

            {
                step.currentSubStep === "presetLogoMove" && (
                    <MoveSwitcher
                        type="moveLogo"
                        text="Logo Move"
                    />
                )
            }
        </Row>
    )
}