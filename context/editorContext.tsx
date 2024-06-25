import * as Sentry from "@sentry/nextjs";
import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';

import {
    IEditorSteps
} from '../interfaces/editor.interface';
import { message, notification } from 'antd';
import { ILicensePlate } from '../interfaces/licensePlate.interface';
import { ICustomPlateTemplate } from '../interfaces/customTemplate.interface';
import { useRouter } from 'next/navigation'
import { InterfaceContext, InterfaceContextType } from './interfaceContext';
import { StoreContext, StoreContextType, client } from './storeContext';
import { premadeTemplates } from '../utils/premadeTemplates';
import { IShopifyVariant } from '../interfaces/shopify/variants.interface';
import { vehicleType } from '../utils/helpers';
import { isTwoPlateState } from '../utils/helpers/states/twoPlatesStates';

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
    selectPresetTemplate: (
        title: any, 
        description: any, 
        handle: string, 
        variantId: string, 
        customPresetTemplate: boolean,
        vehicleType: string
    ) => void;
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
        setDetailsPopup,
        setLoading,
        setMoveLogo,
        setMoveBackgroundLogo,
        setMoveBottomLogo,
        setPreset,
        setUpsellPopup,
        pathPopup,
        setPathPopup
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

    const [notificationApi, notificationContextHolder] = notification?.useNotification();

    const [currentEditorStep, setStep] = useState<IEditorSteps>({ currentStep: 1, currentSubStep: undefined });// Current Step
    const [currentLicensePlate, setLicensePlate] = useState<ILicensePlate | undefined>(undefined)// Current License Plate
    const [currentCustomTemplate, setCurrentCustomTemplate] = useState<ICustomPlateTemplate | undefined>(undefined)// Current Custom Template
    const [currentState, setCurrentState] = useState<String | undefined>(undefined);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const query = new URLSearchParams(window.location.search);
            if(query.get('pm_source') === "fb"){
                setExtras(true)
            }
            const initProduct = async () => {
                try {

                    const isPresetTemp = query.get('preset') === null ? false : true

                    const templateFilter = query.get('vehicleType') ? premadeTemplates.filter(
                        template => (
                            template?.templateId === query.get('presetTemplate') 
                                && template?.preset === isPresetTemp 
                                    && template?.vehicleType === query.get('vehicleType')
                    )) : premadeTemplates.filter(
                        template => (
                            template?.templateId === query.get('presetTemplate') 
                                && template?.preset === isPresetTemp 
                                    && template?.vehicleType === 'Car'
                    ));
                    console.log(templateFilter)

                    const shopifyProduct = await client.product.fetchByHandle(templateFilter[0]?.shopifyHandle);
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
                    Sentry.captureException(`Editor - ${error}`);
                }
            }
            
            initProduct();
        }
    }, [])


    const updateCustomTemplateSelection = (
        type: any,
        value: any
    ) => {
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
        title: any,
        description: any,
        handle: string,
        variant: any,
        customPresetTemplate: boolean,
        vehicleType: string,
    ) => {
        try {
            setLoading(true);
            const templateFilter = premadeTemplates?.filter(template => template?.shopifyHandle === handle && template?.vehicleType === vehicleType );
            const customTemplate = templateFilter[0] as ICustomPlateTemplate;
            const formatedVariants: IShopifyVariant[] = [];

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
                router.push(`/editor?presetTemplate=${customTemplate?.templateId}&step=1&preset=true&vehicleType=${customTemplate?.vehicleType}`)
            }
            if (customPresetTemplate) {
                setPreset(false);
                if (sessionStorage.getItem('preset')) {
                    sessionStorage.removeItem('preset')
                }
                router.push(`/editor?presetTemplate=${customTemplate?.templateId}&step=1&vehicleType=${customTemplate?.vehicleType}`)
            }
        } catch (error) {
            console.log(error);
            Sentry.captureException(`Editor - ${error}`);
            setLoading(false);
        } finally {
            updateStep(1);
            setTimeout( () => {
                setLoading(false);
            }, 2000)
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
            if(!sessionStorage?.getItem('pathSelected')){
                setPathPopup(true);
                return;
            }            
            if(!localStorage?.getItem('detailsFilled')){
                setDetailsPopup(true);
                return;
            }
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
            
            const queryParams = new URLSearchParams(window.location.search);
            const twoPlatesState = isTwoPlateState(sessionStorage?.getItem('state'));
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
                            if(twoPlatesState && !sessionStorage.getItem('showAdditionalPlatePopup') && currentCustomTemplate?.vehicleType === "Car"){
                                setUpsellPopup(true)
                            }
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
                            if(twoPlatesState && !sessionStorage.getItem('showAdditionalPlatePopup') && currentCustomTemplate?.vehicleType === "Car"){
                                setUpsellPopup(true)
                            }
                            return updateStep?.(
                                3,
                                'presetBgImageColor',
                                'Select Color',
                                false,
                                'Background Image'
                            )
                        }
                        if(twoPlatesState && !sessionStorage.getItem('showAdditionalPlatePopup') && currentCustomTemplate?.vehicleType === "Car"){
                            setUpsellPopup(true)
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
                            if(twoPlatesState && !sessionStorage.getItem('showAdditionalPlatePopup') && currentCustomTemplate?.vehicleType === "Car"){
                                setUpsellPopup(true)
                            }
                            return updateStep(
                                3,
                                'editorBgImage',
                                'Select Image',
                                false,
                                'Background Image'
                            )
                        } else {
                            if(twoPlatesState && !sessionStorage.getItem('showAdditionalPlatePopup') && currentCustomTemplate?.vehicleType === "Car"){
                                setUpsellPopup(true)
                            }
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
        } catch (error) {
            console.log(error);
            Sentry.captureException(`Editor - ${error}`);
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
            {notificationContextHolder}
            {contextHolder}
            {children}
        </EditorContext.Provider>
    )
}

export default EditorProvider;