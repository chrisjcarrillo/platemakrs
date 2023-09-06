import { useContext } from "react"
import { EditorContext, EditorContextType } from "../../../context/editorContext"

export const Pinstripe = () => {

    const {
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    return (
        <div className="background__pinstripe">
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 873.1 450"

            >
                <path
                    fill={`${currentCustomTemplate?.backgroundSettings?.pinstripe?.enabled ?
                            currentCustomTemplate?.backgroundSettings?.pinstripe?.color : "#000000"
                        }`}
                    id="Pinstripe"
                    d="M58.3,52.5v2.4h747.2c11.9,0,21.6,9.7,21.6,21.6v294.3c0,11.9-9.7,21.6-21.6,21.6H58.3
	            c-11.9,0-21.6-9.7-21.6-21.6V76.5c0-11.9,9.7-21.6,21.6-21.6V52.5v-2.4c-14.6,0-26.4,11.8-26.4,26.4v294.3
	            c0,14.6,11.8,26.4,26.4,26.4h747.2c14.6,0,26.4-11.8,26.4-26.4V76.5c0-14.6-11.8-26.4-26.4-26.4H58.3V52.5z"
                />
            </svg>
        </div>
    )
}