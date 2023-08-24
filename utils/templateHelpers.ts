export const staticTemplates = [
    // Template 1
    {
        templateId: '1',
        price: '$150',
        templateName: 'Template #1',
        templateDescription: 'Only has two colors',
        fadeSettings: {
            enabled: false
        },
        mainLogo: {
            enabled: false
        },
        patternSettings: {
            enabled: false
        },
        backgroundSettings: {
            color: '#000000',
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    },
    // Template 2
    {
        templateId: '2',
        price: '$200',
        templateName: 'Template #2',
        templateDescription: 'Only has two colors and a Logo',
        fadeSettings: {
            enabled: false
        },
        mainLogo: {
            enabled: true,
            name: "logo-white.png",
            url: '../../images/logos/logo-white.png',
            x: 20,
            y: 30,
            width: 75,
            height: 50,
        },
        patternSettings: {
            enabled: false
        },
        backgroundSettings: {
            color: '#000000',
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    },
    // Template 3
    {
        templateId: '3',
        price: '$250',
        templateName: 'Template #3',
        templateDescription: 'Only has two colors and a Logo',
        fadeSettings: {
            enabled: true,
            fadeStyle: 'left-regular',
            fadeColor1: '#000000',
        },
        mainLogo: {
            enabled: true,
            name: "logo-white.png",
            url: '../../images/logos/logo-white.png',
            centerCoordinates: {
                x: 115,
                y: 35
            },
            width: 100,
            height: 100,
        },
        patternSettings: {
            enabled: true,
            logo: {
                name: "logo-white.png",
                url: '../../images/logos/logo-white.png'
            },
            opacity: 0.5,
            repeatType: 'repeat'
        },
        backgroundSettings: {
            color: '#000000',
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    },
    // Template 4
    {
        templateId: '4',
        price: '$250',
        templateName: 'Template #4',
        templateDescription: 'Only has two colors and a Logo',
        fadeSettings: {
            enabled: true,
            fadeStyle: 'center-circle',
            fadeColor1: '#000000',
        },
        mainLogo: {
            enabled: true,
            name: "logo-white.png",
            url: '../../images/logos/logo-white.png',
            centerCoordinates: {
                x: 115,
                y: 35
            },
            width: 100,
            height: 100,
        },
        patternSettings: {
            enabled: true,
            logo: {
                name: "logo-white.png",
                url: '../../images/logos/logo-white.png'
            },
            opacity: 0.5,
            repeatType: 'repeat'
        },
        backgroundSettings: {
            color: '#000000',
            stroke: {
                enabled: true,
                color: '#000000'
            }
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    },
    // Template 5
    {
        templateId: '5',
        price: '$250',
        templateName: 'Template #5',
        templateDescription: 'Only has two colors and a Logo',
        fadeSettings: {
            enabled: true,
            fadeStyle: 'bottom-top',
            fadeColor1: '#000000',
        },
        mainLogo: {
            enabled: true,
            name: "logo-white.png",
            url: '../../images/logos/logo-white.png',
            centerCoordinates: {
                x: 115,
                y: 35
            },
            width: 100,
            height: 100,
        },
        patternSettings: {
            enabled: true,
            logo: {
                name: "logo-white.png",
                url: '../../images/logos/logo-white.png'
            },
            opacity: 0.3,
            repeatType: 'repeat'
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'fade',
                    url: '../../images/bg/carbon-fiber-fade-down.png'
                }
            },
            stroke: {
                enabled: true,
                color: '#000000'
            }
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }
]