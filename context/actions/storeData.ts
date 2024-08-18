import { createLicensePlateFirebase, createTemplateFirebase, updateLicensePlateFirebase } from '../../lib/firebase/firebase';
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import html2canvas from 'html2canvas';
import { ICustomPlateTemplate } from '../../interfaces/customTemplate.interface';
import { ILicensePlate } from '../../interfaces/licensePlate.interface';
import { useContext } from 'react';
import { InterfaceContext, InterfaceContextType } from '../interfaceContext';
import {app, storage} from '../../firebaseConfig';
import {getApps} from "@firebase/app";
import { isMobile } from 'react-device-detect';


const setImagePreview = async (node: any) => {
    try {
        const stage = node.current;
        const width = 3597;
        const height = 1800;

        stage?.width(width);
        stage?.height(height);
        stage?.x(0)
        stage?.y(0)
        stage?.scaleX(0.5);
        stage?.scaleY(0.5);
        stage?.draw();

        if(stage?.getStage()){
            const base64Image = await stage.toDataURL();
            return base64Image;            
        } else {
            const base64Image = await stage.toDataURL();
            return base64Image;   
        }  
    } catch (error) {
        console.log(error);
    }
}

const createPlateAndTemplate = async (
    currentCustomTemplate: ICustomPlateTemplate,
    currentLicensePlate: ILicensePlate,
) => {
    try {
        const response = await fetch('/api/v1/orders/create-license-plate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '71a74a2638e4f36d7b8d3cacef96db045d6158628e463fbd33bec118605091ec068547b4b05883a06e23b9588b883ab1028b8d95fd842e0815947d5d58bbaa3eaba33b47d48bc81e6df6f8f8cb18e0a68056fce6e4be4870d1b972298fddfcc7a5f1ed253177adbfc2c38ddaf6f6872ef87bc9064c3b61fae0ac6b4242f52f9c443a2b14f99647b931aec1a57926f4018771c3eaf51508b6fba59ee13efc4103'
            },
            body: JSON.stringify({
                "plate": currentLicensePlate,
                "customTemplate": currentCustomTemplate
            })
        })
        const res = await response.json();
        return res;
    } catch (error) {
        console.log(error)
    }
}

const updateLicensePlate = async (
    licensePlate: any
) => {
    try {
        const response = await fetch('/api/v1/orders/create-license-plate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '71a74a2638e4f36d7b8d3cacef96db045d6158628e463fbd33bec118605091ec068547b4b05883a06e23b9588b883ab1028b8d95fd842e0815947d5d58bbaa3eaba33b47d48bc81e6df6f8f8cb18e0a68056fce6e4be4870d1b972298fddfcc7a5f1ed253177adbfc2c38ddaf6f6872ef87bc9064c3b61fae0ac6b4242f52f9c443a2b14f99647b931aec1a57926f4018771c3eaf51508b6fba59ee13efc4103'
            },
            body: JSON.stringify({
                "plate": currentLicensePlate,
                "customTemplate": currentCustomTemplate
            })
        })
        const res = await response.json();
        return res;
    } catch (error) {
        
    }

}

const updateTemplate = async () => {

}

export const storeCheckout = async (
    currentCustomTemplate: ICustomPlateTemplate,
    currentLicensePlate: ILicensePlate,
    canvasRef: any,
) => {
    try {

        if(getApps().length === 0) app;
        
        const plateResponse = await createPlateAndTemplate(
            currentCustomTemplate,
            currentLicensePlate
        );

        console.info('[checkout] customTemplateId:', plateResponse?.customTemplate?.insertedId)
        
        const imagePrev = await setImagePreview(canvasRef);
        const storage = getStorage();
        const storageRef = ref(storage, `customTemplates/${plateResponse?.customTemplate?.insertedId}/design-preview/preview`);
        const upload = await uploadString( storageRef, imagePrev, 'data_url', {
                contentType: 'image/png'
        });

        const downloadUrl = await getDownloadURL(upload.ref);
        
        if(localStorage.getItem('customTemplate')){
            localStorage.setItem( 'customTemplate', JSON.stringify({
                ...currentCustomTemplate,
                id: plateResponse.customTemplate.insertedId
            }));
        }

        if(localStorage.getItem('licensePlate')){
            localStorage.setItem( 'licensePlate', JSON.stringify({
                ...currentLicensePlate,
                id: plateResponse.plate.insertedId
            }));
        }

        if(localStorage.getItem('mainLogo')) await storeMainLogoInFirebase();

        if(localStorage.getItem('bottomLogo')) await storeBottomLogoInFirebase();
        
        // return;
        return {
            previewUrl: downloadUrl,
            licensePlateId: plateResponse.plate.insertedId,
            customTemplateId: plateResponse.customTemplate.insertedId
        }


    } catch (error) {
        console.log(error);
    }
}


export const storeMainLogoInFirebase = async () => {
    try {
        const storage = getStorage();
        const customTemplate = JSON.parse(localStorage.getItem('customTemplate'));
        const file = JSON.parse(localStorage.getItem('mainCustomLogo'));
        const storageRef = ref(storage, `customTemplates/${customTemplate?.id}/mainLogo/${file.name}`); // Create storage reference
        const upload = await uploadString(storageRef, file.b64, 'base64', {
            contentType: file.type
        });
        return upload;
    } catch (error) {
        console.info('Logo Error [Main]: ', error);
    }
}

export const storeBottomLogoInFirebase = async () => {
    try {
        const storage = getStorage();
        const customTemplate = JSON.parse(localStorage.getItem('customTemplate'));
        const file = JSON.parse(localStorage.getItem('bottomCustomLogo'));
        const storageRef = ref(storage, `customTemplates/${customTemplate?.id}/bottomLogo/${file.name}`); // Create storage reference
        const upload = await uploadString(storageRef, file.b64, 'base64', {
            contentType: file.type
        }); 
        return upload;   
    } catch (error) {
        console.info('Logo Error [Bottom]: ', error);
    }
}