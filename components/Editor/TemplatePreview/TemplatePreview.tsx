// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row';

// import { premadeTemplates } from "../../../utils/premadeTemplates"
// import TemplateCanvas from '../Template/TemplateCanvas';
// import { EditorContext } from '../../../context/editorContext';
// import { EditorContextType } from '../../../context/editorContext';
// import { useContext } from 'react';
// import PreviewCanvas from '../PreviewCanvas/PreviewCanvas';
// import { Action } from '../Action/Action';
// import { staticTemplates } from '../../../utils/templateHelpers';


// export const TemplatePreview = (props: any) => {

//     const { product } = props;

//     const {
//         currentTemplate,
//         onSelectTemplate
//     } = useContext(EditorContext) as EditorContextType;

//     const columnSettings = {
//         xs: 6,
//         sm: 6,
//         md: 6,
//         lg: 6,
//         xl: 6
//     }

//     const bigColumnSettings = {
//         xs: 12,
//         sm: 12,
//         md: 12,
//         lg: 12,
//         xl: 12
//     }

//     return (
//         <Container
//             className={`templatePreview__container`}
//         >
//             {/* Select Templates */}

//             <Row className={`templatePreview__title-container`}>
//                 <Col {...bigColumnSettings}>
//                     <span className={`templatePreview__title-text`}>Want to create a custom design? <a className={`templatePreview__title-action`}>Contact us.</a>
//                     </span>
//                 </Col>
//                 <Col {...bigColumnSettings} className={`templatePreview__title-divider`}>
//                     <span className={`templatePreview__title-divider-text`}>OR</span>
//                 </Col>
//                 <Col {...bigColumnSettings} className={`templatePreview__title-select`}>
//                     <span className={`templatePreview__title-select-text`}>Select a Template</span>
//                 </Col>
//             </Row>

//             <Row
//                 className={`templatePreview__row g-4`}
//             >
//                 {(staticTemplates.map((template, index) => {
//                     return (
//                         <Col
//                             {...columnSettings}
//                             className={`templatePreview__column ${currentTemplate?.templateId === template?.templateId ? 'templatePreview--active' : ''}`}
//                             onClick={
//                                 e => onSelectTemplate?.(
//                                     template
//                                 )
//                             }
//                             key={index}
//                         >
//                             <div className="templatePreivew__card">
//                                 <PreviewCanvas
//                                     template={template}
//                                 />
//                                 <h3 className='templatePreview__name'>{template.templateName}</h3>
//                                 <h5 className='templatePreview__price'>Starting at {template.price}</h5>
//                             </div>
//                         </Col>
//                     )
//                 }))}
//             </Row>
//         </Container>

//     )
// }