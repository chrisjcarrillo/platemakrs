import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";
import Image from 'next/image';

type SliderImage = {
    imageUrl: string;
}

type SliderProps = {
    title: string,
    swipeText: string,
    swipeImage: string,
    image: string,
    plates: Array<SliderImage>
}

const MainSlider = (
    props: SliderProps
) => {


    const colSettings = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }

    return (
        <Container
            className="slider__container slider__images"
        >
            <Row
                className="slider__row-title"
            >
                <Col {...colSettings}>
                     <Image
                        className="it__image"
                        alt="How it works image"
                        fill
                        src={props.image} 
                    />
                </Col>
            </Row>
            <Row
                className="slider__row"
            >
                <Col className='slider__cars'>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        grabCursor={true}
                        loop={true}
                        observer={true}
                        modules={[
                            Pagination
                        ]}
                        key={props.plates.length}
                        className='slider__swiper'
                    >
                        {props.plates.map((plate, index) => {
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
        </Container>
    );
}

export default MainSlider;