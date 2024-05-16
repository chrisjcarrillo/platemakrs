import { useContext, useRef } from 'react';
import EditorForm from '../components/Editor/Steps/FirstStep/EditorForm/EditorForm';
import TemplateCanvas from '../components/Editor/Template/TemplateCanvas';
import { EditorContextType } from '../context/editorContext';
import { EditorContext } from '../context/editorContext';
import { EditorContainer } from '../components/Editor/EditorContainer/EditorContainer';
import { GetStaticProps } from "next";
import { StoreContext, StoreContextType, client } from '../context/storeContext';
import { Container, Col, Row } from 'react-bootstrap';
import { EditorPresetContainer } from '../components/Editor/EditorPresetContainer/EditorPresetContainer';
import { InterfaceContext, InterfaceContextType } from '../context/interfaceContext';
import { PlaceOrder } from '../components/Editor/BottomButton/PlaceOrder';
import { TemplateList } from '../components/Editor/TemplateList/TemplateList';
import { EditLogo } from '../components/Editor/EditLogo/EditLogo';
import { Button, Input } from 'antd';
import PlateComparison from "../components/PlateComparison/PlateComparison";
import { ImageAndText } from "../components/shared/ImageAndText/ImageAndText";
import MainSlider from "../components/MainSlider/MainSlider";
import fsPromises from 'fs/promises';
import path from 'path';
import { StickyEditor } from '../components/shared/StickyButtons/StickyEditor';
import EditorNew from './dev/editor-new';
import { ArrowLeftOutlined, ArrowRightOutlined, DownloadOutlined, EditOutlined, FullscreenOutlined } from '@ant-design/icons';
import { TopActions } from '../utils/actions/TopActions';
import { useRouter } from 'next/navigation';
import { isMobile } from 'react-device-detect';
import EditorMotoNew from './dev/editor-moto-new';

