import { Hexagon } from "../../shared/Hexagon/Hexagon";
import { ITemplate } from "../../../interfaces/template.interface";
import { ICustomPlateTemplate } from "../../../interfaces/customTemplate.interface";
import * as ReactDOMServer from 'react-dom/server';
import { Stage, Layer, Image, Transformer, Rect } from 'react-konva';
import useImage from "use-image";
import { useContext, useEffect, useRef, useState } from "react"
import { InterfaceContext, InterfaceContextType } from "../../../context/interfaceContext";
import { EditorContext, EditorContextType } from "../../../context/editorContext";

export const Pattern = (
    props: {
        type?: 'CANVAS' | 'PREVIEW',
        template?: ITemplate,
        customTemplate?: ICustomPlateTemplate,
        canvasReference?: any,

    }
) => {

    const {
        type,
        template,
        canvasReference
    } = props;


    const {
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const {
        movePattern
    } = useContext(InterfaceContext) as InterfaceContextType;

    const patternTransformerRef = useRef<any>();
    const rectRef = useRef<any>();
    const layerRef = useRef<any>();
    const stageRef = useRef<any>();

    const [bgImage] = useImage(
        !currentCustomTemplate ? 
            template?.patternSettings.logo?.url :
                currentCustomTemplate?.patternSettings?.logo?.url
    )

    useEffect(() => {
        if (movePattern) {
            patternTransformerRef.current.nodes([rectRef.current]);
        }
    }, [movePattern]);

    useEffect(() => {
        patternTransformerRef?.current?.nodes([rectRef.current]);
        if (bgImage) {
            rectRef?.current?.cache();
        }
    }, [bgImage]);

    useEffect(() => {
            rectRef?.current?.cache();
    }, []);

    const calculateInitialPosition = (
        type?: string
    ) => {
        if (type === "x") return canvasReference?.current?.clientWidth - canvasReference?.current?.clientWidth / 1.5; //center
        return canvasReference?.current?.clientHeight - canvasReference?.current?.clientHeight / 1.25;
    }

    return (
        <Stage
            className="background__logo-overlay"
            width={canvasReference?.current?.clientWidth}
            height={canvasReference?.current?.clientHeight}
            style={
                movePattern ? {
                    zIndex: 100000
                } : {

                }
            }
        >
            <Layer
                ref={layerRef}
            >
                <Rect
                    draggable={movePattern}
                    ref={rectRef}
                    width={canvasReference?.current?.clientWidth}
                    height={canvasReference?.current?.clientHeight}
                    fillPatternImage={bgImage}
                    fillPatternX={calculateInitialPosition('x')}
                    fillPatternY={calculateInitialPosition('y')}
                    fillPatternScale={ type === "CANVAS" ? {
                        x: 0.35,
                        y: 0.5
                    } : {
                        x: 0.1,
                        y: 0.1
                    }}
                    fillPatternOffset={{
                        x: 0,
                        y: 0,
                    }}
                    opacity={
                        currentCustomTemplate !== undefined ? 
                        currentCustomTemplate?.patternSettings?.opacity :
                        template?.patternSettings?.opacity
                    }
                    fillPatternRepeat={
                        currentCustomTemplate !== undefined ? 
                        currentCustomTemplate?.patternSettings?.repeatType :
                        template?.patternSettings?.repeatType
                    }
                />
                {movePattern &&
                    <Transformer
                        opacity={1}
                        ref={patternTransformerRef}
                    />
                }
            </Layer>
        </Stage>
    )
}
