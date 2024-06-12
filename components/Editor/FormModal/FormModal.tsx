import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
    Checkbox,
    Button,
    Form,
    Input,
    Modal,
    message,
    Select,
    Upload
} from 'antd';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { StoreContext, StoreContextType, client } from '../../../context/storeContext';
import { InterfaceContext, InterfaceContextType } from '../../../context/interfaceContext';
import { EditorContext, EditorContextType } from '../../../context/editorContext';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

interface formProps {
    email: string,
    firstName: string,
    lastName: string
    phone: string,
}

export const FormModal = () => {

    const columnSettings = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }

    const [terms, setTerms] = useState<boolean>(false);

    const {
        updateCheckoutWithData,
        updateCheckoutWithEmail
    } = useContext(StoreContext) as StoreContextType;

    const {
        currentCustomTemplate,
        updateStep,
        initialStore
    } = useContext(EditorContext) as EditorContextType;

    const {
        detailsPopup,
        setDetailsPopup,
        setPreset,
        setUpsellPopup,
    } = useContext(InterfaceContext) as InterfaceContextType;

    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [howItWorksModal, setHowItWorksModal] = useState<boolean>(false);

    // Form Details START
    const [form] = Form.useForm();
    const { Item } = Form;
    const { TextArea, Group } = Input;

    // Submit Form when submit button is clicked
    const onFinish = async (values: formProps) => {
        setLoading(true)
        try {

            const updateCheckout =updateCheckoutWithData({
                firstName: values.firstName,
                lastName: values.lastName,
                phone: values.phone,
                province: sessionStorage.getItem('state') || 'FL',
                city: sessionStorage.getItem('city') || 'MIAMI',
                country: sessionStorage.getItem('country') || 'US',
                address1: 'Your Address',
                zip: '33334',
                company: null
            });

            const updateEmail = updateCheckoutWithEmail(values.email);

            updateCheckout;
            updateEmail;

            setDetailsPopup(false);

            setFormSubmitted(true);
            form.resetFields();

            localStorage.setItem('detailsFilled', "true");

            initialStore();

        } catch (e) {
            messageApi.open({
                type: 'error',
                content: `${e}`,
                duration: 10,
            });
            setDetailsPopup(false);
            setLoading(false)
            setFormSubmitted(false)
        } finally {
            messageApi.open({
                type: 'success',
                content: 'Your details were submitted successfully!',
                duration: 10,
            });
        }
    }

    const formItemLayout = { labelCol: { span: 24 }, wrapperCol: { span: 24 } }


    return (
        <>
            {contextHolder}
            <Modal
                centered
                className='form_modal'
                closable
                destroyOnClose
                closeIcon={<CloseOutlined style={{
                    color: '#ffffff'
                }} />}
                open={howItWorksModal}
                footer={null}
                onCancel={() => setHowItWorksModal(false)}
            >
                <Image                         
                    // className="it__image"
                    alt="How it works image"
                    width={isMobile ? 350 : 450}
                    height={isMobile ?  300 : 400}
                    // fill 
                    src={'/images/how-it-works/hiw-home.png'} 
                />
            </Modal>
            <Modal
                className='form_modal'
                closable
                destroyOnClose
                closeIcon={<CloseOutlined style={{
                    color: '#ffffff'
                }} />}
                open={detailsPopup}
                footer={null}
                centered
                onCancel={() => {
                    form.resetFields();
                    setDetailsPopup(false)
                }}
            >
                {/* <LoadingSpinner> */}
                <Row className="form_title">
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <h2 className='form_title-text'>Enter your information, to continue customizing!</h2>
                    </Col>
                </Row>
                <Row
                    className="form_container"
                >
                    <Col {...columnSettings}>
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
                                    <Col>
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
                                    <Col>
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
                                    <Col
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
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
                                </Row>
                            </Group>

                            <Group>
                                <Row>
                                    <Col
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        lg={12}
                                        xl={12}
                                    >
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
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <p style={{
                        color: '#ffffff',
                        textAlign: 'center'
                    }}>
                        <span style={{
                            color: 'red'
                        }}>*</span>By Clicking continue, you understand we do not manufacture or make plates. We are just painting on top of an existing plate. <a href={'#'} onClick={() => setHowItWorksModal(true)}>How it Works</a>
                    </p>
                </Row>
                <Row className={`form_actions g-2`}>
                    <Col
                        className={``}
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <a
                            // disabled={}
                            // loading={loading}
                            className={`form-button ${!form.getFieldValue('email') ? !form.getFieldValue('email') : ''}`}
                            onClick={() => form.submit()}
                        >
                            Continue
                        </a>
                    </Col>
                </Row>
                {/* </LoadingSpinner> */}
                {/* <Content */}
            </Modal>
        </>
    )
}