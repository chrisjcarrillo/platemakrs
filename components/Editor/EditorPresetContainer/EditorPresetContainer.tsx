import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { editorActions } from '../../../utils/editorActions';
import { Button } from 'antd';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons'
import { IEditorSteps } from '../../../interfaces/editor.interface';
import { EditorActionContainer } from '../EditorActionContainer/EditorActionContainer';
import { useContext } from 'react';
import { EditorContext, EditorContextType } from '../../../context/editorContext';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { FinishSelect } from '../EditorActions/FinishSelect/FinishSelect';
import { StoreContext, StoreContextType } from '../../../context/storeContext';
import { PlaceOrder } from '../BottomButton/PlaceOrder';
import { PresetActions } from './actions/PresetActions';
import { useRouter } from "next/navigation";

export const EditorPresetContainer = (
    props: any
) => {
    const router = useRouter();
    // const {
    //     checkout,
    //     redirectCheckout
    // } = useContext(StoreContext) as StoreContextType;

    const {
        currentLicensePlate,
        currentEditorStep,
        updateStep,
        currentCustomTemplate
    } = useContext(EditorContext) as EditorContextType;

    const actionButtonsCols = {
        xs: 6,
        sm: 6,
        md: 6,
        lg: 6,
        xl: 6
    }

    const handleActions = (
        actionType: 'back' | 'forward' | 'cancel',
    ) => {
        const CURRENT_STEP = 3;
        console.info('handleActions')
        // If your in the first action
        if (actionType == "cancel") {
            if (currentEditorStep?.currentSubStep == "presetBgColor") {
                router.push('/editor');
            }
        }
        if (actionType == 'back') {
        }
        if (actionType == "forward") {
            if (
                currentEditorStep?.currentSubStep === "presetBgColor"
            ) {
                // If Stroke is enabled go to stroke
                if (currentCustomTemplate?.backgroundSettings?.stroke?.enabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetBgBorder',
                        'Select Color',
                        false,
                        'Background Border'
                    )
                }
                // If Stroke isn't enabled go to character colors
                if (!currentCustomTemplate?.backgroundSettings?.stroke?.enabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetCharacterColor',
                        'Select Character Color',
                        false,
                        'Plate Character'
                    )
                }
            }
            // If Stroke is enabled go to character colors after
            if (currentEditorStep?.currentSubStep === "presetBgBorder") {
                if (currentCustomTemplate?.backgroundSettings?.stroke?.enabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetCharacterColor',
                        'Select Character Color',
                        false,
                        'Plate Character'
                    )
                }
            }
            if (
                currentEditorStep?.currentSubStep === "presetCharacterColor"
            ) {
                // If Stroke is enabled go to stroke
                if (currentCustomTemplate?.plateNumber?.stroke?.enabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetCharacterStrokeColor',
                        'Select Border Color',
                        false,
                        'Plate Character'
                    )
                }
                // If Stroke isn't enabled go to state colors
                if (!currentCustomTemplate?.plateNumber?.stroke?.enabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetStateColor',
                        'Select Color',
                        false,
                        'State'
                    )
                }

            }
            // If Stroke is enabled go to state colors after
            if (currentEditorStep?.currentSubStep === "presetCharacterStrokeColor") {
                updateStep?.(
                    CURRENT_STEP,
                    'presetStateColor',
                    'Select Color',
                    false,
                    'State'
                )
            }

            // If State Color
            if (
                currentEditorStep?.currentSubStep === "presetStateColor"
            ) {
                // If Stroke is enabled go to stroke
                if (currentCustomTemplate?.state?.stroke?.enabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetStateStrokeColor',
                        'Select Border Color',
                        false,
                        'State'
                    )
                }
                // If Stroke isnt enabled but glow is go to glow
                if (!currentCustomTemplate?.state?.stroke?.enabled &&
                    currentCustomTemplate?.state?.glow?.enabled
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetStateGlowColor',
                        'Select Border Color',
                        false,
                        'State'
                    )
                }

                // If Stroke and glow arent enabled, 
                // CHECK IF bottom text is available
                if (!currentCustomTemplate?.state?.stroke?.enabled &&
                    !currentCustomTemplate?.state?.glow?.enabled && currentLicensePlate?.bottomTextEnabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetBottomColor',
                        'Select Border Color',
                        false,
                        'State'
                    )
                }
                //IF NONE of the above, go to logo color if available
                if (!currentCustomTemplate?.state?.stroke?.enabled &&
                    !currentCustomTemplate?.state?.glow?.enabled &&
                    !currentLicensePlate?.bottomTextEnabled &&
                    currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoColor',
                        'Select Logo Color',
                        false,
                        'Main Logo'
                    )
                }

                //IF NONE of the above, go to move Logo
                if (!currentCustomTemplate?.state?.stroke?.enabled &&
                    !currentCustomTemplate?.state?.glow?.enabled &&
                    !currentLicensePlate?.bottomTextEnabled &&
                    !currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoMove',
                        'Adjust Logo Position',
                        false,
                        'Main Logo'
                    )
                }
            }

            // If State Border
            if (
                currentEditorStep?.currentSubStep === "presetStateStrokeColor"
            ) {
                // If glow is enabled move to glow
                if (currentCustomTemplate?.state?.glow?.enabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetStateGlowColor',
                        'Select Border Color',
                        false,
                        'State'
                    )
                }

                // If glow isn't enabled, 
                // CHECK IF bottom text is available
                if (!currentCustomTemplate?.state?.glow?.enabled && currentLicensePlate?.bottomTextEnabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetBottomColor',
                        'Select Border Color',
                        false,
                        'State'
                    )
                }

                //IF NONE of the above, go to logo color if available
                if (
                    !currentCustomTemplate?.state?.glow?.enabled &&
                    !currentLicensePlate?.bottomTextEnabled &&
                    currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoColor',
                        'Select Logo Color',
                        false,
                        'Main Logo'
                    )
                }

                //IF NONE of the above, go to move Logo
                if (
                    !currentCustomTemplate?.state?.glow?.enabled &&
                    !currentLicensePlate?.bottomTextEnabled &&
                    !currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoMove',
                        'Adjust Logo Position',
                        false,
                        'Main Logo'
                    )
                }
            }

            // If State Glow
            if (
                currentEditorStep?.currentSubStep === "presetStateGlowColor"
            ) {
                if (currentLicensePlate?.bottomTextEnabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetBottomColor',
                        'Select Border Color',
                        false,
                        'State'
                    )
                }

                //IF NONE of the above, go to logo color if available
                if (
                    !currentLicensePlate?.bottomTextEnabled &&
                    currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoColor',
                        'Select Logo Color',
                        false,
                        'Main Logo'
                    )
                }

                //IF NONE of the above, go to move Logo
                if (
                    !currentLicensePlate?.bottomTextEnabled &&
                    !currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoMove',
                        'Adjust Logo Position',
                        false,
                        'Main Logo'
                    )
                }
            }

            // If Bottom Color
            if (
                currentEditorStep?.currentSubStep === "presetBottomColor"
            ) {
                // If Stroke is enabled go to stroke
                if (currentCustomTemplate?.bottomText?.stroke?.enabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetBottomStrokeColor',
                        'Select Border Color',
                        false,
                        'State'
                    )
                }

                // If Stroke isnt enabled but glow is go to glow
                if (!currentCustomTemplate?.bottomText?.stroke?.enabled &&
                    currentCustomTemplate?.bottomText?.glow?.enabled
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetBottomGlowColor',
                        'Select Border Color',
                        false,
                        'State'
                    )
                }

                //IF NONE of the above, go to logo color if available
                if (!currentCustomTemplate?.bottomText?.stroke?.enabled &&
                    !currentCustomTemplate?.bottomText?.glow?.enabled &&
                    currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoColor',
                        'Select Logo Color',
                        false,
                        'Main Logo'
                    )
                }

                //IF NONE of the above, go to move Logo
                if (!currentCustomTemplate?.bottomText?.stroke?.enabled &&
                    !currentCustomTemplate?.bottomText?.glow?.enabled &&
                    !currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoMove',
                        'Adjust Logo Position',
                        false,
                        'Main Logo'
                    )
                }
            }

            // If Bottom Border
            if (
                currentEditorStep?.currentSubStep === "presetBottomStrokeColor"
            ) {
                // If glow is enabled move to glow
                if (currentCustomTemplate?.bottomText?.glow?.enabled) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetBottomGlowColor',
                        'Select Border Color',
                        false,
                        'State'
                    )
                }

                //IF NONE of the above, go to logo color if available
                if (
                    !currentCustomTemplate?.bottomText?.glow?.enabled &&
                    currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoColor',
                        'Select Logo Color',
                        false,
                        'Main Logo'
                    )
                }

                //IF NONE of the above, go to move Logo
                if (
                    !currentCustomTemplate?.bottomText?.glow?.enabled &&
                    !currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoMove',
                        'Adjust Logo Position',
                        false,
                        'Main Logo'
                    )
                }
            }

            // If Bottom Glow
            if (
                currentEditorStep?.currentSubStep === "presetBottomGlowColor"
            ) {

                //IF NONE of the above, go to logo color if available
                if (
                    currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoColor',
                        'Select Logo Color',
                        false,
                        'Main Logo'
                    )
                }

                //IF NONE of the above, go to move Logo
                if (
                    !currentCustomTemplate?.mainLogo?.hasColor
                ) {
                    updateStep?.(
                        CURRENT_STEP,
                        'presetLogoMove',
                        'Adjust Logo Position',
                        false,
                        'Main Logo'
                    )
                }
            }

        }
    }

    return (
        <>
            {/* Actions */}
            {/* <Container className={`editorContainer__main`}>
        
            // Actions

            // TODOOOOOOO
           
            [] Forward
            [] Back
            - Background Color
                --- step: 3
                --- subStep: presetBgColor
                --- title: background color
                --- description: select the background color

            [] Forward
            [] Back
            - Background Stroke (If enabled): 
                --- step: 3
                --- subStep: presetBgBorder
                --- title: background border color
                --- description: select the background border color
            
            [] Forward
            [] Back
            - Background Color (If Enabled): presetBgImageColor
            - Background Pinstripe (If enabled)
                --- step: 3
                --- subStep: presetBgBorder
                --- title: background border color
                --- description: select the background border color

            [] Forward
            [] Back
            - Plate Character Color
                -- Color: presetCharacterColor
                -- Stroke (If enabled): presetCharacterStrokeColor
                
            [] Forward
            [] Back
            - State
                -- Color: presetStateColor
                -- Stroke (If enabled): presetStateStrokeColor
                -- Glow (If Enabled): presetStateGlowColor

            [] Forward
            [] Back
            - Bottom Text
                -- Color: presetBottomColor
                -- Stroke (If enabled): presetBottomStrokeColor
                -- Glow (If Enabled): presetBottomGlowColor

            - [Logo] Color or Colors: presetMainLogColor (if dosen't have multiple colors)
                -- [Logo] Move: presetMainLogoMove
                -- [Logo] Glow: presetMainLogoGlowColor

            - [Bottom Logo] Color: presetBottomLogoColor (if dosen't have multiple colors)
                -- [Bottom Logo] Move: presetBottomLogoMove
                -- [Bottom Logo] Glow: presetBottomLogoGlow

            - [Background Logo] Pattern Color: presetBackgroundLogoColor
                -- [Background Logo] Move: presetBackgroundLogoMove
                -- [Bottom Logo] Glow: presetBackgroundLogoGlow

            </Container> */}
            <Container className={`editorContainer__main`}>

                <Row className={`editorContainer__title`}>
                    <Col
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        xl={2}
                    >
                        <Button
                            disabled={
                                currentEditorStep?.currentSubStep === undefined ||
                                    currentEditorStep?.currentSubStep === "" ?
                                    true : false
                            }
                            size='small'
                            className='header__tools-left-back-button'
                            shape="circle"
                            icon={<ArrowLeftOutlined rev={''} />}
                            onClick={
                                () => updateStep?.(3, "")
                            }
                        />
                    </Col>
                    <Col
                        xs={8}
                        sm={8}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        {
                            currentEditorStep?.currentSubStep !== undefined
                            && <h2 className={`editorContainer__title-text`}>{currentEditorStep?.currentStepTitle}</h2>
                        }
                        <p
                            className={`editorContainer__title-subtext`}>
                            {currentEditorStep?.currentStepDescription ?? 'Using the options below'}
                        </p>
                    </Col>
                    <Col
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        xl={2}
                    >
                    </Col>
                </Row>

                {currentEditorStep?.currentSubStep &&
                    <PresetActions
                        step={currentEditorStep}

                    />
                }

                {!currentEditorStep?.currentSubStep &&
                    <Row className={`editorContainer__actions g-2`}>
                        {/* <FinishSelect
                            title="State Text"
                            type="finish"
                        /> */}
                        {/* {
                            editorActions.map((editor, index) => {
                                return (
                                    <Col
                                        style={
                                            currentTemplate?.templateId === '1' && index === 2 && !sessionStorage.getItem('preset') ? {
                                                display: 'none'
                                            } : {

                                            }
                                        }
                                        className={`editorAction__main`}
                                        {...editorCols}
                                        key={index}
                                        onClick={() => updateStep?.(3, editor.subStep, editor.description)}
                                    >
                                        <div className={`editorAction__card`}>
                                            <FontAwesomeIcon
                                                className={`editorAction__icon`}
                                                icon={editor.icon ?? faFillDrip}
                                            />
                                            <hr />
                                            <p className={`editorAction__name`}>
                                                {editor.name}
                                            </p>
                                        </div>
                                    </Col>
                                )
                            })
                        } */}
                    </Row>
                }

            </Container>

            {/* Details? */}
            <Container className={`editorContainer__order`}>
                {
                    currentEditorStep?.currentSubStep &&
                    <Row className={`editorContainer__order-row-steps g-2`}>
                        <Col
                            className={`editorContainer__order-step-back g-2`}
                            {...actionButtonsCols}
                        >
                            <Button
                                className={`editorContainer__order-step-back-button g-2`}
                                onClick={
                                    () => updateStep?.(
                                        3,
                                        currentEditorStep.currentSubStep === "textSetting" ? "backgroundSetting" :
                                            currentEditorStep.currentSubStep === "extraDetails" ? "textSetting" : "",
                                    )
                                }
                            >
                                {currentEditorStep.currentSubStep === "backgroundSetting" ? "Cancel" : "Back"}
                            </Button>
                        </Col>
                        <Col
                            {...actionButtonsCols}
                            className={`editorContainer__order-step-next g-2`}
                        >
                            <Button
                                className={`editorContainer__order-step-next-button g-2`}
                                onClick={
                                    () => handleActions('forward')
                                }
                            >
                                {currentEditorStep.currentSubStep === "extraDetails" ? "Complete" : "Next"}
                                {/* {currentEditorStep.currentSubStep === "backgroundSetting" ? "Cancel" : "Back"} */}
                            </Button>
                        </Col>
                    </Row>
                }
            </Container>
            {/* Details */}
        </>
    )
}