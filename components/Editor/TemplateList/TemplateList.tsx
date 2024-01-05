import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';

import { EditorContext } from '../../../context/editorContext';
import { EditorContextType } from '../../../context/editorContext';
import { useContext } from 'react';
import Image from 'next/image';
import { ProductSkeleton } from '../../shared/ProductSkeleton/ProductSkeleton';
import { ICustomPlateTemplate } from '../../../interfaces/customTemplate.interface';
import { Badge } from 'antd';

export const TemplateList = (props: any) => {

    const {
        selectPresetTemplate
    } = useContext(EditorContext) as EditorContextType;

    const bigColumnSettings = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }
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
            {props?.customTemplate && (
                <Row className={`templatePreview__title-container`}>
                    <Col {...bigColumnSettings}>
                        <span className={`templatePreview__title-text`}>Want to create a custom design? <a className={`templatePreview__title-action`}>Contact us.</a>
                        </span>
                    </Col>
                    <Col {...bigColumnSettings} className={`templatePreview__title-divider`}>
                        <span className={`templatePreview__title-divider-text`}>OR</span>
                    </Col>
                    <Col {...bigColumnSettings} className={`templatePreview__title-select`}>
                        <span className={`templatePreview__title-select-text`}>Select a Template</span>
                    </Col>
                </Row>
            )}


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
                                () => selectPresetTemplate?.(
                                    template?.description ?? null,
                                    template?.title,
                                    template.handle,
                                    template.variants,
                                    props?.customTemplate
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
                                <div className="templatePreview__badge">
                                    {
                                        (template?.title?.includes('Miami') || template?.title?.includes('Dolphins') || template?.title?.includes('Panthers')) &&
                                            <Badge className="templatePreview__badge-details" count="All Teams Available" /> 

                                    }
                                                                        {
                                    (
                                        !template?.title?.includes('Miami') && !template?.title?.includes('Dolphins') && !template?.title?.includes('Panthers') &&
                                        !template?.title?.includes('Carbon') && !template?.title?.includes('Pinstripe') && !template?.title?.includes('Two Colors') && !template?.title?.includes('Trees')
                                        && !template?.title?.includes('line') && !template?.title?.includes('Autism')  && !template?.title?.includes('Joker')
                                        ) &&
                                            <Badge className="templatePreview__badge-details" count="Any Brand Available" /> 

                                    }

                                </div>
                                <div className="templatePreview__details">
                                    <h3 className='templatePreview__name'>
                                        { 
                                            (template?.title?.includes('- Template')) ? template?.title.replace(' - Template', '') :
                                                (template?.title?.includes('- Custom Template')) ? template?.title.replace(' - Custom Template', '') : null
                                        }
                                    </h3>
                                    <h5 className='templatePreview__price'>
                                        ${(parseInt(template?.variants[1].priceV2.amount).toFixed(2))} - ${(parseInt(template?.variants[0].priceV2.amount).toFixed(2))}
                                    </h5>
                                </div>
                            </div>
                        </Col>
                    )

                }))}
            </Row>
        </Container>

    )
}