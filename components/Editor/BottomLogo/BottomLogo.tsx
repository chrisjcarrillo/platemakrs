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
    } = useContext(EditorContext) as EditorContextType;

    const { type, logoType, canvasReference, currentPreviewTemplate } = props;

    const imageSource = () => {
        return currentCustomTemplate?.bottomLogo?.url
    }

    const [image] = useImage(imageSource() ?? '');

    const imageRef = useRef<any>();
    const transformerRef = useRef<any>();
    const groupRef = useRef<any>();

    useEffect(() => {
        if (moveBottomLogo) {
            transformerRef.current.nodes([groupRef.current]);
        }
    }, [moveBottomLogo]);

    useEffect(() => {
        transformerRef?.current?.nodes([groupRef.current]);
        if (image) {
            imageRef?.current?.cache();
        }
    }, [image]);


    const calculateInitialPosition = (
        calcType?: string
    ) => {
        if (calcType === "x") {
            return currentCustomTemplate?.bottomLogo?.centerCoordinates?.x
        }
        return currentCustomTemplate?.bottomLogo?.centerCoordinates?.y

    }

    const setSize = (
        sizeType: string
    ) => {
        if (sizeType === "width") {
            return currentCustomTemplate?.bottomLogo?.width! as number
        }
        if (sizeType === "height")
            return currentCustomTemplate?.bottomLogo?.height! as number
    }

    return (
        <div
            className={
                `logo-bottom__container`
            }
            style={moveBottomLogo ?
                { zIndex: 10 } : {}
            }
        >
            <Stage
                width={canvasReference?.current?.clientWidth}
                height={canvasReference?.current?.clientHeight}
            >
                <Layer>
                    <Group
                        ref={groupRef}
                        draggable={
                            moveBottomLogo ? true : false
                        }
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
                                currentCustomTemplate?.bottomLogo?.glow?.enabled ? currentCustomTemplate?.bottomLogo?.glow?.color : ''
                            }
                            shadowBlur={5}
                            shadowOpacity={1}
                            shadowOffsetX={0}
                            shadowOffsetY={0}
                        />
                        <Image
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
                    </Group>

                    {moveBottomLogo &&
                        <Transformer
                            ref={transformerRef}
                        />
                    }
                </Layer>
            </Stage>
        </div>
    )
}