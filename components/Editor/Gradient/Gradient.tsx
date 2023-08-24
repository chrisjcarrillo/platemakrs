import { ITemplate } from "../../../interfaces/template.interface"
import { ICustomPlateTemplate } from "../../../interfaces/customTemplate.interface"
import { InterfaceContext, InterfaceContextType } from "../../../context/interfaceContext";
import { EditorContext, EditorContextType } from "../../../context/editorContext";
import { Stage, Layer, Transformer, Group, Rect } from 'react-konva';
import { useContext, useEffect, useRef, useState } from "react"
import { Html } from 'react-konva-utils';



export const Gradient = (
    props: {
        template?: ITemplate,
        canvasReference?: any
    }
) => {

    const {
        template,
        canvasReference
    } = props;


    const {
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const gradientStyle = () => {
        // top-bottom
        if(currentCustomTemplate){
            if (currentCustomTemplate?.fadeSettings?.fadeStyle === 'top-bottom') {
                return `linear-gradient(0deg, 
                            ${currentCustomTemplate?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 0%,
                                ${currentCustomTemplate?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 100%)`
            }
            // bottom-top
            if (currentCustomTemplate?.fadeSettings?.fadeStyle === 'bottom-top') {
                return `linear-gradient(0deg, 
                        ${currentCustomTemplate?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0%,
                            ${currentCustomTemplate?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
            // center-circle
            if (currentCustomTemplate?.fadeSettings?.fadeStyle === 'center-circle') {
                return `radial-gradient(circle, rgba(0,0,0,0) 0%, ${currentCustomTemplate?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 45%)`
            }
            if (currentCustomTemplate?.fadeSettings?.fadeStyle === 'center-circle-wide') {
                return `radial-gradient(circle, rgba(0,0,0,0) 0%, ${currentCustomTemplate?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 100%)`
            }
            if (currentCustomTemplate?.fadeSettings?.fadeStyle === 'center-circle-inverted') {
                return `radial-gradient(circle, ${currentCustomTemplate?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 35%, ${currentCustomTemplate?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 50%, #00685d00 100%)`
            }
            // left-regular
            if (currentCustomTemplate?.fadeSettings?.fadeStyle === 'left-regular') {
                return `linear-gradient(to right, ${currentCustomTemplate?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0px, ${currentCustomTemplate?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
            // left-circle
            if (currentCustomTemplate?.fadeSettings?.fadeStyle === 'left-circle') {
                return `radial-gradient(ellipse at left, ${currentCustomTemplate?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0px, ${currentCustomTemplate?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
            // right-regular
            if (currentCustomTemplate?.fadeSettings?.fadeStyle === 'right-regular') {
                return `linear-gradient(to left, ${currentCustomTemplate?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0px, ${currentCustomTemplate?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
            if (currentCustomTemplate?.fadeSettings?.fadeStyle === 'right-circle') {
                return `radial-gradient(ellipse at right, ${currentCustomTemplate?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0px, ${currentCustomTemplate?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
        } else {
            if (template?.fadeSettings?.fadeStyle === 'top-bottom') {
                return `linear-gradient(0deg, 
                            ${template?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 0%,
                                ${template?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 100%)`
            }
            // bottom-top
            if (template?.fadeSettings?.fadeStyle === 'bottom-top') {
                return `linear-gradient(0deg, 
                        ${template?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0%,
                            ${template?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
            // center-circle
            if (template?.fadeSettings?.fadeStyle === 'center-circle') {
                return `radial-gradient(circle, rgba(0,0,0,0) 0%, ${template?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 45%)`
            }

            
            // left-regular
            if (template?.fadeSettings?.fadeStyle === 'left-regular') {
                return `linear-gradient(to right, ${template?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0px, ${template?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
            // left-circle
            if (template?.fadeSettings?.fadeStyle === 'left-circle') {
                return `radial-gradient(ellipse at left, ${template?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0px, ${template?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
            // right-regular
            if (template?.fadeSettings?.fadeStyle === 'right-regular') {
                return `linear-gradient(to left, ${template?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0px, ${template?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
            if (template?.fadeSettings?.fadeStyle === 'right-circle') {
                return `radial-gradient(ellipse at right, ${template?.fadeSettings?.fadeColor1 ?? '#ffffff00'} 0px, ${template?.fadeSettings?.fadeColor2 ?? '#ffffff00'} 100%)`
            }
        }
        
    }

    return (
        <div
            className="background__gradient-overlay"
            style={{
                backgroundImage: gradientStyle?.(),
            }}
        />
    )
}