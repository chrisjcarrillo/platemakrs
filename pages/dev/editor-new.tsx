import React, { useEffect, useRef, useState, useContext } from 'react';
import { Hexagon } from '../../components/shared/Hexagon/Hexagon';
import { Group, Transformer, Stage, Layer, Text, Rect, Image } from 'react-konva';
import useImage from "use-image";
import * as ReactDOMServer from 'react-dom/server';
import { EditorContext, EditorContextType } from '../../context/editorContext';
import EditorForm from '../../components/Editor/Steps/FirstStep/EditorForm/EditorForm';
import { EditorPresetContainer } from '../../components/Editor/EditorPresetContainer/EditorPresetContainer';
import { EditorContainer } from '../../components/Editor/EditorContainer/EditorContainer';
import { InterfaceContext, InterfaceContextType } from '../../context/interfaceContext';
import PlateBackground from '../../components/LicensePlate/CarPlate/components/PlateBackground/PlateBackground';
import PlateLogo from '../../components/LicensePlate/CarPlate/components/PlateLogo/PlateLogo';
import PlateDetailLogo from '../../components/LicensePlate/CarPlate/components/PlateDetailLogo/PlateDetailLogo';
import PlateLogoBottom from '../../components/LicensePlate/CarPlate/components/PlateLogoBottom/PlateLogoBottom';
import PlateExtraLogo from '../../components/LicensePlate/CarPlate/components/PlateExtralogo/PlateExtralogo';
import PlateLogoBackground from '../../components/LicensePlate/CarPlate/components/PlateLogoBackground/PlateLogoBackground';
import { isMobile } from 'react-device-detect';
import { Html } from 'react-konva-utils';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {Container, Row, Col} from 'react-bootstrap';
import { stateSvg } from '../../utils/helpers/stateSvg';
import { StateSvg } from '../../components/shared/StateSvg/StateSvg';

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


