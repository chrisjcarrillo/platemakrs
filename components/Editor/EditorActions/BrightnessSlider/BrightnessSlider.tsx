import {
    Slider
} from 'antd';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';

export const BrightnessSlider = (
    props: {
        type?: string,
        title?: string,
    }
) => {
    
    const {
        type,
        title
    } = props;

    const { 
        currentCustomTemplate,
        updateCustomTemplateSelection 
    } = useContext(EditorContext) as EditorContextType;

    return (
        <div className={`brightnessSlider`}>
            <div className={`brightnessSlider__title`}>
                <p className={`brightnessSlider__text`}>Select {title} Opacity</p>
            </div>
            <Slider
                onChange={
                    (e) => 
                        updateCustomTemplateSelection?.('patternSettings', {
                            ...currentCustomTemplate?.patternSettings,
                            opacity: e
                        })
                }
                defaultValue={currentCustomTemplate?.patternSettings?.opacity}
                step={0.1}
                min={0}
                max={1}
                tooltip={{ placement: 'topRight' }}
            />
        </div>

    )
}