import { Button, Col, Container, Row} from 'react-bootstrap';
import { client } from '../../context/storeContext';
import Image from 'next/image';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../context/editorContext';

const Product = (props: any) => {
    const { product, query } = props;
    console.info(product)
    console.info(query)

    const leftProduct = {
        xs: 12,
        sm: 12,
        md: 5,
        lg: 5,
        xl: 5
    }

    const rightProduct = {
        xs: 12,
        sm: 12,
        md: 7,
        lg: 7,
        xl: 7
    }

    const {
        selectPresetTemplate
    } = useContext(EditorContext) as EditorContextType;



    return(
        <Container className="product__main">
            <Row className="product__row">
                <Col
                    className="product__col"
                {...leftProduct}
                >
                    <Image
                        className="product__image"
                        alt='Product Image'
                        src={product?.images[0]?.src}
                        width={0}
                        height={0}
                        quality="100"
                        loading='lazy'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ 
                            width: '100%',
                            height: 'auto',
                            borderRadius: '20px',

                        }} // optional
                    />
                </Col>
                <Col
                    className="product__col"
                    {...rightProduct}
                >
                    <h1 className="product__title">{product.title}</h1>
                    <h5 className="product__finish">{ query?.finish === 'matte' ? 
                        'Matte Finish' :
                            'Gloss Finish' }</h5>
                    <p className="product__description">{product.description}</p>
                    {/* <h3 className="product__price"></h3> */}
                    <Button className="product__button"
                        onClick={
                            () => selectPresetTemplate(
                                product?.description ?? null,
                                product?.title,
                                product.handle,
                                product.variants,
                                true,
                                product?.title.includes('Motorcycle') ?  'Motorcycle' : 'Car'
                            )
                        }
                    >
                        Edit Template - ${ query?.finish === 'matte' ? 
                        parseInt(product.variants[1].priceV2.amount).toFixed(2) :
                            parseInt(product.variants[0].priceV2.amount).toFixed(2)}
                    </Button>
                </Col>
            </Row>
        {/* Image to the left */}
        {/* Details + Button to the right */}
        {/* Title */}
        {/* Description */}
        </Container>
    )
}

export async function getServerSideProps(context) {
    const currentProduct = await client.product.fetchByHandle(context.params.slug);
    return {
        props: {
            product: JSON.parse(JSON.stringify(currentProduct)),
            query: context.query
        }
    }
}

export default Product;