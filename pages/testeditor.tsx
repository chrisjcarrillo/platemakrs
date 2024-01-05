import { useContext, useRef } from 'react';
import EditorForm from '../components/Editor/Steps/FirstStep/EditorForm/EditorForm';
import TemplateCanvas from '../components/Editor/Template/TemplateCanvas';
import { EditorContextType } from '../context/editorContext';
import { EditorContext } from '../context/editorContext';
import { EditorContainer } from '../components/Editor/EditorContainer/EditorContainer';
import Head from "next/head";
import { LoadingSpinner } from '../components/shared/LoadingSpinner/LoadingSpinner';
import { Decision } from '../components/Editor/Decision/Decision';
import { GetStaticProps } from "next";
import { StoreContext, StoreContextType, client } from '../context/storeContext';
import { Col, Container, Row } from 'react-bootstrap';
import { EditorPresetContainer } from '../components/Editor/EditorPresetContainer/EditorPresetContainer';
import { InterfaceContext, InterfaceContextType } from '../context/interfaceContext';
import { PlaceOrder } from '../components/Editor/BottomButton/PlaceOrder';
import { TemplateList } from '../components/Editor/TemplateList/TemplateList';
import TemplateTest from '../components/Editor/TemplateTest/TemplateTest';

export default function Editor(props: any) {

    const {
        currentEditorStep,
    } = useContext(EditorContext) as EditorContextType;

    const {
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        setAddon
    } = useContext(StoreContext) as StoreContextType

    setAddon?.(props?.addons)

    const plateContainerReference = useRef(null);

    return (
        <>
            <Container>
                <Row>
                    <Col
                        ref={plateContainerReference}
                        xs={12}
                        sm={12}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        <TemplateTest
                            reference={plateContainerReference}
                        />
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={4}
                        lg={4}
                        xl={4}
                    >
                        {currentEditorStep?.currentStep === 1 &&
                            <EditorForm />
                        }
                        {currentEditorStep?.currentStep === 2 &&
                            <TemplateList
                                products={props?.productList?.products}
                                customTemplate={true}
                            />
                        }
                        {
                            currentEditorStep?.currentStep === 3 && isPreset && <EditorPresetContainer />
                        }
                        {currentEditorStep?.currentStep === 3 && !isPreset &&
                            <EditorContainer presetTemplate={isPreset}  />
                        }
                    </Col>
                </Row>
            </Container>
            {/* <Container fluid className="app__container">

                    {currentEditorStep?.currentStep === 1 &&
                        <EditorForm />
                    }
                    {currentEditorStep?.currentStep === 2 &&
                        <TemplateList
                            products={props?.productList?.products}
                            customTemplate={true}
                        />
                    }
                    {
                        currentEditorStep?.currentStep === 3 && isPreset && <EditorPresetContainer />
                    }
                    {currentEditorStep?.currentStep === 3 && !isPreset &&
                        <EditorContainer presetTemplate={isPreset}  />
                    }
                </Container> */}
            {currentEditorStep?.currentStep === 3 && <PlaceOrder presetTemplate={isPreset} />}
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currentProduct = await client.collection.fetchWithProducts('gid://shopify/Collection/459770659117', { productsFirst: 100 })
    const getAddon = await client.product.fetchByHandle('add-on-work-with-a-designer');

    return {
        props: {
            productList: JSON.parse(JSON.stringify(currentProduct)),
            addons: JSON.parse(JSON.stringify(getAddon))
        },
        revalidate: 10
    }
}