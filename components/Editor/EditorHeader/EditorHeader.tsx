import Badge from "react-bootstrap/Badge";
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext } from 'react';
import { StoreContext, StoreContextType } from "../../../context/storeContext";
import { InterfaceContext, InterfaceContextType } from "../../../context/interfaceContext";
import { usePathname } from 'next/navigation'
import { menuLayout } from "../../../utils/helpers";
import { isMobile } from 'react-device-detect';
import { Cart } from "../../shared/Cart/Cart";
import { useRouter } from "next/navigation";
import { NavDropdown } from "react-bootstrap";

// import Link from 'next/link';

export const EditorHeader = (
    props: any
) => {

    const router = useRouter();

    const pathname = usePathname();

    const { updateBack, updateForward } = props;
    const { Brand, Toggle } = Navbar;
    const { Link } = Nav;

    const {
        cart
    } = useContext(StoreContext) as StoreContextType; // Store Context

    const {
        setShowCart,
        showMenu,
        setMenu
    } = useContext(InterfaceContext) as InterfaceContextType; // Interface Context

    const arrSum = (cartObject: any) => cartObject.reduce(
        (a: any, b: any) => a + b.quantity, 0
    )

    return (
        <>
            <Cart />
            <Navbar className="header" expand="lg" bg="light" sticky="top">
                <Container
                    className="header__tools"
                >
                    <Toggle className="header__toggle me-auto" aria-controls="offcanvasNavbar" onClick={() => setMenu(true)} />
                    {!isMobile && (<div className="me-auto"></div>)}

                    <Brand className="m-auto" onClick={() => router.push('/')}>
                        <Image
                            alt="Platemakrs Logo"
                            height={20}
                            width={135}
                            src={'/images/logo-white.png'}
                        />
                    </Brand>

                    <Nav className="ms-auto header__tools">
                        <div
                            className={'cart'}
                            onClick={
                                cart.length !== 0 ?
                                    () => setShowCart(true) :
                                    () => setShowCart(false)
                            }
                        >
                            <Badge className={'cart__rounded--pill rounded-circle'} pill bg="danger">{arrSum(cart)}</Badge>
                            <span className="cart__icon">
                                <svg fill={"#ffffff"} className="icon" viewBox="0 0 700 700" width="30" height="30">
                                    <g>
                                        <path fill={"#ffffff"} d="M263.6,519.8c-33.4,0-60.6,27.2-60.6,60.6c0,33.4,27.2,60.6,60.6,60.6c33.4,0,60.6-27.2,60.6-60.6
                                                C324.3,547,297.1,519.8,263.6,519.8z M263.6,601.5c-11.7,0-21.2-9.5-21.2-21.2s9.5-21.2,21.2-21.2c11.7,0,21.2,9.5,21.2,21.2
                                                S275.3,601.5,263.6,601.5z"></path>
                                        <path fill={"#ffffff"} d="M513.6,519.8c-33.4,0-60.6,27.2-60.6,60.6c0,33.4,27.2,60.6,60.6,60.6c33.4,0,60.6-27.2,60.6-60.6
                                                C574.2,547,547,519.8,513.6,519.8z M513.6,601.5c-11.7,0-21.2-9.5-21.2-21.2s9.5-21.2,21.2-21.2s21.2,9.5,21.2,21.2
                                                S525.3,601.5,513.6,601.5z"></path>
                                        <path fill={"#ffffff"} d="M247.3,420.2h323.6c9.3,0,17.4-6.5,19.3-15.6l51-240c1.2-5.8-0.2-11.9-4-16.5c-3.7-4.6-9.4-7.3-15.3-7.3l-428.6,0
                                                l-14.1-66.2c-1.9-9.1-10-15.6-19.3-15.6H78.1c-10.9,0-19.7,8.8-19.7,19.7s8.8,19.7,19.7,19.7h65.8L207.2,396
                                                c-12.6,11.1-20.5,27.3-20.5,45.4c0,33.4,27.2,60.6,60.6,60.6h323.6c10.9,0,19.7-8.8,19.7-19.7c0-10.9-8.8-19.7-19.7-19.7H247.3
                                                c-11.7,0-21.2-9.5-21.2-21.2S235.6,420.2,247.3,420.2z M244.3,380.7l-42.6-200.5l395.8,0l-42.6,200.5H244.3z"></path>
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </Nav>

                    {showMenu && (
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="top"
                            backdrop="true"
                            onHide={() => setMenu(false)}
                        >
                            <Offcanvas.Header closeButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                {menuLayout.map((menuItem, index) => {
                                if (menuItem?.subLinks) {
                                    return(
                                        <NavDropdown key={index} title={`${menuItem?.text}`} id={`${menuItem?.id}`}>
                                        {menuItem?.subLinks.map((item, index) => {
                                            return(
                                                <Link key={index} onClick={() => router.push(`${item.link}`)} className="header__link animate__animated animate__fadeInRight animate__delay-0.5s">{item.text}</Link>
                                            )
                                        })}
                                        </NavDropdown>
                                    ) 
                                } else {
                                    return (
                                        <Link key={index} onClick={() => router.push(`${menuItem.link}`)} className="header__link">{menuItem.text}</Link>
                                    )
                                }
                            })}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    )}

                </Container>

                {!isMobile && (
                    <Container fluid>
                        <Navbar.Collapse className={'header__link--container'}>
                            {menuLayout.map((menuItem, index) => {
                                if (menuItem?.subLinks) {
                                    return(
                                        <NavDropdown key={index} title={`${menuItem?.text}`} id={`${menuItem?.id}`}>
                                        {menuItem?.subLinks.map((item, index) => {
                                            return(
                                                <Link key={index} onClick={() => router.push(`${item.link}`)} className="header__link">{item.text}</Link>
                                            )
                                        })}
                                        </NavDropdown>
                                    ) 
                                } else {
                                    return (
                                        <Link key={index} onClick={() => router.push(`${menuItem.link}`)} className="header__link">{menuItem.text}</Link>
                                    )
                                }
                            })}
                        </Navbar.Collapse>
                    </Container>
                )}

                {
                    (pathname !== "/" && pathname !== "/editor" && isMobile) && (
                        <Container
                            fluid
                            className="header__links"
                        >
                            <div className="header__links-container">
                            <NavDropdown className="header__links-link" title='Pre-Made Designs' id={'premadeTemplates2'}>
                                <Link 
                                    key={1} 
                                    onClick={() => router.push('/products')}
                                    className="header__link animate__animated animate__fadeInRight animate__delay-0.5s">
                                        Car Templates
                                </Link>
                                <Link 
                                    key={2} 
                                    onClick={() => router.push('/products/motorcycles')}
                                    className="header__link animate__animated animate__fadeInRight animate__delay-0.5s">
                                        Moto Templates
                                </Link>
                            </NavDropdown>
                            </div>
                            <div className="header__links-container">
                            <NavDropdown
                                className="header__links-link"
                                title='Build your plate' 
                                id={'buildYourOwn2'}>
                                <Link 
                                    key={1} 
                                    onClick={() => router.push(`/products-custom`)} 
                                    className="header__link animate__animated animate__fadeInRight animate__delay-0.5s">
                                        Car Templates
                                </Link>
                            </NavDropdown>
                            </div>
                                {/* <Link
                                    className="header__links-link"
                                    onClick={() => router.push('/products-custom')}
                                >
                                    Build your plate
                                </Link>
                            </div>
                            <div className="header__links-container">
                                <Link
                                    className="header__links-link"
                                    onClick={() => router.push('/products')}
                                >
                                    Pre-Made Designs
                                </Link>
                            </div> */}
                        </Container>
                    )
                }

            </Navbar>
        </>

    )
}