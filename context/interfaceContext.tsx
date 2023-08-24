import React, {
    createContext, useState, useEffect
} from 'react';

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

    movePattern?: boolean // For Pattern
    setMovePattern: (type: boolean) => void; // For Pattern

    isPreset?: boolean;
    setPreset: (type: boolean) => void;
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

    const [moveLogo, setMoveLogo] = useState<boolean>(false) // Move Logo
    const [moveBottomLogo, setMoveBottomLogo] = useState<boolean>(false) // Move Bottom Logo

    const [movePattern, setMovePattern] = useState<boolean>(false) // Move Logo

    const [moveBackgroundLogo, setMoveBackgroundLogo] = useState<boolean>(false) // Move Gradient

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

                movePattern,
                setMovePattern,

                isPreset,
                setPreset,

            }}
        >
            {children}
        </InterfaceContext.Provider>
    )
}

export default InterfaceProvider;