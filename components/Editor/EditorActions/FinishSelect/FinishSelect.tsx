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
    const videoReferenceGloss = useRef<any>();
    const videoReferenceMatte = useRef<any>();
    const { currentCustomTemplate, updateCustomTemplateSelection } = useContext(EditorContext) as EditorContextType;

    const [showFinishPreviewGloss, setShowFinishPreviewGloss] = useState<boolean>(false)
    const [showFinishPreviewMatte, setShowFinishPreviewMatte] = useState<boolean>(false)

    const [previewType, setPreviewType] = useState<string>('Gloss')

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
                    videoReferenceGloss.current.pause();
                    Modal.destroyAll();
                    setShowFinishPreviewGloss(false)
                }}
                open={showFinishPreviewGloss}
                centered
                title={`Finish Preview - Gloss`}
                footer={null}
            >
                <div>
                    <div className='modalVideo_container'>
                    <video ref={videoReferenceGloss} className='modalVideo_video' controls>
                                    <source src={'/videos/gloss-video.mov'} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
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
                                    videoReferenceGloss.current.pause();
                                    Modal.destroyAll();
                                    setShowFinishPreviewGloss(false)
                                }}
                            >
                                Continue
                            </Button>
                        </ConfigProvider>
                    </Flex>
                </div>
            </Modal>

            <Modal
                classNames={{
                    header: '',
                    body: 'addon_modal',
                    footer: '',
                    mask: '',
                    wrapper: '',
                }}
                onCancel={() => {
                    videoReferenceMatte.current.pause();
                    Modal.destroyAll();
                    setShowFinishPreviewMatte(false)
                }}
                open={showFinishPreviewMatte}
                centered
                title={`Finish Preview - Matte`}
                footer={null}
            >
                <div>
                    <div className='modalVideo_container'>
                            <video ref={videoReferenceMatte} className='modalVideo_video' controls>
                                <source src={'/videos/matte-video.mov'} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
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
                                    videoReferenceMatte.current.pause();
                                    Modal.destroyAll();
                                    setShowFinishPreviewMatte(false)
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
                            setShowFinishPreviewGloss(true);
                            videoReferenceGloss?.current?.play();
                        }}>
                            View Preview
                        </a>
                    </div>
                    {/* View Preview for Matte */}
                    <div className="finishPreview_column">
                        <a className='' onClick={() => {
                            setShowFinishPreviewMatte(true);
                            videoReferenceMatte?.current?.play();
                        }}>
                            View Preview
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}