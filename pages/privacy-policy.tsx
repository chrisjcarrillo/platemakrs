import Container from 'react-bootstrap/Container';

export default function RefundPolicy(props: any) {
    return (
        <Container>
            <div className="refund-policy">
                <div className="refund-policy__title">
                    <h1 className="refund-policy__title-text">Privacy Policy</h1>
                </div>

                <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.</p>

                <h2>Information We Collect</h2>
                <h3>Personal Data</h3>
                <p>We collect personal data that you voluntarily provide to us when you register on the website, make a purchase, or contact us. This may include:</p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Billing and shipping address</li>
                    <li>Payment information</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <p>When you visit our website, we may collect certain information automatically, including your IP address, browser type, operating system, and browsing behavior.</p>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect in the following ways:</p>
                <ul>
                    <li>To process and manage your orders</li>
                    <li>To communicate with you, including sending order confirmations, updates, and marketing messages</li>
                    <li>To improve our website and services</li>
                    <li>To prevent fraudulent transactions and monitor against theft</li>
                </ul>

                <h2>Text Messaging and Phone Calls</h2>
                <p>By providing your phone number, you agree to receive text messages and phone calls from us regarding your orders, updates, and promotional offers. You can opt out of receiving these communications at any time by contacting us at [Your Contact Information]. Standard messaging and data rates may apply.</p>

                <h2>Sharing Your Information</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:</p>
                <ul>
                    <li>To third-party service providers who assist us in operating our website and conducting our business</li>
                    <li>To comply with legal obligations, such as responding to a subpoena or court order</li>
                    <li>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner</li>
                </ul>

                <h2>Data Security</h2>
                <p>We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>

                <h2>Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at [Your Contact Information].</p>

                <h2>Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

            </div>
        </Container>

    );
}