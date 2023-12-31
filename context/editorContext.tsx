import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';

import {
    IEditorSteps
} from '../interfaces/editor.interface';
import { staticTemplates } from '../utils/templateHelpers';

import { v4 as uuidv4 } from 'uuid';
import { Modal, message } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { ILicensePlate } from '../interfaces/licensePlate.interface';
import { ITemplate } from '../interfaces/template.interface';
import { ICustomPlateTemplate } from '../interfaces/customTemplate.interface';
import { useRouter } from 'next/navigation'
import { InterfaceContext, InterfaceContextType } from './interfaceContext';
import { createLicensePlateFirebase, createTemplateFirebase } from '../lib/firebase/firebase';
import { StoreContext, StoreContextType, client } from './storeContext';
import { premadeTemplates } from '../utils/premadeTemplates';



interface IEditorProps {
    children: React.ReactNode
}

export type EditorContextType = {

    // Step Handler
    currentEditorStep?: IEditorSteps;

    // Current Selected License Plate 
    currentLicensePlate?: ILicensePlate;

    // Current Selected Template
    // currentTemplate?: ITemplate;

    // Current Custom Templatet
    currentCustomTemplate?: ICustomPlateTemplate;

    // Imaginary Cart (FOR NOW )
    licensePlates?: ILicensePlate[];

    // Licese Plate Functions 
    addLicensePlate?: (licensePlate: ILicensePlate) => void;
    updateLicensePlate: (type: string, value?: string, switchValue?: boolean) => void;
    removeLicensePlate?: (licensePlate: ILicensePlate) => void;
    createLicensePlate?: () => void;
    createPresetLicensePlate?: () => void;

    // Step Functions
    updateStep?: (
        step: number,
        subStep?: string,
        description?: string,
        showWarning?: boolean,
        title?: string
    ) => void;

    // Template
    // setCurrentTemplate?: (template: any) => void;
    selectPresetTemplate?: (title: any, description: any, handle: string, variantId: string, customPresetTemplate: boolean) => void;

    // Custom Template
    confirmPreview?: () => void;
    updateCustomTemplateSelection?: (type: any, value: any) => void;
}

// Notes
// Add Step change by Url Paramater
// Add Id to Paramaters
// Add go directly to Editor if preset is already

export const EditorContext = createContext<EditorContextType | null>(null);

