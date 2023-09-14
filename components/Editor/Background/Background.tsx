import { Hexagon } from "../../shared/Hexagon/Hexagon";
import { ICustomPlateTemplate } from "../../../interfaces/customTemplate.interface";
import * as ReactDOMServer from 'react-dom/server';
import { Pattern } from "../Pattern/Pattern";
import { Gradient } from "../Gradient/Gradient";
import { Pinstripe } from "../Pinstripe/Pinstripe";
import { BackgroundLogo } from "../BackgroundLogo/BackgroundLogo";
import Image from 'next/image';
import { DetailLogo1 } from "../DetailLogo1/DetailLogo1";
import { DetailLogo2 } from "../DetailLogo2/DetailLogo2";


export const Background = (
    props: {
        type?: 'PREVIEW' | 'CANVAS',
        customTemplate?: ICustomPlateTemplate
        canvasReference?: any
    }
) => {

    const {
        type,
        customTemplate, 
        canvasReference
    } = props;

    const svgString = encodeURIComponent(
        ReactDOMServer.renderToStaticMarkup(<Hexagon customTemplate={customTemplate} />)
    );


    return(
        <>
            {/* HOLES START */}
            <div className="background__holes"
                style={{
                    backgroundImage: `url('${customTemplate?.backgroundSettings?.color === '#ffffff' ? '../../images/resources/holes/holes-black.png' : '../../images/resources/holes/holes-white.png'}')`,
                    backgroundSize: 'contain',
                    backgroundPositionX: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            {/* HOLES END */}
            
            {
                customTemplate?.backgroundSettings?.pinstripe?.enabled && (
                    <Pinstripe
                    />
                )
            }

            {
                customTemplate?.detailLogo1?.enabled && (
                    <DetailLogo1
                        canvasReference={canvasReference}
                        type="CANVAS"
                        logoType="REGULAR"
                    />
                )
            }
            {
                customTemplate?.detailLogo2?.enabled && (
                    <DetailLogo2
                        canvasReference={canvasReference}
                        type="CANVAS"
                        logoType="REGULAR"
                    />
                )
            }

            {
                customTemplate?.backgroundLogo?.enabled && (
                    <BackgroundLogo
                        canvasReference={canvasReference}
                        type="CANVAS"
                        logoType="REGULAR"
                    />
                )
            }

            {/* { customTemplate?.fadeSettings?.enabled &&
                    <Gradient
                        template={template}
                        canvasReference={canvasReference}
                    />
            }

            { customTemplate?.patternSettings?.enabled && 
                <Pattern 
                    type={type}
                    template={template}
                    customTemplate={customTemplate}
                    canvasReference={canvasReference}
                />
            } */}
            {
                customTemplate?.backgroundSettings?.background?.enabled &&
                    <Image 
                        className="background__image"
                        fill
                        alt=""
                        quality={100}
                        sizes="100vw"
                        // src={customTemplate === undefined ? customTemplate?.backgroundSettings?.background?.file?.url :
                        //     customTemplate?.backgroundSettings?.background?.file?.url}
                        src={
                            customTemplate?.backgroundSettings?.background?.file?.name === "hexagon.svg" ? 
                            `data:image/svg+xml,${svgString}` : customTemplate?.backgroundSettings?.background?.file?.url
                        }
                        style={
                            {
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }
                        }
                    />
                    // <div className="background__image"
                    //     style={
                    //         customTemplate?.backgroundSettings?.background?.file?.name === "hexagon.svg" ? {
                    //             backgroundImage: `url('data:image/svg+xml,${svgString}')`,
                    //             backgroundSize: 'contain'
                    //         } : {
                    //         backgroundImage: `url('${
                    //             customTemplate === undefined ? customTemplate?.backgroundSettings?.background?.file?.url :
                    //             customTemplate?.backgroundSettings?.background?.file?.url
                    //         }')`,
                    //         backgroundSize: 'cover'
                    //         // backgroundImage: "url('../../../../public/images/bg/carbon-fiber-fade-up.png')"
                    //     }}
                    // />
            }
            {/* {
                customTemplate?.patternSettings?.enabled &&
                    <div 
                        className="background__logo-overlay"
                        style={{
                            opacity: customTemplate === undefined ? customTemplate?.patternSettings?.opacity : customTemplate?.patternSettings?.opacity,
                            backgroundImage: `url('${
                                customTemplate === undefined ? customTemplate?.patternSettings.logo?.url :
                                customTemplate?.patternSettings?.logo?.url
                            }')`,
                            backgroundRepeat: template.templateId === "3" || customTemplate?.customTemplate?.templateId === "3" ? `repeat-y` : ``,
                            backgroundSize: '25%',
                            backgroundPosition:
                                customTemplate === undefined ? `${customTemplate?.patternSettings?.position} center` : `${customTemplate?.patternSettings?.position} center`
                        }}
                    />
            } */}

            <div 
                className="background__bg" 
                style={{
                       backgroundColor: `${customTemplate?.backgroundSettings?.color ?? '#000000'}`
                }}
            />
        </>
    )
}
