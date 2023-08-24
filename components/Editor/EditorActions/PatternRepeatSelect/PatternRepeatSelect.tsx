import Image from "next/image";
import { useContext } from "react";
import { EditorContext, EditorContextType } from "../../../../context/editorContext";

export const PatternRepeatSelect = (
    props: {
        title?: string
    }
) => {

    const { title } = props;

    const {
        updateCustomTemplateSelection,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;



    return (
        <div className={`patternRepeatSelect`}>
            <div className={`patternRepeatSelect__title`}>
                <p className={`patternRepeatSelect__text`}>{title}</p>
            </div>
            <div className="patternRepeatSelect__container">
                <div className="patternRepeatSelect__top-bottom"
                    onClick={() => 
                        updateCustomTemplateSelection?.('patternSettings', {
                            ...currentCustomTemplate?.patternSettings,
                            repeatType: 'repeat-y'
                        })
                    }
                >
                    <div className="patternRepeatSelect__img">
                        <Image
                            src='/images/misc/pattern-fill-top-bottom.png'
                            width={100}
                            height={65}
                            alt=""
                        />
                    </div>
                    <div className="patternRepeatSelect__text-option">
                        <p
                        >Top to Bottom</p>
                    </div>

                </div>
                <div className="patternRepeatSelect__left-right"
                    onClick={(e) => {
                        e.preventDefault()
                        updateCustomTemplateSelection?.('patternSettings', {
                            ...currentCustomTemplate?.patternSettings,
                            repeatType: 'repeat-x'
                        })
                    }}
                >
                    <div className="patternRepeatSelect__img">
                        <Image
                            src='/images/misc/pattern-fill-left-right.png'
                            width={100}
                            height={65}
                            alt=""
                        />
                    </div>
                    <div className="patternRepeatSelect__text-option">
                        <p> Left to Right</p>
                    </div>
                </div>
                <div className="patternRepeatSelect__fill"
                    onClick={(e) => {
                        e.preventDefault()
                        updateCustomTemplateSelection?.('patternSettings', {
                            ...currentCustomTemplate?.patternSettings,
                            repeatType: 'repeat'
                        })}
                    }
                >
                    <div className="patternRepeatSelect__img">
                        <Image
                            src='/images/misc/pattern-fill.png'
                            width={100}
                            height={65}
                            alt=""
                        />
                    </div>
                    <div className="patternRepeatSelect__text-option">
                        <p
                        >fill</p>
                    </div>
                </div>
            </div>
        </div>
    )
}