function EditorNew(props: any) {

    const initialState = "YOUR STATE";
    const initialLicensePlate = "SAM PLE";

    // Reference
    const {
        canvasReference
    } = props;
    // const stageRef = useRef<any>();
    const textRef = useRef<any>();
    const plateRef = useRef<any>();
    const layerReference = useRef<any>();

    // Internal State
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const {
        currentLicensePlate,
        currentCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const {
        setEditLogoUi,
        editLogoUi
    } = useContext(InterfaceContext) as InterfaceContextType;

    const svgString = encodeURIComponent(
        ReactDOMServer.renderToStaticMarkup(<StateSvg
            svg={stateSvg.find(state => state.stateId === currentLicensePlate?.state)}
            color={`${currentCustomTemplate?.state?.color ?? '#ffffff'}`}
            textShadow={`${currentCustomTemplate?.state?.glow?.enabled ? `${currentCustomTemplate?.state.glow.color ?? '#000000'} 0px 0px 5px, ${currentCustomTemplate?.state?.glow?.color ?? '#000000'} 0px 0px 5px` : ``}`}
            textStrokeColor={`${currentCustomTemplate?.state?.stroke?.enabled ? `${currentCustomTemplate?.state?.stroke.color ?? '#000000'}` : `#000000`}`}
            textStrokeWidth={`${currentCustomTemplate?.state?.stroke?.enabled ? '1px' : ''}`}
            filter={`${currentCustomTemplate?.state?.shadow?.enabled ? 'drop-shadow(rgb(0, 0, 0) 3px 1px 2px)' : ''}`}
            />)
    );

    const [stateImage] = useImage(
       `data:image/svg+xml,${svgString}`, 'anonymous'
    );

    console.log(stateImage?.width)

    const plateWidth = 3597;
    const plateHeight = 1800;

    useEffect(() => {
        setIsLoaded(true);
        const stage = canvasReference?.current;
        const mainText = textRef?.current;

        // stage?.clearCache();
        // stage?.setWidth(window.innerWidth);
        // stage?.setHeight(window.innerHeight);
        // stage?.scaleX(isMobile ? 1 / 10 : 1 / 5);
        // stage?.scaleY(isMobile ? 1 / 10 : 1 / 5);
        stage?.draw();

        // mainText?.clearCache();
        mainText?.width(plateWidth * 0.955)
        mainText?.setAttr('fontSize', plateHeight * 0.45)
        mainText?.x(plateWidth * 0.05 / 2)
        // mainText?.y(plateHeight * 0.5 - plateHeight * 0.085)

        // mainText?.fontFamily("'License Plate USA'")
        // mainText?.wrap('none')
        // mainText?.align(currentLicensePlate?.platePosition ?
        //     currentLicensePlate?.platePosition :
        //     currentCustomTemplate?.startPlatePosition ?
        //         currentCustomTemplate?.startPlatePosition : 'center');
        // // mainText?.verticalAlign('middle')
        // mainText?.text(currentLicensePlate?.plateNumber ?
        //     currentLicensePlate?.plateNumber :
        //     currentCustomTemplate?.startPlateText ? currentCustomTemplate?.startPlateText : initialLicensePlate);
        mainText?.draw();
        
        setIsLoaded(false);
        
    }, []);

    const [holesImage] = useImage(
        currentCustomTemplate?.backgroundSettings?.color === "#ffffff" ?
            '../../images/resources/holes/holes-black.png' : '../../images/resources/holes/holes-white.png', 'anonymous'
    );

    const convertHoles = () => {
        return <Image zIndex={5} x={0} y={0} width={plateWidth} height={plateHeight} image={holesImage} />;
    };

    const topText = (
        stateSvg.find(state => state.stateId === currentLicensePlate?.state)) ? (
            <Image 
                width={plateWidth * 0.5 }
                height={plateHeight * 0.205}
                // width={plateWidth / stateImage?.width * 0.5 }
                // height={plateHeight / stateImage?.height * 0.205}
                image={stateImage}
                x={plateWidth * 0.25}
                y={plateHeight * 0.035}
            />
        ) : (
            <Text
            zIndex={11}
            // Position && Width && Wrap of State
            x={plateWidth * 0.235}
            y={plateHeight * 0.075}
            width={plateWidth * 0.53}
            align="center"
            wrap='none'

            // Text
            text={currentLicensePlate?.state?.toUpperCase() ?? initialState?.toUpperCase()}

            // Font Start
            fontStyle='bold'
            fontSize={plateHeight * 0.14}
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
    );

    const middleText = (
        <Group
            zIndex={20}
        >
            <Text
                // Reference
                ref={textRef}

                // Alignment
                align={
                    currentLicensePlate?.platePosition ?
                        currentLicensePlate?.platePosition :
                        currentCustomTemplate?.startPlatePosition ?
                            currentCustomTemplate?.startPlatePosition : 'center'}

                verticalAlign="middle"
                x={plateWidth * 0.05 / 2}
                y={plateHeight * 0.5 - plateHeight * 0.085}
                width={plateWidth * 0.955}

                // TEXT
                text={currentLicensePlate?.plateNumber ?
                    currentLicensePlate?.plateNumber :
                    currentCustomTemplate?.startPlateText ? currentCustomTemplate?.startPlateText : initialLicensePlate}

                // Font
                fontSize={plateHeight * 0.45}
                fontFamily={isLoaded ? "'License Plate USA'" : "'License Plate USA'"}


                // Text Color
                fill={currentCustomTemplate?.plateNumber?.color ?? '#ffffff'}

                // Stroke
                strokeEnabled={currentCustomTemplate?.plateNumber?.stroke?.enabled}
                stroke={currentCustomTemplate?.plateNumber?.stroke?.enabled ?
                    `${currentCustomTemplate?.plateNumber?.stroke?.color ?? '#000000'}` : ''}
                strokeWidth={currentCustomTemplate?.plateNumber?.stroke?.enabled ? plateWidth / 100 * 0.45 : 0}
                shadowColor='#000000'
                shadowBlur={40}
                shadowOffsetY={5}
            />
        </Group>


    );

    const bottomText = (
        <Text
            zIndex={12}
            // Placement
            x={plateWidth * 0.235}
            y={plateHeight * 0.95 - plateHeight * 0.125}
            width={plateWidth * 0.53}
            wrap='none'
            align="center"

            // TEXT
            text={currentLicensePlate?.bottomTextEnabled
                && currentLicensePlate?.bottomText ? currentLicensePlate?.bottomText : ''}

            // Font
            fontSize={plateHeight * 0.12}
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

    const pinstripeComponent = (
        <Rect
            zIndex={4}
            // key={2}
            style={{
                boxShadow: '0 0 20px 2px #ececec'
            }}
            fill={'transparent'}
            x={plateWidth / 35}
            y={plateHeight / 8.5}
            width={plateWidth - 200}
            height={plateHeight - 425}

            cornerRadius={plateHeight * 0.05}

            strokeEnabled={currentCustomTemplate?.backgroundSettings?.pinstripe?.enabled ?? false}
            strokeWidth={20}
            stroke={currentCustomTemplate?.backgroundSettings?.pinstripe?.enabled ?
                currentCustomTemplate?.backgroundSettings?.pinstripe?.color : "#000000"}
        />
    );

    const licensePlate = (
        <Rect
            ref={plateRef}
            zIndex={1}
            // key={2}
            style={{
                boxShadow: '0 0 20px 2px #ececec'
            }}
            fill={currentCustomTemplate?.backgroundSettings?.color ?? '#000000'}
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

    // const licensePlate2 = (
    //     <Rect
    //         // fillPatternImage={textureImage}
    //         // key={2}
    //         fill={'white'}
    //         x={plateWidth * 0.05 / 7}
    //         y={plateHeight * 0.5 - plateHeight * 0.085}
    //         // Width
    //         width={plateWidth * 0.985}
    //         height={1000}
    //         // fill="white"
    //         // stroke="black"
    //     />
    // );

    // Create the layer and add the license plate
    const layer = (
        <Layer
        
            x={isMobile ? plateWidth / plateHeight * 35 : plateWidth / 5}
            y={isMobile ? plateHeight / 8 : plateHeight / 5}
            ref={layerReference}
        >
            {licensePlate}
            <PlateBackground plateHeight={plateHeight} plateWidth={plateWidth} />
            {licensePlateBorder}
            {/* {licensePlate2} */}
            {pinstripeComponent}
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
                currentCustomTemplate?.bottomLogo?.enabled ?
                    <PlateLogoBottom plateHeight={plateHeight} plateWidth={plateWidth} /> : null
            }
            {
                currentCustomTemplate?.mainLogo?.enabled ?
                    <PlateLogo plateReference={plateRef} plateHeight={plateHeight} plateWidth={plateWidth} /> : null
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
                container=".canvas__plate-container"
                scaleX={isMobile ? 1 / 10 : 1 / 5}
                scaleY={isMobile ? 1 / 10 : 1 / 5}
                ref={canvasReference}
                width={plateWidth}
                height={plateHeight}
            >
                {layer}
            </Stage>
        </div>
    );
}

export default EditorNew;