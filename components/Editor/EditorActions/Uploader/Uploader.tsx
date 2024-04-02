import React, { useContext, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
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

    const {
        setLoading
    } = useContext(InterfaceContext) as InterfaceContextType;


    const {
        updateCustomTemplateSelection,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;


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

    async function customUpload({ onError: onError, onSuccess, file }: any) {
        setLoading(true);
        try {
            let formdata = new FormData(); // Form data for API
            formdata.append("image_file", file, file.name); // Form data for API 
            formdata.append('size', 'preview'); // Form data for API
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
            const response = await uploadFile.json(); // Upload to API
            const uploadType = type === "mainLogo" ? currentCustomTemplate?.mainLogo : currentCustomTemplate?.bottomLogo;

            localStorage.setItem(
                `${type === "mainLogo" ? 'mainCustomLogo' : 'bottomCustomLogo'}`, 
                JSON.stringify({
                    name: file.name,
                    type: file.type,
                    b64: response.result_b64
                })
            );

            updateCustomTemplateSelection?.(type, {
                ...uploadType,
                name: file.name,
                url: `data:image/png;base64,${response.result_b64}`
            })
            setLoading(false);
            onSuccess(null, response);
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