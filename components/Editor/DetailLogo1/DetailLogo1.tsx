import { useContext, useEffect, useRef, useState } from "react"
import { EditorContext, EditorContextType } from "../../../context/editorContext";
import { Stage, Layer, Image, Transformer, Group } from 'react-konva';
import useImage from "use-image";
import { InterfaceContext, InterfaceContextType } from "../../../context/interfaceContext";

interface ILogo {
    canvasReference?: any;
    type?: 'PREVIEW' | 'CANVAS';
    logoType?: 'REGULAR' | 'BOTTOM';
    initialPosition?: string;
    glowColor?: string;
    glow?: string;
}

export const DetailLogo1 = (props: ILogo) => {

    const {
        moveDetail1
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        currentCustomTemplate,
        currentLicensePlate
    } = useContext(EditorContext) as EditorContextType;

    const { type, logoType, canvasReference } = props;

    const imageSource = () => {
        return currentCustomTemplate?.detailLogo1?.url
    }

    const [image] = useImage(imageSource() ?? '');

    const imageRef = useRef<any>();
    const transformerRef = useRef<any>();

    useEffect(() => {
        if (moveDetail1) {
            transformerRef.current.nodes([imageRef.current]);
        }
    }, [moveDetail1]);

    useEffect(() => {
        transformerRef?.current?.nodes([imageRef.current]);
        if (image) {
            imageRef?.current?.cache();
        }
    }, [image]);


    const calculateInitialPosition = (
        calcType?: string
    ) => {
        // if(type === "x" && initialPosition === "left") return canvasReference?.current?.clientWidth - canvasReference?.current?.clientWidth / 4;
        // if(type === "x" && initialPosition === "right") return canvasReference?.current?.clientWidth - canvasReference?.current?.clientWidth / 1;
        if (type === "CANVAS") {
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
        if (type === "PREVIEW") {
            if (calcType === "x") return canvasReference?.current?.clientWidth - canvasReference?.current?.clientWidth / 1.5; //center
            return canvasReference?.current?.clientHeight - canvasReference?.current?.clientHeight / 1.5;
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
        <div
            className={
                `logo-bg__container`
            }
            style={moveDetail1 ?
                { zIndex: 7 } : {}
            }
        >
            <Stage
                width={canvasReference?.current?.clientWidth}
                height={canvasReference?.current?.clientHeight}
            >
                <Layer>
                    <Image
                        draggable={moveDetail1}
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
                    />
                    {type === "CANVAS" && moveDetail1 &&
                        <Transformer
                            ref={transformerRef}
                        />
                    }
                </Layer>
            </Stage>
        </div>
    )
}