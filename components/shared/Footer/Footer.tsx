import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { useContext } from 'react';
import { footerLinksOne, footerLinksTwo, policyLinks, socialMediaLinks } from "../../../utils/helpers";
import Link from 'next/link';


const Footer = () => {
    return(
        <Container fluid className="footer__container">
            <Container className="footer__container-main">
                <Row className='footer__main'>
                    {/* Logo */}
                    <Col 
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        className="footer__brand"
                    >
                        <NavbarBrand href="https://platemakrs.com">
                            <Image
                                alt="Footer logo"
                                height={20}
                                width={135}
                                src={'/images/logo-white.png'}
                            />
                        </NavbarBrand>
                    </Col>

                    {/* Links 1 */}
                    <Col
                        xs={6}
                        sm={6}
                        md={3}
                        lg={3}
                        xl={3}
                        className="footer__links-one"
                    >
                        <div className='footer__links-title'>
                            <h2>Links</h2>
                        </div>
                        <div className='footer__links-container'>
                            {
                                footerLinksOne.map((linkItem, index) => {
                                    return(
                                        <Link href={linkItem.link} key={index} className='footer__link'>{linkItem.text}</Link>
                                    )
                                })
                            }
                        </div>
                    </Col>

                    {/* Links 2 */}
                    <Col
                        xs={6}
                        sm={6}
                        md={3}
                        lg={3}
                        xl={3}
                        className="footer__links-two"
                    >
                        <div className='footer__links-title'>
                            <h2>Company</h2>
                        </div>
                        <div className='footer__links-container'>
                            {
                                footerLinksTwo.map((linkItem, index) => {
                                    return(
                                        <Link href={linkItem.link} key={index} className='footer__link'>{linkItem.text}</Link>
                                    )
                                })
                            }
                        </div>
                    </Col>

                    {/* Social Media */}
                    <Col
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        xl={3}
                        className="footer__links-three"
                    >
                        <div className='footer__links-title'>
                            <h2>Social</h2>
                        </div>
                        <div className='footer__links-container-social'>
                            {
                                socialMediaLinks.map((linkItem, index) => {
                                    return(
                                        <Link className='footer__icon' href={linkItem.link} key={index}>
                                            <img src={linkItem.imageLinkWhite} />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>

                <Row className="footer__bottom">
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className="footer__extra"
                    >
                        <div className="footer__extra-copyright">
                            <p>©2024 Platemakrs LLC - All Rights Reserved.</p>
                        </div>
                        {/* <ul className="footer__extra-list">
                            {policyLinks.map((policy, index) => {
                                return(
                                    <li className="footer__extra-list-item" key={index}>
                                        <Link href={policy.link}>{policy.text}</Link>
                                    </li>
                                )
             
                            })}
                        </ul> */}
                    </Col>
                </Row>
            </Container>
        </Container>
    )

}


export default Footer;