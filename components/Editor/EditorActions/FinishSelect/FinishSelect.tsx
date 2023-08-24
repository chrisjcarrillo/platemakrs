import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';

export const FinishSelect = (
    props:{
        type?: string,
        title?: string,
    }
) => {
    const { type, title } = props;
    const { currentCustomTemplate, updateCustomTemplateSelection } = useContext(EditorContext) as EditorContextType;

    const onChange = (e: RadioChangeEvent) => {
        if(e.target.value === "MATTE"){
            updateCustomTemplateSelection?.(type, 
                e.target.value,
            )
            updateCustomTemplateSelection?.(
                'selectedVariant',
                currentCustomTemplate.shopifyVariants[1]
            )
        }
        if(e.target.value === "GLOSS"){
            updateCustomTemplateSelection?.(type, 
                e.target.value,
            )
            updateCustomTemplateSelection?.(
                'selectedVariant',
                currentCustomTemplate.shopifyVariants[0]
            )
        }
    };
    
    
    return(
        <div className={`finishSelect`}>
            <div className={`finishSelect__title`}> 
                <p className={`finishSelect__text`}>Select Finish</p>
            </div>
            <Radio.Group
                className={`finishSelect__group`}
                onChange={onChange}
                defaultValue={currentCustomTemplate?.finish ?? 'MATTE'} 
                buttonStyle="solid"
            >
                <Radio.Button 
                    className={`finishSelect__matte`}
                    value="MATTE"
                >Matte</Radio.Button>
                <Radio.Button 
                    className={`finishSelect__gloss`}
                    value="GLOSS"
                >Gloss</Radio.Button>
            </Radio.Group>
        </div>
    )
}