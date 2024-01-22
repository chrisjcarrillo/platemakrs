import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import Link from 'next/link';

type HeroBannerProps = {
    mainText: string,
    backgroundUrl: string,
    buttonText: string,
    buttonLink: string,
}

const HeroBanner = (
    { mainText, backgroundUrl, buttonText, buttonLink }: HeroBannerProps
) => {

    return(
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
                            { mainText }
                        </h1>
                    </div>
                    <div
                        className='hero__container-button'
                    >
                        <Link                     style={{
                        marginRight: '0.5rem'
                }} className="hero__button main__cta" href='/products-custom'>
                        Build your plate
                        </Link>
                        <Link                     style={{
                            marginLeft: '0.5rem'
                    }} className="hero__button main__cta" href='/products'>
                        Pre-Made Designs
                        </Link>
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