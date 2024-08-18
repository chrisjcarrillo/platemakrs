import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Link from 'next/link';

export default function Faq(props: any) {
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Do you make plates?',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    Yes and No.
                    <br></br>
                    <br></br>
                    No, we don't manufacture or make state issued plates from scratch.<br></br>
                    We are simply painting on top of any plate you send us.
                    <br></br>
                    <br></br>
                    Yes, we offer a flat vanity plate option however we DO NOT put the state name at the top.<br></br>
                </p>
            )
        },
        {
            key: '2',
            label: 'Do I need to ship you a plate?',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    Yes, you need to ship us a plate so we can paint on top of it. 
                    Unless you pick the vanity option in which you understand we DO NOT put the state name at the top.
                </p>
            )
        },


        {
            key: '3',
            label: 'Turnaround Time',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    4-5 Business Days upon arrival at our facility
                </p>
            )
        },
        {
            key: '7',
            label: 'Can you do color match?',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    Yes, please provide us with the paint color code of your vehicle. (This is an additional cost)
                </p>
            )
        },


        {
            key: '9',
            label: 'Do you do motorcycle plates?',
            children: (
                <>
                    <p style={{ paddingLeft: 24 }}>
                    Yes!
                    </p>
                <ul>
                    <li> Premade templates <Link href={'/products/motorcycles'}>here</Link></li>
                    <li>Create your own design <Link href={'/products/motorcycles/products-custom'}>here</Link></li>
                </ul>
</>
            )
        },

        {
            key: '10',
            label: 'Can I get a mockup/proof before sending my plate?',
            children: (
                <>
                    <p style={{ paddingLeft: 24 }}>
                    Yes!
                    </p>
                <ul>
                    <li>We have a <Link href={'/hassle-free'}>hassle free option</Link>, where we design the plate for you!</li>
                    <li>This comes with a $50.00 deposit fee, that goes towards the final cost of your customization!</li>
                    <li><Link href={'/hassle-free'}>Click Here</Link></li>
                </ul>
</>
            )
        },
    ];

    return (
        <Container>
            <Row>
            <div className="refund-policy__title">
                    <h1                         style={{
                            color: '#ffffff'
                        }} className="refund-policy__title-text">Frequently Asked Questions</h1>
                </div>
            </Row>
            <Row>
                <Col>
                    <Collapse
                        style={{
                            color: '#ffffff'
                        }}
                        items={items} bordered={false} />;
                </Col>
            </Row>
        </Container>

    );
}