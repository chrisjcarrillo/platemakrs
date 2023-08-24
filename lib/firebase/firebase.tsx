import { app, database, storage } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ICustomPlateTemplate } from '../../interfaces/customTemplate.interface';
import { ILicensePlate } from '../../interfaces/licensePlate.interface';

// Firebase Initializers START 
export const licensePlateInstance = collection(
    database,
    'licensePlates'
);
export const customTemplateInstance = collection(
    database,
    'customPlateTemplates'
);
// Firebase Initializers END

export const createTemplateFirebase = async (
    customTemplate?: ICustomPlateTemplate
) => {
    try {
        const createDocument = await addDoc(customTemplateInstance, {
            ...customTemplate
        })
        return createDocument;   
        // Set the Item of the License Plate
        // localStorage.setItem('customLicensePlateId', createDocument.id);
        // updateCustomTemplateSelection('firebaseId', createDocument.id);
        // return createDocument;   
    } catch (error) {
        console.log(error);
    }
}

export const createLicensePlateFirebase = async (
    licensePlate?: ILicensePlate
) => {
    try {
        const createDocument = await addDoc(licensePlateInstance, {
            ...licensePlate
        })
        return createDocument;
    } catch (error) {
        console.log(error)   
    }
}