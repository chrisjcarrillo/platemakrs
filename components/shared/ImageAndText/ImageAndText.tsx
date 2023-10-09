import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';


type ImageAndTextProps = {
    title: string,
    image: string
}


export const ImageAndText = (props: ImageAndTextProps) => {
    return(
        <Container
            className="it__container"
        >
            <Row
                className="it__container-title"
            >
                <Col
                    xs="12" sm="12" md="12" lg="12" xl="12"
                >
                    <h1
                        className='it__title'
                    >
                        {props.title}
                    </h1>
                </Col>
            </Row>
            <Row
                className="it__container-image"               
            >
                <Col
                 xs="12" sm="12" md="12" lg="12" xl="12"
                >
                    <Image
                        className="it__image"
                        alt="How it works image"
                        fill
                        src={props.image} 

                    />
                </Col>
            </Row>
        </Container>
    )
}