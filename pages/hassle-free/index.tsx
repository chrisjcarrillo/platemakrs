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
    Modal,
    InputNumber
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
import { Terms } from '../../components/shared/Terms/Terms';

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

    const [quantity, setQuantity] = useState<Number>(1);

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
        const currentAmount = quantity * 50;
        return (parseInt(currentAmount).toFixed(2));
    }

    return (
        <>
            <Modal
                title={'Terms and Conditions'}
                open={terms}
                onOk={() => setTerms(false)}
                onCancel={() => setTerms(false)}
            >
                <Terms />
            </Modal>
            {contextHolder}
            <Container fluid
                className="hassle_container"
            >
                {/* Top Image */}
                <Row className="hassle_container g-0">
                    {/* Product Title + Description and Button */}
                    <Col
                                            xs={{
                                                span: 12
                                            }}
                                            sm={{
                                                span: 12
                                            }}
                        md={{
                            span: 7
                        }}
                        lg={{

                            span: 7
                        }}
                        xl={{

                            span: 7
                        }}
                    >
                        <Image fill className={'hassle-img swiper-lazy'} src={'/images/hassle-free/top.png'} />
                    </Col>
                    <Col
                        className='hassle_container hassle-row-dark hassle-row-pricing'
                        xs={{
                            span: 12
                        }}
                        sm={{
                            span: 12
                        }}
                        md={{
                            span: 5
                        }}
                        lg={{
                            span: 5
                        }}
                        xl={{
                            span: 5
                        }}
                    >
                        {/* Group */}
                        <div className="hassle_card">
                            <p className="hassle-card-title">Deposit</p>
                            <span className="hassle-card-pricing">${showTotal()}</span>
                            <p className="hassle-card-title-quantity">Quantity</p>
                            <InputNumber
                                className="hassle_input"
                                addonBefore={
                                    <a className="hassle_add" onClick={() => {
                                        setQuantity(quantity + 1)
                                    }}>+</a>
                                }
                                addonAfter={
                                    <a className={`hassle_minus ${quantity === 1 ? 'hassle-actions-disabled' : ''}`}
                                    onClick={() => {
                                        setQuantity(quantity - 1)
                                    }}
                                    >-</a>
                                }
                                onChange={(e) => {
                                    setQuantity(e)
                                }}
                                value={quantity}
                                defaultValue={quantity}
                                min={1}
                            />
                            <div className="hassle_tc">
                                <Checkbox
                                    className='designer-form__terms'
                                    onChange={(e) => {
                                        setAcceptTerms(e.target.checked)
                                    }}>
                                    <a href={'#'} onClick={() => setTerms(true)}>Terms and Conditions</a>
                                </Checkbox>
                            </div>
                            
                            <a 
                                className={`hassle_button ${acceptTerms ? '' : 'hassle-disabled'}`}
                                onClick={() => onFinish()}
                            >CHECKOUT</a>
                        </div>
                    </Col>
                </Row>
                {/* Selector */}
            </Container>
            <Container
                className="hassle_container"
            >
                {/* How it works */}
                <Row
                    className="hassle_hiw_row"
                >
                    <Col
                        xs={{
                            span: 12
                        }}
                        sm={{
                            span: 12
                        }}
                        md={{
                            span: 6
                        }}
                        lg={{
                            span: 6
                        }}
                        xl={{
                            span: 6
                        }}
                    >
                                                <h1

className='designer-form__title'
>
How it works
</h1>
                        <Image
                            className="it__image--wwad"
                            alt="How it works image"
                            fill
                            src={props.extras.howItWorksDesigner.image}
                        />
                    </Col>
                    <Col
                        className='slider__cars'
                        xs={{
                            span: 12
                        }}
                        sm={{
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
                </Row>
                {/* Slider */}
                <Row className="hassle_container">
                    {/* Product Title + Description and Button */}
                    
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