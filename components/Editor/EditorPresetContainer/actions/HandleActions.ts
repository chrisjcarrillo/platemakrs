import { ICustomPlateTemplate } from "../../../../interfaces/customTemplate.interface";
import { IEditorSteps } from "../../../../interfaces/editor.interface";
import { useRouter } from "next/navigation";
import { ILicensePlate } from "../../../../interfaces/licensePlate.interface";
import { steps } from "../../../../utils/helpers/steps";
import { editorSteps } from '../../../../utils/helpers/editorSteps';

export const handleActions = (
    actionType: 'back' | 'forward' | 'cancel',
    currentCustomTemplate?: ICustomPlateTemplate,
    currentEditorStep?: IEditorSteps,
    currentLicensePlate?: ILicensePlate,
    presetTemplate?: boolean,
    extras?: boolean
) => {
    const CURRENT_STEP = 3;

    let name = currentCustomTemplate?.backgroundSettings?.background?.file?.name;

    if (presetTemplate) {
        // If your in the first action
        if (actionType == "cancel") {
            return {
                step: 1,
                subStep: '',
                subTitle: '',
                warning: false,
                title: ''
            }
        }

        if (actionType == 'back') {
            if (currentEditorStep?.currentSubStep === "presetBgImageColor") {
                return {
                    step: undefined
                }
            }
            if (currentEditorStep?.currentSubStep === "presetBgColor") {
                if (name === "carbon-fiber-full-with-shadow" || name === "forged-carbon" || name === "carbon-fiber" || name === "black-plate") {
                    return {
                        step: undefined
                    }
                }
                if (!currentCustomTemplate?.backgroundSettings?.background?.file?.hasColor) {
                    return {
                        step: undefined
                    }
                } else {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[0],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Image'
                    }
                }
            }

            if (currentEditorStep?.currentSubStep === "presetBgBorder") {
                if (name === "carbon-fiber-full-with-shadow" || name === "forged-carbon" || name === "carbon-fiber" || name === "black-plate") {
                    return {
                        step: undefined
                    }
                }
                if (!currentCustomTemplate?.backgroundSettings?.background?.file?.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[1],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background'
                    }
                } else {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[0],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Image'
                    }
                }
            }

            if (currentEditorStep?.currentSubStep === "presetBgPinstripe") {
                if (currentCustomTemplate?.backgroundSettings?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[2],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Border'
                    }
                }
                if (name === "carbon-fiber-full-with-shadow" || name === "forged-carbon" || name === "carbon-fiber" || name === "black-plate") {
                    return {
                        step: undefined
                    }
                }
                if (!currentCustomTemplate?.backgroundSettings?.background?.file?.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[1],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background'
                    }
                } else {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[0],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Image'
                    }
                }
            }

            if (currentEditorStep?.currentSubStep === "presetCharacter") {
                if (currentCustomTemplate?.backgroundSettings?.pinstripe?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[3],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Pinstripe'
                    }
                }
                if (currentCustomTemplate?.backgroundSettings?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[2],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Border'
                    }
                }
                if (name === "carbon-fiber-full-with-shadow" || name === "forged-carbon" || name === "carbon-fiber" || name === "black-plate") {
                    return {
                        step: undefined
                    }
                }
                if (!currentCustomTemplate?.backgroundSettings?.background?.file?.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[1],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background'
                    }
                } else {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[0],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Image'
                    }
                }
            }

            if (currentEditorStep?.currentSubStep === "presetState") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[4],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'Plate Character'
                }
            }


            if (currentEditorStep?.currentSubStep === "presetBottomText") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "presetMainLogo") {
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[6],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "presetBottomLogo") {
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[7],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo '
                    }
                }
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[6],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "presetBackgroundLogo") {
                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[8],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[7],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo '
                    }
                }
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[6],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "presetDetailLogo1") {
                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[9],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[8],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[7],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo '
                    }
                }
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[6],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "presetDetailLogo2") {
                if (currentCustomTemplate?.detailLogo1?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 1 Logo'
                    }
                }

                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[9],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[8],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[7],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo '
                    }
                }
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[6],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "selectFinish") {
                if (currentCustomTemplate?.detailLogo2?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 2 Logo'
                    }
                }
                if (currentCustomTemplate?.detailLogo1?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 1 Logo'
                    }
                }
                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[9],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[8],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[7],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo '
                    }
                }
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[6],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }

            }

            if (currentEditorStep?.currentSubStep === "addonDesigner") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }
            if (currentEditorStep?.currentSubStep === "addonNotes") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[13],
                    subTitle: '',
                    warning: false,
                    title: 'ADD-ON'
                }
            }
            if (currentEditorStep?.currentSubStep === "termsAndConditions") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Notes',
                    warning: false,
                    title: 'ADD-ON'
                }
            }
        }

        if (actionType == "forward") {

            // If the template has an image and isn't in need of color
            if (currentEditorStep?.currentSubStep === "presetBgImageColor") {
                if (
                    currentCustomTemplate?.backgroundSettings?.background?.enabled &&
                    currentCustomTemplate?.backgroundSettings?.background?.file?.hasColor
                ) {
                    if (currentCustomTemplate?.backgroundSettings?.background?.file?.hasMainColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[1],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Background'
                        }
                    }
                    if (currentCustomTemplate?.backgroundSettings?.stroke?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[2],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Background Border'
                        }
                    }
                    if (currentCustomTemplate?.backgroundSettings?.pinstripe?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[3],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Background Pinstripe'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[4],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Plate Character'
                    }
                } else if (
                    currentCustomTemplate?.backgroundSettings?.background?.enabled &&
                    !currentCustomTemplate?.backgroundSettings?.background?.file?.hasColor
                ) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[1],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background'
                    }
                }
            }

            // If the template has a Color
            if (currentEditorStep?.currentSubStep === "presetBgColor") {
                if (currentCustomTemplate?.backgroundSettings?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[2],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Border'
                    }
                }
                if (currentCustomTemplate?.backgroundSettings?.pinstripe?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[3],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Pinstripe'
                    }
                }
                if (!currentCustomTemplate?.backgroundSettings?.stroke?.enabled
                    && !currentCustomTemplate?.backgroundSettings?.pinstripe?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[4],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Plate Character'
                    }
                }
            }

            // Background Stroke
            if (currentEditorStep?.currentSubStep === "presetBgBorder") {
                if (currentCustomTemplate?.backgroundSettings?.pinstripe?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[3],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Pinstripe'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[4],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Plate Character'
                }
            }

            //Background Pinstripe
            if (currentEditorStep?.currentSubStep === "presetBgPinstripe") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[4],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Plate Character'
                }
            }

            //Character Color
            if (currentEditorStep?.currentSubStep === "presetCharacter") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            //State Color
            if (currentEditorStep?.currentSubStep === "presetState") {
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[6],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }

                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[7],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo'
                    }
                }

                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[8],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }

                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[9],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Background Logo'
                    }
                }

                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            //Bottom Text Color
            if (currentEditorStep?.currentSubStep === "presetBottomText") {
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[7],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo'
                    }
                }

                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[8],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }

                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[9],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Background Logo'
                    }
                }

                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            // Main Logo
            if (currentEditorStep?.currentSubStep === "presetMainLogo") {
                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[8],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }

                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[9],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Background Logo'
                    }
                }

                if (currentCustomTemplate?.detailLogo1?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 1 Logo'
                    }
                }

                if (currentCustomTemplate?.detailLogo2?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 2 Logo'
                    }
                }

                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            // Bottom Logo
            if (currentEditorStep?.currentSubStep === "presetBottomLogo") {
                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[9],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                if (currentCustomTemplate?.detailLogo1?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 1 Logo'
                    }
                }
                if (currentCustomTemplate?.detailLogo2?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 2 Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            // Background Logo
            if (currentEditorStep?.currentSubStep === "presetBackgroundLogo") {
                if (currentCustomTemplate?.detailLogo1?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 1 Logo'
                    }
                }
                if (currentCustomTemplate?.detailLogo2?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 2 Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            // Detail 1 Logo
            if (currentEditorStep?.currentSubStep === "presetDetailLogo1") {
                if (currentCustomTemplate?.detailLogo2?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Detail 2 Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            // Detail 2 Logo
            if (currentEditorStep?.currentSubStep === "presetDetailLogo2") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            if (currentEditorStep?.currentSubStep === "selectFinish") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[13],
                    subTitle: '',
                    warning: false,
                    title: 'ADD-ON'
                }
            }

            if (currentEditorStep?.currentSubStep === "addonDesigner") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Notes',
                    warning: false,
                    title: 'ADD-ON'
                }
            }

            if (currentEditorStep?.currentSubStep === "addonNotes") {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[15],
                    subTitle: '',
                    warning: false,
                    title: ''
                }
            }
        }
    } else {
        if (actionType == "cancel") {
            return {
                step: undefined,
            }
        }

        if (actionType === "back") {

            if(currentEditorStep?.currentSubStep === "editorBgImage"){
                return {
                    step: undefined,
                }
            }

            if (currentEditorStep?.currentSubStep === "editorBgColor") {
                if (
                    name === "carbon-fiber-fade-up.png" ||
                    name === "carbon-fiber-fade-down.png" || 
                    name === "3d-hexagon-up" || 
                    name === "3d-hexagon-down" || 
                    name === "forged" || 
                    name === "forged-up" || 
                    name === "forged-down" ||
                    name === "hexagon.svg" || 
                    name === "hexagon-down" || 
                    name === "hexagon-up" || 
                    name === "honeycomb-lambo" || 
                    name === "honeycomb-8" || 
                    name === "honeycomb-lambo-up" || 
                    name === "honeycomb-lambo-down"
                ) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[0],
                        subTitle: 'Select Image',
                        warning: false,
                        title: 'Background Image'
                    } 
                } else {
                    return {
                        step: undefined,
                    }
                }
            }

            if (currentEditorStep?.currentSubStep === "editorCharacter") {
                if(name === "hexagon.svg" ||
                name === "carbon-fiber-fade-up.png" ||
                name === "carbon-fiber-fade-down.png" || name === "forged-up" || name === "forged-down" || !currentCustomTemplate?.backgroundSettings?.background?.enabled){
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[1],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background'
                    } 
                } else {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[0],
                        subTitle: 'Select Image',
                        warning: false,
                        title: 'Background Image'
                    } 
                }
            }


            if (currentEditorStep?.currentSubStep === "editorState") {
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[2],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'Plate Characters'
                }
            }

            if (currentEditorStep?.currentSubStep === "editorBottomText") {
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[3],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "editorMainLogo") {
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[4],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[3],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "editorBottomLogo") {
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[5],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo '
                    }
                }
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[4],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[3],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "selectFinish") {
                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[6],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[5],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo '
                    }
                }
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[4],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[3],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "addonDesigner") {
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[7],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            if (currentEditorStep?.currentSubStep === "addonNotes") {
                if(extras){
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[7],
                        subTitle: '',
                        warning: false,
                        title: 'Finish'
                    }
                }

                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[8],
                    subTitle: '',
                    warning: false,
                    title: 'ADD-ON'
                }
            }
            if (currentEditorStep?.currentSubStep === "termsAndConditions") {
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[9],
                    subTitle: 'Notes',
                    warning: false,
                    title: 'ADD-ON'
                }
            }
        }

        if (actionType === "forward") {
            if (currentEditorStep?.currentSubStep === "editorBgImage") {
                if(name !== "3d-hexagon" && name !== "carbon-fiber" && name !== "forged"){
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[1],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[2],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'Plate Character'
                }
            }
            if (currentEditorStep?.currentSubStep === "editorBgColor") {
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[2],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'Plate Character'
                }
            }

            if (currentEditorStep?.currentSubStep === "editorCharacter") {
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[3],
                    subTitle: 'Select Settings',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentEditorStep?.currentSubStep === "editorState") {
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[4],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[5],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[7],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            if (currentEditorStep?.currentSubStep === "editorBottomText") {
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[5],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Main Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[7],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            if (currentEditorStep?.currentSubStep === "editorMainLogo") {
                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[6],
                        subTitle: 'Select Settings',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[7],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            if (currentEditorStep?.currentSubStep === "editorBottomLogo") {
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[7],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            if (currentEditorStep?.currentSubStep === "selectFinish") {
                if(extras){
                    return {
                        step: CURRENT_STEP,
                        subStep: editorSteps[9],
                        subTitle: 'Notes',
                        warning: false,
                        title: 'ADD-ON'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[8],
                    subTitle: '',
                    warning: false,
                    title: 'ADD-ON'
                }
            }

            if (currentEditorStep?.currentSubStep === "addonDesigner") {
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[9],
                    subTitle: 'Notes',
                    warning: false,
                    title: 'ADD-ON'
                }
            }

            if (currentEditorStep?.currentSubStep === "addonNotes") {
                return {
                    step: CURRENT_STEP,
                    subStep: editorSteps[10],
                    subTitle: '',
                    warning: false,
                    title: ''
                }
            }
        }
    }
}