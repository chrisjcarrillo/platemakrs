import { Button, Checkbox, Modal, Tooltip } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect, useRef, useState } from 'react';
import { EditorContext, EditorContextType } from '../../context/editorContext';
import { StoreContext, StoreContextType } from '../../context/storeContext';
import { handleActions } from '../Editor/EditorPresetContainer/actions/HandleActions';
import { Terms } from '../shared/Terms/Terms';

import { termsCols, priceDetailsCols, placeOrderCols } from '../../utils/helpers/columnHelpers';

export const PlaceOrderGiftCard = (props) => {

    const { selectedItem, quantityAmount } = props;

    const [terms, setTerms] = useState<boolean>(false);

    const {
        addVariantGiftCard,
        acceptTerms,
        setAcceptTerms
    } = useContext(StoreContext) as StoreContextType;
    
    const showTotal = () => {
        if (selectedItem !== null && quantityAmount > 0) {
            const amount = (parseInt(selectedItem?.priceV2?.amount) * quantityAmount).toFixed(2)
            return `${amount}`
        }
        return parseInt('0').toFixed(2)
    }

    const { presetTemplate } = props;

    return (
        <>

            {/* Details */}
            <Container className={`placeOrder__container`}>
                <Row className={`placeOrder__row-details g-2`}>
                    <Col
                        className={`placeOrder__details`}
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <h1
                            className={`placeOrder__price text-center`}
                        >
                            Total: ${showTotal()}
                        </h1>
                    </Col>
                </Row>
                <Row className={`placeOrder__row-order g-2`}>
                    <Col {...placeOrderCols} className={`placeOrder__action`}>
                        <a
                            className={`placeOrder__button`}
                            onClick={() => addVariantGiftCard(selectedItem, quantityAmount)}
                        >
                            Place Order
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}