import { app, database, storage } from '../../firebaseConfig';
import { collection, addDoc, getDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ICustomPlateTemplate } from '../../interfaces/customTemplate.interface';
import { ILicensePlate } from '../../interfaces/licensePlate.interface';

const LICENSE_PLATES = 'licensePlates';
const CUSTOM_PLATES = 'customPlateTemplates';


// Firebase Initializers START 
export const licensePlateInstance = collection(
    database,
    LICENSE_PLATES
);

export const licensePlateGetDoc = (id: string) => doc(database, LICENSE_PLATES, id)

export const customTemplateInstance = collection(
    database,
    CUSTOM_PLATES
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

export const getLicensePlateFirebase = async (
    licensePlateId: string
) => {
    try {
        const getDocument = await getDoc(licensePlateGetDoc(licensePlateId))
        return getDocument.data();
    } catch (error) {
        console.log(error)
    }
}

export const updateLicensePlateFirebase = async (
    licensePlateId: string,
    licensePlate: ILicensePlate
) => {
    try {
        const createDocument = await updateDoc(licensePlateGetDoc(licensePlateId), {
            ...licensePlate
        })
        return createDocument;
    } catch (error) {
        console.log(error)   
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