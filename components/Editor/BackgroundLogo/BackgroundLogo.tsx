import { useContext, useEffect, useRef, useState } from "react"
import { EditorContext, EditorContextType } from "../../../context/editorContext";
import { Stage, Layer, Image, Transformer, Group } from 'react-konva';
import useImage from "use-image";
import { ITemplate } from "../../../interfaces/template.interface";
import { InterfaceContext, InterfaceContextType } from "../../../context/interfaceContext";

interface ILogo {
    currentPreviewTemplate?: ITemplate
    canvasReference?: any;
    type?: 'PREVIEW' | 'CANVAS';
    logoType?: 'REGULAR' | 'BOTTOM';
    initialPosition?: string;
    glowColor?: string;
    glow?: string;
}

export const BackgroundLogo = (props: ILogo) => {

    const {
        moveBackgroundLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        currentCustomTemplate,
        currentTemplate,
        currentLicensePlate
    } = useContext(EditorContext) as EditorContextType;

    const { type, logoType, canvasReference, currentPreviewTemplate } = props;

    const imageSource = () => {
        if (type === "CANVAS") {
            if (!currentCustomTemplate) {
                return currentTemplate?.backgroundLogo?.url
            }
        }
        if (type === "PREVIEW") {
            return currentPreviewTemplate?.backgroundLogo?.url
        }
        return currentCustomTemplate?.backgroundLogo?.url
    }

    const [image] = useImage(imageSource() ?? '');

    const imageRef = useRef<any>();
    const transformerRef = useRef<any>();

    useEffect(() => {
        if (moveBackgroundLogo) {
            transformerRef.current.nodes([imageRef.current]);
        }
    }, [moveBackgroundLogo]);

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
        if (type === "PREVIEW") {
            if (calcType === "x") return canvasReference?.current?.clientWidth - canvasReference?.current?.clientWidth / 1.5; //center
            return canvasReference?.current?.clientHeight - canvasReference?.current?.clientHeight / 1.5;
        }

    }

    const setSize = (
        sizeType: string
    ) => {
        if (type === "PREVIEW") {
        }
        if (type === "CANVAS") {
            if (sizeType === "width") {
                return currentCustomTemplate?.backgroundLogo?.width
            }
            if (sizeType === "height")
                return currentCustomTemplate?.backgroundLogo?.height
        }
    }

    return (
        <div
            className={
                `logo-bg__container`
            }
            style={moveBackgroundLogo ?
                { zIndex: 7 } : {}
            }
        >
            <Stage
                width={canvasReference?.current?.clientWidth}
                height={canvasReference?.current?.clientHeight}
            >
                <Layer>
                    <Image
                        draggable={moveBackgroundLogo}
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
                        dragBoundFunc={(e) => console.info('drag:', e)}
                    />
                    {type === "CANVAS" && moveBackgroundLogo &&
                        <Transformer
                            ref={transformerRef}
                        />
                    }
                </Layer>
            </Stage>
        </div>
    )
}