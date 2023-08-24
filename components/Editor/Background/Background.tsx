import { Hexagon } from "../../shared/Hexagon/Hexagon";
import { ITemplate } from "../../../interfaces/template.interface";  
import { ICustomPlateTemplate } from "../../../interfaces/customTemplate.interface";
import * as ReactDOMServer from 'react-dom/server';
import { Pattern } from "../Pattern/Pattern";
import { Gradient } from "../Gradient/Gradient";
import { Stage, Layer, Image, Transformer, Rect } from 'react-konva';
import { Pinstripe } from "../Pinstripe/Pinstripe";
import { BackgroundLogo } from "../BackgroundLogo/BackgroundLogo";


export const Background = (
    props: {
        type?: 'PREVIEW' | 'CANVAS',
        template?: ITemplate,
        customTemplate?: ICustomPlateTemplate
        canvasReference?: any
    }
) => {

    const {
        type,
        template,
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
                template?.backgroundSettings?.pinstripe?.enabled && (
                    <Pinstripe
                    />
                )
            }

            {
                template?.backgroundLogo?.enabled && (
                    <BackgroundLogo
                        canvasReference={canvasReference}
                        type="CANVAS"
                        logoType="REGULAR"
                    />
                )
            }

            { template?.fadeSettings?.enabled &&
                    <Gradient
                        template={template}
                        canvasReference={canvasReference}
                    />
            }

            { template?.patternSettings?.enabled && 
                <Pattern 
                    type={type}
                    template={template}
                    customTemplate={customTemplate}
                    canvasReference={canvasReference}
                />
            }
            {
                template?.backgroundSettings?.background?.enabled &&
                    <div className="background__image"
                        style={
                            customTemplate?.backgroundSettings?.background?.file?.name === "hexagon.svg" ? {
                                backgroundImage: `url('data:image/svg+xml,${svgString}')`,
                                backgroundSize: 'contain'
                            } : {
                            backgroundImage: `url('${
                                customTemplate === undefined ? template?.backgroundSettings?.background?.file?.url :
                                customTemplate?.backgroundSettings?.background?.file?.url
                            }')`,
                            backgroundSize: 'cover'
                            // backgroundImage: "url('../../../../public/images/bg/carbon-fiber-fade-up.png')"
                        }}
                    />
            }
            {/* {
                template?.patternSettings?.enabled &&
                    <div 
                        className="background__logo-overlay"
                        style={{
                            opacity: customTemplate === undefined ? template?.patternSettings?.opacity : customTemplate?.patternSettings?.opacity,
                            backgroundImage: `url('${
                                customTemplate === undefined ? template?.patternSettings.logo?.url :
                                customTemplate?.patternSettings?.logo?.url
                            }')`,
                            backgroundRepeat: template.templateId === "3" || customTemplate?.template?.templateId === "3" ? `repeat-y` : ``,
                            backgroundSize: '25%',
                            backgroundPosition:
                                customTemplate === undefined ? `${template?.patternSettings?.position} center` : `${customTemplate?.patternSettings?.position} center`
                        }}
                    />
            } */}

            <div 
                className="background__bg" 
                style={
                    customTemplate === undefined
                    ? {
                       backgroundColor: `${template?.backgroundSettings?.color ?? '#000000'}`
                   } : {
                       backgroundColor: `${customTemplate?.backgroundSettings?.color ?? '#000000'}`
                   }
                }
            />
        </>
    )
}
