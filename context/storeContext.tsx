import * as Sentry from "@sentry/nextjs";
import React, {
    createContext, useState, useEffect, useContext
} from 'react';
import Client from 'shopify-buy';
import { InterfaceContext, InterfaceContextType } from './interfaceContext';
import { useRouter } from 'next/navigation'
import { ICustomPlateTemplate } from '../interfaces/customTemplate.interface';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { ILicensePlate } from '../interfaces/licensePlate.interface';
import { storeCheckout } from './actions/storeData';
import {notification } from 'antd';

interface IStoreProps {
    children: React.ReactNode
}

export type StoreContextType = {
    cart: Array<Object>;
    showCart: boolean;
    checkout: Object;

    hasDesigner?: boolean,
    setHasDesigner: (e: boolean) => void;

    acceptTerms?: boolean,
    setAcceptTerms: (e: boolean) => void;

    acceptPmTerms?: boolean,
     setAcceptPmTerms: (e: boolean) => void;

    addToCartEvent: (type: string) => void;

    removeVariant: (
        any?: any, boolean?: boolean
    ) => void;

    addon?: any;
    setAddon?: (e: any) => void;
    

    addVariantDesigner: (product: any, quantity: any) => void;

    // Checkout
    redirectCheckout: (
        currentCustomTemplate: ICustomPlateTemplate,
        currentLicensePlate: ILicensePlate,
        isCheckout: boolean,
        canvasRef?: any
    ) => void;
    
    addVariantGiftCard: (variant: any, quantity: number) => void;

    notes?: string;
    setNotes: (e: any) => void;

    extras?: boolean;
    setExtras: (e: boolean) => void;

    extrasPremade?: boolean;
    setExtrasPremade: (e: boolean) => void
    setAddonPlate: (e: any) => void
    updateCheckoutWithData: (e: Object) => void
    updateCheckoutWithEmail: (e: string) => void
}

