import { useContext, useEffect, useRef } from "react";
import { Transformer, Group, Image } from "react-konva";
import useImage from "use-image";
import { EditorContext, EditorContextType } from "../../../../../context/editorContext";
import { InterfaceContext, InterfaceContextType } from "../../../../../context/interfaceContext";


const PlateExtraLogo = (props: {
    plateWidth: number,
    plateHeight: number
}) => {

    const {
        currentLicensePlate,
        currentCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const [image] = useImage(currentCustomTemplate?.detailLogo2?.url ?? '', 'anonymous');

    const {
        setMoveDetail2, 
        moveDetail2
    } = useContext(InterfaceContext) as InterfaceContextType;

    const imageRef = useRef<any>();
    const imageTransformerRef = useRef<any>();
    const imageGroupRef = useRef<any>();

    useEffect(() => {
        if (moveDetail2) {
            imageTransformerRef.current.nodes([imageGroupRef.current]);
        }
    }, [moveDetail2]);

    useEffect(() => {
        imageTransformerRef?.current?.nodes([imageGroupRef.current]);
        if (image) {
            imageRef?.current?.cache({ pixelRatio: 5});
        }
    }, [image]);

    

    const calculateInitialPosition = (
        calcType?: string
    ) => {
        if (calcType === "x") {
            if (currentLicensePlate?.platePosition === "" || !currentLicensePlate?.platePosition) {
                if (currentCustomTemplate?.startPlatePosition === "left") {
                    return currentCustomTemplate?.detailLogo2?.rightCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "center") {
                    return currentCustomTemplate?.detailLogo2?.centerCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "right") {
                    return currentCustomTemplate?.detailLogo2?.leftCoordinates?.x
                }
            }
            if (currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.detailLogo2?.rightCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.detailLogo2?.centerCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.detailLogo2?.leftCoordinates?.x
            }

        } else {
            if (currentCustomTemplate?.startPlatePosition === "center" || currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.detailLogo2?.centerCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "left" || currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.detailLogo2?.rightCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "right" || currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.detailLogo2?.leftCoordinates?.y
            }
        }

    }

    const setSize = (
        sizeType: string
    ) => {
        if (sizeType === "width") {
            return currentCustomTemplate?.detailLogo2?.width! as number
        }
        if (sizeType === "height"){
            return currentCustomTemplate?.detailLogo2?.height as number
        } 
    }


    return (
        <>
            <Group
                zIndex={7}
                ref={imageGroupRef}
                draggable
                onClick={() => {
                    console.log('hey')
                    if(moveDetail2){
                        setMoveDetail2(false)
                    } else {
                        setMoveDetail2(true)
                    }
                }}
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
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? currentCustomTemplate?.detailLogo2?.glow?.color : '#000000'
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
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? currentCustomTemplate?.detailLogo2?.glow?.color : ''
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
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? currentCustomTemplate?.detailLogo2?.glow?.color : ''
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
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? currentCustomTemplate?.detailLogo2?.glow?.color : ''
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
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo2?.glow?.enabled ? currentCustomTemplate?.detailLogo2?.glow?.color : ''
                    }
                    shadowBlur={5}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                /> */}
            </Group>
            {
                moveDetail2 && 
                <Transformer
                    width={image?.width}
                    height={image?.height}
                    borderStrokeWidth={3}
                    ref={imageTransformerRef} 
                />
            }
        </>
    )
}

export default PlateExtraLogo;