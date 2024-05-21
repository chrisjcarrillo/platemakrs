import { useContext, useEffect, useRef } from "react";
import { Transformer, Group, Image } from "react-konva";
import useImage from "use-image";
import { EditorContext, EditorContextType } from "../../../../../context/editorContext";
import { InterfaceContext, InterfaceContextType } from "../../../../../context/interfaceContext";


const PlateLogoBottom = (props: {
    plateWidth: number,
    plateHeight: number
}) => {

    const {
        currentLicensePlate,
        currentCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const [image] = useImage(currentCustomTemplate?.bottomLogo?.url ?? '', 'anonymous');

    const {
        moveBottomLogo,
        setMoveBottomLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const imageRef = useRef<any>();
    const imageTransformerRef = useRef<any>();
    const imageGroupRef = useRef<any>();

    useEffect(() => {
        if (moveBottomLogo) {
            imageTransformerRef.current.nodes([imageGroupRef.current]);
        }
    }, [moveBottomLogo]);

    useEffect(() => {
        imageTransformerRef?.current?.nodes([imageGroupRef.current]);
        if (image) {
            imageRef?.current?.cache({ pixelRatio: 5});
        }
    }, [image]);

    useEffect(() => {
        if (moveBottomLogo) {
            imageGroupRef?.current?.moveToTop();
        } else {
            imageGroupRef?.current?.setZIndex(9);
            imageGroupRef.current.getStage().batchDraw();
        }
    }, [moveBottomLogo]);
    

    const calculateInitialPosition = (
        calcType?: string
    ) => {
        if (calcType === "x") {
            if (currentLicensePlate?.platePosition === "" || !currentLicensePlate?.platePosition) {
                if (currentCustomTemplate?.startPlatePosition === "left") {
                    return currentCustomTemplate?.bottomLogo?.rightCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "center") {
                    return currentCustomTemplate?.bottomLogo?.centerCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "right") {
                    return currentCustomTemplate?.bottomLogo?.leftCoordinates?.x
                }
            }
            if (currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.bottomLogo?.rightCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.bottomLogo?.centerCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.bottomLogo?.leftCoordinates?.x
            }

        } else {
            if (currentCustomTemplate?.startPlatePosition === "center" || currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.bottomLogo?.centerCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "left" || currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.bottomLogo?.rightCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "right" || currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.bottomLogo?.leftCoordinates?.y
            }
        }

    }

    const setSize = (
        sizeType: string
    ) => {
        if (sizeType === "width") {
            return currentCustomTemplate?.bottomLogo?.width! as number 
        }
        if (sizeType === "height"){
            return currentCustomTemplate?.bottomLogo?.height as number
        } 
    }


    return (
        <>
            <Group
                zIndex={9}
                ref={imageGroupRef}
                draggable
            >
                <Image
                    key={1}
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
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? currentCustomTemplate?.bottomLogo?.glow?.color : '#000000'
                    }
                    shadowBlur={20}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                />
                {/* <Image
                    key={2}
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
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? currentCustomTemplate?.bottomLogo?.glow?.color : ''
                    }
                    shadowBlur={5}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                />
                <Image
                    key={3}
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
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? currentCustomTemplate?.bottomLogo?.glow?.color : ''
                    }
                    shadowBlur={5}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                />
                <Image
                    key={4}
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
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? currentCustomTemplate?.bottomLogo?.glow?.color : ''
                    }
                    shadowBlur={5}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                />
                <Image
                    key={5}
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
                    shadowEnabled={console.info
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.bottomLogo?.glow?.enabled ? currentCustomTemplate?.bottomLogo?.glow?.color : ''
                    }
                    shadowBlur={5}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                /> */}
            </Group>
            {
                moveBottomLogo &&
                <Transformer
                    width={image?.width}
                    height={image?.height}
                    borderStrokeWidth={3}
                    clearBeforeDraw
                    ref={imageTransformerRef} 
                />
            }
            
        </>
    )
}

export default PlateLogoBottom;