import React, {
    createContext, useState, useEffect, useContext
} from 'react';

import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject, uploadString } from 'firebase/storage';
import { EditorContext } from './editorContext';
import { EditorContextType } from './EditorContextType';


interface IStoreProps {
    children: React.ReactNode
}

export type InterfaceContextType = {
    loading?: boolean;
    setLoading: (type: boolean) => void;

    editorLoading?: boolean;
    setEditorLoading: (type: boolean) => void;

    showPreview?: boolean;
    setShowPreview: (type: boolean) => void;

    showCart?: boolean;
    setShowCart: (type: boolean) => void;

    showDecision?: boolean;
    setDecision: (type: boolean) => void;

    editLogoUi?: boolean; // For Logo
    setEditLogoUi: (type: boolean) => void; // For Logo

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

    showMenu?: any;  
    setMenu: (show: boolean) => void;

    isPreset?: boolean;
    setPreset: (type: boolean) => void;

    designUrl?: string;

    googleDetails?: boolean;
    setGoogleDetails: (type: boolean)=> void;

    upsellPopup?: boolean;
    setUpsellPopup: (type: boolean)=> void;

    detailsPopup?: boolean;
    setDetailsPopup: (type: boolean)=> void;

    pathPopup?: boolean;
    setPathPopup: (type: boolean)=> void;
}

export const InterfaceContext = createContext<InterfaceContextType | null>(null);

const InterfaceProvider = ({ children }: IStoreProps): JSX.Element => {

    // Loading START
    const [loading, setLoading] = useState<boolean>(true); // Show Loading
    const [editorLoading, setEditorLoading] = useState<boolean>(false); // Show Editor Loading
    // Loading End
    
    // Preview START
    const [showPreview, setShowPreview] = useState<boolean>(false); // Show Plate Preview
    // Preveiw END

    // Decision START
    const [showDecision, setDecision] = useState<boolean>(false); // Show Decision Drawer when Clicking continue on a preset template
    // Decision END

    // Cart
    const [showCart, setShowCart] = useState<boolean>(false) //Show Cart
    // Cart

    // MOVEABLES
    const [editLogoUi, setEditLogoUi] = useState<boolean>(false)
    const [moveLogo, setMoveLogo] = useState<boolean>(false) // Move Logo
    const [moveBottomLogo, setMoveBottomLogo] = useState<boolean>(false) // Move Bottom Logo
    const [moveBackgroundLogo, setMoveBackgroundLogo] = useState<boolean>(false) // Move Background
    const [moveDetail1, setMoveDetail1] = useState<boolean>(false) // Move Detail 1
    const [moveDetail2, setMoveDetail2] = useState<boolean>(false) // Move Detail 1
    // MOVEABLES

    const [finalDesign, takeDesignScreenshot] = useState<string | undefined>(undefined); // Set Final Design
    const [designUrl, setDesignUrl] = useState<string | undefined>(undefined); // Set Final Design URL

    const [isPreset, setPreset] = useState<boolean>(false) // is the current template a preset

    const [showMenu, setMenu] = useState<boolean>(false) // show menu
    const [googleDetails, setGoogleDetails] = useState<boolean>(false);

    const [ upsellPopup, setUpsellPopup ] = useState<boolean>(false); // show upsellPopup

    const [ detailsPopup, setDetailsPopup] = useState<boolean>(false); // show upsellPopup

    const [pathPopup, setPathPopup] = useState(false);


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])


    // Notes
    useEffect(() => {
        if(sessionStorage.getItem('preset') === 'true'){
            setPreset(true);
        }
    }, [isPreset])

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if(query && query.get('gclid')){
            setGoogleDetails(true);
        }
    })
    return (
        <InterfaceContext.Provider
            value={{
                loading,
                setLoading,

                editorLoading,
                setEditorLoading,
                
                showPreview,
                setShowPreview,

                showCart,
                setShowCart,

                showDecision,
                setDecision,

                moveLogo,
                setMoveLogo,

                editLogoUi, 
                setEditLogoUi,

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

                designUrl,

                showMenu, 
                setMenu,

                googleDetails, 
                setGoogleDetails,

                upsellPopup,
                setUpsellPopup,

                detailsPopup,
                setDetailsPopup,

                pathPopup,
                setPathPopup
            }}
        >
            {children}
        </InterfaceContext.Provider>
    )
}

export default InterfaceProvider;