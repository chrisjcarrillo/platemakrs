import { ICustomPlateTemplate } from "../../../../interfaces/customTemplate.interface";
import { IEditorSteps } from "../../../../interfaces/editor.interface";
import { useRouter } from "next/navigation";
import { ILicensePlate } from "../../../../interfaces/licensePlate.interface";
import { steps } from "../../../../utils/helpers/steps";

export const handleActions = (
    actionType: 'back' | 'forward' | 'cancel',
    currentCustomTemplate?: ICustomPlateTemplate,
    currentEditorStep?: IEditorSteps,
    currentLicensePlate?: ILicensePlate
) => {
    // const router = useRouter();
    const CURRENT_STEP = 3;

    let name = currentCustomTemplate?.backgroundSettings?.background?.file?.name;

    console.info(
        'Current Step:',
        currentEditorStep?.currentSubStep
    )

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
            if(name === "carbon-fiber-full-with-shadow" || name === "forged-carbon" || name === "carbon-fiber"){
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
            if(name === "carbon-fiber-full-with-shadow" || name === "forged-carbon" || name === "carbon-fiber"){
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
            if(name === "carbon-fiber-full-with-shadow" || name === "forged-carbon" || name === "carbon-fiber"){
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

        if (currentEditorStep?.currentSubStep === "presetCharacterColor") {
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
            if(name === "carbon-fiber-full-with-shadow" || name === "forged-carbon" || name === "carbon-fiber"){
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
        if (currentEditorStep?.currentSubStep === "presetCharacterStrokeColor") {
            return {
                step: CURRENT_STEP,
                subStep: steps[4],
                subTitle: 'Select Color',
                warning: false,
                title: 'Plate Character'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetStateColor") {
            if (currentCustomTemplate?.plateNumber?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'Plate Character'
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

        if (currentEditorStep?.currentSubStep === "presetStateStrokeColor") {
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetStateGlowColor") {
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetBottomColor") {
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetBottomStrokeColor") {
            return {
                step: CURRENT_STEP,
                subStep: steps[9],
                subTitle: 'Select Color',
                warning: false,
                title: 'Bottom Text'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetBottomGlowColor") {
            if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[10],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[9],
                subTitle: 'Select Color',
                warning: false,
                title: 'Bottom Text'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetMainLogoColor") {
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetMainLogoGlowColor") {
            if (currentCustomTemplate?.mainLogo?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Main Logo'
                }
            }
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetMainLogoMove") {
            if (currentCustomTemplate?.mainLogo?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[13],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Main Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[12],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Main Logo'
                }
            }
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }


        if (currentEditorStep?.currentSubStep === "presetBottomLogoColor") {
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetBottomLogoGlow") {
            if (currentCustomTemplate?.bottomLogo?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[15],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetBottomLogoMove") {
            if (currentCustomTemplate?.bottomLogo?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[16],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[15],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetBackgroundLogoColor") {
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetBackgroundLogoGlow") {
            if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[18],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }

            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetBackgroundLogoMove") {
            if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[19],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[18],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }

            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }


        if (currentEditorStep?.currentSubStep === "presetDetailLogo1Color") {
            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetDetailLogo1Glow") {
            if (currentCustomTemplate?.detailLogo1?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[21],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Detail 1 Logo'
                }
            }
            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetDetailLogo1Move") {
            if (currentCustomTemplate?.detailLogo1?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[22],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Detail 1 Logo'
                }
            }
            if (currentCustomTemplate?.detailLogo1?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[21],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Detail 1 Logo'
                }
            }
            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }
            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetDetailLogo2Color") {
            if (currentCustomTemplate?.detailLogo1?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[23],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Detail 1 Logo'
                }
            }

            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }

            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetDetailLogo2Glow") {
            if (currentCustomTemplate?.detailLogo2?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[24],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Detail 2 Logo'
                }
            }
            if (currentCustomTemplate?.detailLogo1?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[23],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Detail 1 Logo'
                }
            }

            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }

            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }
            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "presetDetailLogo2Move") {
            if (currentCustomTemplate?.detailLogo2?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[25],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Detail 2 Logo'
                }
            }
            if (currentCustomTemplate?.detailLogo2?.hasColor) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[24],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Detail 2 Logo'
                }
            }
            if (currentCustomTemplate?.detailLogo1?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[23],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Detail 1 Logo'
                }
            }

            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }

            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }

            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        if (currentEditorStep?.currentSubStep === "selectFinish") {
            if (currentCustomTemplate?.detailLogo2?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[26],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Detail 2 Logo'
                }
            }
            if (currentCustomTemplate?.detailLogo1?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[23],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Detail 1 Logo'
                }
            }

            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            if (currentCustomTemplate?.bottomLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            if (currentCustomTemplate?.mainLogo?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo '
                }
            }

            if (currentLicensePlate?.bottomTextEnabled) {
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[11],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[10],
                        subTitle: 'Select Border Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }

            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }
            
            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
            
        }

        if (currentEditorStep?.currentSubStep === "addonDesigner"){
            return {
                step: CURRENT_STEP,
                subStep: steps[27],
                subTitle: '',
                warning: false,
                title: 'Finish'
            }
        }
        // if (currentEditorStep?.currentSubStep === "termsAndConditions") {
        //     return {
        //         step: CURRENT_STEP,
        //         subStep: steps[27],
        //         subTitle: '',
        //         warning: false,
        //         title: 'Finish'
        //     }
        // }
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
        if (currentEditorStep?.currentSubStep === "presetCharacterColor") {
            if (currentCustomTemplate?.plateNumber?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[5],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'Plate Character'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        //Character Stroke
        if (currentEditorStep?.currentSubStep === "presetCharacterStrokeColor") {
            return {
                step: CURRENT_STEP,
                subStep: steps[6],
                subTitle: 'Select Color',
                warning: false,
                title: 'State'
            }
        }

        //State Color
        if (currentEditorStep?.currentSubStep === "presetStateColor") {

            if (currentCustomTemplate?.state?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[7],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'State'
                }
            }

            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            }

            if (!currentCustomTemplate?.state?.stroke?.enabled &&
                !currentCustomTemplate?.state?.glow?.enabled) {
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[9],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    if (currentCustomTemplate?.mainLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[12],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    if (currentCustomTemplate?.mainLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[13],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[14],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Main Logo'
                    }
                }

                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    if (currentCustomTemplate?.bottomLogo.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[15],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    if (currentCustomTemplate?.bottomLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[16],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[17],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }

                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[18],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[19],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[20],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[27],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
                // TODO: [GO TO ADDON]
            }
            // Details should not happen
        }

        //State Stroke
        if (currentEditorStep?.currentSubStep === "presetStateStrokeColor") {

            if (currentCustomTemplate?.state?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[8],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'State'
                }
            } else {
                if (currentLicensePlate?.bottomTextEnabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[9],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Bottom Text'
                    }
                }
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    if (currentCustomTemplate?.mainLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[12],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    if (currentCustomTemplate?.mainLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[13],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[14],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Main Logo'
                    }
                }

                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    if (currentCustomTemplate?.bottomLogo.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[15],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    if (currentCustomTemplate?.bottomLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[16],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[17],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }

                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[18],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[19],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[20],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[27],
                subTitle: '',
                warning: false,
                title: 'Finish'
            }
            // TODO: [GO TO ADDON]
        }

        //State Glow
        if (currentEditorStep?.currentSubStep === "presetStateGlowColor") {

            if (currentLicensePlate?.bottomTextEnabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[9],
                    subTitle: 'Select Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            } else {
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    if (currentCustomTemplate?.mainLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[12],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    if (currentCustomTemplate?.mainLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[13],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[14],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Main Logo'
                    }
                }

                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    if (currentCustomTemplate?.bottomLogo.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[15],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    if (currentCustomTemplate?.bottomLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[16],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[17],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }

                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[18],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[19],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[20],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[27],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
                // TODO: [GO TO ADDON]
            }
        }

        //Bottom Text Color
        if (currentEditorStep?.currentSubStep === "presetBottomColor") {

            if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[10],
                    subTitle: 'Select Border Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }

            if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[11],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            }

            if (!currentCustomTemplate?.bottomText?.stroke?.enabled &&
                !currentCustomTemplate?.bottomText?.glow?.enabled) {

                if (currentCustomTemplate?.mainLogo?.enabled) {
                    if (currentCustomTemplate?.mainLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[12],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    if (currentCustomTemplate?.mainLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[13],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[14],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Main Logo'
                    }
                }

                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    if (currentCustomTemplate?.bottomLogo.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[15],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    if (currentCustomTemplate?.bottomLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[16],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[16],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }

                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[18],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[19],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[20],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Background Logo'
                    }
                }

                return {
                    step: CURRENT_STEP,
                    subStep: steps[27],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
                // TODO: [GO TO ADDON]
            }
            // Details should not happen
        }

        //Bottom Text Stroke
        if (currentEditorStep?.currentSubStep === "presetBottomStrokeColor") {

            if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[11],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Bottom Text'
                }
            } else {
                if (currentCustomTemplate?.mainLogo?.enabled) {
                    if (currentCustomTemplate?.mainLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[12],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    if (currentCustomTemplate?.mainLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[13],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Main Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[14],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Main Logo'
                    }
                }

                if (currentCustomTemplate?.bottomLogo?.enabled) {
                    if (currentCustomTemplate?.bottomLogo.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[15],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    if (currentCustomTemplate?.bottomLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[16],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Bottom Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[17],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }

                if (currentCustomTemplate?.backgroundLogo?.enabled) {
                    if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[18],
                            subTitle: 'Select Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                        return {
                            step: CURRENT_STEP,
                            subStep: steps[19],
                            subTitle: 'Select Glow Color',
                            warning: false,
                            title: 'Background Logo'
                        }
                    }
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[20],
                        subTitle: 'Move Logo',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[27],
                    subTitle: '',
                    warning: false,
                    title: 'Finish'
                }
            }

            // TODO: [GO TO ADDON]
        }

        //Bottom Text Glow
        if (currentEditorStep?.currentSubStep === "presetBottomGlowColor") {
            if (currentCustomTemplate?.mainLogo?.enabled) {
                if (currentCustomTemplate?.mainLogo?.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[12],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Main Logo'
                    }
                }
                if (currentCustomTemplate?.mainLogo?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[13],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Main Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[14],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Main Logo'
                }
            }

            if (currentCustomTemplate?.bottomLogo?.enabled) {
                if (currentCustomTemplate?.bottomLogo.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[15],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                if (currentCustomTemplate?.bottomLogo?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[16],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }

            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[18],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[19],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }

            return {
                step: CURRENT_STEP,
                subStep: steps[27],
                subTitle: '',
                warning: false,
                title: 'Finish'
            }
        }

        // Main Logo
        if (currentEditorStep?.currentSubStep === "presetMainLogoColor") {
            if (currentCustomTemplate?.mainLogo?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[13],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Main Logo'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[14],
                subTitle: 'Move Logo',
                warning: false,
                title: 'Main Logo'
            }
        }

        // Main Logo Glow
        if (currentEditorStep?.currentSubStep === "presetMainLogoGlowColor") {
            return {
                step: CURRENT_STEP,
                subStep: steps[14],
                subTitle: 'Move Logo',
                warning: false,
                title: 'Main Logo'
            }
        }

        // Main Logo Move
        if (currentEditorStep?.currentSubStep === "presetMainLogoMove") {

            if (currentCustomTemplate?.bottomLogo?.enabled) {
                if (currentCustomTemplate?.bottomLogo.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[15],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                if (currentCustomTemplate?.bottomLogo?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[16],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Bottom Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[17],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }

            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[18],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[19],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }

            return {
                step: CURRENT_STEP,
                subStep: steps[27],
                subTitle: '',
                warning: false,
                title: 'Finish'
            }
        }

        // Bottom Logo
        if (currentEditorStep?.currentSubStep === "presetBottomLogoColor") {
            if (currentCustomTemplate?.bottomLogo?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[16],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Bottom Logo'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[17],
                subTitle: 'Move Logo',
                warning: false,
                title: 'Bottom Logo'
            }
        }

        // Bottom Logo Glow
        if (currentEditorStep?.currentSubStep === "presetBottomLogoGlow") {
            return {
                step: CURRENT_STEP,
                subStep: steps[17],
                subTitle: 'Move Logo',
                warning: false,
                title: 'Bottom Logo'
            }
        }

        // Bottom Logo Move
        if (currentEditorStep?.currentSubStep === "presetBottomLogoMove") {
            if (currentCustomTemplate?.backgroundLogo?.enabled) {
                console.info('im here');
                if (currentCustomTemplate?.backgroundLogo?.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[18],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[19],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Background Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[20],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[27],
                subTitle: '',
                warning: false,
                title: 'Finish'
            }
        }

        // Background Logo
        if (currentEditorStep?.currentSubStep === "presetBackgroundLogoColor") {
            if (currentCustomTemplate?.backgroundLogo?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[19],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Background Logo'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[20],
                subTitle: 'Move Logo',
                warning: false,
                title: 'Background Logo'
            }
        }

        // Background Glow
        if (currentEditorStep?.currentSubStep === "presetBackgroundLogoGlow") {
            return {
                step: CURRENT_STEP,
                subStep: steps[20],
                subTitle: 'Move Logo',
                warning: false,
                title: 'Background Logo'
            }
        }

        // Background Move
        if (currentEditorStep?.currentSubStep === "presetBackgroundLogoMove") {
            if (currentCustomTemplate?.detailLogo1?.enabled) {
                if (currentCustomTemplate?.detailLogo1?.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[21],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Detail 1 Logo'
                    }
                }
                if (currentCustomTemplate?.detailLogo1?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[22],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Detail 1 Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[23],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Detail 1 Logo'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[27],
                subTitle: '',
                warning: false,
                title: 'Finish'
            }
        }

        // Detail 1 Logo
        if (currentEditorStep?.currentSubStep === "presetDetailLogo1Color") {
            if (currentCustomTemplate?.detailLogo1?.enabled) {
                if (currentCustomTemplate?.detailLogo1?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[22],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Detail 1 Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[23],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Detail 1 Logo'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[27],
                subTitle: '',
                warning: false,
                title: 'Finish'
            }
        }

        // Detail 1 Glow
        if (currentEditorStep?.currentSubStep === "presetDetailLogo1Glow") {
            return {
                step: CURRENT_STEP,
                subStep: steps[23],
                subTitle: 'Move Logo',
                warning: false,
                title: 'Detail 1 Logo'
            }
        }

        // Detail 1 Move
        if (currentEditorStep?.currentSubStep === "presetDetailLogo1Move") {
            if (currentCustomTemplate?.detailLogo2?.enabled) {
                if (currentCustomTemplate?.detailLogo2?.hasColor) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[24],
                        subTitle: 'Select Color',
                        warning: false,
                        title: 'Detail 2 Logo'
                    }
                }
                if (currentCustomTemplate?.detailLogo2?.glow?.enabled) {
                    return {
                        step: CURRENT_STEP,
                        subStep: steps[25],
                        subTitle: 'Select Glow Color',
                        warning: false,
                        title: 'Detail 2 Logo'
                    }
                }
                return {
                    step: CURRENT_STEP,
                    subStep: steps[26],
                    subTitle: 'Move Logo',
                    warning: false,
                    title: 'Detail 2 Logo'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[27],
                subTitle: '',
                warning: false,
                title: 'Finish'
            }
        }

        // Detail 2 Logo
        if (currentEditorStep?.currentSubStep === "presetDetailLogo2Color") {
            if (currentCustomTemplate?.detailLogo2?.glow?.enabled) {
                return {
                    step: CURRENT_STEP,
                    subStep: steps[25],
                    subTitle: 'Select Glow Color',
                    warning: false,
                    title: 'Detail 2 Logo'
                }
            }
            return {
                step: CURRENT_STEP,
                subStep: steps[26],
                subTitle: 'Move Logo',
                warning: false,
                title: 'Detail 2 Logo'
            }
        }

        // Detail 2 Glow
        if (currentEditorStep?.currentSubStep === "presetDetailLogo2Glow") {
            return {
                step: CURRENT_STEP,
                subStep: steps[26],
                subTitle: 'Move Logo',
                warning: false,
                title: 'Detail 2 Logo'
            }
        }

        // Detail 2 Move
        if (currentEditorStep?.currentSubStep === "presetDetailLogo2Move") {
            return {
                step: CURRENT_STEP,
                subStep: steps[27],
                subTitle: '',
                warning: false,
                title: 'Finish'
            }
        }
        if (currentEditorStep?.currentSubStep === "selectFinish") {
            return {
                step: CURRENT_STEP,
                subStep: steps[28],
                subTitle: '',
                warning: false,
                title: 'ADD-ON'
            }
        }
    }


}