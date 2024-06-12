import { allStates } from "./allStates"

// const statesWithTwoPlates = [
//     { label: 'California', value: 'CA' },
//     { label: 'Colorado', value: 'CO' },
//     { label: 'Connecticut', value: 'CT' },
//     { label: 'Hawaii', value: 'HI' },
//     { label: 'Idaho', value: 'ID' },
//     { label: 'Illinois', value: 'IL' },
//     { label: 'Iowa', value: 'IA' },
//     { label: 'Maine', value: 'ME' },
//     { label: 'Maryland', value: 'MD' },
//     { label: 'Massachusetts', value: 'MA' },
//     { label: 'Minnesota', value: 'MN' },
//     { label: 'Missouri', value: 'MO' },
//     { label: 'Montana', value: 'MT' },
//     { label: 'Nebraska', value: 'NE' },
//     { label: 'Nevada', value: 'NV' },
//     { label: 'New Hampshire', value: 'NH' },
//     { label: 'New Jersey', value: 'NJ' },
//     { label: 'New York', value: 'NY' },
//     { label: 'North Dakota', value: 'ND' },
//     { label: 'Ohio', value: 'OH' },
//     { label: 'Oregon', value: 'OR' },
//     { label: 'Rhode Island', value: 'RI' },
//     { label: 'South Dakota', value: 'SD' },
//     { label: 'Texas', value: 'TX' },
//     { label: 'Utah', value: 'UT' },
//     { label: 'Vermont', value: 'VT' },
//     { label: 'Virginia', value: 'VA' },
//     { label: 'Washington', value: 'WA' },
//     { label: 'Wisconsin', value: 'WI' },
//     { label: 'Wyoming', value: 'WY' }
// ];

const statesWithTwoPlatesCodes = [
    'CA', 'CO', 'CT', 'HI', 'ID', 'IL', 'IA', 'ME', 'MD', 'MA', 'MN', 'MO', 
    'MT', 'NE', 'NV', 'NH', 'NJ', 'NY', 'ND', 'OH', 'OR', 'RI', 'SD', 'TX', 
    'UT', 'VT', 'VA', 'WA', 'WI', 'WY'
  ];

export const isTwoPlateState = (state: string) => statesWithTwoPlatesCodes.includes(state);