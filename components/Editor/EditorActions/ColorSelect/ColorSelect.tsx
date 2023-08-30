import { Button, ColorPicker } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';


export const ColorSelect = (
    props:{
        type?: string,
        title?: string,
    }
) => {
    const { type, title } = props;
    const { currentCustomTemplate, updateCustomTemplateSelection } = useContext(EditorContext) as EditorContextType;
    // const [colorHex, setColorHex] = useState<Color | string>('#1677ff');

    
    // const updateColor = (Color: Color) => {
    //     setColorHex(Color)
        
    // }

    const updateColor = (type: any, value: any) => {
        if(type === "bottomLogoGlow"){
            updateCustomTemplateSelection?.('bottomLogo', {
                ...currentCustomTemplate?.bottomLogo,
                glow: {
                    ...currentCustomTemplate?.bottomLogo?.glow,
                    color: value
                }
            }) 
        }
        if(type === "mainLogoGlow"){
            updateCustomTemplateSelection?.('mainLogo', {
                ...currentCustomTemplate?.mainLogo,
                glow: {
                    ...currentCustomTemplate?.mainLogo?.glow,
                    color: value
                }
            })
        }
        if(type === "fadeColor1"){
            updateCustomTemplateSelection?.('fadeSettings', {
                ...currentCustomTemplate?.fadeSettings,
                fadeColor1: value
            })
        }
        if(type === "fadeColor2"){
            updateCustomTemplateSelection?.('fadeSettings', {
                ...currentCustomTemplate?.fadeSettings,
                fadeColor2: value
            })
        }
        if(type === "backgroundUrl"){
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {                 
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,  
                        color: value,
                    },
                },
            })
        }
        if(type === "backgroundColor"){
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                color: value
            })
        } 
        if(type === "backgroundStroke"){
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                stroke:{
                    ...currentCustomTemplate?.backgroundSettings?.stroke,
                    enabled: true,
                    color: value
                }
            })
        }
        if(type === "stateColor"){
            updateCustomTemplateSelection?.('state', {
                ...currentCustomTemplate?.state,
                color: value
            })
        }
        if(type === "stateStrokeColor"){
            updateCustomTemplateSelection?.('state', {
                ...currentCustomTemplate?.state,
                stroke:{
                    ...currentCustomTemplate?.state?.stroke,
                    color: value
                }
            })
        }
        if(type === "stateGlowColor"){
            updateCustomTemplateSelection?.('state', {
                ...currentCustomTemplate?.state,
                glow: {
                    ...currentCustomTemplate?.state?.glow,
                    color: value
                }
            })
        }

        if(type === "plateNumberColor"){
            updateCustomTemplateSelection?.('plateNumber', {
                ...currentCustomTemplate?.plateNumber,
                color: value
            })
        }
        if(type === "plateNumberStrokeColor"){
            updateCustomTemplateSelection?.('plateNumber', {
                ...currentCustomTemplate?.plateNumber,
                stroke:{
                    ...currentCustomTemplate?.plateNumber?.stroke,
                    color: value
                }
            })
        }
        if(type === "bottomTextColor"){
            updateCustomTemplateSelection?.('bottomText', {
                ...currentCustomTemplate?.bottomText,
                color: value
            })
        }
        if(type === "bottomTextStrokeColor"){
            updateCustomTemplateSelection?.('bottomText', {
                ...currentCustomTemplate?.bottomText,
                stroke:{
                    ...currentCustomTemplate?.bottomText?.stroke,
                    color: value
                }
            })
        }
        if(type === "bottomTextGlow"){
            updateCustomTemplateSelection?.('bottomText', {
                ...currentCustomTemplate?.bottomText,
                glow: {
                    ...currentCustomTemplate?.bottomText?.glow,
                    color: value
                }
            })
        }
    }

    return(
        <div className={`colorSelect`}>
            {
                title !== "" && 
                    <div className={`colorSelect__title`}> 
                        <p className={`colorSelect__text`}>Select {title} Color</p>
                    </div>
            }

            <div className={`colorSelect__left`}>
                <Button
                    onClick={() => updateColor(type, '#000000')}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundColor: '#000000',
                        border: '1px solid #ffffff'
                    }}
                    shape="circle"
                >
                    {/* Black */}
                </Button>
                <Button 
                    onClick={() => updateColor(type, '#ffffff')}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                />
                <Button 
                    onClick={() => updateColor(type, '#FF0000')}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundColor: '#FF0000',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Red */}
                </Button>
                <Button
                    onClick={() => updateColor(type, '#AAA9AD')}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundColor: '#AAA9AD',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Gray */}
                </Button>
                <Button
                    onClick={() => updateColor(type, '#0045FF')}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundColor: '#0045FF',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Blue */}
                </Button>
                <Button
                    onClick={() => updateColor(type, '#FF6C00')}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundColor: '#FF6C00',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Orange */}
                </Button>
                <Button
                    onClick={() => updateColor(type, '#FFFF00')}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundColor: '#FFFF00',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Yellow */}
                </Button>
            </div>
            <div className={`colorSelect__right`}>
                <ColorPicker
                    onChange={
                        (e: Color | string) => {
                            updateColor(type, (typeof e === 'string' ? e : e.toHexString()))
                        }}
                >
                    <Button type="link">
                        View More Colors
                    </Button>
                </ColorPicker>
            </div>
        </div>
    )
}