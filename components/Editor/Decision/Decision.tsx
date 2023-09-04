import { useContext } from "react"
import { InterfaceContext, InterfaceContextType } from "../../../context/interfaceContext"
import { Offcanvas } from "react-bootstrap";
import { StoreContext, StoreContextType } from "../../../context/storeContext";
import { EditorContext, EditorContextType } from "../../../context/editorContext";
import { returnMoney } from "../../../utils/helpers";

export const Decision = () => {

    const {
        Header,
        Body
    } = Offcanvas;

    const {
        updateStep,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const {
        showDecision,
        setDecision,
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        redirectCheckout,
        cart,
        checkout
    } = useContext(StoreContext) as StoreContextType;

    // If carbon fiber/hexagon are in the template go directly to plate characters
    const handleDecision = () => {
        if(
            currentCustomTemplate?.backgroundSettings?.background?.file?.name === "carbon-fiber-full-with-shadow" || 
                currentCustomTemplate?.backgroundSettings?.background?.file?.name === "forged-carbon" || 
                    currentCustomTemplate?.backgroundSettings?.background?.file?.name === "carbon-fiber"
        ){
            console.info('presetCharacterColor');
            updateStep?.(
                3, 
                'presetCharacterColor',
                'Select Color',
                false,
                'Plate Character'
            )
        }
        if(
            currentCustomTemplate?.backgroundSettings?.background?.enabled 
                && currentCustomTemplate?.backgroundSettings?.background?.file?.hasColor
        ){
            console.info('presetBgImageColor');
            updateStep?.(
                3, 
                'presetBgImageColor',
                'Select Color',
                false,
                'Background Image'
            )
        }
        console.info('presetBgColor');
        updateStep?.(
                    3,
                    'presetBgColor',
                    'Select Color',
                    false,
                    'Background'
                )
    }

    return (
        <Offcanvas
            onClose={() => setDecision(false)}
            show={showDecision}
            className='decision__container'
            placement='bottom'
        >
            <Body className="decision__main-container">
                <div className="decision__actions">
                    {/* Checkout Button */}
                    <div className="decision__actions-checkout">
                        <a 
                            className="decision__actions-checkout-btn"
                            onClick={
                                () => redirectCheckout(currentCustomTemplate)
                            }
                        >Checkout</a>
                    </div>
                    <div className="decision__actions-divider">
                        <p className="decision__actions-divider-text">or</p>
                    </div>
                    <div className="decision__actions-customize">
                        <a
                            className="decision__actions-customize-btn"
                            onClick={() => handleDecision()}
                        >Customize Template</a>
                    </div>
                    {/* Customize Template */}
                </div>
                <div className="decision__details">
                    <div className="decision__details-text">
                        <p>Subtotal</p>
                    </div>
                    <div className="decision__details-price">
                        <p>
                            ${returnMoney(
                                currentCustomTemplate?.selectedVariant?.price?.amount
                            )}
                        </p>
                    </div>
                </div>
                {/* View Details */}
            </Body>
        </Offcanvas>
    )
}