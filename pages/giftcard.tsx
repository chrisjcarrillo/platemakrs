import { useState } from 'react';
import { GetStaticProps } from "next";
import { client } from '../context/storeContext';
import { Col, Container, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Image from 'next/image';
import { QuantityInput } from '../components/QuantityInput/QuantityInput';
import { PlaceOrderGiftCard } from '../components/PlaceOrderGiftCard/PlaceOrderGiftCard';

export default function GiftCard(props: any) {

    const [radioValue, setRadioValue] = useState(null);
    const [amount, setAmount] = useState<Number>(1)

    console.log(radioValue)
    // console.log(amount)

    return (
        <Container className="giftcard__main">
            <Row className="giftcard__row">
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="giftcard__col"
                >
                    <div className="giftcard__title">
                        <h1 className='giftcard__title-text'>Platemakrs Gift Card</h1>
                    </div>
                    <div className='giftcard__container'>
                        <Image
                            className="giftcard__logo"
                            alt="Platemakrs Logo"
                            height={30}
                            width={200}
                            src={'/images/platemakrs-gold.png'}
                        />
                    </div>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="giftcard__col"
                >
                    <div className="giftcard__amount-main">
                        <div className="giftcard__amount-main-title">
                            <h5 className="giftcard__amount-main-title-text">Amounts</h5>
                        </div>
                        <ToggleButtonGroup type='radio' name="test" className='giftcard__amount-main-container' value={radioValue} onChange={setRadioValue}>
                            {props.productList.variants.map((item: any, index: any) => {
                                return (
                                    <ToggleButton
                                        id={`amount-${item.id}`}
                                        key={item.id}
                                        value={item}
                                        className="giftcard__amount-container"
                                    >
                                        <span className="giftcard__amount-title">{item.title}</span>
                                    </ToggleButton>
                                )
                            })}
                        </ToggleButtonGroup>
                    </div>

                    <div className="giftcard__quantity-main">
                        <div className="giftcard__quantity-main-title">
                            <h5 className="giftcard__quantity-main-title-text">Quantity</h5>
                        </div>
                        <QuantityInput
                            disabled={radioValue}
                            defaultAmount={1}
                            amount={amount}
                            setAmount={ setAmount }
                        />
                    </div>
                </Col>
                <PlaceOrderGiftCard 
                    quantityAmount={amount}
                    selectedItem={radioValue}
                />
            </Row>
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currentProduct = await client.product.fetchByHandle('platemakrs-gift-card');
    const getAddon = await client.product.fetchByHandle('add-on-work-with-a-designer');
    return {
        props: {
            productList: JSON.parse(JSON.stringify(currentProduct)),
            addons: JSON.parse(JSON.stringify(getAddon))
        },
        revalidate: 10
    }
}