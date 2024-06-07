import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import Link from 'next/link';
import { RightCircleFilled, RightCircleOutlined } from '@ant-design/icons';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import { useRouter } from "next/navigation";


type HeroBannerProps = {
    mainText: string,
    backgroundUrl: string,
    buttonText: string,
    buttonLink: string,
}

const HeroBanner = (
    { mainText, backgroundUrl, buttonText, buttonLink }: HeroBannerProps
) => {

    const router = useRouter();
    return (
        <Container
            id='heroc'
            className="hero__container"
            fluid
        >
            <div className="hero-img__wrapper">
                <Row className='hero__row'>
                    <Col
                        className="hero__column"
                        xs="12" sm="12" md="12" lg="12" xl="12"
                    >
                        <div
                            className='hero__container-text'
                        >

                            <h1 className="hero__title">
                                {mainText}
                            </h1>
                        </div>
                        <div
                            className='hero__container-button'
                        >
                            <Dropdown style={{
                                marginRight: '0.5rem'
                            }}>
                                <Dropdown.Toggle id="premadeDesigns" className='hero__button'>
                                    Pre-Made Designs
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link
                                        href={'/products'}
                                        key={1} 
                                        className="header__link animate__animated animate__fadeInRight animate__delay-0.5s">
                                            Car Templates
                                    </Link>
                                    <Link
                                        href={'/products/motorcycles'}
                                        key={2} 
                                        className="header__link animate__animated animate__fadeInRight animate__delay-0.5s">
                                            Motorcycle Templates
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown
                            style={{
                                marginLeft: '0.5rem'
                            }}
                            >
                                <Dropdown.Toggle id="buildYourPlate" className='hero__button'>
                                    Build Your Design
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Link
                                        key={1}
                                        href={'/products-custom'}
                                        className="header__link animate__animated animate__fadeInRight animate__delay-0.5s"
                                    >
                                            Car Templates
                                    </Link>
                                    <Link
                                        key={2}
                                        href={'/products/motorcycles/products-custom'}
                                        className="header__link animate__animated animate__fadeInRight animate__delay-0.5s"
                                    >
                                            Motorcycle Templates
                                    </Link>
                                    {/* /products/motorcycles/products-custom */}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </Col>
                </Row>
                <Image
                    priority
                    className="hero-img__overlay"
                    fill
                    // width={1920}
                    // height={1080}
                    alt="Background Plate Image"
                    src={backgroundUrl}
                />
            </div>
        </Container>
    )
}

export default HeroBanner;