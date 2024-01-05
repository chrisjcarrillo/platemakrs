import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { InterfaceContext, InterfaceContextType } from '../../context/interfaceContext';
import { EditorContext, EditorContextType } from '../../context/editorContext';
import { ICustomPlateTemplate } from '../../interfaces/customTemplate.interface';
import { IEditorSteps } from '../../interfaces/editor.interface';
import { ILicensePlate } from '../../interfaces/licensePlate.interface';

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