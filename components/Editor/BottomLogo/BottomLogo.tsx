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

export const BottomLogo = (props: ILogo) => {

    const {
        moveBottomLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        currentCustomTemplate,
        currentTemplate,
        currentLicensePlate
    } = useContext(EditorContext) as EditorContextType;

    const { type, logoType, canvasReference, currentPreviewTemplate } = props;

    const imageSource = () => {
        if (logoType === "REGULAR") {
            if (type === "CANVAS") {
                if (!currentCustomTemplate) {
                    return currentTemplate?.bottomLogo?.url
                }
            }
            if (type === "PREVIEW") {
                return currentPreviewTemplate?.bottomLogo?.url
            }
        }
        if (logoType === "BOTTOM") {
            if (type === "CANVAS") {
                if (!currentCustomTemplate) {
                    return currentTemplate?.bottomLogo?.url
                }
            }
            if (type === "PREVIEW") {
                return currentPreviewTemplate?.bottomLogo?.url
            }
        }
        return currentCustomTemplate?.bottomLogo?.url
    }

    const [image] = useImage(imageSource() ?? '');

    const imageRef = useRef<any>();
    const transformerRef = useRef<any>();
    const groupRef = useRef<any>();

    useEffect(() => {
        console.log(moveBottomLogo)
        if (moveBottomLogo) {
            transformerRef.current.nodes([imageRef.current]);
        }
    }, [moveBottomLogo]);

    useEffect(() => {
        transformerRef?.current?.nodes([imageRef.current]);
        if (image) {
            imageRef?.current?.cache();
        }
    }, [image]);


    const calculateInitialPosition = (
        calcType?: string
    ) => {
        if (type === "CANVAS") {
            if (calcType === "x") {
                return currentCustomTemplate?.bottomLogo?.centerCoordinates?.x
            }
            return currentCustomTemplate?.bottomLogo?.centerCoordinates?.y
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
                return currentCustomTemplate?.bottomLogo?.width! as number
            }
            if (sizeType === "height")
                return currentCustomTemplate?.bottomLogo?.height! as number
        }
    }

    return (
        <div
            className={
                `logo__container`
            }
            style={moveBottomLogo ?
                { zIndex: 100 } : {}
            }
        >
            <Stage
                width={canvasReference?.current?.clientWidth}
                height={canvasReference?.current?.clientHeight}
            >
                <Layer>
                    <Group
                        ref={groupRef}
                    >
                        <Image
                            ref={imageRef}
                            image={image}
                            width={setSize?.('width')}
                            height={setSize?.('height')}
                            draggable={
                                type === "CANVAS" && moveBottomLogo ? true : false
                            }
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
                            ref={imageRef}
                            image={image}
                            width={setSize?.('width')}
                            height={setSize?.('height')}
                            draggable={
                                type === "CANVAS" && moveBottomLogo ? true : false
                            }
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
                            ref={imageRef}
                            image={image}
                            width={setSize?.('width')}
                            height={setSize?.('height')}
                            draggable={
                                type === "CANVAS" && moveBottomLogo ? true : false
                            }
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
                    </Group>

                    {type === "CANVAS" && moveBottomLogo &&
                        <Transformer
                            ref={transformerRef}
                        />
                    }
                </Layer>
            </Stage>
        </div>
    )
}