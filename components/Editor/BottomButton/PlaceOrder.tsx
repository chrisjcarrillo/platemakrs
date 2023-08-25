import { Button } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../context/editorContext';
import { StoreContext, StoreContextType } from '../../../context/storeContext';

export const PlaceOrder = () => {
    
    const actionDetailsCols = {
        xs: 5,
        sm: 5,
        md: 5,
        lg: 5,
        xl: 5
    }

    const actionPlaceOrderCols = {
        xs: 7,
        sm: 7,
        md: 7,
        lg: 7,
        xl: 7
    }

    const {
        checkout,
        redirectCheckout
    } = useContext(StoreContext) as StoreContextType;

    const {
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    return (
        <Container className={`editorContainer__order-actions`}>
            <Row className={`editorContainer__order-row g-2`}>
                <Col
                    className={`editorContainer__order-details g-2`}
                    {...actionDetailsCols}
                >
                    <h1
                        className={`editorContainer__order-price`}
                    >
                        ${(parseInt(currentCustomTemplate?.selectedVariant?.price?.amount ? currentCustomTemplate?.selectedVariant?.price?.amount : 10).toFixed(2))}
                    </h1>
                </Col>
                <Col
                    {...actionPlaceOrderCols}
                    className={`editorContainer__order-action g-2`}
                >
                    <Button
                        className={`editorContainer__order-button g-2`}
                        onClick={() => redirectCheckout?.(currentCustomTemplate)}
                    >
                        Place Order
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}