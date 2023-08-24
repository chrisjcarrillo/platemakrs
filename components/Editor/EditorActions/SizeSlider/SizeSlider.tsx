import {
    Slider
} from 'antd';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';

export const SizeSlider = (
    props: {
        type?: string,
        title?: string,
        min?: number,
        max?: number,
    }
) => {
    
    const {
        type,
        title
    } = props;

    const { updateCustomTemplateSelection } = useContext(EditorContext) as EditorContextType;

    return (
        <div className={`sizeSlider`}>
            <div className={`sizeSlider__title`}>
                <p className={`sizeSlider__text`}>Select {title} Opacity</p>
            </div>
            <Slider
                onChange={(e) => updateCustomTemplateSelection?.(type ?? '', e)}
                step={1}
                min={0.1}
                max={1}
                tooltip={{ placement: 'topRight' }}
            />
        </div>

    )
}