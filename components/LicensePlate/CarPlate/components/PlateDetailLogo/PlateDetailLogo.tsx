import { useContext, useEffect, useRef } from "react";
import { Transformer, Group, Image } from "react-konva";
import useImage from "use-image";
import { EditorContext, EditorContextType } from "../../../../../context/editorContext";
import { InterfaceContext, InterfaceContextType } from "../../../../../context/interfaceContext";


const PlateDetailLogo = (props: {
    plateWidth: number,
    plateHeight: number
}) => {

    const {
        currentLicensePlate,
        currentCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const [image] = useImage(currentCustomTemplate?.detailLogo1?.url ?? '', 'anonymous');

    const {
        moveDetail1,
        setMoveDetail1
    } = useContext(InterfaceContext) as InterfaceContextType;

    const imageRef = useRef<any>();
    const imageTransformerRef = useRef<any>();
    const imageGroupRef = useRef<any>();

    useEffect(() => {
        if (moveDetail1) {
            imageTransformerRef.current.nodes([imageGroupRef.current]);
        }
    }, [moveDetail1]);

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
                    return currentCustomTemplate?.detailLogo1?.rightCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "center") {
                    return currentCustomTemplate?.detailLogo1?.centerCoordinates?.x
                }
                if (currentCustomTemplate?.startPlatePosition === "right") {
                    return currentCustomTemplate?.detailLogo1?.leftCoordinates?.x
                }
            }
            if (currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.detailLogo1?.rightCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.detailLogo1?.centerCoordinates?.x
            }
            if (currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.detailLogo1?.leftCoordinates?.x
            }

        } else {
            if (currentCustomTemplate?.startPlatePosition === "center" || currentLicensePlate?.platePosition === "center") {
                return currentCustomTemplate?.detailLogo1?.centerCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "left" || currentLicensePlate?.platePosition === "left") {
                return currentCustomTemplate?.detailLogo1?.rightCoordinates?.y
            }
            if (currentCustomTemplate?.startPlatePosition === "right" || currentLicensePlate?.platePosition === "right") {
                return currentCustomTemplate?.detailLogo1?.leftCoordinates?.y
            }
        }

    }

    const setSize = (
        sizeType: string
    ) => {
        if (sizeType === "width") {
            return currentCustomTemplate?.detailLogo1?.width! as number
        }
        if (sizeType === "height"){
            return currentCustomTemplate?.detailLogo1?.height as number
        } 
    }


    return (
        <>
            <Group
                zIndex={8}
                ref={imageGroupRef}
                draggable
                onClick={() => {
                    console.log('hey')
                    if(moveDetail1){
                        setMoveDetail1(false)
                    } else {
                        setMoveDetail1(true)
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
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? currentCustomTemplate?.detailLogo1?.glow?.color : '#000000'
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
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? currentCustomTemplate?.detailLogo1?.glow?.color : ''
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
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? currentCustomTemplate?.detailLogo1?.glow?.color : ''
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
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? currentCustomTemplate?.detailLogo1?.glow?.color : ''
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
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? true : false
                    }
                    shadowColor={
                        currentCustomTemplate?.detailLogo1?.glow?.enabled ? currentCustomTemplate?.detailLogo1?.glow?.color : ''
                    }
                    shadowBlur={5}
                    shadowOpacity={1}
                    shadowOffsetX={0}
                    shadowOffsetY={0}
                /> */}
            </Group>
            {
                moveDetail1 &&             
                <Transformer
                    onDragEnd={(e)=> {
                        console.info('X: ', e.target.x());
                        console.info('Y: ', e.target.y());
                    }}
                    onTransformEnd={(e) => {
                        console.info('X: ', e.target.x());
                        console.info('Y: ', e.target.y());
                    }}
                    keepRatio
                    ref={imageTransformerRef} 
                />
            }
        </>
    )
}

export default PlateDetailLogo;