const EditorProvider = ({ children }: IEditorProps): JSX.Element => {
    const router = useRouter();

    const {
        setLoading,
        setStepLoading,
        setShowPreview,
        setDecision,
        setMoveLogo,
        setMoveBackgroundLogo,
        setMoveBottomLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        addVariant,
        addToCartEvent
    } = useContext(StoreContext) as StoreContextType;

    // Messages Start
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    // Messages End

    const [currentEditorStep, setStep] = useState<IEditorSteps>({ currentStep: 1, currentSubStep: undefined });// Current Step
    const [currentLicensePlate, setLicensePlate] = useState<ILicensePlate | undefined>(undefined)// Current License Plate
    // const [currentTemplate, setCurrentTemplate] = useState<ITemplate | undefined>(undefined)// Current Template
    const [currentCustomTemplate, setCurrentCustomTemplate] = useState<ICustomPlateTemplate | undefined>(undefined)// Current Custom Template

    useEffect(() => {
        if (typeof window !== "undefined") {
            let data = window.performance.getEntriesByType("navigation")[0].type;
            const query = new URLSearchParams(window.location.search);
            const initProduct = async () => {
                try {
                    setLoading(true);

                    const templateFilter = premadeTemplates.filter(
                        template => template?.templateId === query.get('presetTemplate')
                    );

                    const shopifyProduct = await client.product.fetchByHandle(templateFilter[0].shopifyHandle);
                    const customTemplate = templateFilter[0] as ICustomPlateTemplate;

                    if (customTemplate) {
                        setCurrentCustomTemplate(template => ({
                            ...template,
                            ...customTemplate,
                            title: shopifyProduct?.title,
                            description: shopifyProduct?.description,
                            shopifyVariants: shopifyProduct?.variants,
                            selectedVariant: shopifyProduct?.variants[0]
                        }))
                    }
                    console.log('Google ads is present')

                } catch (error) {
                    setLoading(false);
                } finally {
                    setLoading(false);
                }
            }
            if (data === 'reload' && query.get('preset')) {
                if (query.get('presetTemplate') && query.get('preset') && query.get('step') === "1" && window.location.pathname === "/editor") {
                    initProduct();
                    console.log('Google ads is present')
                }
            }
            if (query.get('preset') && query.get('gclid')) {
                initProduct();
                console.log('Google ads is present')

            }

        }
    }, [])

    const confirmPreview = async () => {
        try {
            const createCustomTemplate = await createTemplateFirebase(
                currentCustomTemplate
            );
            if (createCustomTemplate) {
                sessionStorage.setItem(
                    'customTemplateId',
                    createCustomTemplate?.id
                ); // Save the id in case of reload

                setCurrentCustomTemplate(template => ({
                    ...template,
                    ...currentCustomTemplate,
                    id: createCustomTemplate?.id
                }))
            }
        } catch (error) {
            console.error(error)
            // updateStep(2)
        } finally {
            setTimeout(
                () => {
                    setLoading(false)
                    setShowPreview(false)
                    setStepLoading(false)
                },
                3000
            )
        }

    }

    const colorValidation = (type: any, value: any) => {
        if (
            currentCustomTemplate?.backgroundSettings?.color === value
        ) {
            messageApi.open({
                type: 'error',
                content: 'Background and Other Text should not be the same color!',
                duration: 2,
            })
            return 'sameColor';
        }
    }

    const updateCustomTemplateSelection = (
        type: any,
        value: any
    ) => {

        // let validation = colorValidation(type, value);
        // if (validation === "sameColor") return;
        // if(type !== "backgroundStroke") {
        //     let validation = colorValidation(type, value);
        //     if (validation === "sameColor") return;
        // }

        // const currentTemplates = {...currentCustomTemplate, [type]: value}

        setCurrentCustomTemplate(currentCustomTemplates => ({
            ...currentCustomTemplates,
            [type]: value
        }))
    }
    ///// END: Custom Template Functions /////

    ///// START: Template Functions //////
    const selectPresetTemplate = async (
        title?: any,
        description?: any,
        handle?: string,
        variant?: any,
        customPresetTemplate?: boolean
    ) => {
        try {
            setLoading(true);
            const templateFilter = premadeTemplates?.filter(template => template?.shopifyHandle === handle);
            const customTemplate = templateFilter[0] as ICustomPlateTemplate;

            if (!customPresetTemplate) {
                setCurrentCustomTemplate(template => ({
                    ...template,
                    ...customTemplate,
                    title: title,
                    description: description,
                    shopifyVariants: variant,
                    selectedVariant: variant[0]
                }))
                sessionStorage.setItem('preset', 'true')
                router.push(`/editor?presetTemplate=${customTemplate?.templateId}&step=1&preset=true`)

            } else {
                setShowPreview(true)
                setCurrentCustomTemplate(template => ({
                    ...template,
                    ...customTemplate,
                    title: title,
                    description: description,
                    shopifyVariants: variant,
                    selectedVariant: variant[0]
                }))
                if (sessionStorage.getItem('preset')) {
                    sessionStorage.removeItem('preset')
                }
                router.push(`/editor?presetTemplate=${customTemplate?.templateId}&step=1`)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
        setLoading(false);
    }

    ///// END: Template Functions //////

    ///// START: License Plate Functions /////
    const createLicensePlate = async (
    ) => {
        try {
            addToCartEvent('facebook');
            setLoading(true)
            setStepLoading(true)
            const queryParams = new URLSearchParams(window.location.search);

            const createPlate = await createLicensePlateFirebase(currentLicensePlate);

            if (createPlate) sessionStorage.setItem('licensePlateId', createPlate.id);

            setLicensePlate(licensePlate => ({
                ...licensePlate,
                ...currentLicensePlate
            }))

            if (queryParams.get("preset") && sessionStorage.getItem('preset')) {
                const createCustomTemplate = await createTemplateFirebase(
                    currentCustomTemplate
                );
                if (createCustomTemplate) {
                    sessionStorage.setItem(
                        'customTemplateId',
                        createCustomTemplate?.id
                    ); // Save the id in case of reload

                    setCurrentCustomTemplate(template => ({
                        ...template,
                        ...currentCustomTemplate,
                        id: createCustomTemplate?.id
                    }))
                }
            }

            setTimeout(() => {
                messageApi.open({
                    key,
                    type: 'success',
                    content: 'Succesfully Created License Plate',
                    duration: 1,
                })
            }, 2000);

        } catch (error) {
            console.log(error);
        } finally {
            const queryParams = new URLSearchParams(window.location.search);
            setTimeout(
                () => {
                    setLoading(false);
                    setStepLoading(false)
                    if (queryParams.get("preset") && sessionStorage.getItem('preset')) {
                        setDecision(true)
                    } else {
                        updateStep(2)
                    }
                },
                2000
            )
        }
    }

    const updateLicensePlate = (
        type: string,
        value?: string,
        switchValue?: boolean
    ) => {
        setLicensePlate(currentLicensePlate => ({
            ...currentLicensePlate,
            [type]: value ?? switchValue
        }))
    }
    ///// END: License Plate Functions /////


    ///// START: Step Functions /////
    const updateStep = (
        step?: number,
        subStep?: string,
        description?: string,
        showWarning?: boolean,
        title?: string
    ) => {
        setMoveLogo(false);
        setMoveBackgroundLogo(false);
        setMoveBottomLogo(false);

        if (sessionStorage.getItem('preset')) {
            setDecision(false);
        }

        // If your going from the second step to the first step
        // Show the user a warning (You will lose all of your edit information)
        // 
        if (
            currentEditorStep.currentStep === 2 && step === 1 && !sessionStorage.getItem('preset')
        ) {
            console.log('first')
            Modal.confirm({
                centered: true,
                icon: <WarningOutlined rev={''} />,
                title: 'Are you sure you want to go back?',
                content: 'You will lose your current Design',
                okText: 'Confirm',
                onOk() {
                    // setCurrentTemplate(undefined);
                    setCurrentCustomTemplate(undefined);
                    setStep({ currentStep: 1, currentSubStep: undefined })
                },
                onCancel() { },
            });
            return;

        }

        if (currentEditorStep.currentStep === 1 && step === 1 &&
            currentCustomTemplate && sessionStorage.getItem('preset')
        ) {
            console.log('second')
            Modal.confirm({
                centered: true,
                icon: <WarningOutlined rev={''} />,
                title: 'Are you sure you want to go back?',
                content: 'You will lose your current Design',
                okText: 'Confirm',
                onOk() {
                    setDecision(false);
                    setLicensePlate(undefined);
                    // setCurrentTemplate(undefined);
                    setCurrentCustomTemplate(undefined);
                    setStep({ currentStep: 1, currentSubStep: undefined })
                    router.push('/products')
                },
                onCancel() { },
            });
            return;
        }

        setStep(currentEditorStep => ({
            ...currentEditorStep,
            currentStep: step,
            currentSubStep: subStep,
            currentStepDescription: description,
            currentStepTitle: title,
        }))

        if (document) {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    }
    ///// END: Step Functions /////

    return (
        <EditorContext.Provider
            value={{

                // Editor
                currentEditorStep,

                // License Plate
                currentLicensePlate,
                updateLicensePlate,
                createLicensePlate,
                // createPresetLicensePlate,

                // Custom Template
                // setCurrentTemplate,
                currentCustomTemplate,
                // createCustomTemplate,
                confirmPreview,
                updateCustomTemplateSelection,

                // Template
                // currentTemplate,
                selectPresetTemplate,

                // Steps
                updateStep,
            }}
        >
            {contextHolder}
            {children}
        </EditorContext.Provider>
    )
}

export default EditorProvider;