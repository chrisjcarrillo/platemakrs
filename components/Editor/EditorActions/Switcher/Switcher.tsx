import { Switch } from "antd"
import { useContext, useState } from "react"
import { EditorContext, EditorContextType } from "../../../../context/editorContext"
import { InterfaceContext, InterfaceContextType } from "../../../../context/interfaceContext"

export const Switcher = (
    props: {
        type: any,
        text: string,
        checkedDefault: boolean
    }
) => {

    const { 
        type, 
        text,
        checkedDefault
    } = props;

    const {
        setMoveLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        currentCustomTemplate,
        updateCustomTemplateSelection
    } = useContext(EditorContext) as EditorContextType;

    const updateSwitch = (type: any, value: any) => {
        if(type === "moveLogo"){
            setMoveLogo(value)
        }
        if(type === "stateStrokeEnabled"){
            updateCustomTemplateSelection?.('state', {
                ...currentCustomTemplate?.state,
                stroke:{
                    ...currentCustomTemplate?.state?.stroke,
                    enabled: value
                }
            })
        } 
        if(type === "stateGlowEnabled"){
            updateCustomTemplateSelection?.('state', {
                ...currentCustomTemplate?.state,
                glow: {
                    ...currentCustomTemplate?.state?.glow,
                    enabled: value
                }
            })
        }
        if(type === "stateShadowEnabled"){
            updateCustomTemplateSelection?.('state', {
                ...currentCustomTemplate?.state,
                shadow: {
                    ...currentCustomTemplate?.state?.shadow,
                    enabled: value
                }
            })
        }



        if(type === "plateNumberStrokeEnabled"){
            updateCustomTemplateSelection?.('plateNumber', {
                ...currentCustomTemplate?.plateNumber,
                stroke:{
                    ...currentCustomTemplate?.plateNumber?.stroke,
                    enabled: value
                }
            })
        } 
        if(type === "plateNumberShadowEnabled"){
            updateCustomTemplateSelection?.('plateNumber', {
                ...currentCustomTemplate?.plateNumber,
                shadow: {
                    ...currentCustomTemplate?.plateNumber?.shadow,
                    enabled: value
                }
            })
        }


        if(type === "bottomTextStrokeEnabled"){
            updateCustomTemplateSelection?.('bottomText', {
                ...currentCustomTemplate?.bottomText,
                stroke:{
                    ...currentCustomTemplate?.bottomText?.stroke,
                    enabled: value
                }
            })
        } 
        if(type === "bottomTextGlowEnabled"){
            updateCustomTemplateSelection?.('bottomText', {
                ...currentCustomTemplate?.bottomText,
                glow: {
                    ...currentCustomTemplate?.bottomText?.glow,
                    enabled: value
                }
            })
        }
        if(type === "bottomTextShadowEnabled"){
            updateCustomTemplateSelection?.('bottomText', {
                ...currentCustomTemplate?.bottomText,
                shadow: {
                    ...currentCustomTemplate?.bottomText?.shadow,
                    enabled: value
                }
            })
        }
    }

    const [checked, setChecked] = useState(false);

    return(
        <div
            className={`switcher`}
        >
            <div
                className={`switcher__left`}
            >
                <p className={`switcher__text`}>{checked && !text?.includes('Shadow') ? 'Select' : 'Enable'} {text} {checked && !text?.includes('Shadow') ? 'Color' : ''}</p>
            </div>

            <div
            
                className={`switcher__right`}
            >
                <Switch
                    defaultChecked={checkedDefault}
                    onChange={
                        (e) => {
                            if(e) setChecked(true)
                            if(!e) setChecked(false)
                            updateSwitch(type, e)
                        }
                    }
                />
            </div>
        </div>
    )
}