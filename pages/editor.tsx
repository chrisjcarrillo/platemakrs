import { useContext, useEffect } from 'react';
import EditorForm from '../components/Editor/Steps/FirstStep/EditorForm/EditorForm';
import TemplateCanvas from '../components/Editor/Template/TemplateCanvas';
import EditorProvider, { EditorContextType } from '../context/editorContext';
import { EditorContext } from '../context/editorContext';
import { EditorHeader } from '../components/Editor/EditorHeader/EditorHeader';
import { TemplatePreview } from '../components/Editor/TemplatePreview/TemplatePreview';
import { EditorContainer } from '../components/Editor/EditorContainer/EditorContainer';
import { Modal } from 'antd';
import { PreviewModal } from '../components/Editor/PreviewModal/PreviewModal';
import Head from "next/head";
import { LoadingSpinner } from '../components/shared/LoadingSpinner/LoadingSpinner';
import { Cart } from '../components/shared/Cart/Cart';
import { Decision } from '../components/Editor/Decision/Decision';
import { GetStaticProps } from "next";
import { StoreContext, StoreContextType, client } from '../context/storeContext';
import { Container } from 'react-bootstrap';
import { EditorPresetContainer } from '../components/Editor/EditorPresetContainer/EditorPresetContainer';
import { InterfaceContext, InterfaceContextType } from '../context/interfaceContext';
import { PlaceOrder } from '../components/Editor/BottomButton/PlaceOrder';


const MainHead = () => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
    )
}
export default function Editor(props: any) {
    const {
        updateStep,
        setCurrentTemplate,
        currentLicensePlate,
        currentCustomTemplate,
        currentTemplate,
        currentEditorStep,
    } = useContext(EditorContext) as EditorContextType;

    const {
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType;

    return (
        <>
            <LoadingSpinner>
                <Decision />
                <Cart />
                <MainHead />
                <PreviewModal
                    product={props?.product}
                />
                <EditorHeader
                />
                <TemplateCanvas />
                <Container fluid className="app__container">

                    {currentEditorStep?.currentStep === 1 &&
                        <EditorForm />
                    }
                    {currentEditorStep?.currentStep === 2 &&
                        <TemplatePreview
                            product={props?.product}
                        />
                    }
                    {
                        currentEditorStep?.currentStep === 3 && isPreset && <EditorPresetContainer />
                    }
                    {currentEditorStep?.currentStep === 3 && !isPreset &&
                        <EditorContainer />
                    }           
                </Container>
                {currentEditorStep?.currentStep === 3 && isPreset && <PlaceOrder />}
            </LoadingSpinner>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    // This is the first page
    const currentProduct = await client.product.fetchByHandle('custom-plate');
    return {
        props: {
            product: JSON.parse(JSON.stringify(currentProduct))
        }
    }
}