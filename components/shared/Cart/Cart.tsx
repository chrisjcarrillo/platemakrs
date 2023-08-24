import { useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { StoreContext, StoreContextType } from "../../../context/storeContext"
import { InterfaceContext, InterfaceContextType } from '../../../context/interfaceContext';
import Image from 'next/image';
import { returnMoney } from '../../../utils/helpers';
import { EditorContext, EditorContextType } from '../../../context/editorContext';

export const Cart = () => {
    // [Done] Import Cart Object
    // [Done] Import Checkout Object

    const {
        showCart,
        setShowCart
    } = useContext(InterfaceContext) as InterfaceContextType;
    const {
        cart,
        checkout,
        removeVariant,
        redirectCheckout,
    } = useContext(StoreContext) as StoreContextType;

    const {
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const { Header, Body } = Offcanvas;

    // const subTotal = cart.map((item) => (item?.variant?.priceV2?.amount)).reduce((prev, curr) => prev + curr, 0);

    return (
        <Offcanvas
            onHide={() => setShowCart(false)}
            onClose={() => setShowCart(false)}
            show={showCart}
            className='cart__drawer'
            placement='end'
        >
            <Header
                className="cart__header"
                closeButton
            >
                <div>Your <strong>Cart</strong></div>
            </Header>
            <Body
                className={'cart__container'}
            >
                <div className='cart__products'>
                    {cart && (cart.map((item, index) => {
                        return (
                            <div className="cart__product" key={index}>
                                <div className='cart__product-image'>
                                    <Image
                                        src={item?.variant?.image
                                            ? item?.variant?.image.src : ''}
                                        alt={''}
                                        width={100}
                                        height={60}
                                        sizes="100vw"
                                        style={{ height: 'auto' }} // optional
                                    />
                                </div>
                                <div className='cart__product-attributes'>
                                    {/* Should Contain Title */}
                                    <p className="cart__product-attributes-title">{item?.title?.replace(' - Template', '')}</p>
                                    { item?.customAttributes?.length > 0 && (item.customAttributes?.map((attribute, index) => {
                                        return(
                                            <p className="cart__product-attributes-text" key={index}>{attribute?.key}: {attribute?.value}</p>
                                        )
                                    })) }
                                    {/* Should Contain attributes (Below Title) */}
                                    <a className="cart__product-attributes-remove" onClick={() => removeVariant(item)}>remove</a>
                                    {/* Should Contain Remove Button */}
                                </div>
                                <div className='cart__product-price'>
                                    ${returnMoney(item?.variant?.priceV2?.amount)}
                                    {/* Should Contain Price (Next to Title) */}
                                </div>
                            </div>
                        )
                    }))}
                </div>

                <div className='cart__checkout'>
                    {/* Subtotal */}
                    <div className='cart__checkout-price'>
                        <div className='cart__checkout-price-text'>
                            Subtotal
                        </div>
                        <div className='cart__checkout-price-amount'>
                            ${(parseInt(checkout?.totalPriceV2?.amount).toFixed(2))}
                        </div>
                    </div>
                    {/* Place order Button */}
                    <div className='cart__checkout-button-container'>
                        <a 
                            className='cart__checkout-button'
                            onClick={() => redirectCheckout(currentCustomTemplate)}
                        >
                            Checkout
                        </a>
                    </div>
                </div>
                {/* Proceed to Checkout Button AT THE BOTTOM (WITH TOTAL) */}

            </Body>
        </Offcanvas>
    )
}