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

export const Logo = (props: ILogo) => {

    const {
        moveLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        currentCustomTemplate,
        currentTemplate,
        currentLicensePlate
    } = useContext(EditorContext) as EditorContextType;

    const { type, logoType, canvasReference, currentPreviewTemplate } = props;

    const imageSource = () => {
        if(logoType === "REGULAR"){
            if(type === "CANVAS"){
                if(!currentCustomTemplate){
                    return currentTemplate?.mainLogo?.url
                }
            }
            if(type === "PREVIEW" ){
                return currentPreviewTemplate?.mainLogo?.url
            }
        }
        if(logoType === "BOTTOM"){
            if(type === "CANVAS"){
                if(!currentCustomTemplate){
                    return currentTemplate?.bottomLogo?.url
                }
            }
            if(type === "PREVIEW" ){
                return currentPreviewTemplate?.bottomLogo?.url
            }
        }
        return currentCustomTemplate?.mainLogo?.url
    }

    const [image] = useImage(imageSource() ?? '');

    const imageRef = useRef<any>();
    const transformerRef = useRef<any>();
    const groupRef = useRef<any>();

    useEffect(() => {
        console.log(moveLogo)
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


    const calculateInitialPosition = (
        calcType?: string
    ) => {
        // if(type === "x" && initialPosition === "left") return canvasReference?.current?.clientWidth - canvasReference?.current?.clientWidth / 4;
        // if(type === "x" && initialPosition === "right") return canvasReference?.current?.clientWidth - canvasReference?.current?.clientWidth / 1;
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

    // const setSize = (
    //     sizeType: string
    // ) => {
    //     if(type === "CANVAS"){
    //         if(sizeType === "width"){
    //             return Math.max(
    //                 canvasReference?.current?.clientWidth / 3.5
    //             );
    //         }
    //         if(sizeType === "height"){
    //             return Math.max(
    //                 canvasReference?.current?.clientHeight / 1.85
    //             )
    //         }
    //     }
    // }

    return (
        <div 
            className={
                `logo__container`
            }
            style={ moveLogo ? 
                { zIndex: 7 } : {}
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
                                    currentCustomTemplate?.mainLogo?.glow?.enabled ? currentCustomTemplate?.mainLogo?.glow?.color : ''    
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
                        {/* <Image
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
                            /> */}
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


    // const dragBoundFunc = (pos: any) => {
    //     console.info(
    //         'Position:', pos
    //     )
    //     let newY = pos.y;
    //     let newX = pos.x;
    //     if(pos.y < -(canvasReference?.current?.clientHeight) + 165) // 165
    //         newY = canvasReference?.current?.clientHeight - 165;
    //     if(pos.y > canvasReference?.current?.clientHeight - 100) // 165
    //         newY = canvasReference?.current?.clientHeight - 100
    //     return {
    //       x: newX,
    //       y: newY
    //     };
    // }
// const dragBoundFunc = (pos: any) => {
//     console.info(
//         'Position:', pos
//     )
//     // let { x, y } = pos;
//     let newY = pos.y;
//     let newX = pos.x;
//     // This works on Mobile
//     // console.log(y) 
//                 // console.log(canvasReference?.current?.clientHeight - 10)
//         // newY = canvasReference?.current?.clientHeight - 165;
//         // newY = canvasReference?.current?.clientHeight - 165;
//     // if(y < -(canvasReference?.current?.clientHeight) + 25)  
//     //     // y = -(canvasReference?.current?.clientHeight - 45);
//                 // newX = canvasReference?.current?.clientWidth - 85; 
//     //     // x = canvasReference?.current?.clientWidth - 145;
//     // if(x < -(canvasReference?.current?.clientWidth) + 265)
//         // x = -(canvasReference?.current?.clientWidth) + 265
//     if(pos.y < -(canvasReference?.current?.clientHeight) + 165) // 165
//         newY = canvasReference?.current?.clientHeight - 165;
//     if(pos.y > canvasReference?.current?.clientHeight - 100) // 165
//         // console.log(canvasReference?.current?.clientHeight - 100)
//         // console.log(pos.y)
//         newY = canvasReference?.current?.clientHeight - 100
//     // if(pos.x > -(canvasReference?.current?.clientWidth) + 155)
//     //     newX = canvasReference?.current?.clientWidth - 150;
//     // if(pos.x < canvasReference?.current?.clientWidth - 350)
//     //     newX = canvasReference?.current?.clientWidth - 350;
//     return {
//       x: newX,
//       y: newY
//     };
                        // shadowEnabled={
                        //     true
                        // }
                        // shadowColor={
                        //     'green'
                        // }
                        // shadowBlur={10}
                        // shadowOpacity={1}
                        // shadowOffsetX={0}
                        // shadowOffsetY={0}
                        // stroke={'#ffffff'}



    // const groupDragBound = (pos) => {
    //     let { x, y } = pos;
    //     const sw = stage.width();
    //     const sh = stage.height();
    //     if (minMaxY[0] + y < 0) y = -1 * minMaxY[0];
    //     if (minMaxX[0] + x < 0) x = -1 * minMaxX[0];
    //     if (minMaxY[1] + y > sh) y = sh - minMaxY[1];
    //     if (minMaxX[1] + x > sw) x = sw - minMaxX[1];
    //     return { x, y };
    // };


    // const dragBoundFunc = (pos: any) => {
    
    //     let newY = pos.y;
    //     let newX = pos.x;
    //     // clientHeight = 165 // clientWidth = 350
    //     // console.log(pos.x)
    //     // Bottom Safe
    //     if(pos.y > -(canvasReference?.current?.clientHeight) + 165)
    //         newY = -(canvasReference?.current?.clientHeight - 150);
    //     // Top Safe
    //     if(pos.y < -(canvasReference?.current?.clientHeight) + 25)  
    //         newY = -(canvasReference?.current?.clientHeight - 45);
    //     if(pos.x > -(canvasReference?.current?.clientWidth) + 500)
    //         newX = canvasReference?.current?.clientWidth - 145;
    //     if(pos.x < -(canvasReference?.current?.clientWidth) + 25)
    //         newX = -(canvasReference?.current?.clientWidth) + 265
    //         // newX = canvasReference?.current?.clientWidth - 145;

    //     // if(pos.x)
    //     // if(pos.y > (canvasReference?.current?.clientHeight) - 165){
    //     //     newY = -(canvasReference?.current?.clientHeight - 150);
    //     // }
    //     // if (pos.y > canvasReference?.current?.clientHeight - 10) {
    //     //   newY = canvasReference?.current?.clientHeight - 10;
    //     // }
    //     // if (pos.y < -(canvasReference?.current?.clientHeight - 1)) {
    //     // //   newY = canvasReference?.current?.clientHeight;
    //     // }
    //     // if (pos.y > -(canvasReference?.current?.clientHeight - 1)) {
    //     //     // newY = canvasReference?.current?.clientHeight;
    //     // }
    //     // if (pos.x > canvasReference?.current?.clientWidth - 10) {
    //     //   newX = canvasReference?.current?.clientWidth - 10;
    //     // }
    //     // if (pos.x < -(canvasReference?.current?.clientWidth - 10)) {
    //     //   newX = -(canvasReference?.current?.clientWidth - 10);
    //     // }
    //     return {
    //       x: newX,
    //       y: newY
    //     };
    // }