import type { FormInstance } from 'antd';
import { useContext, useRef, useState, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { EditorContext } from '../../../../../context/editorContext';

import {
    Form,
    Input,
    InputRef,
    Select,
    Switch,
    Tooltip
} from 'antd';

import {
    recommendedStates,
    platePosition,
    states,
    vehicleType
} from '../../../../../utils/helpers';
import { EditorContextType } from '../../../../../context/editorContext';
import { Action } from '../../../Action/Action';
import { InterfaceContext, InterfaceContextType } from '../../../../../context/interfaceContext';

// ToDo
//// Validate Inputs
//// Create Opacity Inputs depending on which on is filled

interface SButton {
    form: FormInstance;
    updateStep: () => void;
}

// const SubmitButton = (
//     { form, updateStep }: SButton
// ) => {
    
// };


const EditorForm = (props: any) => {

    const{
        stepLoading,
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType

    const {
        createLicensePlate,
        currentLicensePlate,
        updateLicensePlate,
        updateStep
    } = useContext(EditorContext) as EditorContextType;

    const inputRef = useRef<InputRef>(null);
    const [submittable, setSubmittable] = useState<boolean>(false);
    const [isInputValid, setIsInputValid] = useState<boolean>(true);
    const [formValues, setFormValues] = useState({});
    const [form] = Form.useForm();
    const values = Form.useWatch([], form);
    
    const FormItem = Form.Item;
    const regex = /^[A-Za-z0-9\s-]+$/;
    const columnSettings = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
    }


    useEffect(() => {
        form.validateFields().then(
            () => {
                setSubmittable(true);
            },
            () => {
                setSubmittable(false);
            },
        );
    }, [values]);

    const formItemLayout = { labelCol: { span: 24 }, wrapperCol: { span: 24 } }


    const licensePlateValidtor = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[A-Za-z0-9\s-]+$/;
        if (regex.test(e.target.value)) {
            setIsInputValid(true)
            updateLicensePlate('plateNumber', e.target.value)
        }
        else {
            setIsInputValid(false)
        }
    }

    return (
        <>
            <Container
                className="editor__main-container"
            >
                <div className="editor__container">
                    <Form
                        initialValues={currentLicensePlate}
                        scrollToFirstError
                        {...formItemLayout}
                        form={form}
                        name="validateOnly"
                        autoComplete="off"

                        onValuesChange={(_, values) => setFormValues(values)}
                    // name="validateOnly"
                    >
                        {/* State START */}
                        <Row
                            className="editor__state-container"
                        >
                            <Col
                                className={
                                    `editor__state-col`
                                }
                                {...columnSettings}

                            >
                                <FormItem
                                    name="state"
                                    hasFeedback
                                    label="Select your state"
                                    tooltip={'Select the State associated to your license plate'}
                                    rules={
                                        [
                                            { required: true, message: 'State is required' }
                                        ]
                                    }
                                >
                                    <Select
                                        labelInValue
                                        onSelect={(e) => {
                                            updateLicensePlate('state', e.label)
                                        }}
                                        size="large"
                                        showSearch
                                        placeholder="Select your state"
                                        optionFilterProp='children'
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        style={{
                                            width: "100%",
                                        }}
                                        options={
                                            [
                                                {
                                                    label: 'Recomended States',
                                                    options: recommendedStates
                                                },
                                                {
                                                    label: 'States',
                                                    options: states
                                                }
                                            ]
                                        }
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        {/* State END */}

                        {/* License Plate # Start */}
                        <Row
                            className={`${form.getFieldValue('state') ? '' : 'editor__disabled--input'}`}
                        >
                            <Col {...columnSettings}>
                                {/* <div
                                    className="editor__label-container"
                                >
                                    <label className="editor__label-text">Enter your license plate characters</label>
                                </div> */}
                                <FormItem
                                    name="plateNumber"
                                    hasFeedback
                                    label="Enter your license plate character"
                                    rules={[
                                        { required: true, message: 'License Plate characted are required' },
                                        { pattern: regex, message: "Only authorized characters are letters, spaces, numbers and -" }
                                    ]}
                                    tooltip={'Enter the characters associated to your license plate'}
                                >
                                    <Input
                                        disabled={!form.getFieldValue('state')}
                                        maxLength={8}
                                        ref={inputRef}
                                        onChange={(e) => licensePlateValidtor(e)}
                                        placeholder='Enter your license plate characters...'
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        {/* License Plate # END */}

                        {/* Vehicle Type START */}
                        <Row
                            className={`${!form.getFieldValue('plateNumber') ? 'editor__disabled--input' : ''}`}
                        >
                            <Col {...columnSettings}>
                                {/* <div className="editor__label-container">
                                    <label className="editor__label-text">Select your vehicle type</label>
                                </div> */}
                                <FormItem

                                    tooltip={'Select the vehicle type associated to your license plate'}
                                    name="vehicleType"
                                    hasFeedback
                                    label="Select vehicle type"
                                    rules={[{ required: true, message: 'Vehicle Type is required' }]}
                                >
                                    <Select
                                        labelInValue
                                        onSelect={(e) => updateLicensePlate('vehicleType', e.value)}
                                        disabled={!form.getFieldValue('plateNumber')}
                                        size="large"
                                        placeholder="Select vehicle type..."
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        style={{
                                            width: "100%",
                                        }}
                                        options={
                                            [
                                                {
                                                    label: 'Vehicle Type',
                                                    options: vehicleType
                                                }
                                            ]
                                        }
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        {/* Vehicle Type END */}

                        {/* License Plate Position START */}
                        <Row
                            className={`${form.getFieldValue('vehicleType') ? '' : 'editor__disabled--input'}`}
                        >
                            <Col {...columnSettings}>
                                {/* <div className="editor__label-container">
                                    <label className="editor__label-text">License Plate # Position</label>
                                </div> */}
                                <FormItem
                                    tooltip={'Select the Character Position associated to your license plate'}
                                    name="platePosition"
                                    hasFeedback
                                    label="License Plate Position"
                                    rules={[{ required: true, message: 'License Plate Position is required' }]}
                                >
                                    <Select
                                        disabled={!form.getFieldValue('vehicleType')}
                                        labelInValue
                                        onSelect={(e) => updateLicensePlate('platePosition', e.value)}
                                        size="large"
                                        placeholder="Select Position..."
                                        optionFilterProp='children'
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        style={{
                                            width: "100%",
                                        }}
                                        options={
                                            [
                                                {
                                                    label: 'License Plate Positions',
                                                    options: platePosition
                                                }
                                            ]
                                        }
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        {/* License Plate Position END */}
                        

                        {/* Bottom Text Enabled? Start */}
                        <Row className={`${form.getFieldValue('platePosition') ? '' : 'editor__disabled--input'}`}>
                            <Col
                                xs="8"
                                sm="8"
                                md="8"
                                lg="8"
                                xl="8"
                                xxl="8"
                            >
                                <div
                                    className="editor__label-container"
                                >
                                    <label className="editor__label-text editor--text-left">Do you have text on the bottom?</label>
                                </div>
                            </Col>
                            <Col
                                xs="4"
                                sm="4"
                                md="4"
                                lg="4"
                                xl="4"
                                xxl="4"
                            >
                                <FormItem
                                    name="bottomTextEnabled"
                                    className="editor--text-right"
                                    hasFeedback
                                >
                                    <Switch
                                        // defaultChecked={}
                                        disabled={!form.getFieldValue('platePosition')}
                                        onChange={(e) => updateLicensePlate('bottomTextEnabled', undefined, e)}
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        {/* Bottom Text Enabled? END */}

                        {/* Bottom Text Start */}
                        {
                            currentLicensePlate?.bottomTextEnabled && (

                                <Row>
                                    <Col {...columnSettings}>
                                        <FormItem
                                            name="bottomText"
                                            hasFeedback
                                            label="Bottom Text"
                                            rules={[
                                                { required: form.getFieldValue('bottomTextEnabled'), message: 'Bottom Text is required' }
                                            ]}
                                        >
                                            <Input
                                                name="bottomText"
                                                ref={inputRef}
                                                onChange={(e) => updateLicensePlate('bottomText', e.target.value)}
                                                placeholder='Enter Bottom Text...'
                                            />
                                        </FormItem>
                                    </Col>
                                </Row>

                            )
                        }

                        {/* Bottom Text END */}
                    </Form>
                </div>
            </Container>
            {/* Next Step Button */}
            <Container
                className={`submitButton__container`}
            >
                <Row>
                    <Action
                        loading={stepLoading}
                        actionClass='action__continue'
                        disabled={!submittable}
                        text={'Continue'}
                        action={
                            () => createLicensePlate?.()
                        }
                    />
                </Row>
            </Container>
        </>
    )
}

export default EditorForm;