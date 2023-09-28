import React, {
    createContext, useState, useEffect, useContext
} from 'react';
import Client from 'shopify-buy';
import { InterfaceContext, InterfaceContextType } from './interfaceContext';
import { useRouter } from 'next/navigation'
import { ICustomPlateTemplate } from '../interfaces/customTemplate.interface';

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

    // Variant
    addVariant: (
        variantId?: any,
        customTemplateId?: string
    ) => void;
    
    removeVariant: (
        any?: any, boolean?: boolean
    ) => void;

    addon?: any; 
    setAddon?: (e: any) => void;

    // Checkout
    redirectCheckout: (currentCustomTemplate: ICustomPlateTemplate, canvasRef?: any) => void;

    notes?: string;
    setNotes: (e: any) => void;
}

export const client = Client?.buildClient({
    domain: 'platemakrs.myshopify.com',
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

    const [cart, setCart] = useState([])
    const [addon, setAddon] = useState(undefined);
    const [checkout, setCheckout] = useState({})
    const [showCart, setShowCart] = useState<boolean>(false);
    const [hasDesigner, setHasDesigner] = useState<boolean>(false);
    const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
    const [notes, setNotes] = useState<string | undefined>(undefined);

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
                addVariant(
                    currentCustomTemplate?.selectedVariant?.id,
                    currentCustomTemplate?.id,
                )
            }

        } catch (error) {
            console.log(error)
        }
    }

    // Variants START
    const addVariant = async (
        variantId?: any,
        customTemplateId?: string
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
                            key: "Preview", value: `${designUrl}`, // Template of Preset
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
                            key: "Preview", value: `${designUrl}`, // Template of Preset
                        }
                    ]
                }
            ]
            const checkoutResponse = await client?.checkout?.addLineItems(
                checkoutId,
                lineItemsToUpdate
            );
            setCart(JSON.parse(JSON.stringify(checkoutResponse.lineItems)));
            window.location.replace(checkout?.webUrl)
        } catch (e) {
            console.error(e)
            throw new Error(e)
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
            // setCartLoading(false);
            console.error(error);
            throw new Error("Shopify API - Failed to remove Ticket to Checkout");
        } finally {
            // setCartLoading(false);
            // if (cart.length === 0) setCartPopup(false)
        }
    }
    // Variants END

    useEffect(() => {
        setLoading(true)
        window.addEventListener('storage', onStorageUpdate);
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
                        setLoading(false)
                        return;
                    } else {
                        const newCheckout = await client?.checkout?.create();
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
            const newCheckout = await client?.checkout?.create();
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

                redirectCheckout,

                addon, 
                setAddon,

                notes,
                setNotes
            }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;