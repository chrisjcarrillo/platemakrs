import React, {
    createContext, useState, useEffect, useContext
} from 'react';

import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject, uploadString } from 'firebase/storage';
import { EditorContext, EditorContextType } from './editorContext';


interface IStoreProps {
    children: React.ReactNode
}

export type InterfaceContextType = {
    loading?: boolean;
    setLoading: (type: boolean) => void;

    editorLoading?: boolean;
    setEditorLoading: (type: boolean) => void;

    stepLoading?: boolean;
    setStepLoading: (type: boolean) => void;

    showPreview?: boolean;
    setShowPreview: (type: boolean) => void;

    showCart?: boolean;
    setShowCart: (type: boolean) => void;

    showDecision?: boolean;
    setDecision: (type: boolean) => void;

    moveLogo?: boolean; // For Logo
    setMoveLogo: (type: boolean) => void; // For Logo

    moveBottomLogo?: boolean; // For Logo
    setMoveBottomLogo: (type: boolean) => void; // For Logo

    moveBackgroundLogo?: boolean; // For Logo
    setMoveBackgroundLogo: (type: boolean) => void; // For Logo

    moveDetail1?: boolean
    setMoveDetail1: (type: boolean) => void; // For Logo

    moveDetail2?: boolean
    setMoveDetail2: (type: boolean) => void; // For Logo

    finalDesign?: any; 
    takeDesignScreenshot?: (img: any) => void;

    isPreset?: boolean;
    setPreset: (type: boolean) => void;

    designUrl: string;
}

export const InterfaceContext = createContext<InterfaceContextType | null>(null);

const InterfaceProvider = ({ children }: IStoreProps): JSX.Element => {

    // Loading START
    const [loading, setLoading] = useState<boolean>(false);
    const [stepLoading, setStepLoading] = useState<boolean>(false);
    const [editorLoading, setEditorLoading] = useState<boolean>(false);
    // Loading End
    
    const [showPreview, setShowPreview] = useState<boolean>(false); // Show Plate Preview

    // Decision START
    // Show Decision Drawer when Clicking continue on a preset template
    const [showDecision, setDecision] = useState<boolean>(false);
    // Decision END

    const [showCart, setShowCart] = useState<boolean>(false) //Show Cart

    // MOVEABLES
    const [moveLogo, setMoveLogo] = useState<boolean>(false) // Move Logo
    const [moveBottomLogo, setMoveBottomLogo] = useState<boolean>(false) // Move Bottom Logo
    const [moveBackgroundLogo, setMoveBackgroundLogo] = useState<boolean>(false) // Move Background
    const [moveDetail1, setMoveDetail1] = useState<boolean>(false) // Move Detail 1
    const [moveDetail2, setMoveDetail2] = useState<boolean>(false) // Move Detail 1
    // MOVEABLES

    const [finalDesign, takeDesignScreenshot] = useState<string | undefined>(undefined);
    const [designUrl, setDesignUrl] = useState<string | undefined>(undefined);

    const [isPreset, setPreset] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    useEffect(() => {
        if(sessionStorage.getItem('preset') === 'true'){
            setPreset(true);
        }
    }, [isPreset])


    // useEffect(() => {
    //     if(finalDesign){
    //         const uploadDesign = async () => {
    //             try {
    //                 const storage = getStorage();
    //                 const id = sessionStorage.getItem('customTemplateId');
    //                 const storageRef = ref(storage, `customTemplates/${id}/design-preview/test`); // Create storage reference
    //                 const upload = await uploadString( storageRef, finalDesign, 'data_url', {
    //                         contentType: 'image/png'
    //                     }
    //                 );
    //                 const downloadUrl = await getDownloadURL(upload.ref)
    //                 setDesignUrl(downloadUrl);
    //                 console.log(designUrl);
    //             } catch (error) {
    //                 console.log(error)
    //             }
                
    //         }
    //         uploadDesign();            
    //     }
    // }, [finalDesign])


    return (
        <InterfaceContext.Provider
            value={{
                loading,
                setLoading,

                editorLoading,
                setEditorLoading,

                stepLoading,
                setStepLoading,

                showPreview,
                setShowPreview,

                showCart,
                setShowCart,

                showDecision,
                setDecision,

                moveLogo,
                setMoveLogo,

                moveBottomLogo,
                setMoveBottomLogo,

                moveBackgroundLogo,
                setMoveBackgroundLogo,

                moveDetail1, 
                setMoveDetail1,

                moveDetail2, 
                setMoveDetail2,

                isPreset,
                setPreset,
                
                finalDesign, 
                takeDesignScreenshot,

                designUrl

            }}
        >
            {children}
        </InterfaceContext.Provider>
    )
}

export default InterfaceProvider;