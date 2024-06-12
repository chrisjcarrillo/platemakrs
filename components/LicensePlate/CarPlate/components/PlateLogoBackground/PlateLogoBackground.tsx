import { useContext, useEffect, useRef } from "react";
import { Transformer, Group, Image } from "react-konva";
import useImage from "use-image";
import { EditorContext, EditorContextType } from "../../../../../context/editorContext";
import { InterfaceContext, InterfaceContextType } from "../../../../../context/interfaceContext";


const PlateLogoBackground = (props: {
    plateWidth: number,
    plateHeight: number
}) => {

    const {
        currentLicensePlate,
        currentCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const [image] = useImage(currentCustomTemplate?.backgroundLogo?.url ?? '', 'anonymous');

    const {
        moveBackgroundLogo,
        setMoveBackgroundLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const imageRef = useRef<any>();
    const imageTransformerRef = useRef<any>();
    const imageGroupRef = useRef<any>();

    useEffect(() => {
        if (moveBackgroundLogo) {
            imageTransformerRef.current.nodes([imageGroupRef.current]);
        }
    }, [moveBackgroundLogo]);

    useEffect(() => {
        imageTransformerRef?.current?.nodes([imageGroupRef.current]);
        if (image) {
            imageRef?.current?.cache({ pixelRatio: 10});
        }
    }, [image]);

    useEffect(() => {
        if (moveBackgroundLogo) {
            imageGroupRef?.current?.moveToTop();
        } else {
            imageGroupRef?.current?.setZIndex(5);
            imageGroupRef.current.getStage().batchDraw();
        }
    }, [moveBackgroundLogo]);

    

    const calculateInitialPosition = (
        calcType?: string
    ) => {
        if (calcType === "x") {
            if (currentLicensePlate?.platePosition === "" || !currentLicensePlate?.platePosition) {
                if (currentCustomTemplate?.startPlatePosition === "left") {
                    return currentCustomTemplate?.backgroundLogo?.rightCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "center") {
                    return currentCustomTemplate?.backgroundLogo?.centerCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "right") {
                    return currentCustomTemplate?.backgroundLogo?.leftCoordinates?.x
                }
            }
            if (currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.backgroundLogo?.rightCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.backgroundLogo?.centerCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.backgroundLogo?.leftCoordinates?.x
            }

        } else {
            if (currentCustomTemplate?.startPlatePosition === "center" || currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.backgroundLogo?.centerCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "left" || currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.backgroundLogo?.rightCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "right" || currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.backgroundLogo?.leftCoordinates?.y
            }
        }

    }

    const setSize = (
        sizeType: string
    ) => {
        if (sizeType === "width") {
            return currentCustomTemplate?.backgroundLogo?.width! as number
        }
        if (sizeType === "height"){
            return currentCustomTemplate?.backgroundLogo?.height as number
        } 
    }


    return (
        <>
            <Group
                zIndex={5}
                ref={imageGroupRef}
                draggable
                listening={moveBackgroundLogo}
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
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? currentCustomTemplate?.backgroundLogo?.glow?.color : '#000000'
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
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? currentCustomTemplate?.backgroundLogo?.glow?.color : ''
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
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? currentCustomTemplate?.backgroundLogo?.glow?.color : ''
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
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? currentCustomTemplate?.backgroundLogo?.glow?.color : ''
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
                    shadowEnabled={
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.backgroundLogo?.glow?.enabled ? currentCustomTemplate?.backgroundLogo?.glow?.color : ''
                    }
                    shadowBlur={5}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                /> */}
            </Group>
            {
                moveBackgroundLogo && 
                <Transformer
                    width={image?.width}
                    height={image?.height}
                    borderStrokeWidth={1}
                    keepRatio
                    ref={imageTransformerRef} 
                />
            }
        </>
    )
}

export default PlateLogoBackground;