export const client = Client?.buildClient({
    domain: 'checkout.platemakrs.com',
    storefrontAccessToken: '2d259727a1658a93c475677f3591d3bf',
    apiVersion: '2023-07'
});

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreProvider = ({ children }: IStoreProps): JSX.Element => {
    const router = useRouter();

    const {
        setLoading,
        designUrl
    } = useContext(InterfaceContext) as InterfaceContextType;

    const [messageApi, contextHolder] = notification?.useNotification();


    const [extrasPremade, setExtrasPremade] = useState<boolean>(false);
    const [ad, setAd] = useState<string | undefined>(undefined);
    const [cart, setCart] = useState([])
    const [addon, setAddon] = useState(undefined);
    const [checkout, setCheckout] = useState({})
    const [showCart, setShowCart] = useState<boolean>(false);
    const [hasDesigner, setHasDesigner] = useState<boolean>(false);
    const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
    const [acceptPmTerms,  setAcceptPmTerms] = useState<boolean>(false);
    const [notes, setNotes] = useState<string | undefined>(undefined);
    const [extras, setExtras] = useState<boolean>(true);

    const onStorageUpdate = (e: any) => {
        const { key, newValue } = e;
        // console.log(JSON.parse(window.localStorage.getItem("sampleList")));
        return {
            key,
            newValue
        }
    }

    const setCheckoutItem = (checkout: any) => {
        sessionStorage.setItem("checkout", checkout.id)
        setCheckout(checkout)
    }

    const setAddonPlate = async () => {
        try {
            setLoading(true);
            const addonProduct = await client.product.fetchByHandle('add-on-additional-plate');
            const checkoutId =  checkout?.id
            const lineItemsToUpdate = [
                {
                    variantId: addonProduct?.variants[0].id,
                    quantity: 1,
                }
            ]
            
            const checkoutResponse = await client?.checkout?.addLineItems(
                checkoutId,
                lineItemsToUpdate
            );
            setCart(JSON.parse(JSON.stringify(checkoutResponse.lineItems)));
            setLoading(false)
            messageApi['success']({
                message: 'Added to Cart!',
                description: (<><strong>Add On - Additional Plate</strong>, Added to your cart!</>)
            });
        } catch (error) {
            console.log(error);
            Sentry.captureException(`Shopify API - ${error}`);
            setLoading(false)
        }
    }

    const redirectCheckout = async (
        currentCustomTemplate: ICustomPlateTemplate,
        currentLicensePlate: ILicensePlate,
        isCheckout: boolean,
        canvasRef: any,
    ) => {
        setLoading(true)
        try {
            if (isCheckout) {
                window.location.replace(checkout?.webUrl)
            } else {
                const storeData = await storeCheckout(
                    currentCustomTemplate,
                    currentLicensePlate,
                    canvasRef
                )
                addVariant(
                    currentCustomTemplate?.selectedVariant?.id,
                    currentCustomTemplate?.id,
                    storeData
                )
            }

        } catch (error) {
            console.log(error)
            Sentry.captureException(`Shopify API - ${error}`);
        }
    }

    const addToCartEvent = () => {
        const cartEventId = sessionStorage.getItem('cart_fbEventId');
        let content = [];
        let contentIds = [];
        const currentCheckout = JSON.parse(JSON.stringify(checkout));
        const currentCart = cart;
        const urlQueryParams = new URLSearchParams(window?.location?.search)

        if (cartEventId === undefined) return;
        if (currentCart?.length !== 0) {
            currentCart?.map(item => {
                let fullItem = {
                    id: item.variant.product.id,
                    title: item.title,
                    description: item.title + " - " + item.variant.title,
                    item_price: item.variant.price,
                    quantity: item.quantity,
                    category: 'Tickets',
                }
                content.push(fullItem);
                contentIds.push(item.variant.product.id);
            })
        }
        if (ad === "facebook") {
            window?.fbq?.('track', 'AddToCart', {
                content_name: 'Custom License Plate',
                value: currentCheckout.totalPrice,
                content: content,
                content_ids: contentIds
            }, {
                eventID: cartEventId
            }, 'pixel_v1');

            window?.fbq?.('track', 'AddToCart', {
                content_name: 'Custom License Plate',
                value: currentCheckout.totalPrice,
                content: content,
                content_ids: contentIds
            }, {
                eventID: cartEventId
            }, 'pixel_v2');
        }
        if (ad === "google" || urlQueryParams.get('gad_source') || urlQueryParams.get('utm_source') === "google") {
            window?.gtag("event", "begin_checkout", {
                currency: "USD",
                send_to: 'AW-11418187763/KCSdCOKZ_v4YEPPvzsQq',
                value: currentCheckout?.totalPrice?.amount,
            });
            window?.gtag("event", "add_to_cart", {
                currency: "USD",
                value: currentCheckout?.totalPrice?.amount,
                send_to: 'AW-11418187763/Q9xNCOWZ_v4YEPPvzsQq',
            });
        }
    }

    const initiateCheckoutEvent = (checkoutResponse) => {
        let fbCheckoutId = sessionStorage.getItem('checkout_fbEventId');
        window?.fbq?.('track', 'InitiateCheckout', {
            value: JSON.parse(JSON.stringify(parseInt(checkoutResponse?.totalPrice?.amount, 10))),
        }, {
            eventID: fbCheckoutId
        }, 'pixel_v2');

        window?.fbq?.('track', 'InitiateCheckout', {
            value: JSON.parse(JSON.stringify(parseInt(checkoutResponse?.totalPrice?.amount, 10)))
        }, {
            eventID: fbCheckoutId
        }, 'pixel_v1');
    }

    const addVariantGiftCard = async (
        variant: any,
        quantity: number
    ) => {
        try {
            const checkoutId = checkout?.id;
            const variantId = variant.id;
            const lineItemsToUpdate = [
                {
                    variantId,
                    quantity: quantity,
                }
            ]

            const checkoutResponse = await client?.checkout?.addLineItems(
                checkoutId,
                lineItemsToUpdate
            );

            setCart(JSON.parse(JSON.stringify(checkoutResponse.lineItems)));
            initiateCheckoutEvent(checkoutResponse);

            // history.pushState('', '', `${process.env.STORE_URL}/${uri}`)
            window.location.replace(checkout?.webUrl)
        } catch (error) {
            console.log(error)
            Sentry.captureException(`Shopify API - ${error}`);
        }
    }

    // Variants START
    const addVariant = async (
        variantId: any,
        customTemplateId: string,
        storeData: {
            previewUrl: string,
            licensePlateId: string,
            customTemplateId: string
        }
    ) => {
        try {
            const checkoutId = checkout?.id;
            const lineItemsToUpdate = hasDesigner ? [
                {
                    variantId,
                    quantity: 1,
                    customAttributes: [
                        {
                            key: "Order ID", value: `${storeData.customTemplateId}`, // Template of Preset
                        },
                        {
                            key: "Plate ID", value: `${storeData.licensePlateId}`, // Template of Preset
                        },
                        {
                            key: "", value: `${storeData.previewUrl}`, // Template of Preset
                        },
                        {
                            key: "Notes", value: `${notes ?? 'N/A'}`,
                        }
                    ]
                },
                {
                    variantId: addon?.variants[0]?.id,
                    quantity: 1,
                    customAttributes: [
                        {
                            key: "Order ID", value: `${storeData.customTemplateId}`, // Template of Preset
                        }
                    ]
                }
            ] : [
                {
                    variantId,
                    quantity: 1,
                    customAttributes: [
                        {
                            key: "Order ID", value: `${storeData.customTemplateId}`, // Template of Preset
                        },
                        {
                            key: "Plate ID", value: `${storeData.licensePlateId}`, // Template of Preset
                        },
                        {
                            key: "Preview", value: `${storeData.previewUrl}`, // Template of Preset
                        },
                        {
                            key: "Notes", value: `${notes ?? 'N/A'}`,
                        }
                    ]
                }
            ]
            const checkoutResponse = await client?.checkout?.addLineItems(
                checkoutId,
                lineItemsToUpdate
            );
            setCart(JSON.parse(JSON.stringify(checkoutResponse.lineItems)));
            initiateCheckoutEvent(checkoutResponse);

            // history.pushState('', '', `${process.env.STORE_URL}/${uri}`)
            window.location.replace(checkout?.webUrl)
            // return;
        } catch (error) {
            console.error(error)
            Sentry.captureException(`Shopify API - ${error}`);
        }
    }

    const addVariantDesigner = async (product: any, quantity: any) => {
        try {
            // console.log(variant);
            const checkoutId = checkout?.id;
            const lineItemsToUpdate = [
                {
                    variantId: product?.variants[0].id,
                    quantity: quantity,
                }
            ]
            const checkoutResponse = await client?.checkout?.addLineItems(
                checkoutId,
                lineItemsToUpdate
            );
            setCart(JSON.parse(JSON.stringify(checkoutResponse.lineItems)));

            initiateCheckoutEvent(checkoutResponse);

            // history.pushState('', '', `${process.env.STORE_URL}/${uri}`)
            window.location.replace(checkout?.webUrl)
        } catch (error) {
            console.error(error)
            Sentry.captureException(`Shopify API - ${error}`);
        }
    }

    const removeVariant = async (item?: any, isAddon?: boolean) => {
        try {
            const checkoutId = checkout?.id;
            const itemRemove = [{
                id: item.id,
                quantity: 0,
                variantId: item?.variant?.id
            }]
            const removeItem = await client?.checkout?.updateLineItems(
                checkoutId,
                itemRemove
            );
            setCart(JSON.parse(JSON.stringify(removeItem.lineItems)));
        } catch (error) {
            console.error(error);
            Sentry.captureException(`Shopify API - ${error}`);
        } finally {
            // setCartLoading(false);
            // if (cart.length === 0) setCartPopup(false)
        }
    }
    // Variants END

    const checkEventSource = () => {
        const urlQueryParams = new URLSearchParams(window?.location?.search)
        if (Cookies.get('_fbc') || urlQueryParams.get('fbclid')) {
            return "Facebook Campaign";
        }
        if (ad === "klaviyo" && urlQueryParams.get("c")) {
            return `Klaviyo Campaign: ${urlQueryParams.get("c")}`
        }
        if (urlQueryParams.get('gad_source') || urlQueryParams.get('utm_source') === "google" || ad === "google") {
            return "Google Campaign";
        }
        return "Organic Traffic";
    }

    const updateCheckoutWithData = async (values: Object) => {
        try {
            const checkoutId = checkout?.id;
            const updateCheckoutWithValues = await client?.checkout?.updateShippingAddress(
                checkoutId, values
            )
            console.log(updateCheckoutWithValues)
            return updateCheckoutWithValues;
        } catch (error) {
            console.log(error);
            Sentry.captureException(`Shopify API - ${error}`);
        }
    }

    const updateCheckoutWithEmail = async (value: string) => {
        try {
            const checkoutId = checkout?.id;
            const updateCheckoutWithEmailData = await client?.checkout?.updateEmail(checkoutId, value)
            return updateCheckoutWithEmailData;
        } catch (error) {
            console.log(error);
            Sentry.captureException(`Shopify API - ${error}`);
        }
    }

    const updateCheckoutWithId = async (id) => {
        try {
            const urlQueryParams = new URLSearchParams(window?.location?.search)
            const generatePlatemakrsID = uuidv4();
            const checkoutEventId = "PM_" + generatePlatemakrsID;
            if (checkoutEventId) sessionStorage.setItem('checkout_fbEventId', checkoutEventId);

            const purchasePlatemakrsID = uuidv4();
            const purchaseEventId = "PM_" + purchasePlatemakrsID;

            const generateCartPlatemakrsID = uuidv4();
            const cartEventId = "PM_" + generateCartPlatemakrsID;

            const customId = uuidv4();

            if((urlQueryParams.get("fbclid") && !Cookies.get('_fbc'))){
                console.info('cookie:', 'Platemakrs Bot created a Facebook ID');
                const currentDate = Date.now()
                const fbId = `fb.1.${currentDate}.${urlQueryParams.get("fbclid")}`
                Cookies.set('_fbc', fbId, {
                    expires: 7,
                    domain: 'platemakrs.com'
                })
                console.info('cookie:', 'The ID didnt get created in the cookies, but was in the url');
                console.info('cookie:', `Facebook ID: ${fbId}`);
            }

            if(!Cookies.get('_fbp')){
                console.info('cookie:', 'Platemakrs Bot created a Facebook Pixel ID');
                // Create Facebook pixel
                const currentDate = Date.now();
                const randomNumber = Math.floor(Math.random() * Date.now())
                const facebookId = `fb.1.${currentDate}.${randomNumber}`;
                Cookies.set('_fbp', facebookId, {
                    expires: 7,
                    domain: 'platemakrs.com'
                })
                console.info('cookie:', 'The Facebok Pixel ID didnt get created in the cookies, so it created it just in case');
                console.info('cookie:', `Facebook ID: ${facebookId}`);
            }

            const customAttributes = {
                customAttributes: [
                    {
                        key: "reference",
                        value: `${document?.referrer ?? null}`
                    },
                    {
                        key: "click_id",
                        value: `${Cookies.get('_fbc') ?? null}`
                    },
                    {
                        key: "pixel_id",
                        value: `${Cookies.get('_fbp') ?? null}`
                    },
                    {
                        key: "checkout_event_id",
                        value: `${checkoutEventId ?? null}`
                    },
                    {
                        key: "origin_url",
                        value: `${window?.location?.href ?? null}`
                    },
                    {
                        key: "ip_address",
                        value: `${sessionStorage.getItem('ipAddress') ?? null}`
                    },
                    {
                        key: "user_agent",
                        value: `${sessionStorage.getItem('userAgent') ?? null}`
                    },
                    {
                        key: "purchase_event_id",
                        value: `${purchaseEventId ?? null}`
                    },
                    {
                        key: "cart_event_id",
                        value: `${cartEventId ?? null}`
                    },
                    {
                        key: "source",
                        value: checkEventSource()
                    },
                    {
                        key: "custom_id",
                        value: `${customId ?? null}`
                    }
                ]
            }
            const updateCheckout = await client.checkout.updateAttributes(
                id,
                customAttributes
            )
            return updateCheckout;
        } catch (error) {
            console.log(error);
            Sentry.captureException(`Shopify API - ${error}`);
        }

    }

    useEffect(() => {
        setLoading(true)
        window.addEventListener('storage', onStorageUpdate);
        const urlQueryParams = new URLSearchParams(window?.location?.search)
        if (urlQueryParams.get("fbclid") || Cookies.get('_fbc')) {
            setAd('facebook');
        }
        if (urlQueryParams.get("c") === "sms" ||
            urlQueryParams.get("c") === "email"
        ) {
            setAd('klaviyo');
        }
        if (urlQueryParams.get('gad_source') || urlQueryParams.get("utm_source") === "google") {
            setAd('google');
        }
        const initializeCheckout = async () => {
            const existingCheckoutID = sessionStorage.getItem("checkout");
            let itemArray;
            if (existingCheckoutID && existingCheckoutID !== "null") {
                try {
                    const existingCheckout = await client?.checkout?.fetch(
                        existingCheckoutID
                    )
                    if (!existingCheckout?.completedAt && existingCheckout?.completedAt == null) {
                        setCheckoutItem(existingCheckout)
                        const lineItems = JSON.parse(JSON.stringify(existingCheckout.lineItems));
                        itemArray = [...lineItems];
                        setCart(itemArray);
                        updateCheckoutWithId(existingCheckoutID);
                        setLoading(false)
                        return;
                    } else {
                        const newCheckout = await client?.checkout?.create();
                        if (newCheckout) {
                            updateCheckoutWithId(newCheckout.id);
                        }
                        setCheckoutItem(newCheckout)
                        setLoading(false)
                        return;
                    }
                } catch (error) {
                    setLoading(false)
                    sessionStorage.setItem("checkout", null)
                    console.log(error);
                    Sentry.captureException(`Shopify API - ${error}`);
                }
            }
            const newCheckout = await client?.checkout?.create();
            if (newCheckout) {
                try {
                    console.log(`NEW CHECKOUT, IM HERE: ${newCheckout?.id}`)
                    updateCheckoutWithId(newCheckout?.id);
                } catch (error) {
                    setLoading(false)
                    sessionStorage.setItem("checkout", null)
                    console.log(error)
                    Sentry.captureException(`Shopify API - ${error}`);
                }
            }
            setCheckoutItem(newCheckout)
            setLoading(false)
        }
        initializeCheckout();
    }, [])

    return (
        <StoreContext.Provider
            value={{
                extras,
                setExtras,
                cart,
                showCart,
                checkout,
                addToCartEvent,
                addVariantDesigner,
                removeVariant,
                extrasPremade,
                setExtrasPremade,
                hasDesigner,
                setHasDesigner,

                acceptTerms,
                setAcceptTerms,

                acceptPmTerms,
                 setAcceptPmTerms,

                redirectCheckout,

                addon,
                setAddon,

                notes,
                setNotes,

                addVariantGiftCard,

                setAddonPlate,
                updateCheckoutWithData,
                updateCheckoutWithEmail
            }}
        >
            {contextHolder}
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;