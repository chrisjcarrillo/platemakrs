import React, { useEffect, useRef, useState, useContext } from 'react';
import Konva from 'konva';
import { Stage, Layer, Text, Rect, Image, Group } from 'react-konva';
import useImage from "use-image";
import { EditorContext, EditorContextType } from '../../context/editorContext';
import { Col, Container, Row } from 'react-bootstrap';
import EditorForm from '../../components/Editor/Steps/FirstStep/EditorForm/EditorForm';
import { EditorPresetContainer } from '../../components/Editor/EditorPresetContainer/EditorPresetContainer';
import { EditorContainer } from '../../components/Editor/EditorContainer/EditorContainer';
import { InterfaceContext, InterfaceContextType } from '../../context/interfaceContext';
import PlateBackground from '../../components/LicensePlate/CarPlate/components/PlateBackground/PlateBackground';
import PlateLogoBackground from '../../components/LicensePlate/CarPlate/components/PlateLogoBackground/PlateLogoBackground';
import PlateExtraLogo from '../../components/LicensePlate/CarPlate/components/PlateExtralogo/PlateExtralogo';
import PlateDetailLogo from '../../components/LicensePlate/CarPlate/components/PlateDetailLogo/PlateDetailLogo';
import PlateLogoBottom from '../../components/LicensePlate/CarPlate/components/PlateLogoBottom/PlateLogoBottom';
import PlateLogo from '../../components/LicensePlate/CarPlate/components/PlateLogo/PlateLogo';
import { isMobile } from 'react-device-detect';
import * as ReactDOMServer from 'react-dom/server';
import { topStateSvg } from '../../utils/helpers/topStateSvg';
import FontFaceObserver from 'fontfaceobserver';
import { StateSvg } from '../../components/shared/StateSvg/StateSvg';
import { adjustFontSize, adjustTopTextHeight, adjustTopTextWidth, adjustTopTextX, adjustTopTextY } from '../../utils/helpers/ui/moto/topText/topText';

// TODO - Car
// [✅] Add Glow to Top Text
// [✅] Add Glow to Bottom Text
// [✅] Add Stroke to Top Text
// [✅] Add Stroke top Bottom Text
// [✅] Add Stroke To license Plate
// [✅] Add Background
// [✅] --- Add SVG's
// [✅] Add Pinstripe
// [✅] Add Middle Logo
// [✅] --- Add Glow to Middle Logo
// [] --- Add New Logo Sizing
// [] Add Bottom Logo
// [] --- Add Glow to Bottom Logo
// [] Add Logo Detail Logo #1
// [] --- Add Glow to Detail Logo #1
// [] Add Logo Detail Logo #2
// [] --- Add Glow to Detail Logo #2
// [] Add Patterns
// [] Add SVG's to Top State
// [] Fix the - Issue

