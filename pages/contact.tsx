import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/FormGroup';
import {
    Button,
    Form,
    Input,
    message,
    Select,
    Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { app, database, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';

const dbInstance = collection(database, 'contacts');

interface contactFormProps {
    email: string,
    firstName: string,
    lastName: string
    phone: string,
    state: string,
    summary: string
}

interface ContactAttachment {
    name: string,
    url: string
}

interface referenceProps {
    ref: string
}

const Contact = () => {
    const [messageApi, contextHolder] = message.useMessage();

    // State
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [files, setFiles] = useState<Array<ContactAttachment>>([])
    const [licensePlate, setLicensePlate] = useState<ContactAttachment>({
        name: '',
        url: ''
    });
    const [disclaimer, setDisclaimer] = useState<boolean>(false);


    // Form Details START
    const [form] = Form.useForm();
    const { Item } = Form;
    const { TextArea, Group } = Input;

    const titleSettings = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }

    const formSettings = {
        xs: 12,
        sm: 12,
        md: 8,
        lg: 8,
        xl: 8
    }

    const infoSettings = {
        xs: 12,
        sm: 12,
        md: 4,
        lg: 4,
        xl: 4
    }

    // Submit Form when submit button is clicked
    const onFinish = async (values: contactFormProps) => {
        setLoading(true)
        try {
            const res = await fetch("/api/sendgrid/contact", {
                body: JSON.stringify({
                    toEmails: ['johnny@platemakrs.com', 'clay@platemakrs', 'chris@platemakrs.com', 'harvey@platemakrs.com'],
                    email: values.email,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phoneNumber: values.phone,
                    message: values.summary,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                setLoading(false)
                setFormSubmitted(false)
                console.log(error);
                return;
            }
            else {
                setLoading(false)
                setFormSubmitted(true)
                messageApi.open({
                    type: 'success',
                    content: 'Submitted Succesfully, we will be in contact with you shortly!',
                    duration: 10,
                });
                form.resetFields();
            }
        } catch (e) {
            setLoading(false)
            setFormSubmitted(false)
        } finally {
            setLoading(false)
        }
    }

    const formItemLayout = { labelCol: { span: 24 }, wrapperCol: { span: 24 } }

    return (
        <>
            {contextHolder}
            <Container
                className="contact-form__container"
            >
                {/* Main Title */}
                <Row
                    className="contact-form__row-title"
                >
                    <Col {...titleSettings}>
                        <h1

                            className='contact-form__title'
                        >
                            Contact
                        </h1>
                    </Col>
                </Row>
                {/* Main Title */}



                <Row
                    className="contact-form__row-main"
                >
                    <Col {...formSettings}>
                        {/*  */}
                        <div className='contact-form__row-info'>
                            <h3 className='contact-form__row-info-text'>
                                FOR GENERAL INQUIRIES OR QUESTIONS ABOUT YOUR ORDER <br></br>
                            </h3>
                        </div>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                            autoComplete="off"
                        >
                            <Group>
                                <Row>
                                    <Col className='contact-form__col'>
                                        <Item
                                            required
                                            label="First Name"
                                            name="firstName"
                                            rules={[{ required: true, message: 'Please input your First Name!' }]}
                                        >
                                            <Input
                                                name="firstName"
                                                size='large'
                                            />
                                        </Item>
                                    </Col>
                                    <Col className='contact-form__col'>
                                        <Item
                                            required
                                            label="Last Name"
                                            name="lastName"
                                            rules={[{ required: true, message: 'Please input your Last Name!' }]}
                                        >
                                            <Input size='large' name="lastName" />
                                        </Item>
                                    </Col>
                                </Row>
                            </Group>
                            <Group>
                                <Row>
                                    <Col className='contact-form__col'>
                                        <Item
                                            required
                                            label="Email"
                                            name="email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                                { required: true, message: 'Please input your email!' }
                                            ]}
                                        >
                                            <Input
                                                onChange={e => setEmail(e.target.value)}
                                                size='large'
                                                name="email"
                                            />
                                        </Item>
                                    </Col>
                                    <Col className='contact-form__col'>
                                        <Item
                                            required
                                            label="Phone"
                                            name="phone"
                                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                                        >
                                            <Input size="large" name="phone" />
                                        </Item>
                                    </Col>
                                </Row>
                            </Group>
                            <Group>
                                <Item
                                    required
                                    label="Message"
                                    name="summary"
                                    className='contact-form__summary'
                                    rules={[{ required: true, message: 'Please input your message!' }]}
                                >
                                    <TextArea
                                        name="summary"
                                        rows={4}
                                    />
                                </Item>
                            </Group>
                            <FormGroup>
                                <Item>
                                    <Button
                                        htmlType='submit'
                                        className='contact-form__submit main__cta'
                                    >
                                        Submit
                                    </Button>
                                </Item>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col {...infoSettings}>
                        <div className='contact-form__company'>
                            <div className="contact-form__company-title">
                                <h3 className="contact-form__company-title-text">Company Information</h3>
                            </div>
                            <div className='contact-form__company-info'>
                                <div className='contact-form__company-info-title'>
                                    <p className='contact-form__company-info-title-text'>
                                        Phone
                                    </p>
                                </div>
                                <div
                                    className='contact-form__company-info-link'    
                                >
                                    <a
                                        className='contact-form__company-info-link-text'
                                        href='tel:954-639-7331'
                                    >
                                        954-639-7331
                                    </a>
                                </div>
                            </div>
                            <div
                                className='contact-form__company-info'    
                            >
                                <div className='contact-form__company-info-title'>
                                    <p className='contact-form__company-info-title-text'>
                                        Address
                                    </p>
                                </div>
                                <div
                                    className='contact-form__company-info-link'    
                                >
                                    <a
                                        className='contact-form__company-info-link-text'
                                        href="https://www.google.com/maps/place/4023+NE+6th+Ave,+Oakland+Park,+FL+33334/data=!4m2!3m1!1s0x88d9022a46870a57:0xb46a309cf01ea943?sa=X&ved=2ahUKEwj13K72naqBAxWiRjABHem8CZoQ8gF6BAgSEAA&ved=2ahUKEwj13K72naqBAxWiRjABHem8CZoQ8gF6BAgaEAI"
                                    >
                                        4023 NE 6th Ave
                                        <br></br>Oakland Park, FL 33334
                                    </a>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>

                {/* INFORMATION START */}
                {/* INFORMATION END */}

            </Container>
        </>
    )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const query = ctx.query;
//     console.log(query);
//     return{
//         props: {
//             ref: 'test'
//         }   
//     }
// }

export default Contact;