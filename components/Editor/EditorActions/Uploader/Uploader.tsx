
import React, { useContext, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Modal, Upload } from 'antd';
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject, uploadString } from 'firebase/storage';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';
import { InterfaceContext, InterfaceContextType } from '../../../../context/interfaceContext';


export const Uploader = (
    props: {
        type?: string,
        title?: string,
    }
) => {
    const { type, title } = props;

    const {confirm} = Modal;

    const {
        setLoading
    } = useContext(InterfaceContext) as InterfaceContextType;


    const {
        updateCustomTemplateSelection,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [removeBackground, setRemoveBackground] = useState<boolean>(false)


    async function removeUpload(file: any) {
        try {
            const uploadType = type === "mainLogo" ? currentCustomTemplate?.mainLogo : currentCustomTemplate?.bottomLogo;
            updateCustomTemplateSelection?.(type, {
                    ...uploadType,
                    name: 'logo.png',
                    url: '/images/resources/preset/logos/logo.png'
            })
            localStorage.removeItem(`${type === "mainLogo" ? 'mainCustomLogo' : 'bottomCustomLogo'}`);
        } catch (error) {
            console.log(error);
        }
    }

    const getBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    async function uploadLogo({ onError: onError, onSuccess, file }: any){
        setLoading(true);
        try {
            console.log(file);
            let formdata = new FormData(); // Form data for API
            formdata.append("image_file", file, file.name); // Form data for API 
            formdata.append('size', 'preview'); // Form data for API
            const uploadType = type === "mainLogo" ? currentCustomTemplate?.mainLogo : currentCustomTemplate?.bottomLogo;
            if(removeBackground){
                const uploadFile = await fetch("https://sdk.photoroom.com/v1/segment",
                {
                    body: formdata,
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'x-api-key': 'ee24580237e68f316717873372a2dbe1d1e8abf7'
                    }
                }
                ); // Upload to API
                const responseFile = await uploadFile.json(); // Upload to API

                localStorage.setItem(
                    `${type === "mainLogo" ? 'mainCustomLogo' : 'bottomCustomLogo'}`, 
                    JSON.stringify({
                        name: file.name,
                        type: file.type,
                        b64: responseFile.result_b64
                    })
                );
    
                updateCustomTemplateSelection?.(type, {
                    ...uploadType,
                    name: file?.name,
                    url: `data:image/png;base64,${responseFile?.result_b64}`
                })
                setLoading(false);
                onSuccess(null, responseFile);
            } else {
                // Get base64
                const currentImage = await getBase64(file);

                localStorage.setItem(
                    `${type === "mainLogo" ? 'mainCustomLogo' : 'bottomCustomLogo'}`, 
                    JSON.stringify({
                        name: file.name,
                        type: file.type,
                        b64: currentImage
                    })
                );
    
                updateCustomTemplateSelection?.(type, {
                    ...uploadType,
                    name: file?.name,
                    url: currentImage
                })
                setLoading(false);
                onSuccess(null, currentImage);
            }
        } catch (e) {
            onError(e);
            setLoading(false);
        }
    }


    async function customUpload({ onError: onError, onSuccess, file }: any) {
        setLoading(true);
        try {
            confirm({
                centered: true,
                title: 'Remove logo Background?',
                content: 'Would you like to make your logo transperant for a better design look?',
                okText: 'Yes',
                cancelText: 'No',
                open: openModal,
                onCancel(){
                    Modal.destroyAll()
                    setOpenModal(false)
                    setRemoveBackground(false)
                    uploadLogo({ onError, onSuccess, file })
                },
                onOk(){
                    setRemoveBackground(true)
                    uploadLogo({ onError, onSuccess, file })
                }
            })
        } catch (e) {
            onError(e);
            setLoading(false);
        }
    }

    return (
        <>
            <div className={`fileUploader`}>
                <div className={`fileUploader__title`}>
                    <p className={`fileUploader__text`}>Upload {title}</p>
                </div>
                <Upload
                    className="upload-list-inline"
                    defaultFileList={
                        type === "mainLogo" ?
                            currentCustomTemplate?.mainLogo?.name !== "logo-white.png" ? [
                                {
                                    name: currentCustomTemplate?.mainLogo?.name ?? '',
                                    url: currentCustomTemplate?.mainLogo?.url ?? ''
                                }
                            ] : [] : currentCustomTemplate?.bottomLogo?.name !== "logo-white.png" ? [
                                {
                                    name: currentCustomTemplate?.bottomLogo?.name ?? '',
                                    url: currentCustomTemplate?.bottomLogo?.url ?? ''
                                }
                            ] : []
                    }
                    beforeUpload={(file) => {
                        const isAccepted =
                            file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === "image/heic";
                        if (!isAccepted) {
                            message.error(`${file.name} is not a accepted file`);
                            // console.error(`${file.name} is not a accepted file`);
                        }
                        return isAccepted || Upload.LIST_IGNORE;
                    }}
                    maxCount={1}
                    customRequest={(e) => customUpload(e)}
                    onRemove={(e) => removeUpload(e)}
                    listType="picture"
                >
                    <Button icon={<UploadOutlined rev={''} />}>Upload</Button>
                </Upload>
            </div>

        </>
    )
}