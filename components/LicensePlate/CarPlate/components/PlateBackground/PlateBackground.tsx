import { useContext } from "react";
import { Image } from "react-konva";
import useImage from "use-image";
import { EditorContext, EditorContextType } from "../../../../../context/editorContext";
import * as ReactDOMServer from 'react-dom/server';
import { Hexagon } from "../../../../shared/Hexagon/Hexagon";


const PlateBackground = (props: {
    plateWidth: number,
    plateHeight: number
}) => {
    const {
        currentCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const svgString = encodeURIComponent(
        ReactDOMServer.renderToStaticMarkup(<Hexagon customTemplate={currentCustomTemplate} />)
    );

    const [holesImage] = useImage(
        currentCustomTemplate?.backgroundSettings?.background?.file?.name === "hexagon.svg" ?
            `data:image/svg+xml,${svgString}` : currentCustomTemplate?.backgroundSettings?.background?.file?.url, 'anonymous'
    );

    return (
        <Image
            zIndex={2}
            cornerRadius={props.plateHeight * 0.05}
            x={0}
            y={0}
            width={props.plateWidth}
            height={props.plateHeight}
            image={holesImage}
        />)
}

export default PlateBackground;