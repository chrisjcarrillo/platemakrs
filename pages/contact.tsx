import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import {
    Form,
    Button,
    Input,
    message,
    notification,
    Select,
    Space,
    Tooltip,
    Typography,
    Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { app, database, storage } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const dbInstance = collection(database, 'contacts');

interface contactFormProps {
    email: string,
    firstName: string,
    lastName: string
    phone: string,
    state: string,
    summary: string
}

const Contact = () => {
    const [messageApi, contextHolder] = message.useMessage();

    // State
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    // Form Details START
    const [form] = Form.useForm();
    const { Item } = Form;
    const { TextArea, Group } = Input;
    const columnSettings = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Your details were submitted successfully, we will be in contact with you shortly!',
            duration: 10,
        });
    };

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
                summary: values.summary,
            })
            const res = await fetch("/api/sendgrid/contact", {
                body: JSON.stringify({
                    toEmails: 'johnny@platemakrs.com, clay@platemakrs.com, chris@platemakrs.com',
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
                success();
                form.resetFields();
                return createDocument;
            }
        } catch (e) {
            setLoading(false)
            setFormSubmitted(false)
        } finally {
            setLoading(false)
        }
    }

    const customUpload = async ({ onError, onSuccess, file }: any) => {
        const storageRef = ref(storage, `License Plate Uploads/${email}/${file.name}`);
        try {
            const upload = await uploadBytes(storageRef, file)
            console.info('Upload', upload)
            onSuccess(null, upload);
        } catch (e) {
            onError(e);
        }
    }

    const formItemLayout = { labelCol: { span: 24 }, wrapperCol: { span: 24 } }

    return (
        <>
            {contextHolder}
            <Container
                className="contact-form__container"
            >
                <Row
                    className="contact-form__row-title"
                >
                    <Col {...columnSettings}>
                        <h1

                            className='contact-form__title'
                        >
                            Custom Plate Form
                        </h1>
                    </Col>
                </Row>
                <Row
                    className="contact-form__row-main"
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
                            </Group>
                            <Group>
                                <Item
                                    required
                                    label="Phone"
                                    name="phone"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input size="large" name="phone" />
                                </Item>
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
                                    rules={[{ type: 'array', min: 1, message: 'Please upload at least one file!' }]}
                                >
                                    <span className="contact-form__license-container-info">
                                        Example: Image of your license plate
                                    </span>
                                    <Upload
                                        name="licensePlateUpload"
                                        customRequest={customUpload}
                                        maxCount={1}
                                    >
                                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                    </Upload>
                                </Item>
                            </Group>
                            <Group
                                className="contact-form__details-container"
                            >
                                <Item
                                    required
                                    rules={[{ min: 1, message: 'Please upload at least one file!' }]}
                                    label="Detail Uploads"
                                    name="licensePlateUpload"
                                >
                                    <span className="contact-form__summary-info">
                                        Example: Image of your logo, or design examples
                                    </span>
                                    <Upload
                                        name="licensePlateUpload"
                                        listType="picture"
                                        className="upload-list-inline"
                                        customRequest={customUpload}
                                        maxCount={5}
                                    >
                                        <Button icon={<UploadOutlined />}>Upload</Button>
                                    </Upload>
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
                </Row>
            </Container>
        </>
    )
}

export default Contact;