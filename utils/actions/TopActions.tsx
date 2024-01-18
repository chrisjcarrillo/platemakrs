import { IEditorSteps } from '../../interfaces/editor.interface';

export const TopActions = (
    stepType: 'BACK' | 'NEXT',
    currentEditorStep?: IEditorSteps,
    presetTemplate?: boolean
) => {
    console.log(presetTemplate);
    if (stepType === "NEXT") {
        return{
            updateStep: true,
            step: 3,
            page: undefined
        }
    }
    if (stepType === "BACK") {
        if (currentEditorStep?.currentStep === 1) {
            if(presetTemplate){
                return{
                    updateStep: false,
                    step: undefined,
                    page: '/products'
                }
            }
            return{
                updateStep: false,
                step: undefined,
                page: '/products-custom'
            }
        } else {
            return{
                updateStep: true,
                step: 1,
                page: undefined
            }
        }
    }
}