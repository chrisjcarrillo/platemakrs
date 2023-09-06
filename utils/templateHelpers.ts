export const staticTemplates = [
    // Template 1
    {
        templateId: '1',
        shopifyHandle: 'two-colors-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            pinstripe: {
                enabled: false,
                color: '#ffffff'
            }
        },
        state: {
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
        shopifyHandle: 'two-colors-and-logo-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },

        mainLogo: {
            enabled: true,
            hasColor: false,
            imageType: 'svg',
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 32
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow: {
                enabled: false
            }
        },
        backgroundSettings: {
            color: '#000000',
            pinstripe: {
                enabled: false,
                color: '#ffffff'
            }
        },
        state: {
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
        fadeType: 'FADE-UP',
        shopifyHandle: 'pattern-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },

        mainLogo: {
            enabled: true,
            hasColor: false,
            imageType: 'svg',
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 32
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow: {
                enabled: false
            }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    name: 'pattern-opacity.png',
                    url: '/images/resources/preset/logos/pattern.png',
                },
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
            pinstripe: {
                enabled: false,
                color: '#ffffff'
            }
        },
        state: {
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
        fadeType: 'FADE-UP',
        shopifyHandle: 'pattern-logo-bottom-logo-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: false,
            imageType: 'svg',
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 32
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/bottom-logo.png',
            centerCoordinates: {
                x: 98,
                y: 2
            },
            width: 145,
            height: 10,
            glow: {
                enabled: true,
                color: "#000000"
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    name: 'pattern-opacity.png',
                    url: '/images/resources/preset/logos/pattern-opacity.png',
                },
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
            pinstripe: {
                enabled: false,
                color: '#ffffff'
            }
        },
        state: {
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
        fadeType: 'FADE-DOWN',
        shopifyHandle: 'fade-down-pattern-logo-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: false,
            imageType: 'svg',
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 32
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: false,
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/bottom-logo.png',
            centerCoordinates: {
                x: 98,
                y: 2
            },
            width: 145,
            height: 10,
            glow: {
                enabled: true,
                color: "#000000"
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    name: 'pattern-opacity.png',
                    url: '/images/resources/preset/logos/fade-down-pattern.png',
                },
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
            pinstripe: {
                enabled: false,
                color: '#ffffff'
            }
        },
        state: {
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

    // Template 6
    {
        templateId: '6',
        fadeType: 'FADE-DOWN',
        shopifyHandle: 'fade-down-pattern-logo-bottom-logo-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: false,
            imageType: 'svg',
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 32
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/bottom-logo.png',
            centerCoordinates: {
                x: 98,
                y: 2
            },
            width: 145,
            height: 10,
            glow: {
                enabled: true,
                color: "#000000"
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    name: 'pattern-opacity.png',
                    url: '/images/resources/preset/logos/fade-down-pattern-opacity.png',
                },
            },
            stroke: {
                enabled: true,
                color: '#000000'
            }
        },
        state: {
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

    // Template 7
    {
        templateId: '7',
        fadeType: 'FULL-BG',
        shopifyHandle: 'copy-of-fade-up-pattern-logo-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: false,
            imageType: 'svg',
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 32
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: false,
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/bottom-logo.png',
            centerCoordinates: {
                x: 98,
                y: 2
            },
            width: 145,
            height: 10,
            glow: {
                enabled: true,
                color: "#000000"
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    name: 'pattern-opacity.png',
                    url: '/images/resources/preset/logos/full-pattern.png',
                },
            },
            stroke: {
                enabled: true,
                color: '#000000'
            }
        },
        state: {
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

    // Template 8
    {
        templateId: '8',
        fadeType: 'FULL-BG',
        shopifyHandle: 'copy-of-fade-up-pattern-logo-bottom-logo-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: false,
            imageType: 'svg',
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 32
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/bottom-logo.png',
            centerCoordinates: {
                x: 98,
                y: 2
            },
            width: 145,
            height: 10,
            glow: {
                enabled: true,
                color: "#000000"
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    name: 'pattern-opacity.png',
                    url: '/images/resources/preset/logos/full-pattern.png',
                },
            },
            stroke: {
                enabled: true,
                color: '#000000'
            }
        },
        state: {
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
]