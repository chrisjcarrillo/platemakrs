import { createLicensePlateFirebase, createTemplateFirebase, updateLicensePlateFirebase } from '../../lib/firebase/firebase';
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import html2canvas from 'html2canvas';
import { ICustomPlateTemplate } from '../../interfaces/customTemplate.interface';
import { ILicensePlate } from '../../interfaces/licensePlate.interface';
import { useContext } from 'react';
import { InterfaceContext, InterfaceContextType } from '../interfaceContext';
import { storage } from '../../firebaseConfig';


const setImagePreview = async (node: any) => {
    try {
        window.devicePixelRatio = 5;
        const canvas = await html2canvas(node, {
            useCORS: true,
            // foreignObjectRendering: true,
            // crossOrigin: 'anonymous',
            allowTaint: true,
            scale: 5
        })
        const croppedCanvas = document.createElement('canvas')
        const croppedCanvasContext = croppedCanvas.getContext('2d')
        croppedCanvasContext?.scale(5, 5)

        const cropPositionTop = 0
        const cropPositionLeft = 0
        let cropWidth = canvas.width * 5;
        let cropHeight = canvas.height * 5;

        croppedCanvas.width = canvas.width
        croppedCanvas.height = canvas.height

        croppedCanvasContext?.drawImage(
            canvas,
            cropPositionLeft,
            cropPositionTop,
        )
        const base64Image = croppedCanvas.toDataURL('image/jpeg', 1)
        return base64Image;
    } catch (error) {
        console.log(error);
    }
}

export const storeCheckout = async (
    currentCustomTemplate: ICustomPlateTemplate,
    currentLicensePlate: ILicensePlate,
    canvasRef: any,
) => {
    try {
        const createPlate = await createLicensePlateFirebase(currentLicensePlate);
        const createCustomTemplate = await createTemplateFirebase({ 
            ...currentCustomTemplate, 
            id: createPlate?.id
        });

        const imagePrev = await setImagePreview(canvasRef.current);
        const storage = getStorage();
        const storageRef = ref(storage, `customTemplates/${createCustomTemplate?.id}/design-preview/preview`); // Create storage reference
        const upload = await uploadString( storageRef, imagePrev, 'data_url', {
                contentType: 'image/png'
        });

        const downloadUrl = await getDownloadURL(upload.ref);

        const updatePlate = await updateLicensePlateFirebase(createPlate?.id, {
            ...currentLicensePlate,
            customTemplateId: createCustomTemplate?.id
        })

        if(localStorage.getItem('mainLogo')) await storeMainLogoInFirebase();

        if(localStorage.getItem('bottomLogo')) await storeBottomLogoInFirebase();

        updatePlate;

        return {
            previewUrl: downloadUrl,
            licensePlateId: createPlate?.id,
            customTemplateId: createCustomTemplate?.id
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