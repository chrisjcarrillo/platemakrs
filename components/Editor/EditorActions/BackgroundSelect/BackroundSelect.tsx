import { Button, ColorPicker } from 'antd';
import type { Color } from 'antd/es/color-picker';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';
import {Hexagon} from '../../../shared/Hexagon/Hexagon';

export const BackgroundSelect = (
    props: {
        type?: string,
        title?: string,
    }
) => {
    const { type, title } = props;
    const { currentCustomTemplate, updateCustomTemplateSelection } = useContext(EditorContext) as EditorContextType;

    const changeBackground = (name: string) =>{
        if(name === "carbonFiberDown"){
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
        if(name === "carbonFiberUp"){
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
        if(name === "carbonFiber"){
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
        if(name === "3dHex"){
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
        if(name === "honeycomb"){
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
                        backgroundImage: "url('../../images/bg/3d-hexagon.png')",
                        backgroundSize: '850%',
                        backgroundRepeat: 'no-repeat'
                    }}
                    shape="circle"
                />
                <Button
                    onClick={() => changeBackground('honeycomb')}
                    size="small"
                    className={`backgroundSelect__preset`}
                    style={{
                        backgroundImage: `url(${'../../images/bg/hexagon.svg'})`,
                        backgroundSize: '500%',
                        backgroundRepeat: 'no-repeat'
                    }}
                    shape="circle"
                />
            </div>
        </div>
    )
}