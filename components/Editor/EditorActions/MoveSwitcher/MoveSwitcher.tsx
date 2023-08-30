import { Switch } from "antd"
import { useContext, useState } from "react"
import { EditorContext, EditorContextType } from "../../../../context/editorContext"
import { InterfaceContext, InterfaceContextType } from "../../../../context/interfaceContext"

export const MoveSwitcher = (
    props: {
        type: any,
        text: string,
    }
) => {

    const { 
        type, 
        text,
    } = props;

    const {
        setMoveBottomLogo,
        setMoveLogo,
        setMoveBackgroundLogo
    } = useContext(InterfaceContext) as InterfaceContextType;

    const updateSwitch = (type: any, value: any) => {
        if(type === "bottomLogo"){
            setMoveBottomLogo(value)
        }
        if(type === "moveLogo"){
            setMoveLogo(value)
        }
        if(type === "moveBackgroundLogo"){
            setMoveBackgroundLogo(value)
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
                <p className={`switcher__text`}>{checked ? 'Disable' : 'Enable'} {text}</p>
            </div>

            <div
            
                className={`switcher__right`}
            >
                <Switch
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