const EditorMotoNew = (props: any) => {

    const initialState = "YOUR STATE";
    const initialLicensePlate = "SAM PLE";

    // Reference
    const textRef = useRef<any>();
    const plateRef = useRef<any>();

    // Internal State
    const [isLoaded, setIsLoaded] = useState(false);

    const {
        currentLicensePlate,
        currentCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const {
        editLogoUi,
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        canvasReference
    } = props;

    const plateWidth = 2142;
    const plateHeight = 1200;


    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            const font = new FontFaceObserver('License Plate USA');

            try {
                await font.load();
                setFontsLoaded(true);
            } catch (e) {
                console.error('Font failed to load', e);
            }
        };

        loadFonts();
    }, []);

    const fixTextPosition = () => {
        if (currentLicensePlate?.state === "Florida") {
            return plateHeight * 0.58 - plateHeight * 0.025
        }
        return plateHeight * 0.55 - plateHeight * 0.085
    }

    useEffect(() => {
        setIsLoaded(true);
        const stage = canvasReference?.current;
        const mainText = textRef?.current;

        stage?.setWidth(window.innerWidth);
        stage?.setHeight(window.innerHeight);
        // stage?.scaleX(isMobile ? 1 / 6.5 : 1 / 3);
        // stage?.scaleY(isMobile ? 1 / 6.5 : 1 / 3);
        stage?.draw();

        // mainText?.clearCache();
        // mainText?.fontSize(plateHeight * 0.35)
        // mainText?.fontFamily("'License Plate USA'")
        // mainText?.y(plateHeight * 0.55 - plateHeight * 0.085);

        mainText?.width(plateWidth * 0.875);
        mainText?.setAttr('fontSize', plateHeight * 0.35)
        mainText?.x(plateWidth * 0.14 / 2);
        mainText?.y(fixTextPosition())
        mainText?.zIndex(20);
        // mainText?.wrap('none')
        // mainText.setAttrs({
        //     fontSize: plateHeight * 0.35,
        //     fontFamily: "'License Plate USA'",
        //     x: plateWidth * 0.1 / 2,
        //     width: plateWidth * 0.875,
        //     align: 'center'
        // })
        // mainText?.align(currentLicensePlate?.platePosition ?
        //     currentLicensePlate?.platePosition :
        //     currentCustomTemplate?.startPlatePosition ?
        //         currentCustomTemplate?.startPlatePosition : 'center');
        // // mainText?.verticalAlign('middle')
        // mainText?.text(currentLicensePlate?.plateNumber ?
        //     currentLicensePlate?.plateNumber :
        //     currentCustomTemplate?.startPlateText ? currentCustomTemplate?.startPlateText : initialLicensePlate);
        mainText?.draw();
        if(stage?.getStage() && mainText.isVisible()){
            setIsLoaded(false);
        }

    }, []);

    const [holesImage] = useImage(
        currentCustomTemplate?.backgroundSettings?.color === "#ffffff" ?
            '../../images/resources/holes/holes-black-moto.png' : '../../images/resources/holes/holes-white-moto.png', 'anonymous'
    );

    const convertHoles = () => {
        return <Image zIndex={4} x={0} y={0} width={plateWidth} height={plateHeight} image={holesImage} />;
    };

    const svgString = encodeURIComponent(
        ReactDOMServer.renderToStaticMarkup(<StateSvg
            svg={topStateSvg.find(state => state.stateId === currentLicensePlate?.state)}
            color={`${currentCustomTemplate?.state?.color ?? '#ffffff'}`}
            textShadow={`${currentCustomTemplate?.state?.glow?.enabled ? `${currentCustomTemplate?.state.glow.color ?? '#000000'} 0px 0px 5px, ${currentCustomTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px` : ``}`}
            textStrokeColor={`${currentCustomTemplate?.state?.stroke?.enabled ? `${currentCustomTemplate?.state?.stroke.color ?? '#000000'}` : `#000000`}`}
            textStrokeWidth={`${currentCustomTemplate?.state?.stroke?.enabled ? '1px' : ''}`}
            filter={`${currentCustomTemplate?.state?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`}
            width={plateWidth * 0.745}
            height={plateHeight * 0.35}
        />)
    );

    const [stateImage] = useImage(
        `data:image/svg+xml,${svgString}`, 'anonymous'
    );

    const topText = (
        (topStateSvg.find(state => state.stateId === currentLicensePlate?.state)) ? (
            <Image
                zIndex={11}
                width={adjustTopTextWidth(currentLicensePlate?.state)}
                height={adjustTopTextHeight(currentLicensePlate?.state)}
                // width={plateWidth / stateImage?.width * 0.5 }
                // height={plateHeight / stateImage?.height * 0.205}
                image={stateImage}
                x={adjustTopTextX(currentLicensePlate?.state)}
                y={adjustTopTextY(currentLicensePlate?.state)}
            />) : (
            <Text
                zIndex={11}
                // Position && Width && Wrap of State
                x={adjustTopTextX(currentLicensePlate?.state)}
                y={adjustTopTextY(currentLicensePlate?.state)}
                width={adjustTopTextWidth(currentLicensePlate?.state)}
                align="center"
                wrap='none'

                // Text
                text={currentLicensePlate?.state.toUpperCase() ?? initialState.toUpperCase()}

                // Font Start
                fontStyle='bold'
                fontSize={adjustFontSize(currentLicensePlate?.state ?? initialState)}
                fontFamily="Arial"

                // Font End
                fill={currentCustomTemplate?.state?.color ?? '#ffffff'}

                // Stroke
                strokeEnabled={currentCustomTemplate?.state?.stroke?.enabled}
                stroke={currentCustomTemplate?.state?.stroke?.enabled ? currentCustomTemplate?.state?.stroke?.color : '#000000'}
                strokeWidth={currentCustomTemplate?.state?.stroke?.enabled ? plateWidth / 150 * 0.45 : 0}

                // Shadow
                shadowEnabled={currentCustomTemplate?.state?.glow?.enabled ?? false}
                shadowBlur={75}
                shadowColor={currentCustomTemplate?.state?.glow?.enabled ? currentCustomTemplate?.state?.glow?.color : '#ffffff'}
            />

        )
    );

    const middleText = (
        fontsLoaded ? (<Text
            zIndex={20}
            // listening={false} 
            // Reference
            ref={textRef}
            verticalAlign="middle"
            align={
                currentLicensePlate?.platePosition ?
                    currentLicensePlate?.platePosition :
                    currentCustomTemplate?.startPlatePosition ?
                        currentCustomTemplate?.startPlatePosition : 'center'}

            letterSpacing={20}
            x={plateWidth * 0.14 / 2}
            y={fixTextPosition()}
            width={plateWidth * 0.875}

            // TEXT
            text={
                currentLicensePlate?.plateNumber ?
                    currentLicensePlate?.plateNumber :
                    currentCustomTemplate?.startPlateText ? currentCustomTemplate?.startPlateText : initialLicensePlate
            }

            // Font
            fontSize={plateHeight * 0.35}
            fontFamily={"'License Plate USA'"}

            // Colors
            fill={currentCustomTemplate?.plateNumber?.color ?? '#ffffff'}

            strokeEnabled={currentCustomTemplate?.plateNumber?.stroke?.enabled}
            stroke={
                currentCustomTemplate?.plateNumber?.stroke?.enabled ?
                    `${currentCustomTemplate?.plateNumber?.stroke?.color ?? '#000000'}` : ''
            }
            strokeWidth={
                currentCustomTemplate?.plateNumber?.stroke?.enabled ? plateWidth / 100 * 0.45 : 0
            }
        />) : (
            <Text
            zIndex={20}
                // listening={false} 
                // Reference
                letterSpacing={20}
                ref={textRef}
                verticalAlign="middle"
                align={
                    currentLicensePlate?.platePosition ?
                        currentLicensePlate?.platePosition :
                        currentCustomTemplate?.startPlatePosition ?
                            currentCustomTemplate?.startPlatePosition : 'center'}
                x={plateWidth * 0.14 / 2}
                y={fixTextPosition()}
                width={plateWidth * 0.875}

                // TEXT
                text={
                    currentLicensePlate?.plateNumber ?
                        currentLicensePlate?.plateNumber :
                        currentCustomTemplate?.startPlateText ? currentCustomTemplate?.startPlateText : initialLicensePlate
                }

                // Font
                fontSize={plateHeight * 0.35}

                // Colors
                fill={currentCustomTemplate?.plateNumber?.color ?? '#ffffff'}

                strokeEnabled={currentCustomTemplate?.plateNumber?.stroke?.enabled}
                stroke={
                    currentCustomTemplate?.plateNumber?.stroke?.enabled ?
                        `${currentCustomTemplate?.plateNumber?.stroke?.color ?? '#000000'}` : ''
                }
                strokeWidth={
                    currentCustomTemplate?.plateNumber?.stroke?.enabled ? plateWidth / 100 * 0.45 : 0
                }
            />
        )
    );

    const bottomText = (
        <Text
            zIndex={12}
            // Placement
            x={plateWidth * 0.125}
            y={plateHeight * 0.95 - plateHeight * 0.125}
            width={plateWidth * 0.745}
            wrap='none'
            align="center"

            // TEXT
            text={currentLicensePlate?.bottomTextEnabled
                && currentLicensePlate?.bottomText ? currentLicensePlate?.bottomText : ''}

            // Font
            fontSize={plateHeight * 0.14}
            fontFamily="Arial"

            // Color
            fill={currentCustomTemplate?.bottomText?.color ?? '#ffffff'}

            // Stroke
            strokeEnabled={currentCustomTemplate?.bottomText?.stroke?.enabled}
            stroke={currentCustomTemplate?.bottomText?.stroke?.enabled ? currentCustomTemplate?.bottomText?.stroke?.color : '#000000'}
            strokeWidth={currentCustomTemplate?.bottomText?.stroke?.enabled ? plateWidth / 150 * 0.45 : 0}


            // Shadow
            shadowEnabled={currentCustomTemplate?.bottomText?.glow?.enabled}
            shadowBlur={75}
            shadowColor={currentCustomTemplate?.bottomText?.glow?.enabled ? currentCustomTemplate?.bottomText?.glow?.color : '#ffffff'}
        />
    );

    const holesComponent = convertHoles();

    const licensePlate = (
        <Rect
            listening={false}
            perfectDrawEnabled={false}
            zIndex={1}
            style={{
                boxShadow: '0 0 20px 2px #ececec'
            }}
            fill={currentCustomTemplate?.backgroundSettings?.color ?? 'red'}
            x={0}
            y={0}
            width={plateWidth}
            height={plateHeight}
            shadowColor='#ececec'
            shadowBlur={60}
            cornerRadius={plateHeight * 0.05}
        />
    );

    const licensePlateBorder = (
        <Rect
            listening={false}
            perfectDrawEnabled={false}
            zIndex={3}
            fill={'transparent'}
            x={0}
            y={0}
            width={plateWidth}
            height={plateHeight}
            cornerRadius={plateHeight * 0.05}
            strokeEnabled={currentCustomTemplate?.backgroundSettings?.stroke?.enabled}
            strokeWidth={currentCustomTemplate?.backgroundSettings?.stroke?.enabled ? 65 : 0}
            stroke={currentCustomTemplate?.backgroundSettings?.stroke?.color ?? 'red'}
        />
    );

    const licensePlate2 = (
        <Rect
            // fillPatternImage={textureImage}
            // key={2}
            perfectDrawEnabled={false}
            fill={'red'}
            x={plateWidth * 0.145 / 2}
            y={plateHeight * 0.5 - plateHeight * 0.085}
            width={plateWidth * 0.875}
            height={1000}
        // fill="white"
        // stroke="black"
        />
    );

    // Create the layer and add the license plate and text elements
    const layer = (
        <Layer
            x={isMobile ? plateWidth / 14 : plateWidth / 10}
            y={isMobile ? plateHeight / 8 : plateHeight / 10}
        >
            {licensePlate}
            <PlateBackground plateHeight={plateHeight} plateWidth={plateWidth} />
            {licensePlateBorder}
            {holesComponent}
            {currentCustomTemplate?.backgroundLogo?.enabled ?
                <PlateLogoBackground plateHeight={plateHeight} plateWidth={plateWidth} /> : null
            }
            {currentCustomTemplate?.detailLogo2?.enabled ?
                <PlateExtraLogo plateHeight={plateHeight} plateWidth={plateWidth} /> : null
            }
            {
                currentCustomTemplate?.detailLogo1?.enabled ?
                    <PlateDetailLogo plateHeight={plateHeight} plateWidth={plateWidth} /> : null
            }
            {
                currentCustomTemplate?.bottomLogo?.enabled && !currentLicensePlate?.bottomTextEnabled ?
                    <PlateLogoBottom plateHeight={plateHeight} plateWidth={plateWidth} /> : null
            }
            {
                currentCustomTemplate?.mainLogo?.enabled ?
                    <PlateLogo plateHeight={plateHeight} plateWidth={plateWidth} /> : null
            }
            {topText}
            {currentLicensePlate?.bottomTextEnabled ? bottomText : null}
            {middleText}
        </Layer>
    );

    // Create the stage and add the layer
    return (
        <div className={`canvas__plate-container ${editLogoUi ? 'plate--zindex' : ''}`}>
            <Stage
                zIndex={999999999}
                className='canvas__plate-container'
                scaleX={isMobile ? 1 / 6.5 : 1 / 3}
                scaleY={isMobile ? 1 / 6.5 : 1 / 3}
                ref={canvasReference}
                width={plateWidth}
                height={plateHeight}>
                {layer}
            </Stage>
        </div>

    );
};

export default EditorMotoNew;