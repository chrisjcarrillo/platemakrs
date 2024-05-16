import { useContext, useRef } from 'react';
import EditorForm from '../components/Editor/Steps/FirstStep/EditorForm/EditorForm';
import TemplateCanvas from '../components/Editor/Template/TemplateCanvas';
import { EditorContextType } from '../context/editorContext';
import { EditorContext } from '../context/editorContext';
import { EditorContainer } from '../components/Editor/EditorContainer/EditorContainer';
import { GetStaticProps } from "next";
import { StoreContext, StoreContextType, client } from '../context/storeContext';
import { Container } from 'react-bootstrap';
import { EditorPresetContainer } from '../components/Editor/EditorPresetContainer/EditorPresetContainer';
import { InterfaceContext, InterfaceContextType } from '../context/interfaceContext';
import { PlaceOrder } from '../components/Editor/BottomButton/PlaceOrder';
import { TemplateList } from '../components/Editor/TemplateList/TemplateList';
import { EditLogo } from '../components/Editor/EditLogo/EditLogo';

import PlateComparison from "../components/PlateComparison/PlateComparison";
import { ImageAndText } from "../components/shared/ImageAndText/ImageAndText";
import MainSlider from "../components/MainSlider/MainSlider";

import fsPromises from 'fs/promises';
import path from 'path';
import { StickyEditor } from '../components/shared/StickyButtons/StickyEditor';

export default function Editor(props: any) {

    const canvasRef = useRef(null);

    const {
        currentEditorStep,
    } = useContext(EditorContext) as EditorContextType;

    const {
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        setAddon,
        extras
    } = useContext(StoreContext) as StoreContextType

    setAddon?.(props?.addons)

    return (
        <>
            <EditLogo />
            <TemplateCanvas
                vehicleType={'Motorcycle'}
                canvasRef={
                    canvasRef
                }
            />
            <Container fluid className="app__container">

                {currentEditorStep?.currentStep === 1 &&
                    <EditorForm />
                }
                {
                    currentEditorStep?.currentStep === 3 && isPreset && <EditorPresetContainer />
                }
                {currentEditorStep?.currentStep === 3 && !isPreset &&
                    <EditorContainer presetTemplate={isPreset} />
                }
            </Container>
            {currentEditorStep?.currentStep === 3 && <PlaceOrder canvasRef={canvasRef} presetTemplate={isPreset} />}
            {extras && (
                <PlateComparison
                    plates={props.extras.plateComparison}
                />
            )
            }

            {
                extras && (
                    <ImageAndText
                        title={props.extras.howItWorks.title}
                        image={props.extras.howItWorks.image}
                    />
                )
            }
            {
                extras && (
                    <MainSlider
                        title={props.extras.showcaseSlider.title}
                        swipeImage=""
                        image={props.extras.showcaseSlider.image}
                        swipeText={props.extras.showcaseSlider.swipeText}
                        plates={props.extras.showcaseSlider.images}

                    />
                )
            }
            {
                extras && (
                    <StickyEditor/>
                )
            }
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currentProduct = await client.collection.fetchWithProducts('gid://shopify/Collection/459770659117', { productsFirst: 100 })
    const getAddon = await client.product.fetchByHandle('add-on-work-with-a-designer');

    const filePath = path.join(process.cwd(), 'settings.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return {
        props: {
            productList: JSON.parse(JSON.stringify(currentProduct)),
            addons: JSON.parse(JSON.stringify(getAddon)),
            extras: objectData
        },
        revalidate: 10
    }
}