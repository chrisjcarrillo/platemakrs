import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';

type PlateImage = {
    imageUrl: string,
    imageType: string
}
type PlateComparsion = {
    plates: Array<PlateImage>;
}

const PlateComparison = (
    props: PlateComparsion
) => {

    const { plates } = props;

    return (
        <Container
            className="plates__container"
        >
            <Row
                className='plates__title-container'
            >
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h1 className='plates__title'>Platemakrs Effect</h1>
                </Col>
            </Row>
            <Row
                className='plates__image-container'
            >
                {plates.map((plate, index) => {
                    return (
                        <Col
                            className='plates__image-container'
                            key={index}
                            xs="6" 
                            sm="6" 
                            md="6" 
                            lg="6" 
                            xl="6"
                        >
                            <Image
                                className='plates__image'
                                width={450}
                                height={215}
                                alt={plate.imageType}
                                src={plate.imageUrl}
                            />
                            <h4
                                className='plates__image-type'
                            >{plate.imageType}</h4>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}
export default PlateComparison;