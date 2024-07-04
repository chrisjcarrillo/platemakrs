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
            label: 'Turnaround Time',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    4-5 Business Days
                </p>
            )
        },
        {
            key: '2',
            label: 'What do you do with my registration sticker?',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    We have a unique method to save your registration sticker, we carefully remove it and place it on the back of your plate, which can be easily reapplied after your plate is shipped back to you! In the event your registration sticker is not salvageable, We are not responsible for the cost or damage of the sticker.
                </p>
            )
        },
        {
            key: '3',
            label: 'What if my registration sticker is printed on my plate?',
            children: (
                <p style={{ paddingLeft: 24 }}>
                        No worries, we paint around it.
                </p>
            )
        },
        {
            key: '4',
            label: 'Do I need to ship my plate?',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    Yes, you need to ship us your current plate! We don’t manufacture or make plates, we are simply painting on top of an existing plate. 
                </p>
            )
        },
        {
            key: '5',
            label: ' Can I do drop off and pick up?',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    Yes.
                </p>
            )
        },
        {
            key: '6',
            label: 'Can you do disable/handicap/veterans/police plates?',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    Yes, you would have to confirm the details you want us to keep on your current plate. (For Example: Medals, Text, etc)
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
            key: '8',
            label: 'How can I drive without my plate? // Can I drive without my plate?',
            children: (
                <p style={{ paddingLeft: 24 }}>
                    We assure to hit our turn around time so your not long without your plate, however our customers do get creative in the interim time…
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
                    <li>We have a <Link href={'/products/motorcycles'}>hassle free option</Link>, where we design the plate for you!</li>
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