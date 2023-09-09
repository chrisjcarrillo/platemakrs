import { Button, ColorPicker } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';


export const ColorSelect = (
    props: {
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
        switch (type) {
            case 'backgroundPinstripe':
                updateCustomTemplateSelection?.('backgroundSettings', {
                    ...currentCustomTemplate?.backgroundSettings,
                    pinstripe: {
                        ...currentCustomTemplate?.backgroundSettings?.pinstripe,
                        enabled: true,
                        color: value
                    }
                })
                break;
            case 'detailLogo2':
                updateCustomTemplateSelection?.('detailLogo2', {
                    ...currentCustomTemplate?.detailLogo2,
                    glow: {
                        ...currentCustomTemplate?.detailLogo2?.glow,
                        color: value
                    }
                })
                break;
            case 'detailLogo1':
                updateCustomTemplateSelection?.('detailLogo1', {
                    ...currentCustomTemplate?.detailLogo1,
                    glow: {
                        ...currentCustomTemplate?.detailLogo1?.glow,
                        color: value
                    }
                })
                break;
            case 'bottomLogoGlow':
                updateCustomTemplateSelection?.('bottomLogo', {
                    ...currentCustomTemplate?.bottomLogo,
                    glow: {
                        ...currentCustomTemplate?.bottomLogo?.glow,
                        color: value
                    }
                })
                break;
            case 'mainLogoGlow':
                updateCustomTemplateSelection?.('mainLogo', {
                    ...currentCustomTemplate?.mainLogo,
                    glow: {
                        ...currentCustomTemplate?.mainLogo?.glow,
                        color: value
                    }
                })
                break;
            case 'backgroundUrl':
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
                break;
            case 'backgroundColor':
                updateCustomTemplateSelection?.('backgroundSettings', {
                    ...currentCustomTemplate?.backgroundSettings,
                    color: value
                })
                break;
            case 'backgroundStroke':
                updateCustomTemplateSelection?.('backgroundSettings', {
                    ...currentCustomTemplate?.backgroundSettings,
                    stroke: {
                        ...currentCustomTemplate?.backgroundSettings?.stroke,
                        enabled: true,
                        color: value
                    }
                })
                break;
            case 'stateColor': 
                updateCustomTemplateSelection?.('state', {
                    ...currentCustomTemplate?.state,
                    color: value
                })
                break;
            case 'stateStrokeColor':
                updateCustomTemplateSelection?.('state', {
                    ...currentCustomTemplate?.state,
                    stroke: {
                        ...currentCustomTemplate?.state?.stroke,
                        color: value
                    }
                })
                break;
            case 'stateGlowColor':
                updateCustomTemplateSelection?.('state', {
                    ...currentCustomTemplate?.state,
                    glow: {
                        ...currentCustomTemplate?.state?.glow,
                        color: value
                    }
                })
                break;
            case 'plateNumberColor':
                updateCustomTemplateSelection?.('plateNumber', {
                    ...currentCustomTemplate?.plateNumber,
                    color: value
                })
                break;
            case 'plateNumberStrokeColor':
                updateCustomTemplateSelection?.('plateNumber', {
                    ...currentCustomTemplate?.plateNumber,
                    stroke: {
                        ...currentCustomTemplate?.plateNumber?.stroke,
                        color: value
                    }
                })
                break;
            case 'bottomTextColor':
                updateCustomTemplateSelection?.('bottomText', {
                    ...currentCustomTemplate?.bottomText,
                    color: value
                })
                break;
            case 'bottomTextStrokeColor':
                updateCustomTemplateSelection?.('bottomText', {
                    ...currentCustomTemplate?.bottomText,
                    stroke: {
                        ...currentCustomTemplate?.bottomText?.stroke,
                        color: value
                    }
                })
                break;
            case 'bottomTextGlow':
                updateCustomTemplateSelection?.('bottomText', {
                    ...currentCustomTemplate?.bottomText,
                    glow: {
                        ...currentCustomTemplate?.bottomText?.glow,
                        color: value
                    }
                })
                break;
            default:
                break;
        }
        // if (type === "fadeColor1") {
        //     updateCustomTemplateSelection?.('fadeSettings', {
        //         ...currentCustomTemplate?.fadeSettings,
        //         fadeColor1: value
        //     })
        // }
        // if (type === "fadeColor2") {
        //     updateCustomTemplateSelection?.('fadeSettings', {
        //         ...currentCustomTemplate?.fadeSettings,
        //         fadeColor2: value
        //     })
        // }
    }

    return (
        <div className={`colorSelect animate__animated animate__fadeIn`}>
            {
                title !== "" &&
                <div className={`colorSelect__title animate__animated animate__fadeIn`}>
                    <p className={`colorSelect__text`}>{type === "backgroundUrl" ? `Select Honeycomb Color` : `Select ${title} Color`}</p>
                </div>
            }

            <div className={`colorSelect__left`}>
                {type !== 'backgroundColor' && currentCustomTemplate?.originalColor === "" && (
                    <Button
                        onClick={() => updateColor(type, currentCustomTemplate?.originalColor)}
                        size="small"
                        className={`colorSelect__preset`}
                        style={{
                            backgroundColor: `${currentCustomTemplate?.originalColor}`,
                            border: '1px solid #ffffff'
                        }}
                        shape="circle"
                    >
                        {/* Black */}
                    </Button>
                )}

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
                    placement='bottom'
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