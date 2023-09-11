import React, {
    createContext, useState, useEffect, useContext
} from 'react';
import Client from 'shopify-buy';
import { InterfaceContext, InterfaceContextType } from './interfaceContext';
import { useRouter } from 'next/navigation'
import { ICustomPlateTemplate } from '../interfaces/customTemplate.interface';
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject, uploadString } from 'firebase/storage';


interface IStoreProps {
    children: React.ReactNode
}

export type StoreContextType = {
    cart: Array<Object>
    showCart: boolean
    checkout: Object

    hasDesigner?: boolean,
    setHasDesigner: (e: boolean) => void;

    acceptTerms?: boolean,
    setAcceptTerms: (e: boolean) => void;

    // Variant
    addVariant: (
        variantId?: any,
        licensePlateId?: string,
        customTemplateId?: string
    ) => void;
    removeVariant: (
        any?: any
    ) => void;

    // Checkout
    redirectCheckout: (currentCustomTemplate: ICustomPlateTemplate, canvasRef?: any) => void;
}

export const client = Client.buildClient({
    domain: 'platemakrs.myshopify.com',
    storefrontAccessToken: '2d259727a1658a93c475677f3591d3bf',
    apiVersion: '2023-07'
});

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreProvider = ({ children }: IStoreProps): JSX.Element => {
    const router = useRouter();

    const {
        loading,
        setLoading,
        finalDesign
    } = useContext(InterfaceContext) as InterfaceContextType;

    const [cart, setCart] = useState([])
    const [checkout, setCheckout] = useState({})
    const [showCart, setShowCart] = useState(false);
    const [hasDesigner, setHasDesigner] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const onStorageUpdate = (e: any) => {
        const { key, newValue } = e;
        return {
            key,
            newValue
        }
    }

    const setCheckoutItem = (checkout: any) => {
        sessionStorage.setItem("checkout", checkout.id)
        setCheckout(checkout)
    }

    const redirectCheckout = async (
        currentCustomTemplate?: ICustomPlateTemplate,
        isCheckout?: boolean
    ) => {
        setLoading(true)
        try {
            if (isCheckout) {
                window.location.replace(checkout?.webUrl)
            } else {
                // const queryParams = new URLSearchParams(window.location.search);
                const storage = getStorage();
                const storageRef = ref(storage, `customTemplates/${currentCustomTemplate?.id}/design-preview/test`); // Create storage reference

                const upload = await uploadString(
                    storageRef,
                    finalDesign,
                    'data_url',
                    {
                        contentType: 'image/png'
                    }
                );

                const downloadUrl = await getDownloadURL(upload.ref)

                addVariant(
                    currentCustomTemplate?.selectedVariant?.id,
                    currentCustomTemplate?.id,
                    downloadUrl
                )
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
        } finally {
            window.location.replace(checkout?.webUrl)
        }
    }

    // Variants START
    const addVariant = async (
        variantId?: any,
        customTemplateId?: string,
        preview?: string,
    ) => {
        try {
            const checkoutId = checkout?.id;
            const lineItemsToUpdate = hasDesigner ? [
                {
                    variantId,
                    quantity: 1,
                    customAttributes: [
                        {
                            key: "Order ID", value: `${customTemplateId}`, // Template of Preset
                        },
                        {
                            key: "preview", value: `${preview}`, // Template of Preset
                        }
                    ]
                },
                {
                    variantId: 'gid://shopify/ProductVariant/46836862648621',
                    quantity: 1,
                    customAttributes: [
                        {
                            key: "Order ID", value: `${customTemplateId}`, // Template of Preset
                        }
                    ]
                }
            ] : [
                {
                    variantId,
                    quantity: 1,
                    customAttributes: [
                        {
                            key: "Order ID", value: `${customTemplateId}`, // Template of Preset
                        },
                        {
                            key: "preview", value: `${preview}`, // Template of Preset
                        },
                    ]
                }
            ]

            const checkoutResponse = await client.checkout.addLineItems(
                checkoutId,
                lineItemsToUpdate
            );
            setCart(JSON.parse(JSON.stringify(checkoutResponse.lineItems)));
        } catch (error) {
            console.error(error)
            throw new Error(error?.message);
        } finally {
            console.info('System [Done]:', 'Finished adding Products to Cart')
        }
    }

    const removeVariant = async (item?: any) => {
        try {
            // setCartLoading(true);
            const checkoutId = checkout?.id;
            const itemRemove = [
                {
                    id: item.id,
                    quantity: 0,
                    variantId: item.variant.id
                }
            ]
            const removeItem = await client.checkout.updateLineItems(
                checkoutId,
                itemRemove
            );
            setCart(JSON.parse(JSON.stringify(removeItem.lineItems)));
        } catch (error) {
            // setCartLoading(false);
            console.error(error);
            throw new Error("Shopify API - Failed to remove Ticket to Checkout");
        } finally {
            // setCartLoading(false);
            // if (cart.length === 0) setCartPopup(false)
        }
    }
    // Variants END

    const updateLineItemFromCart = async (item: any, type: any, inputQuantity: any) => {
        try {
            const checkoutId = checkout?.id;
            const quantitySum = type === 'add' ? parseInt(item.quantity + (1)) : type === 'subtract' ? parseInt(item?.quantity - (1)) : parseInt(inputQuantity)
            const itemRemove = [
                {
                    id: item.id,
                    quantity: quantitySum,
                    variantId: item.variant.id
                }
            ]
            const updateItem = await client.checkout.updateLineItems(
                checkoutId,
                itemRemove
            );
            setCart(JSON.parse(JSON.stringify(updateItem.lineItems)));
        } catch (error) {
            throw new Error("Shopify API - Update Ticket in Cart");
        }
    }

    useEffect(() => {
        setLoading(true)
        window.addEventListener('storage', onStorageUpdate);
        const initializeCheckout = async () => {
            const existingCheckoutID = sessionStorage.getItem("checkout");
            let itemArray;
            if (existingCheckoutID && existingCheckoutID !== "null") {
                try {
                    const existingCheckout = await client.checkout.fetch(
                        existingCheckoutID
                    )
                    if (!existingCheckout?.completedAt && existingCheckout?.completedAt == null) {
                        setCheckoutItem(existingCheckout)
                        const lineItems = JSON.parse(JSON.stringify(existingCheckout.lineItems));
                        itemArray = [...lineItems];
                        setCart(itemArray);
                        // updateCheckoutWithId(existingCheckoutID);
                        setLoading(false)
                        return;
                    } else {
                        const newCheckout = await client.checkout.create();
                        setCheckoutItem(newCheckout)
                        setLoading(false)
                        return;
                    }
                } catch (e) {
                    setLoading(false)
                    sessionStorage.setItem("checkout", null)
                    console.info('error', e)
                    throw new Error("Shopify API - Failed to get Checkout");
                }
            }
            const newCheckout = await client.checkout.create();
            setCheckoutItem(newCheckout)
            setLoading(false)
        }
        initializeCheckout();
    }, [])

    return (
        <StoreContext.Provider
            value={{
                cart,
                showCart,
                checkout,

                addVariant,
                removeVariant,

                hasDesigner,
                setHasDesigner,

                acceptTerms,
                setAcceptTerms,

                redirectCheckout
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;