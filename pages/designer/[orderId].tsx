import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
    Checkbox,
    Button,
    Form,
    Input,
    message,
    Select,
    Upload,
    Result
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { StoreContext, StoreContextType, client } from '../../context/storeContext';
import { GetServerSideProps, GetStaticProps } from "next";
// Firebase
import { app, database, storage } from '../../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import fsPromises from 'fs/promises';
import path from 'path';
import { ImageAndText } from '../../components/shared/ImageAndText/ImageAndText';
import MainSlider from '../../components/MainSlider/MainSlider';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

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

const columnSettings = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
}

const termsCols = {
    xs: 6,
    sm: 6,
    md: 6,
    lg: 6,
    xl: 6
}

const priceDetailsCols = {
    xs: 6,
    sm: 6,
    md: 6,
    lg: 6,
    xl: 6
}

const placeOrderCols = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
}

const WorkWithADesigner = (props: any) => {

    console.log(props);

    const [terms, setTerms] = useState<boolean>(false);

    const {
        acceptTerms,
        setAcceptTerms,
        addVariantDesigner
    } = useContext(StoreContext) as StoreContextType;

    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    // Files 
    const [files, setFiles] = useState<Array<ContactAttachment>>([])
    const [licensePlate, setLicensePlate] = useState<ContactAttachment>({
        name: '',
        url: ''
    });

    // Form Details START
    const [form] = Form.useForm();
    const { Item } = Form;
    const { TextArea, Group } = Input;

    // Submit Form when submit button is clicked
    const onFinish = async (values: contactFormProps) => {
        setLoading(true)
        try {
            const res = await fetch("/api/sendgrid/designer/send-email-pre-purchase", {
                body: JSON.stringify({
                    toEmails: ['design@platemakrs.com'],
                    // design@platemakrs.com
                    email: props?.order?.email,
                    firstName: props?.order?.billing_address?.first_name,
                    lastName: props?.order?.billing_address?.last_name,
                    phoneNumber: props?.order?.billing_address?.phone,
                    message: values.summary,
                    state: props?.order?.billing_address?.province_code,
                    id: props?.order?.id,
                    orderId: props?.order?.name,
                    licensePlate: licensePlate ?? null,
                    attachments: files,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });
            await res.json();

            setLoading(false);
            setFormSubmitted(true);
            form.resetFields();
            messageApi.open({
                type: 'success',
                content: 'Your details were submitted successfully, we will be in contact with you shortly!',
                duration: 10,
            });

        } catch (error) {
            setLoading(false)
            messageApi.open({
                type: 'error',
                content: `${error}`,
                duration: 10,
            });
            return;
        }
    }

    const addFile = (file: string, url: string) => {
        setFiles((files) => [...files,
        {
            name: file,
            url: url
        }
        ])
    }

    const customUpload = async (type: string, { onError: onError, onSuccess, file }: any) => {
        const storageRef = ref(storage, `License Plate Uploads/${email}/${file.name}`);
        try {
            const upload = await uploadBytes(storageRef, file);
            const downloadUrl = await getDownloadURL(upload.ref)
            if (type === "details") addFile(file.name, downloadUrl);
            if (type === "licensePlate") {
                setLicensePlate({
                    ...licensePlate,
                    name: file.name,
                    url: downloadUrl
                })
            }
            onSuccess(null, upload);
            return upload;
        } catch (e) {
            onError(e);
        }
    }

    const formItemLayout = { labelCol: { span: 24 }, wrapperCol: { span: 24 } }

    return (
        <>
            {contextHolder}
            {formSubmitted && (
                <Result
                    status="success"
                    title="Thank you for Completing your details!"
                    subTitle={`Order: ${props?.order?.name}. Our Team Will reach out with your designs in 1-2 Business days!`}
                />
            )}
            {!formSubmitted && (
                <Container
                    className="designer-form__container"
                >
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h2 style={{
                                color: '#ffffff',
                                textAlign: 'center',
                            }}>Hey, {props?.order.customer?.first_name}!</h2>
                            <p style={{
                                color: '#ffffff',
                                textAlign: 'center',
                            }}>
                                {formSubmitted ? 'Thank you for Completing your form' : 'Please submit the following information!'}
                                <br></br>
                                Below give us some details of what your details are for your plate, and our designers will bring your idea to life.
                            </p>
                            <p style={{
                                color: '#ffffff',
                                textAlign: 'center',
                            }}>
                                For example:
                            </p>
                            <ul
                                style={{
                                    listStyle: 'circle',
                                    color: '#ffffff',
                                    display: 'block',
                                    margin: 'auto',
                                    width: isMobile ? '100%' : '50%',
                                    marginBottom: '1rem'
                                }}
                            >
                                <li>Pictures of your car</li>
                                <li>Pictures of your current license plate</li>
                                <li>Any logos, pictures of any design we have done to duplicte</li>
                                <li>Any detail pertaining to your design</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Row
                                className="designer-form__main"
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
                                            <Item

                                                required
                                                label="Summary"
                                                name="summary"
                                                className='contact-form__summary'
                                                rules={[{ required: true, message: 'Please input your summary!' }]}
                                            >
                                                <TextArea
                                                    disabled={formSubmitted ? true : false}
                                                    name="summary"
                                                    rows={4}
                                                />
                                            </Item>
                                        </Group>
                                        <Group
                                            className="contact-form__license-container"
                                        >
                                            <Item
                                                required
                                                label="Upload License Plate Picture"
                                                name="licensePlateUpload"
                                                rules={[{ required: false, message: 'Please upload at least one file!' }]}
                                            >
                                                <Upload
                                                    name="licensePlateUpload"
                                                    customRequest={(e) => customUpload('licensePlate', e)}
                                                    maxCount={1}
                                                >
                                                    <Button disabled={formSubmitted ? true : false} icon={<UploadOutlined rev={''} />}>Click to Upload</Button>
                                                </Upload>
                                            </Item>
                                        </Group>
                                        <Group
                                            className="contact-form__details-container"
                                        >
                                            <Item
                                                required
                                                rules={[{ required: false, message: 'Please upload at least one file!' }]}
                                                label="Detail Uploads"
                                                name="licensePlateUpload"
                                            >
                                                <Upload
                                                    name="licensePlateUpload"
                                                    listType="picture"
                                                    className="upload-list-inline"
                                                    customRequest={(e) => customUpload('details', e)}
                                                    maxCount={5}
                                                >
                                                    <Button disabled={formSubmitted ? true : false} icon={<UploadOutlined rev={''} />}>Upload</Button>
                                                </Upload>
                                            </Item>
                                        </Group>
                                    </Form>
                                </Col>
                            </Row>
                            <Container className="designer-form__order" fluid style={{
                                border: 'unset'
                            }}>
                                <Row className={`designer-form__order-row-order g-2`}>
                                    <Col {...placeOrderCols} className={`designer-form__action`}>
                                        <a
                                            className={`designer-form__order--button ${formSubmitted ? 'disabled' : ''}`}
                                            onClick={() => form.submit()}
                                        >
                                            Submit
                                        </a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    // Get Order from database?
    const getOrderData = await fetch(`https://www.platemakrs.com/api/v1/orders/${context?.params?.orderId}`, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': '71a74a2638e4f36d7b8d3cacef96db045d6158628e463fbd33bec118605091ec068547b4b05883a06e23b9588b883ab1028b8d95fd842e0815947d5d58bbaa3eaba33b47d48bc81e6df6f8f8cb18e0a68056fce6e4be4870d1b972298fddfcc7a5f1ed253177adbfc2c38ddaf6f6872ef87bc9064c3b61fae0ac6b4242f52f9c443a2b14f99647b931aec1a57926f4018771c3eaf51508b6fba59ee13efc4103'
        }
    });
    const orderResponse = await getOrderData.json();

    return {
        props: {
            order: orderResponse?.order
        },
    }
}

export default WorkWithADesigner;