import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

import { EditorContext } from '../../../context/editorContext';
import { EditorContextType } from '../../../context/editorContext';
import { useContext } from 'react';
import Image from 'next/image';
import { ProductSkeleton } from '../../shared/ProductSkeleton/ProductSkeleton';
import { ICustomPlateTemplate } from '../../../interfaces/customTemplate.interface';

export const TemplateList = (props: any) => {

    const {
        selectPresetTemplate
    } = useContext(EditorContext) as EditorContextType;

    const columnSettings = {
        xs: 6,
        sm: 6,
        md: 3,
        lg: 3,
        xl: 38
    }

    return (
        <Container
            className={`templatePreview__container`}
        >
            {/* <InstantSearch
                indexName="shopify_products" searchClient={searchClient}
            > */}
            {/* Select Templates */}

            <Row className={`templatePreview__title-container`}>
            </Row>

            <Row
                className={`templatePreview__row g-4`}
            >
                {/* <CustomHits {...props} /> */}
                {(props?.products?.map((template: any, index: number) => {
                    return (
                        <Col
                            key={index}
                            {...columnSettings}
                            className={`templatePreview__column animate__animated animate__fadeIn`}
                            onClick={
                                e => selectPresetTemplate?.(
                                    template.handle,
                                    template.variants
                                    // `gid://shopify/ProductVariant/${template?.objectID}`
                                )
                            }
                        >
                            <div className="templatePreivew__card">
                                <div className="templatePreview__image">
                                    <Image
                                        src={template?.images.length > 0 ? template?.images[0].src : ''}
                                        alt={''}
                                        width={0}
                                        height={0}
                                        quality="50"
                                        loading='lazy'
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ width: '100%', height: 'auto' }} // optional
                                    />
                                </div>
                                <div className="templatePreview__details">
                                    <h3 className='templatePreview__name'>
                                        {template?.title.replace(' - Template', '')}
                                    </h3>
                                    <h5 className='templatePreview__price'>
                                        <span className='templatePreview__from'>from</span>
                                        ${(parseInt(template?.variants[1].priceV2.amount).toFixed(2))}
                                    </h5>
                                </div>
                            </div>
                        </Col>
                    )

                }))}
            </Row>
            {/* </InstantSearch> */}

        </Container>

    )
}