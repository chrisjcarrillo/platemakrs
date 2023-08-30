import { Button, ColorPicker } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';


export const PresetColorSelect = (
    props: {
        type?: string,
        title?: string,
    }
) => {
    const { type, title } = props;
    const { 
        currentCustomTemplate, 
        updateCustomTemplateSelection 
    } = useContext(EditorContext) as EditorContextType;
    
    const updateColor = (type: any, value: any) => {
        if (type === "detailLogo2") {
            updateCustomTemplateSelection?.('detailLogo2', {
                ...currentCustomTemplate?.detailLogo2,
                url: `${currentCustomTemplate?.detailLogo2?.filePath}/${value}.${currentCustomTemplate.detailLogo2?.imageType}`,
            })
        }
        if (type === "detailLogo1") {
            updateCustomTemplateSelection?.('detailLogo1', {
                ...currentCustomTemplate?.detailLogo1,
                url: `${currentCustomTemplate?.detailLogo1?.filePath}/${value}.${currentCustomTemplate.detailLogo1?.imageType}`,
            })
        }
        if (type === "mainLogo") {
            updateCustomTemplateSelection?.('mainLogo', {
                ...currentCustomTemplate?.mainLogo,
                url: `${currentCustomTemplate?.mainLogo?.filePath}/${value}.${currentCustomTemplate.mainLogo?.imageType}`,
            })
        }
        if (type === "bottomLogo") {
            updateCustomTemplateSelection?.('bottomLogo', {
                ...currentCustomTemplate?.bottomLogo,
                url: `${currentCustomTemplate?.bottomLogo?.filePath}/${value}.${currentCustomTemplate.bottomLogo?.imageType}`,
            })
        }
        if (type === "backgroundLogo") {
            updateCustomTemplateSelection?.('backgroundLogo', {
                ...currentCustomTemplate?.backgroundLogo,
                url: `${currentCustomTemplate?.backgroundLogo?.filePath}/${value}.${currentCustomTemplate.backgroundLogo?.imageType}`,
            })
        }
        if (type === "backgroundSetting") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {                 
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        url: `${currentCustomTemplate?.backgroundSettings?.background?.file?.filePath}/${value}.${currentCustomTemplate?.backgroundSettings?.background?.file?.imageType}`,
                    },
                },
            })
        }

    }

    return (
        <div className={`presetColorSelect`}>
            {
                title !== "" &&
                <div className={`presetColorSelect__title`}>
                    <p className={`presetColorSelect__text`}>Select {title} Color</p>
                </div>
            }
            <div className={`presetColorSelect__left`}>
                <Button
                    onClick={() => updateColor(type, 'regular')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundImage: "url('../../images/resources/selector/regular.png')",
                        // backgroundColor: '#000000',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Black */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'black')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#000000',
                        border: '1px solid #ffffff'
                    }}
                    shape="circle"
                >
                    {/* Black */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'white')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                />
                <Button
                    onClick={() => updateColor(type, 'red')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#FF0000',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Red */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'gray')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#AAA9AD',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Gray */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'dark-blue')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#0045FF',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Blue */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'orange')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#FF6C00',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Orange */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'yellow')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#FFFF00',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Yellow */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'light-blue')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#0090ff',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Yellow */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'green')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#2ac700',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Yellow */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'purple')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#8400e0',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Yellow */}
                </Button>
                <Button
                    onClick={() => updateColor(type, 'pink')}
                    size="small"
                    className={`presetColorSelect__preset`}
                    style={{
                        backgroundColor: '#fd00f4',
                        border: '1px solid #000000'
                    }}
                    shape="circle"
                >
                    {/* Yellow */}
                </Button>
            </div>
        </div>
    )
}