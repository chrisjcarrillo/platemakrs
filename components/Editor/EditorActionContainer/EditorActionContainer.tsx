import Row from 'react-bootstrap/Row';
import { IEditorSteps } from "../../../interfaces/editor.interface"

import { ColorSelect } from '../EditorActions/ColorSelect/ColorSelect';
import { FinishSelect } from '../EditorActions/FinishSelect/FinishSelect';
import { Uploader } from '../EditorActions/Uploader/Uploader';
import { BrightnessSlider } from '../EditorActions/BrightnessSlider/BrightnessSlider';
import { PositionSelect } from '../EditorActions/PositionSelect/PositionSelect';
import { Switcher } from '../EditorActions/Switcher/Switcher';
import { SizeSlider } from '../EditorActions/SizeSlider/SizeSlider';
import { BackgroundSelect } from '../EditorActions/BackgroundSelect/BackroundSelect';

import { ILicensePlate } from '../../../interfaces/licensePlate.interface';
import { ITemplate } from '../../../interfaces/template.interface';
import { ICustomPlateTemplate } from '../../../interfaces/customTemplate.interface';
import { Tabs } from 'antd';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../context/editorContext';
import { InterfaceContext, InterfaceContextType } from '../../../context/interfaceContext';
import { MoveSwitcher } from '../EditorActions/MoveSwitcher/MoveSwitcher';
import { PatternRepeatSelect } from '../EditorActions/PatternRepeatSelect/PatternRepeatSelect';
import { GradientSelect } from '../EditorActions/GradientSelect/GradientSelect';
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
            {
                step.currentSubStep === "backgroundSetting" && (
                    <Tabs
                        defaultActiveKey={'1'}
                        centered
                        className="editorContainer__tabs"
                    >
                        <Tabs.TabPane
                            key={'1'}
                            tab={'Background'}
                            className="editorContainer__tabs-link"
                        >
                            {
                                step.currentSubStep === "backgroundSetting" && (
                                    <ColorSelect
                                        title="Background"
                                        type="backgroundColor"
                                    />
                                )
                            }
                            {
                                step.currentSubStep === "backgroundSetting" &&
                                currentCustomTemplate?.backgroundSettings?.stroke?.enabled && (
                                    <ColorSelect
                                        title="Background Border"
                                        type="backgroundStroke"
                                    />
                                )
                            }
                            {/* Does the template have a background === carbon fiber */}
                            {
                                step.currentSubStep === "backgroundSetting" && currentCustomTemplate?.template?.backgroundSettings?.background?.enabled && (
                                    <BackgroundSelect
                                        title="Background Image"
                                        type="backgroundUrl"
                                    />
                                )
                            }
                            {
                                step.currentSubStep === "backgroundSetting" && currentCustomTemplate?.backgroundSettings?.background?.file?.name === "hexagon.svg" && (
                                    <ColorSelect
                                        title="Background Image"
                                        type="backgroundUrl"
                                    />
                                )
                            }
                            {
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
                            }
                        </Tabs.TabPane>
                        {!isPreset && currentCustomTemplate?.patternSettings?.enabled === true && (
                            <Tabs.TabPane
                                key={'2'}
                                tab={'Pattern'}
                                className="editorContainer__tabs-link"
                            >
                                <MoveSwitcher
                                    type="movePattern"
                                    text="Pattern Move"
                                />
                                {
                                    !isPreset && (
                                        <Uploader
                                            title={'Pattern Logo'}
                                            type={'patternLogo'}
                                        />
                                    )
                                }
                                <BrightnessSlider
                                    title="Pattern"
                                    type="patternOpacity"
                                />
                                <PatternRepeatSelect
                                    title='Select Pattern Repeat'
                                />
                            </Tabs.TabPane>
                        )}
                        {!isPreset && currentCustomTemplate?.patternSettings?.enabled === true && (
                            <Tabs.TabPane
                                key={'3'}
                                tab={'Fade'}
                                className="editorContainer__tabs-link"
                            >
                                <GradientSelect
                                    title="Select Gradient Position"
                                />
                                {/* Add Switch */}
                                <ColorSelect
                                    title="Fade Color 1"
                                    type="fadeColor1"
                                />
                                <ColorSelect
                                    title="Fade Color 2"
                                    type="fadeColor2"
                                />
                            </Tabs.TabPane>
                        )}

                    </Tabs>
                )
            }

            {/*  */}
            {/* Does the template have a pattern logo */}

            {/* Background Settings END */}

            {/* Does the template have a background gradient for the logos? */}
            {/* Does the template have a file uploader */}
            {step?.currentSubStep === "extraDetails" && currentCustomTemplate?.mainLogo?.enabled && (
                <Uploader
                    title={'Logo'}
                    type={'logo'}
                />
            )}

            {/* Does the template have a logo */}
            {/* Does the template need to change colors /text/background 
                // Text Color?
                // Text Stroke?
                // Text Shadow?
                // Text Glow?
            */}

            {
                step.currentSubStep === "textSetting" && (
                    <>
                        <Tabs
                            defaultActiveKey={'1-t'}
                            centered
                            className="editorContainer__tabs"
                        >
                            <Tabs.TabPane
                                key={'1-t'}
                                tab={'State'}
                                className="editorContainer__tabs-link"
                            >
                                {/* STATE START */}
                                <ColorSelect
                                    title="State Text"
                                    type="stateColor"
                                />
                                {!isPreset && (
                                    <Switcher
                                        type="stateStrokeEnabled"
                                        text="State Text Border"
                                        checkedDefault={currentCustomTemplate?.state?.stroke?.enabled ?? false}
                                    />
                                )}

                                {currentCustomTemplate?.state?.stroke?.enabled && (
                                    <ColorSelect
                                        title="State Text Border"
                                        type="stateStrokeColor"
                                    />
                                )}
                                {!isPreset && (
                                    <Switcher
                                        type="stateGlowEnabled"
                                        text="State Text Glow"
                                        checkedDefault={currentCustomTemplate?.state?.glow?.enabled ?? false}
                                    />
                                )}
                                {currentCustomTemplate?.state?.glow?.enabled && (
                                    <ColorSelect
                                        title="State Glow Color"
                                        type="stateGlowColor"
                                    />
                                )}
                                {
                                    currentCustomTemplate?.template?.templateId !== "1" && (
                                        <Switcher
                                            type="stateShadowEnabled"
                                            text="State Text Shadow"
                                            checkedDefault={currentCustomTemplate?.state?.shadow?.enabled ?? false}
                                        />
                                    )
                                }
                                {/* STATE END */}
                            </Tabs.TabPane>
                            <Tabs.TabPane
                                key={'2-t'}
                                tab={'Plate Characters'}
                                className="editorContainer__tabs-link"
                            >
                                {/* PLATE CHARACTERS START */}
                                <ColorSelect
                                    title="Plate Characters"
                                    type="plateNumberColor"
                                />
                                {!isPreset && (
                                    <Switcher
                                        type="plateNumberStrokeEnabled"
                                        text="Plate Character Border"
                                        checkedDefault={currentCustomTemplate?.plateNumber?.stroke?.enabled ?? false}
                                    />
                                )}

                                {currentCustomTemplate?.plateNumber?.stroke?.enabled && (
                                    <ColorSelect
                                        title="Plate Character Stroke Color"
                                        type="plateNumberStrokeColor"
                                    />
                                )}
                                {
                                    currentCustomTemplate?.template?.templateId !== "1" && (
                                        <Switcher
                                            type="plateNumberShadowEnabled"
                                            text="Plate Character Shadow"
                                            checkedDefault={currentCustomTemplate?.plateNumber?.shadow?.enabled ?? false}
                                        />
                                    )
                                }
                                {/* PLATE CHARACTERS END */}
                            </Tabs.TabPane>
                            {
                                licensePlate?.bottomTextEnabled && (
                                    <Tabs.TabPane
                                        key={'3-t'}
                                        tab={'Bottom Text'}
                                        className="editorContainer__tabs-link"
                                    >
                                        {/* BOTTOM TEXT START */}
                                        <ColorSelect
                                            title="Bottom Text"
                                            type="bottomTextColor"
                                        />
                                        <Switcher
                                            type="bottomTextStrokeEnabled"
                                            text="Bottom Text Border"
                                            checkedDefault={currentCustomTemplate?.bottomText?.stroke?.enabled ?? false}
                                        />
                                        {currentCustomTemplate?.bottomText?.stroke?.enabled && (
                                            <ColorSelect
                                                title=""
                                                type="bottomTextStrokeColor"
                                            />
                                        )}
                                        <Switcher
                                            type="bottomTextGlowEnabled"
                                            text="Bottom Text Glow"
                                            checkedDefault={currentCustomTemplate?.bottomText?.glow?.enabled ?? false}
                                        />
                                        {currentCustomTemplate?.bottomText?.glow?.enabled && (
                                            <ColorSelect
                                                title=""
                                                type="bottomTextGlow"
                                            />
                                        )}
                                        <Switcher
                                            type="bottomTextShadowEnabled"
                                            text="Bottom Text Shadow"
                                            checkedDefault={currentCustomTemplate?.bottomText?.shadow?.enabled ?? false}
                                        />

                                        {/* BOTTOM TEXT END */}
                                    </Tabs.TabPane>
                                )
                            }
                        </Tabs>
                    </>
                )
            }
        </Row>
    )
}