export const premadeTemplates = [
   //Motorcycle
    {
        preset: true,
        vehicleType: 'Motorcycle',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '1',
        shopifyHandle: 'motorcycle-two-colors-template',
        startPlatePosition: 'center',
        startPlateText: 'SAMPLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]
    {
        preset: true,
        vehicleType: 'Motorcycle',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '2',
        shopifyHandle: 'motorcycle-harley-davidson-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/motorcycles/harley/logos/main/colors',
            url: '/images/resources/motorcycles/harley/logos/main/colors/black.svg',
            leftCoordinates: {
                x: 525,
                y: 250
            },
            centerCoordinates: {
                x: 525,
                y: 250
            },
            rightCoordinates: {
                x: 525,
                y: 250
            },
            width: 1050,
            height: 850,
            glow:{ enabled: true, color: '#acacac' }
        },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]
    {
        preset: true,
        vehicleType: 'Motorcycle',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '3',
        shopifyHandle: 'motorcycle-harley-davidson-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/motorcycles/harley/stripe/colors',
            url: '/images/resources/motorcycles/harley/stripe/colors/regular.png',
            leftCoordinates: {
                x: 50,
                y: 0
            },
            centerCoordinates: {
                x: 800,
                y: 0
            },
            rightCoordinates: {
                x: 245,
                y: 0
            },
            width: 500,
            height: 1200,
        },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/motorcycles/harley/logos/main/colors',
            url: '/images/resources/motorcycles/harley/logos/main/colors/gray.svg',
            leftCoordinates: {
                x: 525,
                y: 250
            },
            centerCoordinates: {
                x: 525,
                y: 250
            },
            rightCoordinates: {
                x: 525,
                y: 250
            },
            width: 1050,
            height: 850,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: false,
                    hasMainColor: false,
                    name: 'green-hexagons.png',
                    imageType: 'png',
                    filePath: '/images/resources/motorcycles/harley/backgrounds/',
                    url: '/images/resources/motorcycles/harley/backgrounds/hexagon-mesh.png',
                },
                stroke: {
                    enabled: true,
                    color: '#ff0000'
                }
            },
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
                enabled: true,
                color: '#ff6600'

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
                enabled: true,
                color: '#ff6600'

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
                enabled: true,
                color: '#ff6600'

            },
        }
    }, //Corvette #1  - [Done]
    {
        preset: true,
        vehicleType: 'Motorcycle',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '3',
        shopifyHandle: 'motorcycle-harley-davidson-3-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo:{
            enabled: false,
        },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/motorcycles/harley/logos/main/colors',
            url: '/images/resources/motorcycles/harley/logos/main/colors/black.svg',
            leftCoordinates: {
                x: 525,
                y: 250
            },
            centerCoordinates: {
                x: 525,
                y: 250
            },
            rightCoordinates: {
                x: 525,
                y: 250
            },
            width: 1050,
            height: 850,
            glow:{ enabled: true, color: 'red' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    enabled: true,
                    name: 'gray.png',
                    imageType: 'png',
                    filePath: '/images/resources/motorcycles/harley/backgrounds/hexagons-moto/1/colors',
                    url: '/images/resources/motorcycles/harley/backgrounds/hexagons-moto/1/colors/gray.png',
                }
            },
            stroke: { enabled: false }
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
                enabled: false,
            },
        }
    }, //Corvette #1  - [Done]
    {
        preset: true,
        vehicleType: 'Motorcycle',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '4',
        shopifyHandle: 'motorcycle-harley-davidson-4-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo:{
            enabled: false,
        },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/motorcycles/harley/logos/main/colors',
            url: '/images/resources/motorcycles/harley/logos/main/colors/black.svg',
            leftCoordinates: {
                x: 525,
                y: 250
            },
            centerCoordinates: {
                x: 525,
                y: 250
            },
            rightCoordinates: {
                x: 525,
                y: 250
            },
            width: 1050,
            height: 850,
            glow:{ enabled: true, color: '#ff7200' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    enabled: true,
                    name: 'gray.png',
                    imageType: 'png',
                    filePath: '/images/resources/motorcycles/harley/backgrounds/hexagons-moto/1/colors',
                    url: '/images/resources/motorcycles/harley/backgrounds/hexagons-moto/1/colors/gray.png',
                }
            },
            stroke: { enabled: false }
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
                enabled: false,
            },
        }
    }, //Corvette #1  - [Done]

    //Motorcycle - Premade
    {
        preset: false,
        vehicleType: 'Motorcycle',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '1',
        shopifyHandle: 'motorcycle-two-colors-custom-template',
        startPlatePosition: 'center',
        startPlateText: 'SAMPLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]
    {
        preset: false,
        vehicleType: 'Motorcycle',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '2',
        shopifyHandle: 'motorcycle-two-colors-logo-custom-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: false,
            imageType: 'svg',
            name: "logo.png",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 525,
                y: 250
            },
            centerCoordinates: {
                x: 525,
                y: 250
            },
            rightCoordinates: {
                x: 525,
                y: 250
            },
            width: 1050,
            height: 850,
            glow:{ enabled: true, color: '#acacac' }
        },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]



    //Car
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '1',
        shopifyHandle: 'mercedes-amg',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',

        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },

        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/cars/mercedes/logos/solid/colors',
            url: '/images/resources/cars/mercedes/logos/solid/colors/black.svg',
            leftCoordinates: {
                x: 375,
                y: 550
            },
            centerCoordinates: {
                x: 1475,
                y: 550
            },
            rightCoordinates: {
                x: 2425,
                y: 550
            },
            width: 700,
            height: 700,
            glow:{
                enabled: false 
            }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/mercedes/patterns/option-1',
            url: '/images/resources/cars/mercedes/patterns/option-1/gray.png',
            leftCoordinates: {
                x: 300,
                y: 50
            },
            centerCoordinates: {
                x: 1425,
                y: 50
            },
            rightCoordinates: {
                x: 2350,
                y: 50
            },
            width: 800,
            height: 1700,
        },
        backgroundSettings: {
            color: '#bebdc2',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#000000',
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
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
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
    }, // AMG 1 - [DONE]
    
    {
        vehicleType: 'Car',
        shopifyHandle: 'mercedes-amg-2',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '2',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/cars/mercedes/logos/solid/colors',
            url: '/images/resources/cars/mercedes/logos/solid/colors/black.svg',
            leftCoordinates: {
                x: 375,
                y: 550
            },
            centerCoordinates: {
                x: 1475,
                y: 550
            },
            rightCoordinates: {
                x: 2425,
                y: 550
            },
            width: 700,
            height: 700,
            glow:{ enabled: false }
        },

        bottomLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/cars/mercedes/logos/amg/colors',
            url: '/images/resources/cars/mercedes/logos/amg/colors/black.svg',
            leftCoordinates: {
                x: 1200,
                y: 1500
            },
            centerCoordinates: {
                x: 1200,
                y: 1500
            },
            rightCoordinates: {
                x: 1200,
                y: 1500
            },
            width: 1250,
            height: 175,
        },
        backgroundLogo:{
            enabled: true,
            hasColor: true,
            name: 'black.png',
            imageType: 'png',
            filePath: '/images/resources/cars/mercedes/patterns/option-2',
            url: '/images/resources/cars/mercedes/patterns/option-2/gray.png',
            leftCoordinates: {
                x: 100,
                y: 50
            },
            centerCoordinates: {
                x: 1425,
                y: 50
            },
            rightCoordinates: {
                x: 2575,
                y: 50
            },
            width: 800,
            height: 1700,
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            }
        },
        state:{
            color: '#000000',
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
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
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
    }, // AMG 2 - [DONE]

    {
        vehicleType: 'Car',
        shopifyHandle: 'ferrari-miami-heat',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '3',
        preset: true,
        sportsTeam: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/sports/basketball/miami-heat/ferrari',
            url: '/images/resources/sports/basketball/miami-heat/ferrari/regular.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 100,
            height: 100,
            glow:{ enabled: false, color: '#000000' }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/flags/italian-rectangle.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            // centerCoordinates: {
            //     x: 95,
            //     y: 5
            // },
            centerCoordinates: {
                x: 95,
                y: 140
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 150,
            height: 10,
        },
        patternSettings: {
            enabled: false
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: true,
                color: '#000000',
            }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/ferrari/patterns/miami-heat',
            url: '/images/resources/cars/ferrari/patterns/miami-heat/gray.png',
            leftCoordinates: {
                x: -20,
                y: 8
            },
            centerCoordinates: {
                x: 65,
                y: 8
            },
            rightCoordinates: {
                x: 175,
                y: 8
            },
            width: 200,
            height: 150,
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#fbf558",
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#fbf558",
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
    }, // White Miami Heat - [NOT DONE] (Ask Johnny/Clay what preset Colors this should have)

    {
        vehicleType: 'Car',
        shopifyHandle: 'mustang-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '4',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',

        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },

        mainLogo: {
            hasColor: false,
            enabled: true,
            url: '/images/resources/cars/ford/logos/mustang/logo-3d.png',
            glow: {
                enabled: true,
                color: '#c0ff00'
            },
            leftCoordinates: {
                x: 260,
                y: 750
            },
            centerCoordinates: {
                x: 1400,
                y: 750
            },
            rightCoordinates: {
                x: 2400,
                y: 750
            },
            width: 850,
            height: 325,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: true,
                    hasMainColor: false,
                    name: 'green-hexagons.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/option-1',
                    url: '/images/resources/backgrounds/hexagon/option-1/green.png',
                },
                stroke: {
                    enabled: true,
                    color: '#ff0000'
                }
            },
            stroke: {
                enabled: false
            }
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
                enabled: true,
                color: "#666666",
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
                enabled: true,
                color: "#666666",
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
    }, // MUSTANG - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'dolphins-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '5',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },

        mainLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/sports/football/dolphins/logos/colors',
            url: '/images/resources/sports/football/dolphins/logos/colors/regular.png',
            leftCoordinates: {
                x: 100,
                y: 550
            },
            centerCoordinates: {
                x: 1375,
                y: 550
            },
            rightCoordinates: {
                x: 2385,
                y: 550
            },
            width: 900,
            height: 700,
            glow:{ enabled: true, color: '#008f99' }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: true,
                    hasMainColor: false,
                    name: 'green-hexagons.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/option-2',
                    url: '/images/resources/backgrounds/hexagon/option-2/dark-blue.png',
                },
                stroke: {
                    enabled: false,
                    color: '#ff0000'
                }
            },
            stroke: {
                enabled: false
            }
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
                enabled: true,
                color: "#666666",
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
                enabled: true,
                color: "#666666",
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
    }, //DOLPHINS - [DONE]
    
    {
        vehicleType: 'Car',
        shopifyHandle: 'mclaren-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '6',
        preset: true,
        sportsTeam: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            filePath: '/images/resources/sports/basketball/miami-heat/mclaren',
            url: '/images/resources/sports/basketball/miami-heat/mclaren/regular.svg',
            leftCoordinates: {
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1250,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
            glow:{ enabled: true, color: '#000000' }
        },
        bottomLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/mclaren/text/option-1/colors',
            url: '/images/resources/cars/mclaren/text/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 1300,
                y: 1550
            },
            centerCoordinates: {
                x: 1300,
                y: 1550
            },
            rightCoordinates: {
                x: 1300,
                y: 1550
            },
            width: 950,
            height: 125,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'svg',
            filePath: '/images/resources/cars/mclaren/patterns/option-1/colors',
            url: '/images/resources/cars/mclaren/patterns/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: 0
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 3597,
            height: 1800,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasMainColor: false,
                    name: 'carbon-fiber-full-with-shadow',
                    url: '/images/resources/backgrounds/carbon-fiber/regular/carbon-fiber-full-with-shadow.png',
                },
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#deb251',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#000000"
            },
        },
        plateNumber: {
            color: '#deb251',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#000000"
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
                enabled: true,
                color: "#000000"
            },
        }
    }, //MCLAREN - [NOT Done]
    
    {
        vehicleType: 'Car',
        shopifyHandle: 'miami-heat-yellow-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        sportsTeam: true,
        templateId: '7',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            filePath: '/images/resources/sports/basketball/miami-heat/ruzy',
            imageType: 'svg',
            url: '/images/resources/sports/basketball/miami-heat/ruzy/regular.svg',
            leftCoordinates: {
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1250,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
        },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
            stroke: { enabled: false }
        },
        state:{
            color: '#ffd40c',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffd40c',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ffd40c',
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
    }, //RUZY - [NOT Done]
    
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '8',
        sportsTeam: true,
        shopifyHandle: 'panthers-template',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        patternSettings:{ enabled: false },
        fadeSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: false,
            name: "mercedes.svg",
            url: '/images/resources/sports/hockey/panthers/logos/panther.png',
            leftCoordinates: {
                x: 50,
                y: 365
            },
            centerCoordinates: {
                x: 1150,
                y: 365
            },
            rightCoordinates: {
                x: 2050,
                y: 365
            },
            width: 1350,
            height: 1150,
            glow:{ enabled: false }
        },
        backgroundLogo:{
            hasColor: false,
            enabled: true,
            // name: 'gray.png',
            // filePath: '/images/resources/sports/hockey/panthers/logos',
            url: '/images/resources/sports/hockey/panthers/logos/stick-and-palm.png',
            leftCoordinates: {
                x: 150,
                y: 100
            },
            centerCoordinates: {
                x: 1200,
                y: 100
            },
            rightCoordinates: {
                x: 2185,
                y: 100
            },
            width: 1350,
            height: 1550,
        },
        bottomLogo: {
            enabled: true,
            hasColor: false,
            name: "mercedes.svg",
            url: '/images/resources/sports/hockey/panthers/text/1.png',
            leftCoordinates: {
                x: 1300,
                y: 1445
            },
            centerCoordinates: {
                x: 1300,
                y: 1445
            },
            rightCoordinates: {
                x: 1300,
                y: 1445
            },
            width: 950,
            height: 265,
        },
        backgroundSettings: {
            color: '#ffffff',
            background: { enabled: false },
            stroke: {
                enabled: true,
                color: '#ff0000'
            }
        },
        state:{
            color: '#00107c',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#00107c'
            },
        },
        bottomText: {
            color: '#00107c',
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
    }, //Panthers - [Done]
   
    {
        preset: true,
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '9',
        shopifyHandle: 'maybach-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/logos/maybach/maybach.svg',
            leftCoordinates: {
                x: 375,
                y: 575
            },
            centerCoordinates: {
                x: 1430,
                y: 575
            },
            rightCoordinates: {
                x: 2425,
                y: 575
            },
            width: 750,
            height: 600,
            glow:{ enabled: true, color: "#000000" }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/mercedes/text/maybach/colors',
            url: '/images/resources/cars/mercedes/text/maybach/colors/regular.svg',
            leftCoordinates: {
                x: 1150,
                y: 1525
            },
            centerCoordinates: {
                x: 1150,
                y: 1525
            },
            rightCoordinates: {
                x: 1150,
                y: 1525
            },
            width: 1350,
            height: 125,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    enabled: true,
                    name: 'gray.png',
                    imageType: 'png',
                    filePath: '/images/resources/cars/mercedes/patterns/gucci-maybach/colors',
                    url: '/images/resources/cars/mercedes/patterns/gucci-maybach/colors/regular.png',
                }
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#b8b8b8',
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
    }, //Maybach - [Done]
    
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        sportsTeam: true,
        templateId: '10',
        shopifyHandle: 'miami-heat-porsche-template',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        backgroundLogo:{ enabled: false },
        fadeSettings: { enabled: false }, 
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/sports/basketball/miami-heat/porsche',
            url: '/images/resources/sports/basketball/miami-heat/porsche/regular.svg',
            leftCoordinates: {
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1300,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/porsche/text/porsche/colors',
            url: '/images/resources/cars/porsche/text/porsche/colors/regular.svg',
            leftCoordinates: {
                x: 1095,
                y: 1500
            },
            centerCoordinates: {
                x: 1095,
                y: 1500
            },
            rightCoordinates: {
                x: 1095,
                y: 1500
            },
            width: 1450,
            height: 150,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#8a8a8a',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#8a8a8a',
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
            color: '#b8b8b8',
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
    }, //Miami heat gray - [NOT Done]
   
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '11',
        shopifyHandle: 'the-joker-template',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/characters/the-joker.png',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1325,
                y: 325
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 950,
            height: 1350,
            glow:{ enabled: false }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
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
                enabled: false,
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
    }, //Da Joker - [Done]
    
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        sportsTeam: true,
        templateId: '12',
        shopifyHandle: 'university-of-miami-ibis-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        preset: true,
        fadeSettings: {enabled: false},
        patternSettings: {enabled: false},
        backgroundLogo: {enabled: false},
        mainLogo: {
            hasColor: false,
            enabled: true,
            url: '/images/resources/sports/football/um/logos/um-hands.png',
            leftCoordinates: {
                x: 50,
                y: 365
            },
            centerCoordinates: {
                x: 1000,
                y: 365
            },
            rightCoordinates: {
                x: 2050,
                y: 365
            },
            width: 1550,
            height: 1150,
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/sports/football/um/text/option-1/colors',
            url: '/images/resources/sports/football/um/text/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 935,
                y: 1500
            },
            centerCoordinates: {
                x: 935,
                y: 1500
            },
            rightCoordinates: {
                x: 935,
                y: 1500
            },
            width: 1750,
            height: 125,
            glow:{
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
                    hasColor: false,
                    name: 'fade',
                    url: '/images/bg/carbon-fiber-fade-up.png'
                }
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#ff6700',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ff6700',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#08512e'
            },
        },
        bottomText: {
            color: '#ff6700',
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
    }, //UM - [Done]
    
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        sportsTeam: true,
        templateId: '13',
        shopifyHandle: 'university-of-miami-classic-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        preset: true,
        fadeSettings: {enabled: false},
        patternSettings: {enabled: false},
        backgroundLogo: {enabled: false},
        mainLogo: {
            hasColor: false,
            enabled: true,
            url: '/images/resources/sports/football/um/logos/um-old-bird.png',
            // width: 3597,

            leftCoordinates: {
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1250,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
            glow: { enabled: false }
        },
        bottomLogo: {
            enabled: true,
            hasColor: false,
            name: "mercedes.svg",
            url: '/images/resources/sports/football/um/text/option-2.png',
            leftCoordinates: {
                x: 20,
                y: 1450
            },
            centerCoordinates: {
                x: 20,
                y: 1450
            },
            rightCoordinates: {
                x: 20,
                y: 1450
            },
            width: 3550,
            height: 250,
            glow:{
                enabled: false
            }
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
                file: {
                    name: 'fade',
                }
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#01a14e',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#fb6600',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#08512e'
            },
        },
        bottomText: {
            color: '#fb6600',
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
    }, //UM - [Done]
    
    {
        preset: true,
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '14',
        shopifyHandle: 'lamborghini-1-template',
        startPlatePosition: 'left',
        startPlateText: 'SAMPL',
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasMainColor: false,
                    hasColor: true,
                    name: 'regular.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/option-9/gray',
                    url: '/images/resources/backgrounds/hexagon/option-9/gray/regular.png',
                }
            },
        },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors',
            url: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors/regular.png',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 800,
            height: 900,
            glow:{ enabled: true, color: '#ffffff' }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: false,
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
                enabled: false,
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
                enabled: false,
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
    }, //Diablo Lambo - [NOT DONE]
    
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '15',
        shopifyHandle: 'porsche-1-template',
        startPlatePosition: 'left',
        startPlateText: 'SAMPL',
        preset: true,
        bottomLogo: {enabled: false},
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
        },
        mainLogo: {
            enabled: true,
            hasColor: false,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 600,
            height: 750,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/porsche/patterns/option-1/colors',
            url: '/images/resources/cars/porsche/patterns/option-1/colors/regular.png',
            leftCoordinates: {
                x: 100,
                y: 150
            },
            centerCoordinates: {
                x: 1325,
                y: 150
            },
            rightCoordinates: {
                x: 2575,
                y: 150
            },
            width: 950,
            height: 1500,
        },
        state:{
            color: '#760e1b',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#760e1b',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#760e1b',
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
    }, //STCLYO - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '16',
        shopifyHandle: 'porsche-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,
        fadeSettings: {enabled: false},
        patternSettings: {enabled: false},
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/porsche/logos/solid/colors/',
            url: '/images/resources/cars/porsche/logos/solid/colors/regular.svg',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 600,
            height: 750,
            glow:{ enabled: false }
        },
        backgroundSettings: {
            color: '#2fae53',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#ffffff"
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#ffffff"
            },
        }
    }, //Porsche #2 - [Done]
    
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '17',
        sportsTeam: true,
        shopifyHandle: 'messi-x-inter-miami-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        preset: true,
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/characters/messi-1.png',
            leftCoordinates: {
                x: 50,
                y: 100
            },
            centerCoordinates: {
                x: 1000,
                y: 100
            },
            rightCoordinates: {
                x: 1950,
                y: 100
            },
            width: 1600,
            height: 1600,
            glow:{ enabled: false }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false
            },
            stroke: {
                enabled: false,
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#ffaecd"
            },
        },
        plateNumber: {
            color: '#ffaecd',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#ffaecd"
            },
        }
    }, //Inter Miami Messi #1 - [Done]
    
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '18',
        shopifyHandle: 'astom-martin-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,

        fadeSettings: {enabled: false},
        patternSettings: {enabled: false},
        backgroundLogo: {enabled: false}, 
        bottomLogo: { enabled: false },

        backgroundSettings: {
            color: '#000000',
            stroke: {
                enabled: false,
            }
        },
        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/cars/aston-martin/logos/option-1/colors',
            url: '/images/resources/cars/aston-martin/logos/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 150,
                y: 735
            },
            centerCoordinates: {
                x: 1085,
                y: 735
            },
            rightCoordinates: {
                x: 2025,
                y: 735
            },
            // leftCoordinates: {
            //     x: 26,
            //     y: 65
            // },
            // centerCoordinates: {
            //     x: 105,
            //     y: 65
            // },
            // rightCoordinates: {
            //     x: 210,
            //     y: 65
            // },
            width: 1500,
            height: 375,
            glow: {
                enabled: true,
                color: '#bbda01'
            }
        },
        state:{
            color: '#bbda01',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: "#ffaecd"
            },
        },
        plateNumber: {
            color: '#bbda01',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#bbda01',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: "#ffaecd"
            },
        }
    }, //Aston Martin - [Done]
    
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '19',
        startPlatePosition: 'left',
        startPlateText: 'SAMPL',
        shopifyHandle: 'autism-awareness-template',
        preset: true,
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },

        mainLogo: {
            enabled: true,
            hasColor: false,
            name: "mercedes.svg",
            url: '/images/resources/autism/logo/logo.png',
            leftCoordinates: {
                x: 275,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 800,
            height: 900,
            glow: {
                enabled: true,
                color: '#000000'
            }
        },
        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/autism/pattern',
            url: '/images/resources/autism/pattern/pattern.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 1100,
                y: 0
            },
            rightCoordinates: {
                x: 2000,
                y: 0
            },
            width: 1600,
            height: 1800,
        },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ffd400',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: "#ffaecd"
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
                enabled: true,
                color: '#ffd400'
            },
        },
        bottomText: {
            color: '#ffd400',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: "#ffaecd"
            },
        }
    }, //Autism, - [Done]
    
    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '20',
        shopifyHandle: 'porsche-3-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png ',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 600,
            height: 750,
            glow:{ enabled: true, color: '#ff0000' }
        },

        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/backgrounds/hexagon/option-3/colors',
            url: '/images/resources/backgrounds/hexagon/option-3/colors/regular.png',
            leftCoordinates: {
                x: 100,
                y: 110
            },
            centerCoordinates: {
                x: 1150,
                y: 110
            },
            rightCoordinates: {
                x: 2130,
                y: 110
            },
            width: 1400,
            height: 1750,
        },

        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/porsche/text/porsche/colors',
            url: '/images/resources/cars/porsche/text/porsche/colors/gray.svg',
            leftCoordinates: {
                x: 1095,
                y: 1500
            },
            centerCoordinates: {
                x: 1095,
                y: 1500
            },
            rightCoordinates: {
                x: 1095,
                y: 1500
            },
            width: 1450,
            height: 150,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
            stroke: { enabled: false }
        },
        state:{
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#b8b8b8',
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
            color: '#b8b8b8',
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
    }, //Porsche #3  - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '21',
        shopifyHandle: 'bmw-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/logos/logo.png',
            leftCoordinates: {
                x: 350,
                y: 590
            },
            centerCoordinates: {
                x: 1505,
                y: 590
            },
            rightCoordinates: {
                x: 2650,
                y: 590
            },
            width: 650,
            height: 650,
            glow:{ enabled: true, color: '#0080ff'}
        },
        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/bmw/patterns/m/option-1',
            url: '/images/resources/cars/bmw/patterns/m/option-1/1.png',
            leftCoordinates: {
                x: 100,
                y: 50
            },
            centerCoordinates: {
                x: 50,
                y: 50
            },
            rightCoordinates: {
                x: 2575,
                y: 50
            },
            width: 800,
            height: 1700,
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/logos/logo-m.svg',
            leftCoordinates: {
                x: 3100,
                y: 1515
            },
            centerCoordinates: {
                x: 3100,
                y: 1515
            },
            rightCoordinates: {
                x: 3100,
                y: 1515
            },
            width: 300,
            height: 200,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: false,
                    name: 'green-hexagons.png',
                    filePath: '/images/resources/backgrounds/hexagon/option-4',
                    url: '/images/resources/backgrounds/hexagon/option-4/1.png',
                },
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#003b73',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        plateNumber: {
            color: '#003b73',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: "#ffffff"
            },
        },
        bottomText: {
            color: '#003b73',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        }
    }, //BMW #1 - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'miami-heat-yellow-2-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        sportsTeam: true,
        templateId: '22',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: {enabled: false},
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            filePath: '/images/resources/sports/basketball/miami-heat/gray',
            imageType: 'svg',
            url: '/images/resources/sports/basketball/miami-heat/gray/regular.svg',
            leftCoordinates: {
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1250,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
            glow:{ enabled: true, color: '#fee404' }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#fee404',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#fee404',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#fee404',
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
    }, //Miami Heat Yellow - [NOT DONE]

    {
        vehicleType: 'Car',
        shopifyHandle: 'porsche-4-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '23',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 600,
            height: 750,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/porsche/patterns/option-2/colors',
            url: '/images/resources/cars/porsche/patterns/option-2/colors/regular.png',
            leftCoordinates: {
                x: 100,
                y: 150
            },
            centerCoordinates: {
                x: 1325,
                y: 150
            },
            rightCoordinates: {
                x: 2575,
                y: 150
            },
            width: 950,
            height: 1500,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: true,
                color: '#ff0000'
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#deb251'
            },
        },
        bottomText: {
            color: '#red',
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
    }, //Porsche #4 - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'audi-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '24',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/audi/logos/logo-with-text.svg',
            leftCoordinates: {
                x: 350,
                y: 725
            },
            centerCoordinates: {
                x: 1450,
                y: 725
            },
            rightCoordinates: {
                x: 2500,
                y: 725
            },
            width: 750,
            height: 400,
            glow:{ enabled: false }
        },
        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/audi/backgrounds/option-1',
            url: '/images/resources/cars/audi/backgrounds/option-1/1.png',
            leftCoordinates: {
                x: 175,
                y: 350
            },
            centerCoordinates: {
                x: 175,
                y: 350
            },
            rightCoordinates: {
                x: 175,
                y: 350
            },
            width: 3250,
            height: 1150,
        },

        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ff0000',
            glow: { enabled: false },
            shadow: { enabled: false },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#ff0000',
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
    }, //Audi - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'mustang-shelby-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '25',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },

        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/ford/logos/cobra/option-1/colors',
            url: '/images/resources/cars/ford/logos/cobra/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 550,
            height: 750,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/ford/patterns/gt500/option-1/colors',
            url: '/images/resources/cars/ford/patterns/gt500/option-1/colors/regular.png',
            leftCoordinates: {
                x: 100,
                y: 50
            },
            centerCoordinates: {
                x: 1400,
                y: 425
            },
            rightCoordinates: {
                x: 2575,
                y: 50
            },
            width: 850,
            height: 950,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#2a6be4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#b8b8b8'
            },
        },
        plateNumber: {
            color: '#2a6be4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#b8b8b8'
            },
        },
        bottomText: {
            color: '#2a6be4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#b8b8b8'
            },
        }
    }, //Shelby #1  - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'porsche-5-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '26',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: {enabled: false},
        patternSettings: {enabled: false},
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/porsche/logos/solid/colors/',
            url: '/images/resources/cars/porsche/logos/solid/colors/regular.svg',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 600,
            height: 750,
            glow:{ enabled: false }
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false
            },
        },
        bottomText: {
            color: '#000000',
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
    }, //Porsche White - [DONE]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '27',
        shopifyHandle: 'aston-martin-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: {enabled: false},

        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/cars/aston-martin/logos/option-1/colors',
            url: '/images/resources/cars/aston-martin/logos/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 150,
                y: 735
            },
            centerCoordinates: {
                x: 1085,
                y: 735
            },
            rightCoordinates: {
                x: 2025,
                y: 735
            },
            width: 1500,
            height: 375,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        
        backgroundSettings: {
            color: '#00685d',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    enabled: true,
                    name: 'gray.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/option-6/colors',
                    url: '/images/resources/backgrounds/hexagon/option-6/colors/gray.png',
                }
            },
            stroke: { enabled: true, color: "#000000"}
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#a8aeb0'
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#a8aeb0'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#a8aeb0'
            },
        }
    }, //Aston Martin #1  - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '28',
        shopifyHandle: 'aston-martin-3-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,

        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        fadeSettings: {  enabled: false },

        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: '/images/resources/cars/aston-martin/logos/option-1/colors',
            url: '/images/resources/cars/aston-martin/logos/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 150,
                y: 735
            },
            centerCoordinates: {
                x: 1085,
                y: 735
            },
            rightCoordinates: {
                x: 2025,
                y: 735
            },
            width: 1500,
            height: 375,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        backgroundLogo:{
            enabled: false,
        },


        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    enabled: true,
                    name: 'gray.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/option-6/colors',
                    url: '/images/resources/backgrounds/hexagon/option-6/colors/white.png',
                }
            },
            stroke: { enabled: true, color: "#000000"}
        },
        state:{
            color: '#b4b4b4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        },
        plateNumber: {
            color: '#b4b4b4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        }
    }, //Aston Martin #2  - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '29',
        shopifyHandle: 'ferrari-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,
        bottomLogo: { enabled: false },
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/ferrari/logos/horse/colors',
            url: '/images/resources/cars/ferrari/logos/horse/colors/regular.png',
            leftCoordinates: {
                x: 30,
                y: 45
            },
            centerCoordinates: {
                x: 140,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 45
            },
            width: 65,
            height: 95,
            glow: {
                enabled: true,
                color: '#ff0000'
            }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/ferrari/patterns/option-1/colors',
            url: '/images/resources/cars/ferrari/patterns/option-1/colors/regular.png',
            leftCoordinates: {
                x: -20,
                y: 8
            },
            centerCoordinates: {
                x: 65,
                y: 8
            },
            rightCoordinates: {
                x: 175,
                y: 8
            },
            width: 200,
            height: 150,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
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
                enabled: true,
                color: '#ff0000'
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
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        }
    }, //Ferrari #1  - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '30',
        shopifyHandle: 'ferrari-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,
        bottomLogo: { enabled: false },
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/ferrari/logos/horse/colors',
            url: '/images/resources/cars/ferrari/logos/horse/colors/regular.png',
            leftCoordinates: {
                x: 30,
                y: 45
            },
            centerCoordinates: {
                x: 140,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 45
            },
            width: 65,
            height: 95,
            glow: {
                enabled: true,
                color: '#ff0000'
            }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/ferrari/patterns/option-1/colors',
            url: '/images/resources/cars/ferrari/patterns/option-1/colors/black.png',
            leftCoordinates: {
                x: -20,
                y: 8
            },
            centerCoordinates: {
                x: 65,
                y: 8
            },
            rightCoordinates: {
                x: 175,
                y: 8
            },
            width: 200,
            height: 150,
        },
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: true,
                color: '#ff0000'
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#a8aeb0'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#a8aeb0'
            },
        }
    }, //Ferrari #2  - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '31',
        shopifyHandle: 'lamborghini-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo:{
            enabled: false
        },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            url: '/images/resources/cars/lamborghini/logos/bull/solid/colors/regular.png',
            filePath: '/images/resources/cars/lamborghini/logos/bull/solid/colors',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 800,
            height: 900,
            glow: {
                enabled: false,
                color: '#000000'
            }
        },

        bottomLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/text/old/red',
            url: '/images/resources/cars/lamborghini/text/old/red/regular.png',
            leftCoordinates: {
                x: 1300,
                y: 1475
            },
            centerCoordinates: {
                x: 1300,
                y: 1475
            },
            rightCoordinates: {
                x: 1300,
                y: 1475
            },
            width: 950,
            height: 265,
            glow:{ enabled: false }
        },

        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: true,
                file:{
                    hasMainColor: true,
                    hasColor: true,
                    name: 'white.png',
                    imageType: 'png',
                    filePath: '/images/resources/cars/lamborghini/patterns/option-1/colors',
                    url: '/images/resources/cars/lamborghini/patterns/option-1/colors/regular.png',
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#cbcbcb'
            },
        }
    }, //Lamborghini #2 SVJ  - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        sportsTeam: true,
        templateId: '32',
        shopifyHandle: 'university-of-miami-ibis-2-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        preset: true,
        fadeSettings: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        mainLogo: {
            hasColor: false,
            enabled: true,
            url: '/images/resources/sports/football/um/logos/um-hands-gray.png',
            leftCoordinates: {
                x: 50,
                y: 365
            },
            centerCoordinates: {
                x: 1000,
                y: 365
            },
            rightCoordinates: {
                x: 2050,
                y: 365
            },
            width: 1550,
            height: 1150,
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/sports/football/um/text/option-3/colors',
            url: '/images/resources/sports/football/um/text/option-3/colors/regular.png',
            leftCoordinates: {
                x: 1300,
                y: 1475
            },
            centerCoordinates: {
                x: 1300,
                y: 1475
            },
            rightCoordinates: {
                x: 1300,
                y: 1475
            },
            width: 950,
            height: 265,
            glow:{
                enabled: true,
                color: "#ff5a00"
            }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/sports/football/um/patterns/option-1/colors',
            url: '/images/resources/sports/football/um/patterns/option-1/colors/gray.png',
            leftCoordinates: {
                x: 150,
                y: 325
            },
            centerCoordinates: {
                x: 1000,
                y: 325
            },
            rightCoordinates: {
                x: 2185,
                y: 325
            },
            width: 1500,
            height: 1250,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#000000',
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#000000'
            },
            glow: {
                enabled: true,
                color: '#ff5a00'
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
                enabled: true,
                color: '#00412e'
            },
        },
        bottomText: {
            color: '#000000',
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
                color: '#cbcbcb'
            },
            glow: {
                enabled: true,
                color: '#ff5a00'
            },
        }
    }, //Ibis - [DONE]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '33',
        shopifyHandle: 'lamborghini-5-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        preset: true,
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            filePath: '/images/resources/cars/lamborghini/logos/crest/solid-3d/red/colors',
            url: '/images/resources/cars/lamborghini/logos/crest/solid-3d/red/colors/regular.png',
            imageType: 'png',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 800,
            height: 900,
            glow: { enabled: false }
        },
        backgroundLogo:{
            enabled: false,
        },
        backgroundSettings: {
            color: '#a5a5a5',
            background: { 
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    enabled: true,
                    name: 'gray.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/fade/bottom-up',
                    url: '/images/resources/backgrounds/hexagon/fade/bottom-up/black.png',
                }
            },
            stroke: { enabled: false, color: ""}
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: { enabled: false },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: { enabled: false },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: { enabled: false },
            stroke: {
                enabled: true,
                color: '#ff0000'
            },
        }
    }, // Lamborghini #3  - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'miami-heat-red-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        sportsTeam: true,
        templateId: '34',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',

        fadeSettings: {
            enabled: false,
        },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/basketball/miami-heat/miami-heat-red-black.svg',
            leftCoordinates: {
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1250,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
            glow:{ enabled: false }
        },
        backgroundSettings: {
            color: '#e90001',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
            stroke: {
                enabled: false
            }
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#000000',
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
    }, //Miami Heat Red - [NOT DONE]

    {
        vehicleType: 'Car',
            shopifyHandle: 'lamborghini-3-template',
            detailLogo1: { enabled: false},
            detailLogo2: {enabled: false},
            templateId: '35',
            preset: true,
            startPlatePosition: 'center',
            startPlateText: 'SAM  PLE',
            fadeSettings: { enabled: false },
            patternSettings: { enabled: false },
            backgroundLogo: { enabled: false},

            mainLogo: {
                hasColor: true,
                enabled: true,
                name: "mercedes.svg",
                imageType: 'png', 
                filePath: '/images/resources/cars/lamborghini/logos/crest/solid-2d/colors',
                url: '/images/resources/cars/lamborghini/logos/crest/solid-2d/colors/regular.png',
                leftCoordinates: {
                    x: 200,
                    y: 525
                },
                centerCoordinates: {
                    x: 1425,
                    y: 525
                },
                rightCoordinates: {
                    x: 2385,
                    y: 525
                },
                width: 800,
                height: 900,
                glow:{ enabled: false}
            },
            bottomLogo: {
                hasColor: false,
                enabled: true,
                name: "mercedes.svg",
                url: '/images/logos/flags/italian-rectangle-slanted.png',
                leftCoordinates: {
                    x: 810,
                    y: 1475
                },
                centerCoordinates: {
                    x: 810,
                    y: 1475
                },
                rightCoordinates: {
                    x: 810,
                    y: 1475
                },
                width: 2000,
                height: 35,
            },
            backgroundSettings: {
                color: '#ffffff',
                background: {
                    enabled: false,
                },
            },
            state:{
                color: '#000000',
                glow: {
                    enabled: false
                },
                shadow: {
                    enabled: false
                },
                stroke: {
                    enabled: false,
                },
            },
            plateNumber: {
                color: '#000000',
                glow: {
                    enabled: false
                },
                shadow: {
                    enabled: false
                },
                stroke: {
                    enabled: false,
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
    }, // Lamborghini #4 [NOT DONE]

    {
        vehicleType: 'Car',
        shopifyHandle: 'lamborghini-4-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '36',
        preset: true,
        startPlatePosition: 'left',
        startPlateText: 'SAMPL',
        fadeSettings: {
            enabled: false,
        },
        bottomLogo: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },

        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors',
            url: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors/regular.png',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 800,
            height: 900,
            glow:{ enabled: true, color: '#ffffff' }
        },
        backgroundLogo:{ enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasMainColor: false,
                    hasColor: true,
                    name: 'regular.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/option-9/regular',
                    url: '/images/resources/backgrounds/hexagon/option-9/regular/regular.png',
                }
            },
        },
        state:{
            color: '#a100b0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        plateNumber: {
            color: '#a100b0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#a100b0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        }
    }, // Lamborghini #5 [NOT DONE]

    {
        vehicleType: 'Car',
        shopifyHandle: 'dodge-hellcat-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '37',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false},
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: "svg",
            filePath: '/images/resources/cars/dodge/logos/hellcat/colors',
            url: '/images/resources/cars/dodge/logos/hellcat/colors/black.svg',
            leftCoordinates: {
                x: 10,
                y: 150
            },
            centerCoordinates: {
                x: 1050,
                y: 150
            },
            rightCoordinates: {
                x: 2075,
                y: 150
            },
            width: 1500,
            height: 1500,
            glow:{ enabled: true, color: "#929292" }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: true,
                color: "#e90001"
            }
        },
        state:{
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#e90001',
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
    }, //Dodge Hellcat #1 - [DONE]

    {
        vehicleType: 'Car',
        shopifyHandle: 'dolphins-2-template',
        sportsTeam: true,
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '38',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },

        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/sports/football/dolphins/logos/colors',
            url: '/images/resources/sports/football/dolphins/logos/colors/gray.png',
            leftCoordinates: {
                x: 300,
                y: 550
            },
            centerCoordinates: {
                x: 1375,
                y: 550
            },
            rightCoordinates: {
                x: 2385,
                y: 550
            },
            width: 900,
            height: 700,
            glow:{ enabled: true, color: '#000000' }
        },

        bottomLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/sports/football/dolphins/text/colors',
            url: '/images/resources/sports/football/dolphins/text/colors/regular.png',
            leftCoordinates: {
                x: 1300,
                y: 1550
            },
            centerCoordinates: {
                x: 1300,
                y: 1550
            },
            rightCoordinates: {
                x: 1300,
                y: 1550
            },
            width: 950,
            height: 125,
        },

        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/sports/football/dolphins/flags/option-1/colors',
            url: '/images/resources/sports/football/dolphins/flags/option-1/colors/regular.png',
            leftCoordinates: {
                x: 362,
                y: 20
            },
            centerCoordinates: {
                x: 1425,
                y: 20
            },
            rightCoordinates: {
                x: 2445,
                y: 20
            },
            width: 800,
            height: 1785,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
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
                enabled: true,
                color: '#008e97'
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
                enabled: true,
                color: '#008e97'
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
                enabled: true,
                color: '#008e97'
            },
        }
    }, //Dolphins #2 - [DONE]

    {
        vehicleType: 'Car',
        shopifyHandle: 'dolphins-3-template-1',
        sportsTeam: true,
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '39',
        preset: true,

        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo:{ enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/sports/football/dolphins/logos/colors',
            url: '/images/resources/sports/football/dolphins/logos/colors/gray.png',
            leftCoordinates: {
                x: 300,
                y: 550
            },
            centerCoordinates: {
                x: 1375,
                y: 550
            },
            rightCoordinates: {
                x: 2385,
                y: 550
            },
            width: 900,
            height: 700,
            glow:{ enabled: true, color: '#000000' }
        },
        bottomLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/sports/football/dolphins/text/colors',
            url: '/images/resources/sports/football/dolphins/text/colors/gray.png',
            leftCoordinates: {
                x: 1300,
                y: 1550
            },
            centerCoordinates: {
                x: 1300,
                y: 1550
            },
            rightCoordinates: {
                x: 1300,
                y: 1550
            },
            width: 950,
            height: 125,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
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
                enabled: true,
                color: '#757575'
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
                enabled: true,
                color: '#757575'
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
                enabled: true,
                color: '#757575'
            },
        }
    }, //Dolphins #3 - [DONE]

    {
        preset: true,
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '40',
        shopifyHandle: 'corvette-1-template-1',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',

        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },

        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logo/logo.png',
            leftCoordinates: {
                x: 215,
                y: 315
            },
            centerCoordinates: {
                x: 1250,
                y: 315
            },
            rightCoordinates: {
                x: 2250,
                y: 315
            },
            width: 1150,
            height: 1150,
            glow: {
                enabled: true,
                color: '#000000'
            }
        },
        
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/corvette/text/colors',
            url: '/images/resources/cars/corvette/text/colors/red.svg',
            leftCoordinates: {
                x: 1115,
                y: 1515
            },
            centerCoordinates: {
                x: 1115,
                y: 1515
            },
            rightCoordinates: {
                x: 1115,
                y: 1515
            },
            width: 1450,
            height: 100,
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
                    name: 'hexagon.svg',
                    url: '/images/bg/hexagon.svg',
                    color: '#363636'
                },
            },
        },
        state:{
            color: '#cbcbcb',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        },
        plateNumber: {
            color: '#cbcbcb',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        },
        bottomText: {
            color: '#cbcbcb',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        }
    }, //Corvette #1  - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'lamborghini-6-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '41',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false }, 
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors',
            url: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors/regular.png',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 800,
            height: 900,
            glow: { enabled: true, color: '#ffcc40' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasColor: false,
                    name: 'forged-carbon',
                    url: '/images/resources/backgrounds/carbon-fiber/forged/option-1.png',
                    color: '#000000'
                }
            },
        },
        state:{
            color: '#282828',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffcc40'
            },
        },
        plateNumber: {
            color: '#282828',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffcc40'
            },
        },
        bottomText: {
            color: '#282828',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffcc40'
            },
        }
    }, // Lamborghini #6 [DONE]

    {
        vehicleType: 'Car',
        shopifyHandle: 'copy-of-lamborghini-6-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '42',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },

        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/lamborghini/logos/bull/crest-bull.png',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2585,
                y: 525
            },
            width: 800,
            height: 900,
            glow:{ enabled: true, color: '#000000' }
        },
        
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/patterns/option-2',
            url: '/images/resources/cars/lamborghini/patterns/option-2/gray.png',
            leftCoordinates: {
                x: -200,
                y: 325
            },
            centerCoordinates: {
                x: 1000,
                y: 325
            },
            rightCoordinates: {
                x: 2185,
                y: 325
            },
            width: 1500,
            height: 1250,
        },

        bottomLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/text/old/colors',
            url: '/images/resources/cars/lamborghini/text/old/colors/white.png',
            leftCoordinates: {
                x: 1300,
                y: 1425
            },
            centerCoordinates: {
                x: 1300,
                y: 1425
            },
            rightCoordinates: {
                x: 1300,
                y: 1425
            },
            width: 950,
            height: 265,
            glow:{ enabled: true, color: '#000000' }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            pinstripe: {
                enabled: true,
                color: '#d8a016'
            }
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
                enabled: true,
                color: '#d8a016'
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
    }, // Lamborghini #7 [DONE] 

    {
        vehicleType: 'Car',
        shopifyHandle: 'copy-of-ferrari-2-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '43',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/ferrari/logos/crest-square/colors',
            url: '/images/resources/cars/ferrari/logos/crest-square/colors/regluar.png',
            leftCoordinates: {
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 55,
            height: 75,
            glow:{ enabled: false, color: "#000000" }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: false,
                    url: '/images/logos/flags/italian-flag-background.png',
                    color: '#000000'
                }
            },
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
                enabled: false,
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
    }, // Ferrari italy #3 [DONE] 

    {
        vehicleType: 'Car',
        shopifyHandle: 'ferrari-4-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '44',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        patternSettings: { enabled: false },

        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/ferrari/logos/horse-text/colors',
            url: '/images/resources/cars/ferrari/logos/horse-text/colors/regular.png',
            leftCoordinates: {
                x: 30,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 230,
                y: 50
            },
            width: 55,
            height: 75,
            glow:{ enabled: true, color: "#fff200" }
        },

        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/flags/italian-rectangle.svg',
            centerCoordinates: {
                x: 100,
                y: 135
            },
            width: 150,
            height: 10,
        },

        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/ferrari/overlay/horse',
            imageType: 'png',
            url: '/images/resources/cars/ferrari/overlay/horse/gray.png',
            leftCoordinates: {
                x: 50,
                y: 0
            },
            centerCoordinates: {
                x: 130,
                y: 25
            },
            rightCoordinates: {
                x: 245,
                y: 0
            },
            width: 90,
            height: 125,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
        },
        state:{
            color: '#fff200',
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
            color: '#fff200',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#fff200',
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
    }, // Ferrari #4 [DONE] 

    {
        vehicleType: 'Car',
        shopifyHandle: 'rolls-royce-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '45',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        backgroundLogo: {enabled: false},
        
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/rolls-royce/logo/rr/colors',
            url: '/images/resources/cars/rolls-royce/logo/rr/colors/regular.svg',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 650,
            height: 750,
            glow:{ enabled: false, color: "#000000" }
        },
        bottomLogo: {
            enabled: false,
        },
        patternSettings: {
            enabled: false,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            pinstripe: {
                enabled: true,
                color: '#89f5b7'
            }
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
                enabled: false,
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
    }, // Rolls Royce #1 [DONE] 

    {
        vehicleType: 'Car',
        shopifyHandle: 'rolls-royce-2-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '46',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        patternSettings: { enabled: false },
        backgroundLogo: { enanbled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/rolls-royce/logo/crest/colors',
            url: '/images/resources/cars/rolls-royce/logo/crest/colors/regular.png',
            leftCoordinates: {
                x: 500,
                y: 555
            },
            centerCoordinates: {
                x: 1615,
                y: 555
            },
            rightCoordinates: {
                x: 2565,
                y: 555
            },
            width: 450,
            height: 750,
            glow:{ enabled: true, color: "#000000" }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            filePath: '/images/resources/cars/rolls-royce/text/rolls-royce/gray/colors',
            imageType: 'png',
            url: '/images/resources/cars/rolls-royce/text/rolls-royce/gray/colors/regular.png',
            leftCoordinates: {
                x: 1275,
                y: 1525
            },
            centerCoordinates: {
                x: 1275,
                y: 1525
            },
            rightCoordinates: {
                x: 1275,
                y: 1525
            },
            width: 1050,
            height: 125,
            glow:{ enabled: true, color: "#000000" }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: false,
                    url: '/images/bg/carbon-fiber-fade-up.png',
                    color: '#000000'
                }
            },
        },
        state:{
            color: '#a3a3a3',
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
            color: '#a3a3a3',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#a3a3a3',
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
    }, // Rolls Royce #2 [DONE] 

    {
        vehicleType: 'Car',
        shopifyHandle: 'mercedes-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '47',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/logos/original/mercedes-gray.png',
            leftCoordinates: {
                x: 375,
                y: 550
            },
            centerCoordinates: {
                x: 1475,
                y: 550
            },
            rightCoordinates: {
                x: 2425,
                y: 550
            },
            width: 700,
            height: 700,
            glow:{ enabled: true, color: "#00a5b2" }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/mercedes/text/mercedes/colors',
            url: '/images/resources/cars/mercedes/text/mercedes/colors/white.png',
            leftCoordinates: {
                x: 1275,
                y: 1525
            },
            centerCoordinates: {
                x: 1275,
                y: 1525
            },
            rightCoordinates: {
                x: 1275,
                y: 1525
            },
            width: 1050,
            height: 125,
            glow:{ enabled: true, color: "#000000" }
        },

        backgroundLogo:{
            enabled: false
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasColor: true,
                    hasMainColor: true,
                    enabled: true,
                    name: 'gray.png',
                    imageType: 'png',
                    filePath: '/images/resources/cars/mercedes/backgrounds/option-1/colors',
                    url: '/images/resources/cars/mercedes/backgrounds/option-1/colors/regular.png',
                }
            },
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
    }, // Mercedes #1 [DONE] 

    {
        vehicleType: 'Car',
        shopifyHandle: 'palm-trees-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '48',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false, },
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/misc/palm-tree/colors',
            url: '/images/resources/misc/palm-tree/colors/regular.png',
            leftCoordinates: {
                x: 225,
                y: 400
            },
            centerCoordinates: {
                x: 1295,
                y: 400
            },
            rightCoordinates: {
                x: 2250,
                y: 400
            },
            width: 1000,
            height: 1000,
            glow:{ enabled: true, color: "#959595" }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
        },
        state:{
            color: '#cacaca',
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
            color: '#cacaca',
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
            color: '#cacaca',
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
    }, // Palms #1 [DONE] 

    {
        vehicleType: 'Car',
        shopifyHandle: 'porsche-6-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '49',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 600,
            height: 750,
            glow:{ enabled: true, color: '#b07800' }
        },
        bottomLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/porsche/text/turbo/colors',
            url: '/images/resources/cars/porsche/text/turbo/colors/white.svg',
            leftCoordinates: {
                x: 1200,
                y: 1400
            },
            centerCoordinates: {
                x: 1200,
                y: 1400
            },
            rightCoordinates: {
                x: 1200,
                y: 1400
            },
            width: 1364,
            height: 272,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: false,
                    name: 'carbon-fiber-full-with-shadow',
                    url: '/images/resources/backgrounds/carbon-fiber/regular/carbon-fiber-full-with-shadow.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
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
    }, //Porsche #6 - [Done]
    
    {
        vehicleType: 'Car',
        shopifyHandle: 'porsche-7-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '50',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 600,
            height: 750,
            glow:{ enabled: true, color: '#b07800' }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/porsche/patterns/option-3/colors',
            url: '/images/resources/cars/porsche/patterns/option-3/colors/regular.png',
            leftCoordinates: {
                x: 100,
                y: 250
            },
            centerCoordinates: {
                x: 1000,
                y: 250
            },
            rightCoordinates: {
                x: 2000,
                y: 250
            },
            width: 1500,
            height: 1250,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false
            },
            pinstripe: {
                enabled: true,
                color: '#fdcc02'
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#fdcc02'
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
                enabled: true,
                color: '#fdcc02'
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
                enabled: true,
                color: '#fdcc02'
            },
        }
    }, //Porsche #7 - [DONE]

    {
        vehicleType: 'Car',
        shopifyHandle: 'tesla-x-stormtrooper-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '51',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/tesla/logos/option-1/colors',
            url: '/images/resources/cars/tesla/logos/option-1/colors/black.png',
            leftCoordinates: {
                x: 450,
                y: 575
            },
            centerCoordinates: {
                x: 1525,
                y: 575
            },
            rightCoordinates: {
                x: 2495,
                y: 575
            },
            width: 600,
            height: 700,
            glow:{ enabled: true, color: '#ffffff' }
        },

        bottomLogo: {
            hasColor: true,
            enabled: true,
            imageType: 'png',
            filePath: '/images/resources/cars/tesla/text/stormtrooper/colors',
            url: '/images/resources/cars/tesla/text/stormtrooper/colors/white.png',
            leftCoordinates: {
                x: 1100,
                y: 1475
            },
            centerCoordinates: {
                x: 1100,
                y: 1475
            },
            rightCoordinates: {
                x: 1100,
                y: 1475
            },
            width: 1450,
            height: 150,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
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
    }, //Tesla #1 - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'lamborghini-8-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '52',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },

        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/logos/crest/solid-2d-outline/colors',
            url: '/images/resources/cars/lamborghini/logos/crest/solid-2d-outline/colors/regular.png',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 800,
            height: 900,
            glow:{ enabled: true, color: '#fffc00' }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/text/old/colors',
            url: '/images/resources/cars/lamborghini/text/old/colors/yellow.png',
            leftCoordinates: {
                x: 1300,
                y: 1425
            },
            centerCoordinates: {
                x: 1300,
                y: 1425
            },
            rightCoordinates: {
                x: 1300,
                y: 1425
            },
            width: 950,
            height: 265,
        },

        backgroundLogo:{
            enabled: false,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    enabled: true,
                    name: 'white.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/option-7/colors',
                    url: '/images/resources/backgrounds/hexagon/option-7/colors/regular.png',
                }
            },
            stroke: { enabled: false }
        },

        state:{
            color: '#fffc00',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#fffc00',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#7b7b7b'
            },
        },
        bottomText: {
            color: '#fffc00',
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
    }, //Lambo #8 - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'forged-carbon-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '53',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: false,
                    hasColor: false,
                    name: 'forged-carbon',
                    url: '/images/resources/backgrounds/carbon-fiber/forged/option-2.png',
                },
            },
            stroke: { enabled: false }
        },

        state:{
            color: '#fdcc00',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        plateNumber: {
            color: '#fdcc00',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#fdcc00',
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
    }, //Forged Carbon Fiber #8 - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'ferrari-5-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '54',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ferrari/logos/crest/crest.png',
            leftCoordinates: {
                x: 30,
                y: 55
            },
            centerCoordinates: {
                x: 150,
                y: 55
            },
            rightCoordinates: {
                x: 250,
                y: 55
            },
            width: 45,
            height: 55,
            glow:{ enabled: true, color: '#000000' }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/ferrari/text/ferrari/colors',
            url: '/images/resources/cars/ferrari/text/ferrari/colors/regular.png',
            centerCoordinates: {
                x: 125,
                y: 130
            },
            width: 100,
            height: 30,
            glow:{ enabled: true, color: '#000000' }
        },

        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'white.png',
            imageType: 'png',
            url: '/images/resources/cars/ferrari/flag/bottom-flag/1.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: 130
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 350,
            height: 30,
        },
        

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasMainColor: false,
                    hasColor: false,
                    name: 'carbon-fiber-full-with-shadow',
                    url: '/images/resources/backgrounds/carbon-fiber/regular/carbon-fiber-full-with-shadow.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#f7ed31',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#f7ed31',
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
            color: '#f7ed31',
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
    }, //Ferrari #5 - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'bmw-2-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '55',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/logos/logo-new.png',
            leftCoordinates: {
                x: 300,
                y: 475
            },
            centerCoordinates: {
                x: 1395,
                y: 475
            },
            rightCoordinates: {
                x: 2440,
                y: 475
            },
            width: 850,
            height: 850,
            glow:{ enabled: true, color: '#000000' }
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/flag/bottom/option-1.png',
            leftCoordinates: {
                x: 0,
                y: 1432
            },
            centerCoordinates: {
                x: 0,
                y: 1432
            },
            rightCoordinates: {
                x: 0,
                y: 1432
            },
            width: 3597,
            height: 300,
            glow:{ enabled: true, color: '#000000' }
        },

        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/bmw/patterns/m/option-2',
            url: '/images/resources/cars/bmw/patterns/m/option-2/regular.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: 0
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 3597,
            height: 1800,
        },


        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasMainColor: true,
                    hasColor: false,
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber-fade-up.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#2497d0',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        plateNumber: {
            color: '#2497d0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        },
        bottomText: {
            color: '#2497d0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        }
    }, //BMW #2 - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '56',
        shopifyHandle: 'ferrari-6-template',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        bottomLogo: { enabled: false },
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/ferrari/logos/horse/colors',
            url: '/images/resources/cars/ferrari/logos/horse/colors/regular.png',
            leftCoordinates: {
                x: 50,
                y: 35
            },
            centerCoordinates: {
                x: 135,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 35
            },
            width: 65,
            height: 95,
            glow: {
                enabled: true,
                color: '#000000'
            }
        },
        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/ferrari/flag/flag-vertical/faded.png',
            url: '/images/resources/cars/ferrari/flag/flag-vertical/faded.png',
            leftCoordinates: {
                x: 70,
                y: 0
            },
            centerCoordinates: {
                x: 160,
                y: 0
            },
            rightCoordinates: {
                x: 250,
                y: 0
            },
            width: 25,
            height: 165,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
        },
        state:{
            color: '#ff0000',
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
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        }
    }, //Ferrari #6  - [Done], Resizing

    {
        vehicleType: 'Car',
        shopifyHandle: 'carbon-fiber-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '57',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: false,
                    hasMainColor: true,
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber-fade-up.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
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
                enabled: false,
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
                enabled: false,
            },
        }
    }, //carbon fiber #2 - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'mustang-shelby-2-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '58',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ford/logos/cobra/cobra-silver.png',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 550,
            height: 750,
            glow:{ enabled: true, color: '#ffffff' }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/ford/patterns/gt500/option-2',
            url: '/images/resources/cars/ford/patterns/gt500/option-2/gray.png',
            leftCoordinates: {
                x: 100,
                y: 50
            },
            centerCoordinates: {
                x: 2675,
                y: 50
            },
            rightCoordinates: {
                x: 2675,
                y: 50
            },
            width: 800,
            height: 1700,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: false,
                    hasMainColor: true,
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber-fade-up.png',
                },
            },
            stroke: { enabled: false }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false }
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false }
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false }
        }
    }, //Shelby #1  - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'lamborghini-9-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '59',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors',
            url: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors/regular.png',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 800,
            height: 900,
            glow: { enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: false,
                    hasMainColor: false,
                    name: 'carbon-fiber',
                    url: '/images/resources/backgrounds/carbon-fiber/regular/carbon-fiber.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
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
    }, //lambo #9 - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'lamborghini-10-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '60',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },

        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/logos/crest/solid-2d-outline/colors',
            url: '/images/resources/cars/lamborghini/logos/crest/solid-2d-outline/colors/regular.png',
            leftCoordinates: {
                x: 200,
                y: 525
            },
            centerCoordinates: {
                x: 1425,
                y: 525
            },
            rightCoordinates: {
                x: 2385,
                y: 525
            },
            width: 800,
            height: 900,
            glow:{ enabled: true, color: '#ff0000' }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    name: 'white.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/option-8/colors',
                    url: '/images/resources/backgrounds/hexagon/option-8/colors/red.png',
                }
            },
            stroke: { enabled: false }
        },

        state:{
            color: '#ff0000',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: '#000000'
            },
        },
        bottomText: {
            color: '#ff0000',
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
    }, //Lambo #10 - [Done]

    {
        vehicleType: 'Car',
        originalColor: '#ff9800',
        shopifyHandle: 'rolls-royce-3-template',
        templateId: '61',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},

        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            filePath: '/images/resources/cars/rolls-royce/logo/rr/colors-orange',
            imageType: 'svg',
            url: '/images/resources/cars/rolls-royce/logo/rr/colors-orange/orange.svg',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 650,
            height: 750,
            glow:{ enabled: true, color: '#000000' }
        },

        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            filePath: '/images/resources/cars/rolls-royce/text/rolls-royce/orange/colors',
            imageType: 'png',
            url: '/images/resources/cars/rolls-royce/text/rolls-royce/orange/colors/regular.png',
            leftCoordinates: {
                x: 1275,
                y: 1525
            },
            centerCoordinates: {
                x: 1275,
                y: 1525
            },
            rightCoordinates: {
                x: 1275,
                y: 1525
            },
            width: 1050,
            height: 125,
            glow:{ enabled: true, color: "#000000" }
        },

        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'gray.png',
            url: '/images/resources/cars/rolls-royce/overlay/option-1/gray.svg',
            leftCoordinates: {
                x: 325,
                y: 375
            },
            centerCoordinates: {
                x: 1375,
                y: 375
            },
            rightCoordinates: {
                x: 2350,
                y: 375
            },
            width: 950,
            height: 1150,
        },
    
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ff9800',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#ff9800',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#ff9800',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        }
    }, //rolls-royce #3 - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'red-line-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '62',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false }, 
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasMainColor: true,
                    hasColor: true,
                    name: 'green-hexagons.png',
                    imageType: 'png',
                    filePath: '/images/resources/misc/line/colors',
                    url: '/images/resources/misc/line/colors/red.png',
                },
            },
            stroke: {
                enabled: false
            }
        },

        state:{
            color: '#ffffff',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
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
                enabled: false,
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
                enabled: false,
            },
        }
    }, //Red line - [Done]

    {
        vehicleType: 'Car',
        shopifyHandle: 'dodge-hellcat-2-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '63',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',

        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/dodge/redeye-logo.png',
            leftCoordinates: {
                x: 10,
                y: 150
            },
            centerCoordinates: {
                x: 1050,
                y: 150
            },
            rightCoordinates: {
                x: 2075,
                y: 150
            },
            width: 1500,
            height: 1500,
            glow:{ enabled: true, color: "#e90001" }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
                stroke: {
                    enabled: false,
                }
            },
        },
        state:{
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#e90001',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false,
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#e90001',
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
    }, //Red Eye - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '65',
        shopifyHandle: 'corvette-2-template',
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },

        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logo/logo.png',
            leftCoordinates: {
                x: 215,
                y: 315
            },
            centerCoordinates: {
                x: 1250,
                y: 315
            },
            rightCoordinates: {
                x: 2250,
                y: 315
            },
            width: 1150,
            height: 1150,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/corvette/text/colors',
            url: '/images/resources/cars/corvette/text/colors/red.svg',
            leftCoordinates: {
                x: 1115,
                y: 1515
            },
            centerCoordinates: {
                x: 1115,
                y: 1515
            },
            rightCoordinates: {
                x: 1115,
                y: 1515
            },
            width: 1450,
            height: 100,
            glow: {
                enabled: true,
                color: "#000000"
            }
        },

        backgroundLogo:{
            enabled: false,
        },
    
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasMainColor: false,
                    hasColor: true,
                    name: 'white.png',
                    imageType: 'png',
                    filePath: '/images/resources/backgrounds/hexagon/option-5',
                    url: '/images/resources/backgrounds/hexagon/option-5/red.png',
                }
            },
        },
        state:{
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
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
                enabled: true,
                color: '#ff0000'
            },
        },
        bottomText: {
            color: '#ff0000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        }
    }, //Corvette #1  - [Done]

    {
        vehicleType: 'Car',
        originalColor: '#000e48',
        templateId: '66',
        shopifyHandle: 'mustang-shelby-3-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },


        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/ford/logos/cobra-2/colors',
            url: '/images/resources/cars/ford/logos/cobra-2/colors/regular.png',
            leftCoordinates: {
                x: 450,
                y: 525
            },
            centerCoordinates: {
                x: 1525,
                y: 525
            },
            rightCoordinates: {
                x: 2465,
                y: 525
            },
            width: 550,
            height: 750,
            glow:{ enabled: false }
        },

        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: 'images/resources/cars/ford/patterns/gt500-2/colors',
            url: '/images/resources/cars/ford/patterns/gt500-2/colors/regular.png',
            leftCoordinates: {
                x: 100,
                y: 50
            },
            centerCoordinates: {
                x: 2675,
                y: 50
            },
            rightCoordinates: {
                x: 2675,
                y: 50
            },
            width: 800,
            height: 1700,
        },

        detailLogo1:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/ford/details/faded-stripe/colors',
            url: '/images/resources/cars/ford/details/faded-stripe/colors/regular.png',
            leftCoordinates: {
                x: 2675,
                y: 0
            },
            centerCoordinates: {
                x: 475,
                y: 0
            },
            rightCoordinates: {
                x: 475,
                y: 0
            },
            width: 600,
            height: 1700,
        },

        detailLogo2:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/ford/logos/CS/colors',
            url: '/images/resources/cars/ford/logos/CS/colors/regular.png',
            leftCoordinates: {
                x: 150,
                y: 125
            },
            centerCoordinates: {
                x: 150,
                y: 125
            },
            rightCoordinates: {
                x: 150,
                y: 125
            },
            width: 200,
            height: 150,
        },
    
        backgroundSettings: {
            color: '#ffffff',
            background: {
                enabled: false,
            },
        },

        state:{
            color: '#000e48',
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
            color: '#000e48',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false },
        },
        bottomText: {
            color: '#000e48',
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
    }, //Shelby White  - [Done]

    {
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '67',
        shopifyHandle: 'dodge-ram-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: { enabled: false },

        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/dodge/logos/ram/1.png',
            leftCoordinates: {
                x: 350,
                y: 315
            },
            centerCoordinates: {
                x: 1515,
                y: 600
            },
            rightCoordinates: {
                x: 2475,
                y: 315
            },
            width: 650,
            height: 650,
            glow: {
                enabled: true,
                color: '#000000'
            }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: true,
                    enabled: true,
                    name: 'white.png',
                    imageType: 'png',
                    filePath: '/images/resources/cars/dodge/patterns/option-1',
                    url: '/images/resources/cars/dodge/patterns/option-1/gray.png',
                }
            },
        },
        state:{
            color: '#a0a0a0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#a0a0a0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        },
        bottomText: {
            color: '#a0a0a0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: {
                enabled: false,
            },
        }
    }, //Ram #1  - [Done]

    {
        preset: true,
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '68',
        shopifyHandle: 'corvette-3-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logo/logo.png',
            leftCoordinates: {
                x: 215,
                y: 315
            },
            centerCoordinates: {
                x: 1250,
                y: 315
            },
            rightCoordinates: {
                x: 2250,
                y: 315
            },
            width: 1150,
            height: 1150,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasMainColor: true,
                    hasColor: false,
                    url: '/images/bg/carbon-fiber-fade-up.png',
                    color: '#000000'
                },
            },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        }
    }, //Corvette #3  - [Done]

    {
        preset: true,
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '69',
        shopifyHandle: 'two-colors-simple-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]

    {
        preset: true,
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '70',
        shopifyHandle: 'pinstripe-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: { enabled: false },
        backgroundSettings: {
            color: '#000000',
            background: { enabled: false },
            pinstripe: {
                enabled: true,
                color: '#ffffff'
            }
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]

    {
        preset: true,
        vehicleType: 'Car',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '71',
        shopifyHandle: 'corvette-4-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logo/logo.png',
            leftCoordinates: {
                x: 215,
                y: 315
            },
            centerCoordinates: {
                x: 1250,
                y: 315
            },
            rightCoordinates: {
                x: 2250,
                y: 315
            },
            width: 1150,
            height: 1150,
            glow: {
                enabled: false,
            }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
        },
        state:{
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: false
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]

       // Template 1
       {
        vehicleType: 'Car',
        templateId: '1',
        preset: false,
        shopifyHandle: 'two-colors-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
        vehicleType: 'Car',
        templateId: '2',
        preset: false,
        shopifyHandle: 'two-colors-and-logo-custom-template',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        detailLogo1: { enabled: false },
        detailLogo2: { enabled: false },
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',

        mainLogo: {
            enabled: true,
            hasColor: false,
            imageType: 'svg',
            name: "logo.png",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1325,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
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
        vehicleType: 'Car',
        templateId: '3',
        fadeType: 'FADE-UP',
        preset: false,
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
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1325,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
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
                enabled: false,
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
        vehicleType: 'Car',
        templateId: '4',
        fadeType: 'FADE-UP',
        preset: false,
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
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1325,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/bottom-logo.png',
            leftCoordinates: {
                x: 935,
                y: 1500
            },
            centerCoordinates: {
                x: 935,
                y: 1500
            },
            rightCoordinates: {
                x: 935,
                y: 1500
            },
            width: 1750,
            height: 125,
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
                enabled: false,
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
        vehicleType: 'Car',
        templateId: '5',
        fadeType: 'FADE-DOWN',
        preset: false,
        shopifyHandle: 'fade-down-pattern-logo-custom-template',
        sportsTeam: true,
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
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1325,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: false,
            name: "mercedes.svg",
            url: '/images/resources/preset/logos/bottom-logo.png',
            leftCoordinates: {
                x: 935,
                y: 1500
            },
            centerCoordinates: {
                x: 935,
                y: 1500
            },
            rightCoordinates: {
                x: 935,
                y: 1500
            },
            width: 1750,
            height: 125,
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
                enabled: false,
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
        vehicleType: 'Car',
        templateId: '6',
        fadeType: 'FADE-DOWN',
        preset: false,
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
            name: "logo.png",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1325,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "logo.png",
            url: '/images/resources/preset/logos/bottom-logo.png',
            leftCoordinates: {
                x: 935,
                y: 1500
            },
            centerCoordinates: {
                x: 935,
                y: 1500
            },
            rightCoordinates: {
                x: 935,
                y: 1500
            },
            width: 1750,
            height: 125,
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
                enabled: false,
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
        vehicleType: 'Car',
        templateId: '7',
        fadeType: 'FULL-BG',
        preset: false,
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
            name: "logo.png",
            url: '/images/resources/preset/logos/logo.png',
            leftCoordinates: {
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1325,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: false,
            name: "logo.png",
            url: '/images/resources/preset/logos/bottom-logo.png',
            leftCoordinates: {
                x: 935,
                y: 1500
            },
            centerCoordinates: {
                x: 935,
                y: 1500
            },
            rightCoordinates: {
                x: 935,
                y: 1500
            },
            width: 1750,
            height: 125,
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
                enabled: false,
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
        vehicleType: 'Car',
        templateId: '8',
        fadeType: 'FULL-BG',
        preset: false,
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
                x: 225,
                y: 365
            },
            centerCoordinates: {
                x: 1325,
                y: 365
            },
            rightCoordinates: {
                x: 2300,
                y: 365
            },
            width: 1000,
            height: 1000,
            glow: {
                enabled: false
            }
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "logo.png",
            url: '/images/resources/preset/logos/bottom-logo.png',
            leftCoordinates: {
                x: 935,
                y: 1500
            },
            centerCoordinates: {
                x: 935,
                y: 1500
            },
            rightCoordinates: {
                x: 935,
                y: 1500
            },
            width: 1750,
            height: 125,
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
                enabled: false,
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
