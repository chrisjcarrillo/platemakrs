import type { RadioChangeEvent } from 'antd';
import { Radio, Modal, Flex, Button, ConfigProvider } from 'antd';

import { useContext, useEffect, useRef, useState } from 'react';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';

export const FinishSelect = (
    props: {
        type?: string,
        title?: string,
    }
) => {
    const { type, title } = props;
    const videoReference = useRef<any>();
    const { currentCustomTemplate, updateCustomTemplateSelection } = useContext(EditorContext) as EditorContextType;

    const [showFinishPreview, setShowFinishPreview] = useState<boolean>(false)
    const [previewType, setPreviewType] = useState<string>('Gloss')

    useEffect(() => {
        if (showFinishPreview) {
            videoReference.current.load(); // Reloads the video
        }
    }, [showFinishPreview])

    const onChange = (e: RadioChangeEvent) => {
        if (e.target.value === "MATTE") {
            updateCustomTemplateSelection?.(type,
                e.target.value,
            )
            updateCustomTemplateSelection?.(
                'selectedVariant',
                currentCustomTemplate?.shopifyVariants?.[1] ?? ''
            )
        }
        if (e.target.value === "GLOSS") {
            updateCustomTemplateSelection?.(type,
                e.target.value,
            )
            updateCustomTemplateSelection?.(
                'selectedVariant',
                currentCustomTemplate?.shopifyVariants?.[0] ?? ''
            )
        }
    };

    return (
        <>
            <Modal
                classNames={{
                    header: '',
                    body: 'addon_modal',
                    footer: '',
                    mask: '',
                    wrapper: '',
                }}
                onCancel={() => {
                    videoReference.current.pause();
                    Modal.destroyAll();
                    setShowFinishPreview(false)
                }}
                open={showFinishPreview}
                centered
                title={`Finish Preview - ${previewType}`}
                footer={null}
            >
                <div>
                    <div className='modalVideo_container'>
                        {
                            previewType === "Gloss" ? (
                                <video ref={videoReference} className='modalVideo_video' controls>
                                    <source src={'/videos/gloss-video.mov'} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <video ref={videoReference} className='modalVideo_video' controls>
                                    <source src={'/videos/matte-video.mov'} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        }
                    </div>
                    <Flex gap="small" justify='flex-end'>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        colorPrimary: `linear-gradient(135deg, #6253E1, #04BEFE)`,
                                        colorPrimaryHover: `linear-gradient(135deg, #6253E1, #04BEFE)`,
                                        colorPrimaryActive: `linear-gradient(135deg, #6253E1, #04BEFE)`,
                                        lineWidth: 0,
                                    },
                                },
                            }}
                        >
                            <Button
                                shape='round'
                                block
                                type='primary'
                                onClick={(e) => {
                                    videoReference.current.pause();
                                    Modal.destroyAll();
                                    setShowFinishPreview(false)
                                }}
                            >
                                Continue
                            </Button>
                        </ConfigProvider>
                    </Flex>
                </div>
            </Modal>

            <div className={`finishSelect`}>
                <div className={`finishSelect__title`}>
                    <p className={`finishSelect__text`}>Select Finish</p>
                </div>
                <Radio.Group
                    className={`finishSelect__group`}
                    onChange={onChange}
                    value={currentCustomTemplate?.finish}
                    defaultValue={currentCustomTemplate?.finish}
                    buttonStyle="solid"
                >
                    <Radio.Button
                        checked={currentCustomTemplate?.finish === "GLOSS"}
                        className={`finishSelect__gloss`}
                        value="GLOSS"
                    >Gloss</Radio.Button>
                    <Radio.Button
                        checked={currentCustomTemplate?.finish === "MATTE"}
                        className={`finishSelect__matte`}
                        value="MATTE"
                    >Matte</Radio.Button>
                </Radio.Group>
                <div className="finishPreview_container">
                    {/* View Preview for gloss */}
                    <div className="finishPreview_column">
                        <a className='' onClick={() => {
                            setPreviewType('Gloss')
                            setShowFinishPreview(true)
                        }}>
                            View Preview
                        </a>
                    </div>
                    {/* View Preview for Matte */}
                    <div className="finishPreview_column">
                        <a className='' onClick={() => {
                            setPreviewType('Matte');
                            setShowFinishPreview(true)
                        }}>
                            View Preview
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}