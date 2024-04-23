import Container from 'react-bootstrap/Container';

export default function RefundPolicy(props: any) {
    return (
        <Container>
            <div className="refund-policy">
                <div className="refund-policy__title">
                    <h1 className="refund-policy__title-text">Refund Policy</h1>
                </div>

                <div>
                <h3>All Sales Are Final</h3>
                <ul>
                    <li>At Platemakrs LLC, all sales are final. We do not offer cancellations or refunds on any transactions once completed. Please ensure that your selections are correct before finalizing your purchase.</li>
                </ul>
                </div>

                <div>
                    <h3>Exception for Manager-Approved Refunds</h3>
                    <ul>
                        <li>
                            In exceptional cases where a refund is deemed necessary by management, the following conditions apply:
                            <ul>
                                <li>
                                A refund may be approved at the discretion of the management based on the circumstances surrounding the transaction.
                                </li>
                                <li>
                                Approved refunds are subject to a 15% processing fee, which is calculated based on the total purchase amount. This fee compensates for the administrative costs incurred in processing refunds.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3>Refund Request Procedure</h3>
                    <ul>
                        <li>
                            To inquire about a possible refund, please follow these steps:
                            <ol>
                                <li>
                                Contact our customer support team using the contact details provided below.
                                </li>
                                <li>
                                Provide a comprehensive explanation of the issue and why you believe a refund is justified.
                                </li>
                                <li>
                                Include any relevant documents or proof to support your claim.
                                </li>
                                <li>
                                Submit your refund request within 30 days of the original purchase date.
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Contact Information</h3>
                    <ul>
                        <li>
                            If you have questions or need further information regarding our refund policy, please contact us at:
                            <ul>
                                <li>Email: support@platemakrs.com</li>
                                <li>Phone: 954-639-7331</li>
                                <li>Address: 4023 NE 6th Ave, Oakland Park, FL 33334</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Policy Modifications</h3>
                    <ul>
                        <li>
                            Platemakrs LLC reserves the right to modify this refund policy at any time. Changes will be communicated through our website and are effective immediately upon posting.
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Acknowledgment</h3>
                    <ul>
                        <li>
                            By completing your purchase with Platemakrs LLC, you are agreeing to this refund policy. Please review it thoroughly before you finalize your transaction. If you do not agree with our policy, please refrain from proceeding with your purchase.
                        </li>
                    </ul>
                </div>

                <div>
                    <p>This policy ensures that all parties understand their rights and obligations regarding refunds at Platemakrs LLC, promoting a transparent and fair transaction environment.</p>
                </div>

            </div>
        </Container>

    );
}