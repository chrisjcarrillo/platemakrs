import { Button, ColorPicker, Input} from 'antd';
import type { Color } from 'antd/es/color-picker';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';


export const NoteInput = () => {
    const { 
        currentCustomTemplate, 
        updateCustomTemplateSelection 
    } = useContext(EditorContext) as EditorContextType;

    const { TextArea, Group } = Input;

    return (
        <div className={`noteInput animate__animated animate__fadeIn`}>
            <div className={`noteInput__title animate__animated animate__fadeIn`}>
                <p className={`noteInput__text`}>Enter Additional Notes</p>
            </div>

            <div className={`noteInput__container`}>
                <TextArea rows={3} placeholder='Additional Notes (Ex: Logo Change)'/>
            </div>
        </div>
    )
}