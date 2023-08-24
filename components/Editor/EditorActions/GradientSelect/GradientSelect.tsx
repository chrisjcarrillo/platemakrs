import Image from "next/image";
import { useContext } from "react";
import { EditorContext, EditorContextType } from "../../../../context/editorContext";
import { Button } from 'antd';

export const GradientSelect = (
    props: {
        title?: string
    }
) => {

    const { title } = props;

    const {
        updateCustomTemplateSelection,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;


    return (
        <div className={`gradientSelect`}>
            <div className={`gradientSelect__title`}>
                <p className={`gradientSelect__text`}>{title}</p>
            </div>
            <div
                className={`colorSelect__left`}
            >

                <Button
                    onClick={() => (
                        updateCustomTemplateSelection?.('fadeSettings', {
                            ...currentCustomTemplate?.fadeSettings,
                            fadeStyle: 'top-bottom'
                        })
                    )}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundImage: `linear-gradient(0deg, 
                            #000000 0%,
                                #ffffff 100%)`,
                        border: '1px solid #ffffff'
                    }}
                    shape="circle"
                >
                </Button>
                <Button
                    onClick={() => updateCustomTemplateSelection?.('fadeSettings', {
                        ...currentCustomTemplate?.fadeSettings,
                        fadeStyle: 'bottom-top'
                    })}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundImage: `linear-gradient(0deg, 
                            #ffffff 0%,
                            #000000 100%)`,
                        border: '1px solid #ffffff'
                    }}
                    shape="circle"
                >
                </Button>

                <Button
                    onClick={() => updateCustomTemplateSelection?.('fadeSettings', {
                        ...currentCustomTemplate?.fadeSettings,
                        fadeStyle: 'center-circle'
                    })}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0) 0%, #000000 45%)`,
                        border: '1px solid #ffffff'
                    }}
                    shape="circle"
                >
                </Button>


                <Button
                    onClick={() => updateCustomTemplateSelection?.('fadeSettings', {
                        ...currentCustomTemplate?.fadeSettings,
                        fadeStyle: 'left-regular'
                    })}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundImage: `linear-gradient(to left, #000000 0px, #ffffff 100%)`,
                        border: '1px solid #ffffff'
                    }}
                    shape="circle"
                >
                </Button>

                <Button
                    onClick={() => updateCustomTemplateSelection?.('fadeSettings', {
                        ...currentCustomTemplate?.fadeSettings,
                        fadeStyle: 'left-circle'
                    })}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundImage: `radial-gradient(ellipse at left, #000000 0px, #ffffff 100%)`,
                        border: '1px solid #ffffff'
                    }}
                    shape="circle"
                >
                </Button>

                <Button
                    onClick={() => updateCustomTemplateSelection?.('fadeSettings', {
                        ...currentCustomTemplate?.fadeSettings,
                        fadeStyle: 'right-regular'
                    })}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundImage: `linear-gradient(to right, #000000 0px, #ffffff 100%)`,
                        border: '1px solid #ffffff'
                    }}
                    shape="circle"
                >
                </Button>

                <Button
                    onClick={() => updateCustomTemplateSelection?.('fadeSettings', {
                        ...currentCustomTemplate?.fadeSettings,
                        fadeStyle: 'right-circle'
                    })}
                    size="small"
                    className={`colorSelect__preset`}
                    style={{
                        backgroundImage: `radial-gradient(ellipse at right, #000000 0px, #ffffff 100%)`,
                        border: '1px solid #ffffff'
                    }}
                    shape="circle"
                >
                </Button>

            </div>
        </div>
    )
}