import { Button, ColorPicker } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';
import { Hexagon } from '../../../shared/Hexagon/Hexagon';

export const BackgroundSelect = (
    props: {
        type?: string,
        title?: string,
    }
) => {
    const { type, title } = props;
    const { currentCustomTemplate, updateCustomTemplateSelection } = useContext(EditorContext) as EditorContextType;

    const changeBackground = (name: string) => {
        
        if (name === "carbonFiber") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: 'carbon-fiber',
                        url: '/images/resources/backgrounds/carbon-fiber/regular/carbon-fiber.png'
                    }
                }
            })
        }
        if (name === "3dHex") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: '3d-hexagon',
                        url: '/images/bg/3d-hexagon.png'
                    }
                }
            })
        }
        if (name === "honeycomb") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: 'hexagon.svg',
                        element: Hexagon
                    }
                }
            })
        }
        if(name === "forged"){
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: 'forged',
                        url: '/images/resources/backgrounds/carbon-fiber/forged/regular.png'
                    }
                }
            })
        }
        if(name === "honeycomb-lambo"){ 
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        filePath: '/images/resources/cars/lamborghini/patterns/option-1/colors',
                        imageType: 'png',
                        name: 'honeycomb-lambo',
                        url: '/images/resources/cars/lamborghini/patterns/option-1/colors/regular.png'
                    }
                }
            })
        }
        if(name === "honeycomb-8"){
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        filePath: '/images/resources/backgrounds/hexagon/option-8/colors',
                        imageType: 'png',
                        name: 'honeycomb-8',
                        url: '/images/resources/backgrounds/hexagon/option-8/colors/red.png'
                    }
                }
            })
        }

        // Down START
        if (name === "3d-down") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: '3d-hexagon-down',
                        url: '/images/resources/backgrounds/hexagon/3d/fade-down.png'
                    }
                }
            })
        }
        if (name === "hexagonDown") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        filePath: '/images/resources/backgrounds/hexagon/fade-down/colors',
                        imageType: 'png',
                        name: 'hexagon-down',
                        url: '/images/resources/backgrounds/hexagon/fade-down/colors/black.png'
                    }
                }
            })
        }
        if (name === "carbonFiberDown") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: 'carbon-fiber-fade-down.png',
                        url: '/images/bg/carbon-fiber-fade-down.png'
                    }
                }
            })
        }
        if(name === "forged-down"){
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: 'forged-down',
                        url: '/images/resources/backgrounds/carbon-fiber/forged/fade-down.png'
                    }
                }
            })
        }
        if(name === "honeycomb-lambo-down"){ 
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        filePath: '/images/resources/cars/lamborghini/patterns/option-1/fade-down',
                        imageType: 'png',
                        name: 'honeycomb-lambo-down',
                        url: '/images/resources/cars/lamborghini/patterns/option-1/fade-down/regular.png'
                    }
                }
            })
        }
        // Down END

        // Up START
        if (name === "carbonFiberUp") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: 'carbon-fiber-fade-up.png',
                        url: '/images/bg/carbon-fiber-fade-up.png'
                    }
                }
            })
        }
        if (name === "3d-up") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: '3d-hexagon-up',
                        url: '/images/resources/backgrounds/hexagon/3d/fade-up.png'
                    }
                }
            })
        }
        if (name === "hexagonUp") {
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        filePath: '/images/resources/backgrounds/hexagon/fade-up/colors',
                        imageType: 'png',
                        name: 'hexagon-up',
                        url: '/images/resources/backgrounds/hexagon/fade-up/colors/black.png'
                    }
                }
            })
        }
        if(name === "forged-up"){
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        name: 'forged-up',
                        url: '/images/resources/backgrounds/carbon-fiber/forged/fade-up.png'
                    }
                }
            })
        }
        if(name === "honeycomb-lambo-up"){ 
            updateCustomTemplateSelection?.('backgroundSettings', {
                ...currentCustomTemplate?.backgroundSettings,
                background: {
                    ...currentCustomTemplate?.backgroundSettings?.background,
                    file: {
                        ...currentCustomTemplate?.backgroundSettings?.background?.file,
                        filePath: '/images/resources/cars/lamborghini/patterns/option-1/fade-up',
                        imageType: 'png',
                        name: 'honeycomb-lambo-up',
                        url: '/images/resources/cars/lamborghini/patterns/option-1/fade-up/regular.png'
                    }
                }
            })
        }
        // Up END
    }

    return (
        <div className={`backgroundSelect`}>
            {
                title !== "" &&
                <div className={`backgroundSelect__title`}>
                    <p className={`backgroundSelect__text`}>Select {title}</p>
                </div>
            }
            <div className={`backgroundSelect__left`}>

                {
                    currentCustomTemplate?.fadeType === "FADE-DOWN" && (
                        <>
                            <Button
                                onClick={
                                    () => changeBackground('carbonFiberDown')
                                }
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: "url('../../images/bg/carbon-fiber-fade-down.png')",
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            >
                                {/* Black */}
                            </Button>
                            <Button
                                onClick={
                                    () => changeBackground('3d-down')
                                }
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: "url('../../images/resources/backgrounds/hexagon/3d/fade-down.png')",
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            >
                                {/* Black */}
                            </Button>
                            <Button
                                onClick={() => changeBackground('forged-down')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: `url(${'/images/resources/backgrounds/carbon-fiber/forged/fade-down.png'})`,
                                    backgroundSize: '500%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                            <Button
                                onClick={
                                    () => changeBackground('hexagonDown')
                                }
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: "url('../../images/resources/backgrounds/hexagon/fade-down/colors/black.png')",
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            >
                                {/* Black */}
                            </Button>
                            <Button
                                onClick={() => changeBackground('honeycomb-lambo-down')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: `url(${'/images/resources/cars/lamborghini/patterns/option-1/fade-down/regular.png'})`,
                                    backgroundSize: '500%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                        </>
                    )
                }

                {
                    currentCustomTemplate?.fadeType === "FADE-UP" && (
                        <>
                            <Button
                                onClick={() => changeBackground('carbonFiberUp')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: "url('../../images/bg/carbon-fiber-fade-up.png')",
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                            <Button
                                onClick={
                                    () => changeBackground('3d-up')
                                }
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: "url('../../images/resources/backgrounds/hexagon/3d/fade-up.png')",
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            >
                                {/* Black */}
                            </Button>
                            <Button
                                onClick={() => changeBackground('forged-up')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: `url(${'/images/resources/backgrounds/carbon-fiber/forged/fade-up.png'})`,
                                    backgroundSize: '200%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                            <Button
                                onClick={
                                    () => changeBackground('hexagonUp')
                                }
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: "url('../../images/resources/backgrounds/hexagon/fade-up/colors/black.png')",
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            >
                                {/* Black */}
                            </Button>
                            <Button
                                onClick={() => changeBackground('honeycomb-lambo-up')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: `url(${'/images/resources/cars/lamborghini/patterns/option-1/fade-up/regular.png'})`,
                                    backgroundSize: '200%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                        </>
                    )
                }

                {
                    currentCustomTemplate?.fadeType === "FULL-BG" && (
                        <>
                            <Button
                                onClick={() => changeBackground('carbonFiber')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: "url('/images/resources/backgrounds/carbon-fiber/regular/carbon-fiber.png')",
                                    backgroundSize: '1000%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                            <Button
                                onClick={() => changeBackground('3dHex')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: "url('/images/bg/3d-hexagon.png')",
                                    backgroundSize: '850%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                            <Button
                                onClick={() => changeBackground('forged')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: `url(${'/images/resources/backgrounds/carbon-fiber/forged/regular.png'})`,
                                    backgroundSize: '500%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                            <Button
                                onClick={() => changeBackground('honeycomb')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: `url(${'/images/bg/hexagon.svg'})`,
                                    backgroundSize: '500%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                            <Button
                                onClick={() => changeBackground('honeycomb-lambo')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: `url(${'/images/resources/cars/lamborghini/patterns/option-1/colors/regular.png'})`,
                                    backgroundSize: '500%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                            <Button
                                onClick={() => changeBackground('honeycomb-8')}
                                size="small"
                                className={`backgroundSelect__preset`}
                                style={{
                                    backgroundImage: `url(${'/images/resources/backgrounds/hexagon/option-8/colors/red.png'})`,
                                    backgroundSize: '500%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                shape="circle"
                            />
                        </>
                    )
                }
            </div>
        </div>
    )
}