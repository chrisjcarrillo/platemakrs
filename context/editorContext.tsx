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
import { createLicensePlateFirebase, createTemplateFirebase, getLicensePlate, updateLicensePlateFirebase } from '../lib/firebase/firebase';
import { StoreContext, StoreContextType, client } from './storeContext';
import { premadeTemplates } from '../utils/premadeTemplates';
import { IShopifyVariant } from '../interfaces/shopify/variants.interface';

interface IEditorProps {
    children: React.ReactNode
}

export type EditorContextType = {

    // Step Handler
    currentEditorStep?: IEditorSteps;

    // Current Selected License Plate 
    currentLicensePlate?: ILicensePlate;

    // Current Custom Template
    currentCustomTemplate?: ICustomPlateTemplate;

    // Licese Plate Functions 
    addLicensePlate?: (licensePlate: ILicensePlate) => void;
    updateLicensePlate: (type: string, value?: string, switchValue?: boolean) => void;
    removeLicensePlate?: (licensePlate: ILicensePlate) => void;
    createLicensePlate?: () => void;

    initialStore: () => void;

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
    selectPresetTemplate: (title: any, description: any, handle: string, variantId: string, customPresetTemplate: boolean) => void;
    setCurrentCustomTemplate?: (template: any) => void;

    // Custom Template
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
        setMoveLogo,
        setMoveBackgroundLogo,
        setMoveBottomLogo,
        setPreset
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        addToCartEvent,
        setExtras,
        extrasPremade,
        setExtrasPremade
    } = useContext(StoreContext) as StoreContextType;

    // Messages Start
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    // Messages End

    const [currentEditorStep, setStep] = useState<IEditorSteps>({ currentStep: 1, currentSubStep: undefined });// Current Step
    const [currentLicensePlate, setLicensePlate] = useState<ILicensePlate | undefined>(undefined)// Current License Plate
    const [currentCustomTemplate, setCurrentCustomTemplate] = useState<ICustomPlateTemplate | undefined>(undefined)// Current Custom Template

    useEffect(() => {
        if (typeof window !== "undefined") {
            let data = window.performance.getEntriesByType("navigation")[0].type;
            const query = new URLSearchParams(window.location.search);
            if(query.get('pm_source') === "fb"){
                setExtras(true)
            }
            
            const initProduct = async () => {
                try {
                    setLoading(true);

                    const isPresetTemp = query.get('preset') === null ? false : true
                    console.log(query.get('preset'))

                    const templateFilter = premadeTemplates.filter(
                        template => (template?.templateId === query.get('presetTemplate') && template?.preset === isPresetTemp )
                    );

                    const shopifyProduct = await client.product.fetchByHandle(templateFilter[0].shopifyHandle);
                    const customTemplate = templateFilter[0] as ICustomPlateTemplate;

                    const formatedVariants: IShopifyVariant[] = [];

                    if (shopifyProduct?.variants?.length !== 0) {
                        shopifyProduct?.variants?.map( (item: any) => {
                            let currentVariant = {
                                id: item?.id,
                                available: item?.available,
                                title: item?.title,
                                price: {
                                    amount: item?.priceV2?.amount,
                                    currencyCode: item?.priceV2?.currencyCode
                                },
                                image: {
                                    id: item?.image?.id,
                                    src: item?.image?.src,
                                    width: item?.image?.width,
                                    height: item?.image?.height
                                }
                            }
                            formatedVariants.push(currentVariant);
                        })
                    }

                    setCurrentCustomTemplate(template => ({
                        ...template,
                        ...customTemplate,
                        title: shopifyProduct?.title,
                        description: shopifyProduct?.description,
                        shopifyVariants: formatedVariants,
                        selectedVariant: formatedVariants[0],
                        finish: 'GLOSS'
                    }));

                    localStorage.setItem( 'customTemplate', JSON.stringify({
                        ...customTemplate,
                        title: shopifyProduct?.title,
                        description: shopifyProduct?.description,
                        shopifyVariants: formatedVariants,
                        selectedVariant: formatedVariants[0],
                        finish: 'GLOSS'
                    })); // Set Custom Template

                } catch (error) {
                    setLoading(false);
                } finally {
                    setLoading(false);
                }
            }
            
            initProduct();

            // if (data === 'reload' && query.get('preset')) {
            //     if (query.get('presetTemplate') && query.get('preset') && query.get('step') === "1" && window.location.pathname === "/editor") {
            //         initProduct();
            //         console.log('Google ads is present')
            //     }
            // }
            // if (query.get('preset') && query.get('gclid')) {
            //     initProduct();
            //     console.log('Google ads is present')
            // }
            // if (query.get('pm_source') === 'fb') {
            //     initProduct();
            //     console.log('Google ads is present')
            // }
        }
    }, [])


    const updateCustomTemplateSelection = (
        type: any,
        value: any
    ) => {
        console.log(value);
        setCurrentCustomTemplate(currentCustomTemplates  => ({
            ...currentCustomTemplates,
            [type]: value
        }))
        const saveCurrentTemplate = localStorage.setItem( 'customTemplate', JSON.stringify({
            ...currentCustomTemplate,
            [type]: value
        }));
        return saveCurrentTemplate;
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
            const formatedVariants: IShopifyVariant[] = [];
            const query = new URLSearchParams(window.location.search);

            // if extraPremade is true, add a localStorage with the current templateId


            if (variant?.length !== 0) {
                variant?.map( (item: any) => {
                    let currentVariant = {
                        id: item?.id,
                        available: item?.available,
                        title: item?.title,
                        price: {
                            amount: item?.priceV2?.amount,
                            currencyCode: item?.priceV2?.currencyCode
                        },
                        image: {
                            id: item?.image?.id,
                            src: item?.image?.src,
                            width: item?.image?.width,
                            height: item?.image?.height
                        }
                    }
                    formatedVariants.push(currentVariant);
                })
            }

            setCurrentCustomTemplate(template => ({
                ...template,
                ...customTemplate,
                title: title,
                description: description,
                shopifyVariants: variant,
                selectedVariant: variant[0],
                finish: 'GLOSS'
            }))

            if(extrasPremade && window.location?.pathname.includes('/products')){
                localStorage.setItem('previousTemplate', JSON.stringify({
                    ...customTemplate,
                    title: title,
                    description: description,
                    shopifyVariants: variant,
                    selectedVariant: variant[0],
                    finish: 'GLOSS'
                }));
            }

            if (!customPresetTemplate) {
                setPreset(true);
                sessionStorage.setItem('preset', 'true')
                router.push(`/editor?presetTemplate=${customTemplate?.templateId}&step=1&preset=true`)
            }
            if (customPresetTemplate) {
                setPreset(false);
                if (sessionStorage.getItem('preset')) {
                    sessionStorage.removeItem('preset')
                }
                router.push(`/editor?presetTemplate=${customTemplate?.templateId}&step=1`)
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally {
            updateStep(1);
            setLoading(false);
        }
    }

    const storeLicensePlate = () => {
        // Step 1: Set License Plate in localStorage
        // Step 2: Set the state of the plate
        const saveLicensePlate = localStorage.setItem('licensePlate', JSON.stringify(currentLicensePlate)); // Step 1
        setLicensePlate(licensePlate => ({ // Step 2
            ...licensePlate,
            ...currentLicensePlate
        }))
        return saveLicensePlate;
    }
    
    const storeCurrentTemplate = () => {
        // Step 1: Set License Plate in localStorage
        // Step 2: Set the state of the plate
        const saveCurrentTemplate = localStorage.setItem( 'customTemplate', JSON.stringify(currentCustomTemplate)); // Step 3
        setCurrentCustomTemplate(template => ({ //  Step 4
            ...template,
            ...currentCustomTemplate,
        }))
        return saveCurrentTemplate;
    }

    // Store the licensePlate in Local Storage 
    const initialStore = async () => {
        try {
            addToCartEvent('facebook');
            setLoading(true);
            
            storeLicensePlate(); // Set License Plate
            storeCurrentTemplate(); // Set Custom Template

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
                    if (queryParams.get("preset") && sessionStorage.getItem('preset')) {
                        setPreset(true)
                        if (
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "carbon-fiber-full-with-shadow" ||
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "forged-carbon" ||
                            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "carbon-fiber" || currentCustomTemplate?.backgroundSettings?.background?.file?.name === 'black-plate'
                        ) {
                            console.log('here 1');
                            return updateStep?.(
                                3,
                                'presetCharacter',
                                'Select Color',
                                false,
                                'Plate Character'
                            )
                        }
                        if (
                            currentCustomTemplate?.backgroundSettings?.background?.enabled
                            && currentCustomTemplate?.backgroundSettings?.background?.file?.hasColor
                        ) {
                            console.log('here 2');
                            return updateStep?.(
                                3,
                                'presetBgImageColor',
                                'Select Color',
                                false,
                                'Background Image'
                            )
                        }
                        
                        return updateStep?.(
                            3,
                            'presetBgColor',
                            'Select Color',
                            false,
                            'Background'
                        )
                    } else {
                        if (
                            currentCustomTemplate?.backgroundSettings?.background?.enabled
                        ) {
                            return updateStep(
                                3,
                                'editorBgImage',
                                'Select Image',
                                false,
                                'Background Image'
                            )
                        } else {
                            return updateStep(
                                3,
                                'editorBgColor',
                                'Select Color',
                                false,
                                'Background'
                            )
                        }
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
                initialStore,

                // Custom Template
                currentCustomTemplate,
                setCurrentCustomTemplate,

                // createCustomTemplate,
                updateCustomTemplateSelection,

                // Template
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