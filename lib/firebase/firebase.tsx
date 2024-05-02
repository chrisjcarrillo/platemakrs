import { app, database, storage } from '../../firebaseConfig';
import { collection, addDoc, getDoc, doc, updateDoc, Timestamp } from 'firebase/firestore';
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
export const customTemplateDoc = (id: string) => doc(database, CUSTOM_PLATES, id)

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
            ...customTemplate,
            createdAt: Timestamp.fromMillis(Date.now()),
        })
        return createDocument;   
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

export const getCustomTemplateFirebase = async (
    customTemplateId: string
) => {
    try {
        const getDocument = await getDoc(customTemplateDoc(customTemplateId))
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
            ...licensePlate,
            createdAt: Timestamp.fromMillis(Date.now()),
        })
        return createDocument;
    } catch (error) {
        console.log(error)   
    }
}