export default function Editor(props: any) {
    const canvasRef = useRef<any>();

    const actionSettings = {
        xs: 2,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 2
    }
    const headerSettings = {
        xs: 8,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8
    }

    const router = useRouter();

    const {
        currentEditorStep,
        setCurrentCustomTemplate,
        updateStep,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const {
        setEditLogoUi,
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        setAddon,
        extras,
        extrasPremade
    } = useContext(StoreContext) as StoreContextType

    setAddon?.(props?.addons)

    const stepDecision = (
        stepType: 'BACK' | 'NEXT'
    ) => {
        if (extrasPremade && stepType === "BACK") {
            let currentTemp = JSON.parse(localStorage.getItem('previousTemplate'))
            setCurrentCustomTemplate(template => ({
                ...template,
                ...currentTemp
            }))
        } else {
            // TODO: If extraPremade is true, set the previous localStorage(customTemplateId)
            const currentDecision = TopActions(stepType, currentEditorStep, isPreset)
            if (currentDecision?.updateStep) {
                updateStep?.(currentDecision?.step)
            }
            if (!currentDecision?.updateStep) {
                if (stepType === "BACK") {
                    if (currentEditorStep?.currentStep === 1) {
                        setCurrentCustomTemplate?.(undefined)
                    }
                }
                router.push(currentDecision?.page)
            }
        }
    }

    return (
        <>
            <EditLogo />
            <Container fluid className="app__container">
                {isMobile && (
                    <Row className="canvas__tools">
                        <Col {...actionSettings}>
                            {(!isPreset || isPreset && currentEditorStep?.currentStep === 1) && (
                                <div className='header__tools-left-back'>
                                    <Button
                                        size='small'
                                        className='header__tools-left-back-button'
                                        shape="circle"
                                        icon={<ArrowLeftOutlined rev={''} />}
                                        onClick={() =>
                                            stepDecision('BACK')
                                        }
                                    />
                                </div>
                            )}
                        </Col>
                        <Col {...headerSettings}>
                            <div className="editor__title">
                                <h2 className="editor__title-text">{  } Plate Preview</h2>
                            </div>
                        </Col>
                        <Col {...actionSettings}>
                            {(!isPreset || isPreset && currentEditorStep?.currentStep === 1) && (
                                <div className="header__tools-right-forward">
                                    <Button
                                        size='small'
                                        disabled={
                                            currentEditorStep?.currentStep === 1
                                                || currentEditorStep?.currentStep === 3
                                                || currentEditorStep?.currentStep === 2 ? true : false}
                                        className="header__tools-right-forward-button"
                                        shape="circle"
                                        icon={<ArrowRightOutlined rev={''} />}
                                        onClick={() => stepDecision('NEXT')}
                                    />
                                </div>
                            )}
                        </Col>
                    </Row>
                )}
                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={7}
                        lg={7}
                        xl={7}
                        className="canvas__plate-display"
                    >
                        {!isMobile && (
                            <Row className="canvas__tools">
                                <Col {...actionSettings}>
                                    {(!isPreset || isPreset && currentEditorStep?.currentStep === 1) && (
                                        <div className='header__tools-left-back'>
                                            <Button
                                                size='small'
                                                className='header__tools-left-back-button'
                                                shape="circle"
                                                icon={<ArrowLeftOutlined rev={''} />}
                                                onClick={() =>
                                                    stepDecision('BACK')
                                                }
                                            />
                                        </div>
                                    )}
                                </Col>
                                <Col {...headerSettings}>
                                    <div className="editor__title">
                                        <h2 className="editor__title-text">
                                        { currentCustomTemplate?.vehicleType === "Car" && 'License Plate Preview' }
                                        { currentCustomTemplate?.vehicleType === "Motorcycle" && 'Motorcycle Plate Preview' }
                                        </h2>
                                    </div>
                                </Col>
                                <Col {...actionSettings}>
                                    {(!isPreset || isPreset && currentEditorStep?.currentStep === 1) && (
                                        <div className="header__tools-right-forward">
                                            <Button
                                                size='small'
                                                disabled={
                                                    currentEditorStep?.currentStep === 1
                                                        || currentEditorStep?.currentStep === 3
                                                        || currentEditorStep?.currentStep === 2 ? true : false}
                                                className="header__tools-right-forward-button"
                                                shape="circle"
                                                icon={<ArrowRightOutlined rev={''} />}
                                                onClick={() => stepDecision('NEXT')}
                                            />
                                        </div>
                                    )}
                                </Col>
                            </Row>
                        )}
                        {currentCustomTemplate?.vehicleType === "Car" && <EditorNew canvasReference={canvasRef} /> }
                        { currentCustomTemplate?.vehicleType === "Motorcycle" && <EditorMotoNew canvasReference={canvasRef} /> }
                        <div className="canvas-bottom-section">
                            <Button className={`canvas-action-button`} onClick={() => setEditLogoUi(true)}>
                                Edit Logo<EditOutlined />
                            </Button>
                            <Button className={`canvas-action-button`} onClick={() => setEditLogoUi(true)}>
                                Download<DownloadOutlined />
                            </Button>
                        </div>
                    </Col>
                    <Col
                        xs={12} sm={12} md={5} lg={5} xl={5}
                        className="canvas__editor"
                    >
                        {currentEditorStep?.currentStep === 1 &&
                            <EditorForm />
                        }
                        {
                            currentEditorStep?.currentStep === 3 && isPreset && <EditorPresetContainer />
                        }
                        {currentEditorStep?.currentStep === 3 && !isPreset &&
                            <EditorContainer presetTemplate={isPreset} />
                        }
                        {currentEditorStep?.currentStep === 3 && <PlaceOrder canvasRef={canvasRef} presetTemplate={isPreset} />}
                    </Col>
                </Row>

            </Container>
            {
                extrasPremade && (
                    <Container fluid style={{
                        paddingBottom: extrasPremade ? '2rem' : '0rem'
                    }}>
                        <Row
                            className="designer-form__row-title"
                        >
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <h1

                                    className='designer-form__title'
                                >
                                    Pre-Made Templates
                                </h1>
                            </Col>
                        </Row>
                        <TemplateList
                            products={props?.productList?.products}
                            customTemplate={false}
                        />
                    </Container>
                )
            }
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
                    <StickyEditor />
                )
            }
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const currentProduct = await client.collection.fetchWithProducts('gid://shopify/Collection/456849490221', { productsFirst: 100 })
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