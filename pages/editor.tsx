import { useContext, useEffect, useRef, useState } from 'react';
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
import { Button, ConfigProvider, Flex, Input, Modal, Tooltip } from 'antd';
import PlateComparison from "../components/PlateComparison/PlateComparison";
import { ImageAndText } from "../components/shared/ImageAndText/ImageAndText";
import MainSlider from "../components/MainSlider/MainSlider";
import fsPromises from 'fs/promises';
import path from 'path';
import { StickyEditor } from '../components/shared/StickyButtons/StickyEditor';
import EditorNew from './dev/editor-new';
import { ArrowLeftOutlined, ArrowRightOutlined, CloseOutlined, DownloadOutlined, EditOutlined, FullscreenOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { TopActions } from '../utils/actions/TopActions';
import { useRouter } from 'next/navigation';
import { isMobile } from 'react-device-detect';
import EditorMotoNew from './dev/editor-moto-new';
import { showNewMessage } from "@intercom/messenger-js-sdk";

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

    const [upsellStep, setUpsellStep] = useState<number>(1);
    
    const {
        currentEditorStep,
        setCurrentCustomTemplate,
        updateStep,
        currentCustomTemplate,
        initialStore
    } = useContext(EditorContext) as EditorContextType;

    const {
        setLoading,
        upsellPopup, 
        setUpsellPopup,
        setEditLogoUi,
        isPreset,
        loading,
        pathPopup,
        setPathPopup,
        setDetailsPopup
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        setAddon,
        extras,
        extrasPremade,
        setAddonPlate,
        setExtrasPremade
    } = useContext(StoreContext) as StoreContextType;

    setAddon?.(props?.addons)

    function downloadURI(uri, name) {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const setImagePreview = async () => {
        try {
            const stage = canvasRef.current;
            const width = 3597;
            const height = 1800;

            stage?.setWidth(width);
            stage?.setHeight(height);
            stage?.setX(0)
            stage?.setY(0)
            stage?.setScaleX(0.75);
            stage?.setScaleY(0.75);
            stage?.draw();

            const base64Image = stage.toDataURL();
            return downloadURI(base64Image, 'stage.png');

        } catch (error) {
            console.log(error);
        }
    }

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
            {/* After you load the plate, show this */}
            <Modal
                classNames={{
                    header: '',
                    body: 'addon_modal',
                    footer: '',
                    mask: '',
                    wrapper: '',
                }}
                onCancel={() => {
                    sessionStorage.setItem('hasAdditionalPlate', 'false');
                    setUpsellPopup(false)
                }}
                open={upsellPopup}
                centered
                title={'Do you have a front and back plate?'}
                footer={null}
            >
                <div>
                        <p className='addon-description'>
                        Add the 2nd Plate for $100
                        </p>
                        
                        <Flex gap="small" justify='flex-end'>
                            <Button loading={loading} shape="round" block onClick={() => {
                                sessionStorage.setItem('hasAdditionalPlate', 'false');
                                setUpsellPopup(false)
                            }}>
                                No
                            </Button>
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Button: {
                                            colorPrimary: `linear-gradient(135deg, #6253E1, #04BEFE)`,
                                            colorPrimaryHover: `linear-gradient(135deg, #6253E1, #04BEFE)`,
                                            colorPrimaryActive: `linear-gradient(135deg, #6253E1, #04BEFE)`,
                                            lineWidth: 0,
                                        },
                                    },
                                }}
                            >
                                <Button
                                    shape='round'
                                    block
                                    type='primary'
                                    onClick={(e) => {
                                        sessionStorage.setItem('showAdditionalPlatePopup', 'false');
                                        setUpsellPopup(false)
                                        setAddonPlate(e)
                                    }}
                                >
                                    Yes
                                </Button>
                            </ConfigProvider>
                        </Flex>
                    </div>
            </Modal>

            <Modal
                className='path_modal'
                closable
                destroyOnClose
                open={pathPopup}
                footer={null}
                centered
                onCancel={() => {
                    setPathPopup(false)
                }}
            >
                {/* <LoadingSpinner> */}
                <Row className="path_title">
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <h2 className='path_title-text'>Select your path</h2>
                    </Col>
                </Row>
                <Row className={`path_actions g-2`}>
                    <Col
                                            style={{
                                                display: 'flex'
                                            }}
                        className={``}
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <a
                            // disabled={}
                            // loading={loading}
                            className={`path-customize-button`}
                            onClick={() => {
                                sessionStorage?.setItem('pathSelected', 'true'); 
                                setPathPopup(false);
                                initialStore();
                            }}
                        >
                            Continue Customizing
                        </a>
                        <Tooltip title={
                                        <div
                                            style={{
                                                textAlign: 'center'
                                            }}
                                        >
                                            <h6 style={{
                                                textTransform: 'Uppercase'
                                            }}>
                                            Continue Customizing
                                            </h6>
                                            <p style={{
                                                textAlign: 'center',
                                                fontSize: '0.8rem',
                                                marginBottom: 0
                                            }}>Continue your process in our editor! You can select the hassle free option at any time!</p>
                                        </div>
                                    }>
                                        <QuestionCircleFilled rev={''} style={{
                                            color: '#ffffff',
                                            fontSize: '1.5rem'
                                        }} />
                                    </Tooltip>
                    </Col>
                </Row>
                <Row className={`form_actions g-2`}>
                    <Col
                        className={``}
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                    <h2 className='form_title-text'>OR</h2>
                    </Col>
                </Row>
                <Row className={`form_actions g-2`}>
                    <Col
                        style={{
                            display: 'flex'
                        }}
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <a
                            className={`path-hassle-button`}
                            onClick={() =>  {
                                sessionStorage.setItem('pathSelected', 'true');
                                setPathPopup(false)
                                setLoading(true)
                                router.push(`/hassle-free`)
                                setLoading(false)
                            }}
                        >
                            Have our team<br></br>
                            design it for you
                        </a> <Tooltip title={
                                        <div
                                            style={{
                                                textAlign: 'center'
                                            }}
                                        >
                                            <h6 style={{
                                                textTransform: 'Uppercase'
                                            }}>
                                            Have questions? or are a little unsure about something? 
                                            </h6>
                                            <p style={{
                                                textAlign: 'center',
                                                fontSize: '0.8rem',
                                                marginBottom: 0
                                            }}>This is your best option. We will answer all of your questions and send you a proof design before proceeding with paying your final invoice. This gives you the confidence to know you are getting exactly what you want free of charge!</p>
                                        </div>
                                    }>
                                        <QuestionCircleFilled rev={''} style={{
                                            color: '#ffffff',
                                            fontSize: '1.5rem'
                                        }} />
                                    </Tooltip>
                    </Col>
                </Row>
                {/* </LoadingSpinner> */}
                {/* <Content */}
            </Modal>

            <EditLogo />
            <Container fluid className="app__container">
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
                                            {currentCustomTemplate?.vehicleType === "Car" && 'Car Plate Preview'}
                                            {currentCustomTemplate?.vehicleType === "Motorcycle" && 'Motorcycle Plate Preview'}
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
                        {currentCustomTemplate?.vehicleType === "Car" && <EditorNew canvasReference={canvasRef} />}
                        {currentCustomTemplate?.vehicleType === "Motorcycle" && <EditorMotoNew canvasReference={canvasRef} />}
                        {currentCustomTemplate?.mainLogo?.enabled && (
                            <div className="canvas-bottom-section">
                                <Button className={`canvas-action-button`} onClick={() => setEditLogoUi(true)}>
                                    Edit Logo<EditOutlined />
                                </Button>
                                {/* <Button onClick={() => setAddonPlate()}>
                                    Load the addon product
                                </Button> */}
                            </div>
                        )}
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
                            products={
                                props?.productList?.products
                            }
                            customTemplate={false}
                        />
                    </Container>
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

            {extras && (
                <PlateComparison
                    plates={props.extras.plateComparison}
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
        revalidate: 2
    }
}