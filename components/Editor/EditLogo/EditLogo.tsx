import { useContext } from "react"
import { InterfaceContext, InterfaceContextType } from "../../../context/interfaceContext"
import { Button, Offcanvas } from "react-bootstrap";
import { StoreContext, StoreContextType } from "../../../context/storeContext";
import { EditorContext, EditorContextType } from "../../../context/editorContext";
import { MoveSwitcher } from "../EditorActions/MoveSwitcher/MoveSwitcher";
import { isMobile } from "react-device-detect";

export const EditLogo = () => {

    const {
        Header,
        Body
    } = Offcanvas;

    const {
        updateStep,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const {
        editLogoUi,
        setEditLogoUi,
        setMoveLogo,
        setMoveBottomLogo,
        setMoveBackgroundLogo,
        setMoveDetail1,
        setMoveDetail2
    } = useContext(InterfaceContext) as InterfaceContextType;

    return (
        <Offcanvas
            onClose={() => setEditLogoUi(false)}
            show={editLogoUi}
            className='decision__container'
            placement={isMobile ? 'bottom' : 'end'}

        >
            <Body className="decision__main-container">
                <div className="decision__actions">
                    {
                        currentCustomTemplate?.mainLogo?.enabled && (
                            <MoveSwitcher
                                type="moveLogo"
                                text="Main Logo Move"
                            />
                        )
                    }
                    {
                        currentCustomTemplate?.bottomLogo?.enabled && (
                            <MoveSwitcher
                                type="bottomLogo"
                                text="Bottom Logo Move"
                            />
                        )
                    }
                    {
                        currentCustomTemplate?.detailLogo1?.enabled && (
                            <MoveSwitcher
                                type="detailLogo1"
                                text="Detail 1 Logo Move"
                            />
                        )
                    }
                    {
                        currentCustomTemplate?.detailLogo2?.enabled && (
                            <MoveSwitcher
                                type="detailLogo2"
                                text="Detail 2 Logo Move"
                            />
                        )
                    }
                    {
                        currentCustomTemplate?.backgroundLogo?.enabled && (
                            <MoveSwitcher
                                type="moveBackgroundLogo"
                                text="Move Background Logo"
                            />
                        )
                    }

                </div>
                <Button
                    className="editLogo__button"
                    onClick={() => {
                        setMoveLogo(false)
                        setMoveBottomLogo(false)
                        setMoveBackgroundLogo(false)
                        setMoveDetail1(false)
                        setMoveDetail2(false)
                        setEditLogoUi(false)
                    }}
                >
                    Done
                </Button>
            </Body>
        </Offcanvas>
    )
}