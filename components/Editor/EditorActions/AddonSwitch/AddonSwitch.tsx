import { Badge, Switch, Radio } from "antd"
import { useContext, useState } from "react"
import { EditorContext, EditorContextType } from "../../../../context/editorContext"
import { InterfaceContext, InterfaceContextType } from "../../../../context/interfaceContext"
import { StoreContext, StoreContextType } from "../../../../context/storeContext"
import type { RadioChangeEvent } from 'antd';

export const AddonSwitch = () => {
    
    const {
        hasDesigner,
        setHasDesigner,
    } = useContext(StoreContext) as StoreContextType;

    const onChange = (e: RadioChangeEvent) => {
        if(e.target.value === "YES"){
            setHasDesigner(true)
        } else {
            setHasDesigner(false)
        }
    };

    return (
        <div className={`addonSwitch`}>
            <div className={`addonSwitch__title`}>
                <p className={`addonSwitch__text`} style={{marginBottom: 0}}>Looking for more or not satisfied with what you see?</p>
                <p className={`addonSwitch__text`}>Work with one of our designers directly!</p>
            </div>
            <Radio.Group
                defaultValue={hasDesigner ? 'YES' : ''}
                className={`addonSwitch__group`}
                onChange={onChange}
                buttonStyle="solid"
            >
                <Radio.Button
                    className={`addonSwitch__matte`}
                    value="NO"
                >
                    No
                </Radio.Button>
                <Badge count={'+$50.00'}>
                    <Radio.Button
                        className={`addonSwitch__gloss`}
                        value="YES"
                    >
                        Yes
                    </Radio.Button>
                </Badge>
            </Radio.Group>
        </div>
    )
}