import { useContext, useEffect, useRef } from "react";
import { Transformer, Group, Image } from "react-konva";
import useImage from "use-image";
import { EditorContext, EditorContextType } from "../../../../../context/editorContext";
import { InterfaceContext, InterfaceContextType } from "../../../../../context/interfaceContext";
import { isMobile } from "react-device-detect";


const PlateLogo = (props: {
    plateWidth: number,
    plateHeight: number,
    plateReference: any
}) => {


    const {
        currentLicensePlate,
        currentCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const [image] = useImage(currentCustomTemplate?.mainLogo?.url ?? '', 'anonymous');

    const {
        moveLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const imageRef = useRef<any>();
    const imageTransformerRef = useRef<any>();
    const imageGroupRef = useRef<any>();

    useEffect(() => {
        imageTransformerRef?.current?.nodes([imageGroupRef.current]);
        if (image) {
            imageRef?.current?.cache({ pixelRatio: 10});
        }
    }, [image]);

    useEffect(() => {
        if (moveLogo === true) {
            // imageGroupRef?.current?.moveToTop();
            imageGroupRef?.current?.zIndex(100);
            imageGroupRef.current.getStage().batchDraw();
        }
        if (moveLogo === false) {
            imageGroupRef?.current?.zIndex(7);
            imageGroupRef?.current?.moveDown();
            imageGroupRef.current.getStage().batchDraw();
        }
    }, [moveLogo]);

    useEffect(() => {
        if (moveLogo) {
            imageTransformerRef?.current?.moveToTop();
            imageTransformerRef?.current?.nodes([imageGroupRef?.current]);
            imageTransformerRef?.current?.getLayer().batchDraw();
        }
    }, [moveLogo]);

    const calculateInitialPosition = (
        calcType?: string
    ) => {
        if (calcType === "x") {
            if (currentLicensePlate?.platePosition === "" || !currentLicensePlate?.platePosition) {
                if (currentCustomTemplate?.startPlatePosition === "left") {
                    return currentCustomTemplate?.mainLogo?.rightCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "center") {
                    return currentCustomTemplate?.mainLogo?.centerCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "right") {
                    return currentCustomTemplate?.mainLogo?.leftCoordinates?.x
                }
            }
            if (currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.mainLogo?.rightCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.mainLogo?.centerCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.mainLogo?.leftCoordinates?.x
            }

        } else {
            if (currentCustomTemplate?.startPlatePosition === "center" || currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.mainLogo?.centerCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "left" || currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.mainLogo?.rightCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "right" || currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.mainLogo?.leftCoordinates?.y
            }
        }

    }

    const setSize = (
        sizeType: string
    ) => {
        if (sizeType === "width") {
            return currentCustomTemplate?.mainLogo?.width! as number
        }
        if (sizeType === "height"){
            return currentCustomTemplate?.mainLogo?.height as number
        } 
    }

    return (
        <>
        {
                moveLogo && (
                    <Transformer

                        centeredScaling
                        width={image?.width}
                        height={image?.height}
                        flipEnabled={false}
                        // borderStroke="red"
                        borderStrokeWidth={3}
                        keepRatio
                        ref={imageTransformerRef} 
                    />
                )
            }
            <Group
                zIndex={7}
                ref={imageGroupRef}
                draggable
            >
                <Image
                    key={1}
                    listening={moveLogo}
                    ref={imageRef}
                    image={image}
                    width={setSize('width')}
                    height={setSize('height')}
                    x={
                        calculateInitialPosition('x')
                    }
                    y={
                        calculateInitialPosition('y')
                    }
                    shadowEnabled={
                        currentCustomTemplate?.mainLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.mainLogo?.glow?.enabled ? currentCustomTemplate?.mainLogo?.glow?.color : '#000000'
                    }
                    shadowBlur={props?.plateWidth / 35}
                    shadowOpacity={100}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                />
                <Image
                    fill="transparent"
                    key={2}
                    listening={moveLogo}
                    ref={imageRef}
                    image={image}
                    width={setSize?.('width')}
                    height={setSize?.('height')}
                    x={
                        calculateInitialPosition('x')
                    }
                    y={
                        calculateInitialPosition('y')
                    }
                    shadowEnabled={
                        currentCustomTemplate?.mainLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.mainLogo?.glow?.enabled ? currentCustomTemplate?.mainLogo?.glow?.color : ''
                    }
                    shadowBlur={25}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                />
            </Group>
            
            
        </>
    )
}

export default PlateLogo;