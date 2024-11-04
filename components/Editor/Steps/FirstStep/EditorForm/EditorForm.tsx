import type { FormInstance } from 'antd';
import { useContext, useRef, useState, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { EditorContext } from '../../../../../context/editorContext';

import {
    AutoComplete,
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
import Image from 'next/image';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { FormModal } from '../../../FormModal/FormModal';
import { isReverseText } from '../../../../../utils/helpers/states/reverseText';

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

    const {
        loading,
        isPreset
    } = useContext(InterfaceContext) as InterfaceContextType

    const {
        createLicensePlate,
        currentLicensePlate,
        updateLicensePlate,
        updateStep,
        initialStore
    } = useContext(EditorContext) as EditorContextType;

    const inputRef = useRef<InputRef>(null);

    const [selectedValue, setSelectedValue] = useState('');
    const [submittable, setSubmittable] = useState<boolean>(false);
    const [isInputValid, setIsInputValid] = useState<boolean>(true);
    const [formValues, setFormValues] = useState({});
    const [newOptions, setNewOptions] = useState([]);
    const [openDropdown, setOpenDropdwon] = useState<boolean>(false);
    const [form] = Form.useForm();
    const values = Form.useWatch([], form);

    const {Option} = AutoComplete;
    
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
        // console.log(form);
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
        // const regex = /^[A-Za-z0-9\s-]+$/;
        if (regex.test(e.target.value)) {
            setIsInputValid(true)
            updateLicensePlate('plateNumber', e.target.value)
        }
        else {
            setIsInputValid(false)
        }
    }


    const formatDisplayText = (text: any) => {
        return text.replace(/-/g, '<span className="custom-dash">-</span>');
    };

    function customCharCountAndModify(str: string) {
        let length = 0;
        let modifiedStr = '';
        // 3 SPACE 3

        // Iterate through each character in the string
        for (let i = 0; i < str.length; i++) {
            if(str.length === 7 && str[i] === ' ' && i === 3){
                // console.log('here')
                length += 2; // Count space as two characters
                modifiedStr += '  '; // Add two spaces to the modified string
            } else {
                // console.log('else')
                length += 1; // Count other characters normally
                modifiedStr += str[i]; // Add the character to the modified string
            }
        }
        // Check if the string length including spaces is 6
        // if (str.length === 7) {
        //     // Check if the string contains exactly one space
        //     let spaceCount = (str.split(' ').length - 1);
        //     if (spaceCount === 1) {
        //         return modifiedStr; // Return 2 if the string has 6 characters including one space
        //     }
        // }
        return modifiedStr;
    }

    const handleSelect = (value, option) => {
        const reverse = isReverseText(option?.label?.toUpperCase());
        updateLicensePlate('state', option?.value)
        updateLicensePlate('reverseText', undefined, reverse)
        setSelectedValue(option?.value)
        setNewOptions([])
    }

    const handleChange = (value) => {
        const filterArray = states?.filter(state => (state?.value).toLowerCase().includes(value.toLowerCase()))
        console.log(filterArray)
        if(filterArray.length === 1){
            setNewOptions(filterArray)
            const reverse = isReverseText(filterArray[0]?.label?.toUpperCase());
            updateLicensePlate('state', filterArray[0]?.value)
            updateLicensePlate('reverseText', undefined, reverse)
            setSelectedValue(filterArray[0]?.value)
            setNewOptions([])
        }
    };

    return (
        <>
            <FormModal />
            <Container
                className="editor__main-container animate__animated animate__fadeIn"
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
                                    label="Type in your state"
                                    tooltip={'Type in the state associated to your license plate'}
                                    rules={
                                        [
                                            { required: true, message: 'State is required' }
                                        ]
                                    }
                                >
                                    <AutoComplete
                                        autoFocus
                                        value={selectedValue}
                                        onChange={handleChange}
                                        placeholder="Type in your state"
                                        onSearch={(input) => {
                                            const filterArray = states?.filter(state => (state?.value).toLowerCase().includes(input?.toLowerCase()))
                                            if(filterArray?.length === 1){
                                                setNewOptions(filterArray)
                                            }
                                        }}
                                        onSelect={handleSelect}
                                    >
                                        {newOptions.map((option) => (
                                            <Option key={option?.value} value={option?.value} label={option?.label}>
                                                {`${option?.value}`}
                                            </Option>
                                        ))}
                                    </AutoComplete>
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
                                    label="Enter your license plate letters"
                                    rules={[
                                        { required: true, message: 'License Plate letters are required' },
                                        // { pattern: regex, message: "Only authorized characters are letters, spaces, numbers and -" }
                                    ]}
                                    tooltip={
                                        <div
                                            style={{
                                                textAlign: 'center'
                                            }}
                                        >
                                            <Image
                                                alt=''
                                                width={100}
                                                height={50}
                                                src="/images/resources/info/characters/1.png"
                                            />
                                            <p style={{
                                                textAlign: 'center',
                                                fontSize: '0.8rem',
                                                marginBottom: 0
                                            }}>Enter the characters associated to your license plate</p>
                                        </div>
                                    }
                                >
                                    <Input
                                        disabled={!form.getFieldValue('state')}
                                        maxLength={8}
                                        ref={inputRef}
                                        onChange={(e) => updateLicensePlate('plateNumber', customCharCountAndModify(e.target.value.toUpperCase()))}
                                        placeholder='Enter your license plate letters...'
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                        {/* License Plate # END */}

                        {/* Vehicle Type START */}
                        {/* <Row
                            className={`${!form.getFieldValue('plateNumber') ? 'editor__disabled--input' : ''}`}
                        > */}
                        {/* <Col {...columnSettings}> */}
                        {/* <div className="editor__label-container">
                                    <label className="editor__label-text">Select your vehicle type</label>
                                </div> */}
                        {/* <FormItem

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
                                </FormItem> */}
                        {/* </Col> */}
                        {/* </Row> */}
                        {/* Vehicle Type END */}

                        {/* License Plate Position START */}
                        <Row
                            className={`${form.getFieldValue('plateNumber') ? '' : 'editor__disabled--input'}`}
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
                                    rules={[{ required: true, message: 'License Plate Letter Position is required' }]}
                                >
                                    <Select
                                        disabled={!form.getFieldValue('plateNumber')}
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
                                xs="10"
                                sm="10"
                                md="10"
                                lg="10"
                                xl="10"
                                xxl="10"
                            >
                                <div
                                    className="editor__label-container"
                                >
                                    <label className="editor__label-text editor--text-left">Do you have text on the bottom? <Tooltip title={
                                        <div
                                            style={{
                                                textAlign: 'center'
                                            }}
                                        >
                                            <Image
                                                alt=''
                                                width={100}
                                                height={50}
                                                src="/images/resources/info/bottom-text/1.png"
                                            />
                                            <p style={{
                                                textAlign: 'center',
                                                fontSize: '0.8rem',
                                                marginBottom: 0
                                            }}>Text located at the bottom of your plate</p>
                                        </div>
                                    }>
                                        <QuestionCircleOutlined rev={''} style={{
                                            color: '#0093FF'
                                        }} />
                                    </Tooltip></label>
                                </div>
                            </Col>
                            <Col
                                xs="2"
                                sm="2"
                                md="2"
                                lg="2"
                                xl="2"
                                xxl="2"
                            >
                                <FormItem
                                    name="bottomTextEnabled"
                                    className="editor--text-right"
                                    // hasFeedback
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
                                        >
                                            <Input
                                                name="bottomText"
                                                ref={inputRef}
                                                // required={}
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
                id={'submitButton'}
            >
                <Row>
                    <Action
                        loading={loading}
                        actionClass='action__continue'
                        disabled={!submittable}
                        text={'Continue'}
                        action={
                            () => initialStore()
                        }
                    />
                </Row>
            </Container>
        </>
    )
}

export default EditorForm;