import React, { useContext, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';

import { app, database, storage } from '../../../../firebaseConfig';
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject, uploadString } from 'firebase/storage';
import { EditorContext, EditorContextType } from '../../../../context/editorContext';
import { InterfaceContext, InterfaceContextType } from '../../../../context/interfaceContext';
import { Switcher } from '../Switcher/Switcher';
import { MoveSwitcher } from '../MoveSwitcher/MoveSwitcher';


export const Uploader = (
    props: {
        type?: string,
        title?: string,
    }
) => {
    const { type, title } = props;

    const {
        setLoading,
        setStepLoading,
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType;


    const {
        updateCustomTemplateSelection,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const storage = getStorage();
    // Depending on Type it should upload.

    async function removeUpload(file: any) {
        try {
            const uploadType = type === "mainLogo" ? currentCustomTemplate?.mainLogo : currentCustomTemplate?.bottomLogo;
            updateCustomTemplateSelection?.(type, {
                    ...uploadType,
                    name: 'logo.png',
                    url: '/images/resources/preset/logos/logo.png'
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function customUpload({ onError: onError, onSuccess, file }: any) {
        setStepLoading(true);
        setLoading(true);
        try {
            const storageRef = ref(storage, `customTemplates/${currentCustomTemplate?.id}/${type}/${file.name}`); // Create storage reference

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

            const upload = await uploadString(storageRef, response.result_b64, 'base64', {
                contentType: file.type
            }); // Upload to Firebase

            const downloadUrl = await getDownloadURL(upload.ref) // Get URL from Firebase

            setTimeout(() => {
                console.log('process started');
                const uploadType = type === "mainLogo" ? currentCustomTemplate?.mainLogo : currentCustomTemplate?.bottomLogo;
                console.log(uploadType)
                updateCustomTemplateSelection?.(type, {
                    ...uploadType,
                    name: file.name,
                    url: downloadUrl
                })
                setStepLoading(false);
                setLoading(false);
            }, 3000);
            onSuccess(null, response);
        } catch (e) {
            onError(e);
            setStepLoading(false);
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
                            console.error(`${file.name} is not a accepted file`);
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