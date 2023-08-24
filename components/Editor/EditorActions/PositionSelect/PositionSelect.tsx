import { Select } from "antd";
import { useContext } from "react";
import { EditorContext, EditorContextType } from "../../../../context/editorContext";

export const PositionSelect = (
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
        updateCustomTemplateSelection?.(type, value)
    };
    
    return (
        <div className={`positionSelect`}>
            <div className={`positionSelect__title`}> 
                <p className={`positionSelect__text`}>Upload {title}</p>
            </div>
            <Select
                className="positionSelect__select"
                defaultValue={currentCustomTemplate?.patternPosition}
                style={{ width: "100%" }}
                onChange={handleChange}
                options={[
                    { value: 'left', label: 'Left' },
                    { value: 'center', label: 'Center' },
                    { value: 'right', label: 'Right' },
                ]}
            />
        </div>
    )
}