import React, { ReactElement, useContext, useEffect, useRef, useState } from "react"
import { EditorContext, EditorContextType } from "../../../context/editorContext";
import { Stage, Layer, Image, Transformer, Group } from 'react-konva';
import useImage from "use-image";
import { ITemplate } from "../../../interfaces/template.interface";
import { InterfaceContext, InterfaceContextType } from "../../../context/interfaceContext";
import { renderToStaticMarkup } from 'react-dom/server';
import Mercedes from "../../resources/cars/mercedes/logos/Mercedes";
import { MiamiHeatBasketball } from "../../resources/sports/basketball/miami-heat/logos/miami-heat-basketball";
import { PorscheSolid } from "../../resources/cars/porsche/logos/crest/PorscheSolid";
import { AstonMartinLogo } from "../../resources/cars/aston-martin/logos/AstonMartinLogo";
import { Cobra } from "../../resources/cars/ford/logos/Cobra";
import { FerrariHorse } from "../../resources/cars/ferrari/logos/horse/FerrariHorse";

interface ILogo {
    currentPreviewTemplate?: ITemplate
    canvasReference?: any;
    type?: 'PREVIEW' | 'CANVAS';
}

export const Logo = (props: ILogo) => {

    const {
        moveLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        currentCustomTemplate,
        currentLicensePlate
    } = useContext(EditorContext) as EditorContextType;

    const { 
        type, 
        canvasReference
    } = props;

    const imageSource = () => {
        return currentCustomTemplate?.mainLogo?.url
    }

    const [image] = useImage(imageSource() ?? '');

    const imageRef = useRef<any>();
    const transformerRef = useRef<any>();
    const groupRef = useRef<any>();

    useEffect(() => {
        if (moveLogo) {
          transformerRef.current.nodes([groupRef.current]);
        }
    }, [moveLogo]);

    useEffect(() => {
        transformerRef?.current?.nodes([groupRef.current]);
        if(image){
            imageRef?.current?.cache();        
        }
    }, [image]);

    console.log(image);


    const calculateInitialPosition = (
        calcType?: string
    ) => {
        if(type === "CANVAS"){
            if(calcType === "x"){
                if(currentLicensePlate?.platePosition === "" || !currentLicensePlate?.platePosition){
                    if(currentCustomTemplate?.startPlatePosition === "left"){
                        return currentCustomTemplate?.mainLogo?.rightCoordinates?.x
                    }
                    if(currentCustomTemplate?.startPlatePosition === "center"){
                        return currentCustomTemplate?.mainLogo?.centerCoordinates?.x
                    }
                    if(currentCustomTemplate?.startPlatePosition === "right"){
                        return currentCustomTemplate?.mainLogo?.leftCoordinates?.x
                    } 
                }
                if(currentLicensePlate?.platePosition === "left"){
                    return currentCustomTemplate?.mainLogo?.rightCoordinates?.x
                }
                if(currentLicensePlate?.platePosition === "center"){
                    return currentCustomTemplate?.mainLogo?.centerCoordinates?.x
                }
                if(currentLicensePlate?.platePosition === "right"){                        
                    return currentCustomTemplate?.mainLogo?.leftCoordinates?.x
                } 

            } else {
                if(currentCustomTemplate?.startPlatePosition === "center" || currentLicensePlate?.platePosition === "center"){
                    return currentCustomTemplate?.mainLogo?.centerCoordinates?.y
                }
                if(currentCustomTemplate?.startPlatePosition === "left" || currentLicensePlate?.platePosition === "left"){
                    return currentCustomTemplate?.mainLogo?.rightCoordinates?.y
                }
                if(currentCustomTemplate?.startPlatePosition === "right" || currentLicensePlate?.platePosition === "right"){
                    return currentCustomTemplate?.mainLogo?.leftCoordinates?.y
                }
            }
        }
        if(type === "PREVIEW"){
            if(calcType === "x") return canvasReference?.current?.clientWidth - canvasReference?.current?.clientWidth / 1.5; //center
            return canvasReference?.current?.clientHeight - canvasReference?.current?.clientHeight / 1.5;
        }
        
    }

    const setSize = (
        sizeType: string
    ) => {
        if(type === "PREVIEW"){
        }
        if(type === "CANVAS"){
            if(sizeType === "width"){
                return currentCustomTemplate?.mainLogo?.width! as number
            }
            if(sizeType === "height")
                return currentCustomTemplate?.mainLogo?.height! as number
        }
    }

    return (
        <div 
            className={
                `logo__container`
            }
            style={ moveLogo ? 
                { zIndex: 30 } : {}
            }
        >
            <Stage            
                width={canvasReference?.current?.clientWidth} 
                height={canvasReference?.current?.clientHeight}
            >
                <Layer>
                        <Group 
                            ref={groupRef}
                            draggable
                        >
                            <Image
                                key={1}
                                ref={imageRef}
                                image={image}
                                width={setSize?.('width') ?? 100}
                                height={setSize?.('height') ?? 100}
                                x={
                                    calculateInitialPosition('x')
                                }
                                y={
                                    calculateInitialPosition('y')
                                }
                                shadowEnabled={
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? true : false                   
                                }
                                shadowColor={
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? currentCustomTemplate?.mainLogo?.glow?.color : '#000000'    
                                }
                                shadowBlur={20}
                                shadowOpacity={1}
                                shadowOffsetX={0}
                                shadowOffsetY={0}
                            />
                        <Image
                                key={2}
                                ref={imageRef}
                                image={image}
                                width={setSize?.('width') ?? 100}
                                height={setSize?.('height') ?? 100}
                                x={
                                    calculateInitialPosition('x')
                                }
                                y={
                                    calculateInitialPosition('y')
                                }
                                shadowEnabled={
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? true : false                   
                                }
                                shadowColor={
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? currentCustomTemplate?.mainLogo?.glow?.color : ''    
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
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? true : false                   
                                }
                                shadowColor={
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? currentCustomTemplate?.mainLogo?.glow?.color : ''    
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
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? true : false                   
                                }
                                shadowColor={
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? currentCustomTemplate?.mainLogo?.glow?.color : ''    
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
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? true : false                   
                                }
                                shadowColor={
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? currentCustomTemplate?.mainLogo?.glow?.color : ''    
                                }
                                shadowBlur={5}
                                shadowOpacity={1}
                                shadowOffsetX={0}
                                shadowOffsetY={0}
                            />
                        </Group>
                        { type === "CANVAS" && moveLogo &&
                            <Transformer
                                ref={transformerRef} 
                            /> 
                        }
                </Layer>
            </Stage>
        </div>
    )
}