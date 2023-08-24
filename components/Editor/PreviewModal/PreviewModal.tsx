import { Button, Modal } from "antd"
import { useContext } from "react"
import { EditorContext, EditorContextType } from "../../../context/editorContext"
import TemplateCanvas from "../Template/TemplateCanvas";
import { InterfaceContext, InterfaceContextType } from "../../../context/interfaceContext";

export const PreviewModal = (
    props:{
        product?: any
    }
) => {

    const {
        stepLoading,
        showPreview,
        setShowPreview
    } = useContext(InterfaceContext) as InterfaceContextType;

    const {
        currentTemplate, 
        createCustomTemplate,
    } = useContext(EditorContext) as EditorContextType;

    const {
        product
    } = props;

    return(
        <Modal
            maskClosable={false}
            className={`previewModal`}
            onCancel={(e) => setShowPreview(false)}
            closable={true}
            // title="Confirm Selected Template"
            okText={'Continue'}
            centered
            open={showPreview}
            destroyOnClose
            title={'Preview'}
            footer={[
                <Button key="cancel" onClick={(e) => setShowPreview(false)}>
                  Cancel
                </Button>,
                <Button key="submit" type="primary" loading={stepLoading} onClick={
                    () => createCustomTemplate?.(
                        currentTemplate?.id,
                        product.variants
                    )
                }>
                  Confirm
                </Button>
              ]}
        >
            <TemplateCanvas
                popupPreview={true}
            />
            <div className="previewModal__container">
                <h1 className="previewModal__name">{currentTemplate?.templateName}</h1>
                <p className="previewModal__description">{currentTemplate?.templateDescription}</p>
            </div>
        </Modal>
    )
}