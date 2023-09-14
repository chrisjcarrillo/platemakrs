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
        currentCustomTemplate,
        updateCustomTemplateSelection
    } = useContext(EditorContext) as EditorContextType;

    const updateSwitch = (type: any, value: any) => {
        switch (type) {
            case "backgroundStrokeEnabled":
                updateCustomTemplateSelection?.('backgroundSettings', {
                    ...currentCustomTemplate?.backgroundSettings,
                    stroke: {
                        ...currentCustomTemplate?.backgroundSettings?.stroke,
                        enabled: value
                    }
                })
                break;
            case "backgroundPinstripeEnabled":
                updateCustomTemplateSelection?.('backgroundSettings', {
                    ...currentCustomTemplate?.backgroundSettings,
                    pinstripe: {
                        ...currentCustomTemplate?.backgroundSettings?.pinstripe,
                        enabled: value,
                    }
                })
                break;
            case "mainLogoGlowEnabled":
                updateCustomTemplateSelection?.('mainLogo', {
                    ...currentCustomTemplate?.mainLogo,
                    glow: {
                        ...currentCustomTemplate?.mainLogo?.glow,
                        enabled: value
                    }
                })
                break;
            case "bottomLogoGlowEnabled":
                updateCustomTemplateSelection?.('bottomLogo', {
                    ...currentCustomTemplate?.bottomLogo,
                    glow: {
                        ...currentCustomTemplate?.bottomLogo?.glow,
                        enabled: value
                    }
                })
                break;
            case "plateNumberStrokeEnabled":
                updateCustomTemplateSelection?.('plateNumber', {
                    ...currentCustomTemplate?.plateNumber,
                    stroke: {
                        ...currentCustomTemplate?.plateNumber?.stroke,
                        enabled: value
                    }
                })
                break;
            case "plateNumberShadowEnabled":
                updateCustomTemplateSelection?.('plateNumber', {
                    ...currentCustomTemplate?.plateNumber,
                    shadow: {
                        ...currentCustomTemplate?.plateNumber?.shadow,
                        enabled: value
                    }
                })
                break;
            case "stateStrokeEnabled":
                updateCustomTemplateSelection?.('state', {
                    ...currentCustomTemplate?.state,
                    stroke: {
                        ...currentCustomTemplate?.state?.stroke,
                        enabled: value
                    }
                })
                break;
            case "stateGlowEnabled":
                updateCustomTemplateSelection?.('state', {
                    ...currentCustomTemplate?.state,
                    glow: {
                        ...currentCustomTemplate?.state?.glow,
                        enabled: value
                    }
                })
                break;
            case "stateShadowEnabled":
                updateCustomTemplateSelection?.('state', {
                    ...currentCustomTemplate?.state,
                    shadow: {
                        ...currentCustomTemplate?.state?.shadow,
                        enabled: value
                    }
                })
                break;
            case "bottomTextStrokeEnabled":
                updateCustomTemplateSelection?.('bottomText', {
                    ...currentCustomTemplate?.bottomText,
                    stroke: {
                        ...currentCustomTemplate?.bottomText?.stroke,
                        enabled: value
                    }
                })

                break;
            case "bottomTextGlowEnabled":
                updateCustomTemplateSelection?.('bottomText', {
                    ...currentCustomTemplate?.bottomText,
                    glow: {
                        ...currentCustomTemplate?.bottomText?.glow,
                        enabled: value
                    }
                })
                break;
            case "bottomTextShadowEnabled":
                updateCustomTemplateSelection?.('bottomText', {
                    ...currentCustomTemplate?.bottomText,
                    shadow: {
                        ...currentCustomTemplate?.bottomText?.shadow,
                        enabled: value
                    }
                })
                break;
            default:
                break;
        }
    }

    const [checked, setChecked] = useState(false);

    return (
        <div
            className={`switcher`}
        >
            <div
                className={`switcher__left`}
            >
                <p className={`switcher__text`}> Enable {text}</p>
            </div>

            <div

                className={`switcher__right`}
            >
                <Switch
                    defaultChecked={checkedDefault}
                    onChange={
                        (e) => {
                            if (e) setChecked(true)
                            if (!e) setChecked(false)
                            updateSwitch(type, e)
                        }
                    }
                />
            </div>
        </div>
    )
}