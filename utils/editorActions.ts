import { faFillDrip, faSprayCanSparkles, faFont, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'


export const editorActions = [
    // Template 1
    {
        name: 'Background',
        description: 'Background Settings',
        icon: faFillDrip,
        subStep: 'backgroundSetting',
    },
    {
        name: 'Text',
        description: 'Text Settings',
        icon: faFont,
        subStep: 'textSetting',
    },
    {
        name: 'Logo',
        description: 'Logo',
        icon: faMagnifyingGlassPlus,
        subStep: 'extraDetails',
    },
]