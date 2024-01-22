import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from 'antd';
// Canvas Background 
import { Background } from '../Background/Background';

// Canvas Logo
import { Logo } from '../Logo/Logo';
import { EditorContext } from '../../../context/editorContext';
import { EditorContextType } from '../../../context/editorContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { FinishEffect } from '../FinishEffect/FinishEffect';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { StateSvg } from '../../shared/StateSvg/StateSvg';
import { stateSvg } from '../../../utils/helpers/stateSvg';
import { initialLicensePlate, initialState } from '../../../utils/helpers';
import { InterfaceContext, InterfaceContextType } from '../../../context/interfaceContext';
import { BottomLogo } from '../BottomLogo/BottomLogo';
import { useRouter } from 'next/navigation';
import { StoreContext, StoreContextType } from '../../../context/storeContext';
import html2canvas from 'html2canvas'
// import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject, uploadString } from 'firebase/storage';
import { Stage, Layer, Rect, Text } from 'react-konva';

var SCENE_BASE_WIDTH = 800;
// var SCENE_BASE_HEIGHT = 1000;

const TemplateTest = (
    props: {
        reference?: any,
        popupPreview?: boolean,
    }
) => {

    const [size, setSize] = useState({
        width: props.reference?.current?.offsetWidth,
        height: props.reference?.current?.offsetHeight
    });

    // do your calculations for stage properties

    useEffect(() => {
        const checkSize = () => {
            // Control Mobile
            setSize({
                width: props.reference.current.offsetWidth,
                height: size?.width > 425 ? props.reference.current.offsetHeight : 250
            });
            
        };
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    const scale = size?.width / SCENE_BASE_WIDTH;
    console.log(size?.width > 425)
    console.log(size?.height)

    return (
        // Main Stage
        <Stage
            width={size?.width}
            height={size?.height}
            scaleX={scale}
            scaleY={scale}
            style={{
                backgroundColor: 'green',
                zIndex: 100
            }}
        >
            {/*  */}
            <Layer
                id='backgroundLayer'
            >
                <Rect
                    cornerRadius={20}
                    x={150}
                    y={100}
                    width={450}
                    height={250}
                    fill="red"
                // shadowBlur={10}
                />
            </Layer>
        </Stage>
    )
}

export default TemplateTest;