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
    Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { StoreContext, StoreContextType, client } from '../context/storeContext';
import { GetStaticProps } from "next";
// Firebase
import { app, database, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
            const createDocument = await addDoc(dbInstance, {
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                phone: values.phone,
                state: values.state,
                summary: values.summary
            })
            const res = await fetch("/api/sendgrid/workWithADesigner", {
                body: JSON.stringify({
                    toEmails: ['info@platemakrs.com', 'clay@platemakrs.com', 'chris@platemakrs.com', 'harvey@platemakrs.com', 'cadet@platemakrs.com'],
                    email: values.email,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    phoneNumber: values.phone,
                    message: values.summary,
                    state: values.state,
                    licensePlate: licensePlate ?? null,
                    attachments: files,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            addVariantDesigner(props?.product, createDocument?.id, values?.summary)

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
                form.resetFields();
                messageApi.open({
                    type: 'success',
                    content: 'Your details were submitted successfully, we will be in contact with you shortly!',
                    duration: 10,
                });
                return createDocument;
            }
        } catch (e) {
            setLoading(false)
            setFormSubmitted(false)
        } finally {
            setLoading(false)
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

    const showTotal = () => {
        return `$50.00`
    }

    return (
        <>
            {contextHolder}
            <Container
                className="designer-form__container"
            >
                <Row
                    className="designer-form__row-title"
                >
                    <Col {...columnSettings}>
                        <h1

                            className='designer-form__title'
                        >
                            Work With a Designer
                        </h1>
                        <p
                            className='designer-form__text'
                        >
                            This is a Design Fee to work with a in-house designer directly to give you the most custom experience we offer.
                            <br></br>
                            This price does not include the cost of the actual design on the plate, you will be billed separately after you approve your design.
                        </p>
                    </Col>
                </Row>
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

                                    <Col>
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
                                    <Col>
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

                            <Group
                                className="contact-form__state-container"
                            >
                                <Item
                                    required
                                    label="Select License Plate State"
                                    name="state"
                                    rules={[{ required: true, message: 'Please input your State!' }]}
                                >
                                    <Select
                                        style={{
                                            width: "100%",
                                        }}
                                        size="large"
                                        showSearch
                                        placeholder="Select a state"
                                        optionFilterProp='children'
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={
                                            [
                                                {
                                                    label: 'Recomended States',
                                                    options: [
                                                        {
                                                            label: 'Florida',
                                                            value: "FL"
                                                        },
                                                        {
                                                            label: 'Georgia',
                                                            value: "GA"
                                                        },
                                                        {
                                                            label: 'Texas',
                                                            value: "TX"
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: 'States',
                                                    options: [
                                                        {
                                                            "label": "Alabama",
                                                            "value": "AL"
                                                        },
                                                        {
                                                            "label": "Alaska",
                                                            "value": "AK"
                                                        },
                                                        {
                                                            "label": "American Samoa",
                                                            "value": "AS"
                                                        },
                                                        {
                                                            "label": "Arizona",
                                                            "value": "AZ"
                                                        },
                                                        {
                                                            "label": "Arkansas",
                                                            "value": "AR"
                                                        },
                                                        {
                                                            "label": "California",
                                                            "value": "CA"
                                                        },
                                                        {
                                                            "label": "Colorado",
                                                            "value": "CO"
                                                        },
                                                        {
                                                            "label": "Connecticut",
                                                            "value": "CT"
                                                        },
                                                        {
                                                            "label": "Delaware",
                                                            "value": "DE"
                                                        },
                                                        {
                                                            "label": "District Of Columbia",
                                                            "value": "DC"
                                                        },
                                                        {
                                                            "label": "Federated States Of Micronesia",
                                                            "value": "FM"
                                                        },
                                                        {
                                                            "label": "Guam",
                                                            "value": "GU"
                                                        },
                                                        {
                                                            "label": "Hawaii",
                                                            "value": "HI"
                                                        },
                                                        {
                                                            "label": "Idaho",
                                                            "value": "ID"
                                                        },
                                                        {
                                                            "label": "Illinois",
                                                            "value": "IL"
                                                        },
                                                        {
                                                            "label": "Indiana",
                                                            "value": "IN"
                                                        },
                                                        {
                                                            "label": "Iowa",
                                                            "value": "IA"
                                                        },
                                                        {
                                                            "label": "Kansas",
                                                            "value": "KS"
                                                        },
                                                        {
                                                            "label": "Kentucky",
                                                            "value": "KY"
                                                        },
                                                        {
                                                            "label": "Louisiana",
                                                            "value": "LA"
                                                        },
                                                        {
                                                            "label": "Maine",
                                                            "value": "ME"
                                                        },
                                                        {
                                                            "label": "Marshall Islands",
                                                            "value": "MH"
                                                        },
                                                        {
                                                            "label": "Maryland",
                                                            "value": "MD"
                                                        },
                                                        {
                                                            "label": "Massachusetts",
                                                            "value": "MA"
                                                        },
                                                        {
                                                            "label": "Michigan",
                                                            "value": "MI"
                                                        },
                                                        {
                                                            "label": "Minnesota",
                                                            "value": "MN"
                                                        },
                                                        {
                                                            "label": "Mississippi",
                                                            "value": "MS"
                                                        },
                                                        {
                                                            "label": "Missouri",
                                                            "value": "MO"
                                                        },
                                                        {
                                                            "label": "Montana",
                                                            "value": "MT"
                                                        },
                                                        {
                                                            "label": "Nebraska",
                                                            "value": "NE"
                                                        },
                                                        {
                                                            "label": "Nevada",
                                                            "value": "NV"
                                                        },
                                                        {
                                                            "label": "New Hampshire",
                                                            "value": "NH"
                                                        },
                                                        {
                                                            "label": "New Jersey",
                                                            "value": "NJ"
                                                        },
                                                        {
                                                            "label": "New Mexico",
                                                            "value": "NM"
                                                        },
                                                        {
                                                            "label": "New York",
                                                            "value": "NY"
                                                        },
                                                        {
                                                            "label": "North Carolina",
                                                            "value": "NC"
                                                        },
                                                        {
                                                            "label": "North Dakota",
                                                            "value": "ND"
                                                        },
                                                        {
                                                            "label": "Northern Mariana Islands",
                                                            "value": "MP"
                                                        },
                                                        {
                                                            "label": "Ohio",
                                                            "value": "OH"
                                                        },
                                                        {
                                                            "label": "Oklahoma",
                                                            "value": "OK"
                                                        },
                                                        {
                                                            "label": "Oregon",
                                                            "value": "OR"
                                                        },
                                                        {
                                                            "label": "Palau",
                                                            "value": "PW"
                                                        },
                                                        {
                                                            "label": "Pennsylvania",
                                                            "value": "PA"
                                                        },
                                                        {
                                                            "label": "Puerto Rico",
                                                            "value": "PR"
                                                        },
                                                        {
                                                            "label": "Rhode Island",
                                                            "value": "RI"
                                                        },
                                                        {
                                                            "label": "South Carolina",
                                                            "value": "SC"
                                                        },
                                                        {
                                                            "label": "South Dakota",
                                                            "value": "SD"
                                                        },
                                                        {
                                                            "label": "Tennessee",
                                                            "value": "TN"
                                                        },
                                                        {
                                                            "label": "Utah",
                                                            "value": "UT"
                                                        },
                                                        {
                                                            "label": "Vermont",
                                                            "value": "VT"
                                                        },
                                                        {
                                                            "label": "Virgin Islands",
                                                            "value": "VI"
                                                        },
                                                        {
                                                            "label": "Virginia",
                                                            "value": "VA"
                                                        },
                                                        {
                                                            "label": "Washington",
                                                            "value": "WA"
                                                        },
                                                        {
                                                            "label": "West Virginia",
                                                            "value": "WV"
                                                        },
                                                        {
                                                            "label": "Wisconsin",
                                                            "value": "WI"
                                                        },
                                                        {
                                                            "label": "Wyoming",
                                                            "value": "WY"
                                                        }
                                                    ]
                                                }
                                            ]}
                                    />
                                </Item>
                            </Group>
                            <Group>
                                <Item
                                    required
                                    label="Summary"
                                    name="summary"
                                    className='contact-form__summary'
                                    rules={[{ required: true, message: 'Please input your summary!' }]}
                                >
                                    <TextArea
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
                                        <Button icon={<UploadOutlined rev={''} />}>Click to Upload</Button>
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
                                        <Button icon={<UploadOutlined rev={''} />}>Upload</Button>
                                    </Upload>
                                </Item>
                            </Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container className="designer-form__order" fluid>
                <Row className={`designer-form__order-row-details g-2`}>
                    <Col
                        {...termsCols}
                        className={`designer-form__action`}
                    >
                        <Checkbox
                            className='designer-form__terms'
                            onChange={(e) => {
                                setAcceptTerms(e.target.checked)
                            }}>
                            <a href={'#'} onClick={() => setTerms(true)}>Terms and Conditions</a>
                        </Checkbox>
                    </Col>

                    <Col
                        className={`designer-form__details`}
                        {...priceDetailsCols}
                    >
                        <p
                            className={`designer-form__order--price`}
                        >
                            Total: {showTotal()}
                        </p>
                    </Col>
                </Row>
                <Row className={`designer-form__order-row-order g-2`}>
                    <Col {...placeOrderCols} className={`designer-form__action`}>
                        <a
                            className={`designer-form__order--button ${acceptTerms ? '' : 'disabled'}`}
                            onClick={() => form.submit()}
                        >
                            Place Order
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currentProduct = await client.product.fetchByHandle('add-on-work-with-a-designer');
    return {
        props: {
            product: JSON.parse(JSON.stringify(currentProduct)),
        },
        revalidate: 10
    }
}

export default WorkWithADesigner;