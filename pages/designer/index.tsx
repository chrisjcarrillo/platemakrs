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
import { StoreContext, StoreContextType, client } from '../../context/storeContext';
import { GetStaticProps } from "next";
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";

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
    const [thumbsSwiper, setThumbsSwiper] = useState();

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
            // const createDocument = await addDoc(dbInstance, {
            //     email: values.email,
            //     firstName: values.firstName,
            //     lastName: values.lastName,
            //     phone: values.phone,
            //     state: values.state,
            //     summary: values.summary,
            //     createdAt: Timestamp.fromMillis(Date.now())
            // })
            // const res = await fetch("/api/sendgrid/workWithADesigner", {
            //     body: JSON.stringify({
            //         toEmails: ['design@platemakrs.com'],
            //         email: values.email,
            //         firstName: values.firstName,
            //         lastName: values.lastName,
            //         phoneNumber: values.phone,
            //         message: values.summary,
            //         state: values.state,
            //         licensePlate: licensePlate ?? null,
            //         attachments: files,
            //     }),
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     method: "POST",
            // });

            addVariantDesigner(props?.product)

            // const { error } = await res.json();
            // if (error) {
            //     setLoading(false)
            //     setFormSubmitted(false)
            //     console.log(error);
            //     return;
            // }
            // else {
            //     setLoading(false)
            //     setFormSubmitted(true)
            //     form.resetFields();

            //     return createDocument;
            // }
            setLoading(false)
            messageApi.open({
                type: 'success',
                content: 'Added to Cart! - Work with a designer',
                duration: 10,
            });
        } catch (error) {
            setLoading(false)
            messageApi.open({
                type: 'error',
                content: `${error?.message}`,
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

    const showTotal = () => {
        return `$50.00`
    }

    return (
        <>
            {contextHolder}
            <Container
                className="designer-form__container"
            >
                <Row style={{
                    alignContent: 'center'
                }}>
                    {/* Product Title + Description and Button */}
                    <Col
                        xs={{
                            order: isMobile ? 1 : 2,
                            span: 12
                        }}
                        sm={{
                            order: isMobile ? 1 : 2,
                            span: 12
                        }}
                        md={{
                            order: 2,
                            span: 8
                        }}
                        lg={{
                            order: 2,
                            span: 6
                        }}
                        xl={{
                            order: 2,
                            span: 6
                        }}
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
                                    <br></br>
                                    <br></br>
                                    <span style={{
                                        color: 'red'
                                    }}>*</span> By Clicking place order, you understand we do not manufacture or make plates. We are just painting on top of an existing plate.
                                </p>
                            </Col>
                        </Row>
                        <Container className="designer-form__order">
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
                                        onClick={() => onFinish()}
                                    >
                                        Place Order
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col
                        className='slider__cars'
                        xs={{
                            order: isMobile ? 5 : 2,
                            span: 12
                        }}
                        sm={{
                            order: isMobile ? 5 : 2,
                            span: 12
                        }}
                        md={{
                            order: 2,
                            span: 4
                        }}
                        lg={{
                            order: 2,
                            span: 6
                        }}
                        xl={{
                            order: 2,
                            span: 6
                        }}
                    >
                        <Swiper
                            slidesPerView={1}
                            centeredSlides={true}
                            pagination={{ clickable: true }}
                            grabCursor={true}
                            loop={true}
                            observer={true}
                            modules={[
                                FreeMode,
                                Pagination,
                                Thumbs
                            ]}
                            key={props.extras.workWithADesignerSlider.images.length}
                            className='slider__swiper'
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null }}
                        >
                            {props.extras.workWithADesignerSlider.images.map((plate, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Image
                                            fill
                                            className={'slider_designer-img swiper-lazy'}
                                            alt={"image " + index}
                                            src={plate.imageUrl}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={20}
                            slidesPerView={isMobile ? 3 : 5}
                            freeMode={false}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="slider_designer-thumbs"
                            key={props.extras.workWithADesignerSlider.images.length}
                        >
                            {props?.extras?.workWithADesignerSlider?.images.map((plate, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Image
                                            fill
                                            className={'slider__img swiper-lazy'}
                                            alt={"image " + index}
                                            src={plate.imageUrl}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Col>
                    <Col
                        xs={{
                            order: isMobile ? 2 : 3,
                            span: 12
                        }}
                        sm={{
                            order: isMobile ? 2 : 3,
                            span: 12
                        }}
                        md={{
                            order: 3,
                            span: 12
                        }}
                        lg={{
                            order: 3,
                            span: 12
                        }}
                        xl={{
                            order: 3,
                            span: 12
                        }}
                    >
                        <h1

                            className='designer-form__title'
                        >
                            How it works
                        </h1>
                    </Col>
                    <Col
                                            xs={{
                                                order: isMobile ? 3 : 4,
                                                span: 12
                                            }}
                                            sm={{
                                                order: isMobile ? 3 : 4,
                                                span: 12
                                            }}
                                            md={{
                                                order: 4,
                                                span: 6
                                            }}
                                            lg={{
                                                order: 4,
                                                span: 6
                                            }}
                                            xl={{
                                                order: 4,
                                                span: 6
                                            }}
                    >
                        <Image
                            className="it__image--wwad"
                            alt="How it works image"
                            fill
                            src={props.extras.howItWorksDesigner.image}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currentProduct = await client.product.fetchByHandle('add-on-work-with-a-designer');
    const filePath = path.join(process.cwd(), 'settings.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());


    return {
        props: {
            product: JSON.parse(JSON.stringify(currentProduct)),
            extras: objectData
        },
        revalidate: 10
    }
}

export default WorkWithADesigner;