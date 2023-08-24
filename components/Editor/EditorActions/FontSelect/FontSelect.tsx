import { Select } from "antd";
import { useContext } from "react";
import { EditorContext, EditorContextType } from "../../../../context/editorContext";

export const FontSelect = (
    props: {
        type: string,
        title: string,
    }
) => {
    const { type, title } = props;

    const { 
        currentCustomTemplate, 
        updateCustomTemplateSelection 
    } = useContext(EditorContext) as EditorContextType;
    
    const handleChange = (value: string) => {
        updateCustomTemplateSelection?.(type, {
            ...currentCustomTemplate?.font,
            font:{
                hasCustomFont: true,
                customFont: '',
                customFontText: '',
            }
        })
    };
    
    return (
        <div className={`fontSelect`}>
            <div className={`fontSelect__title`}> 
                <p className={`fontSelect__text`}>Upload {title}</p>
            </div>
            <Select
                className="fontSelect__select"
                // defaultValue={currentCustomTemplate?.patternPosition}
                style={{ width: "100%" }}
                // onChange={handleChange}
                Agdasima
Anton
Fasthand
Gruppo
Lobster
PermanentMarker
Poppins
Roboto
YsabeauSC
                options={[
                    { value: 'left', label: 'Left' },
                    { value: 'center', label: 'Center' },
                    { value: 'right', label: 'Right' },
                ]}
            />
        </div>
    )
}