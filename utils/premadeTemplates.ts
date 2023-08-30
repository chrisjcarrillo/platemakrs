export const premadeTemplates = [
    {
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
                x: 26,
                y: 41
            },
            centerCoordinates: {
                x: 140,
                y: 41
            },
            rightCoordinates: {
                x: 230,
                y: 41
            },
            width: 65,
            height: 110,
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
                enabled: true
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
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 20,
        },
        backgroundLogo:{
            enabled: true,
            hasColor: true,
            name: 'black.png',
            imageType: 'png',
            filePath: '/images/resources/cars/mercedes/patterns/option-2',
            url: '/images/resources/cars/mercedes/patterns/option-2/gray.png',
            leftCoordinates: {
                x: 10,
                y: 8
            },
            centerCoordinates: {
                x: 135,
                y: 8
            },
            rightCoordinates: {
                x: 265,
                y: 8
            },
            width: 65,
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
        shopifyHandle: 'ferrari-miami-heat',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '3',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: {
            enabled: false,
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/basketball/miami-heat/miami-heat-black-yellow.svg',
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
            centerCoordinates: {
                x: 95,
                y: 5
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
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
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
                enabled: true
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
                enabled: true
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
        shopifyHandle: 'mustang-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '4',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',

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
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 115,
                y: 65
            },
            rightCoordinates: {
                x: 230,
                y: 65
            },
            width: 100,
            height: 35,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: true,
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
                x: 10,
                y: 32
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 210,
                y: 32
            },
            width: 125,
            height: 100,
            glow:{ enabled: true, color: '#008f99' }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: true,
                    name: 'green-hexagons.png',
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
                enabled: true
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
        shopifyHandle: 'mclaren-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '6',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            url: '/images/logos/brands/sports/miami-heat/miami-heat-gold-red.svg',
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
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 20,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasPresetColors: true,
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
            width: 350,
            height: 200,
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber/carbon-fiber-full-with-shadow.png',
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
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        },
        plateNumber: {
            color: '#deb251',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
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
    }, //MCLAREN - [NOT Done]
    
    {
        shopifyHandle: 'miami-heat-yellow-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
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
            name: "mercedes.svg",
            url: '/images/logos/brands/sports/miami-heat/miami-heat-yellow.svg',
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
                enabled: true,
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '8',
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
            glow:{ enabled: false }
        },
        backgroundLogo:{
            hasColor: false,
            enabled: true,
            // name: 'gray.png',
            // filePath: '/images/resources/sports/hockey/panthers/logos',
            url: '/images/resources/sports/hockey/panthers/logos/stick-and-palm.png',
            leftCoordinates: {
                x: 26,
                y: 41
            },
            centerCoordinates: {
                x: 100,
                y: 10
            },
            rightCoordinates: {
                x: 230,
                y: 41
            },
            width: 140,
            height: 140,
        },
        bottomLogo: {
            enabled: true,
            hasColor: false,
            name: "mercedes.svg",
            url: '/images/resources/sports/hockey/panthers/text/1.png',
            centerCoordinates: {
                x: 115,
                y: 0
            },
            width: 100,
            height: 25,
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
                enabled: true
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '9',
        shopifyHandle: 'maybach-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM  PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/mercedes/logos/maybach/maybach.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 133,
                y: 55
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 75,
            height: 55,
            glow:{ enabled: true, color: "#000000" }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/mercedes/text/maybach/colors',
            url: '/images/resources/cars/mercedes/text/maybach/colors/regular.svg',
            centerCoordinates: {
                x: 106,
                y: 5
            },
            width: 135,
            height: 15,
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/mercedes/patterns/gucci-maybach/colors',
            url: '/images/resources/cars/mercedes/patterns/gucci-maybach/colors/regular.png',
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
            width: 350,
            height: 150,
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
            color: '#b8b8b8',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '10',
        shopifyHandle: 'miami-heat-porsche-template',
        preset: true,
        startPlatePosition: 'right',
        startPlateText: 'SAMPL',
        backgroundLogo:{ enabled: false },
        fadeSettings: { enabled: false }, 
        patternSettings: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/basketball/miami-heat/miami-heat-porsche-red-orange.svg',
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
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/porsche/text/porsche/colors',
            url: '/images/resources/cars/porsche/text/porsche/colors/regular.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 15,
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '11',
        shopifyHandle: 'the-joker-template',
        thumbnail: '/images/thumbnails/characters/joker-1.png',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 115,
                y: 20
            },
            rightCoordinates: {
                x: 220,
                y: 65
            },
            width: 110,
            height: 145,
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
                enabled: false
            },
            stroke: {
                enabled: false
            },
        }
    }, //Da Joker - [Done]
    
    {
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
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
                x: 2,
                y: 20
            },
            centerCoordinates: {
                x: 115,
                y: 20
            },
            rightCoordinates: {
                x: 250,
                y: 20
            },
            width: 150,
            height: 120,
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: 'public/images/resources/sports/football/um/text/option-1/colors',
            url: '/images/resources/sports/football/um/text/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 100,
                y: 5
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 150,
            height: 10,
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
                enabled: true
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
                enabled: true
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
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //UM - [Done]
    
    {
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
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
            width: 85,
            height: 85,
            glow: { enabled: false }
        },
        bottomLogo: {
            enabled: true,
            hasColor: false,
            name: "mercedes.svg",
            url: '/images/resources/sports/football/um/text/option-2.png',
            centerCoordinates: {
                x: 18,
                y: 0
            },
            width: 315,
            height: 25,
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
                file: {
                    name: 'fade',
                    url: '/images/bg/hexagons/hexagon-fade-1.png'
                }
            },
            stroke: {
                enabled: false,
            }
        },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/lamborghini/crest.svg',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 165,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 90,
            height: 100,
            glow:{ enabled: true, color: '#ffffff' }
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
                enabled: false,
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
                x: 15,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 275,
                y: 50
            },
            width: 55,
            height: 65,
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
                x: 2,
                y: 0
            },
            centerCoordinates: {
                x: 130,
                y: 0
            },
            rightCoordinates: {
                x: 252,
                y: 0
            },
            width: 95,
            height: 165,
        },
        state:{
            color: '#760e1b',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '16',
        shopifyHandle: 'porsche-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 235,
                y: 50
            },
            width: 65,
            height: 75,
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '17',
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
                x: 0,
                y: 1
            },
            centerCoordinates: {
                x: 80,
                y: 1
            },
            rightCoordinates: {
                x: 165,
                y: 1
            },
            width: 165,
            height: 165,
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
                enabled: true
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '18',
        shopifyHandle: 'astom-martin-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
            filePath: 'public/images/resources/cars/aston-martin/logos/option-1/colors',
            url: '/images/resources/cars/aston-martin/logos/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 105,
                y: 65
            },
            rightCoordinates: {
                x: 210,
                y: 65
            },
            width: 125,
            height: 35,
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
                enabled: true
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
                x: 30,
                y: 35
            },
            centerCoordinates: {
                x: 130,
                y: 35
            },
            rightCoordinates: {
                x: 250,
                y: 35
            },
            width: 90,
            height: 100,
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
                x: 2,
                y: 0
            },
            centerCoordinates: {
                x: 100,
                y: 0
            },
            rightCoordinates: {
                x: 200,
                y: 0
            },
            width: 165,
            height: 165,
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
                enabled: true
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
                enabled: true
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
                enabled: true
            },
            stroke: {
                enabled: false,
                color: "#ffaecd"
            },
        }
    }, //Autism, - [Done]
    
    {
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
                x: 50,
                y: 45
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 240,
                y: 45
            },
            width: 65,
            height: 75,
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
                x: 12,
                y: 0
            },
            centerCoordinates: {
                x: 100,
                y: 0
            },
            rightCoordinates: {
                x: 200,
                y: 0
            },
            width: 150,
            height: 185,
        },

        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/porsche/text/porsche/colors',
            url: '/images/resources/cars/porsche/text/porsche/colors/gray.svg',
            centerCoordinates: {
                x: 115,
                y: 0
            },
            width: 125,
            height: 15,
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
                enabled: true
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '21',
        shopifyHandle: 'bmw-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/logos/logo.svg',
            leftCoordinates: {
                x: 50,
                y: 32
            },
            centerCoordinates: {
                x: 145,
                y: 60
            },
            rightCoordinates: {
                x: 240,
                y: 32
            },
            width: 55,
            height: 55,
            glow:{ enabled: true, color: '#0080ff'}
        },
        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/bmw/patterns/m/option-1',
            url: '/images/resources/cars/bmw/patterns/m/option-1/1.png',
            leftCoordinates: {
                x: 2,
                y: 0
            },
            centerCoordinates: {
                x: 2,
                y: 0
            },
            rightCoordinates: {
                x: 245,
                y: 0
            },
            width: 95,
            height: 165,
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/logos/logo-m.svg',
            centerCoordinates: {
                x: 285,
                y: 3
            },
            width: 45,
            height: 15,
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
                enabled: true
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
        shopifyHandle: 'miami-heat-yellow-2-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '22',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        backgroundLogo: {enabled: false},
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/sports/basketball/miami-heat/miami-heat-black-yellow-gray.svg',
            leftCoordinates: {
                x: 40,
                y: 60
            },
            centerCoordinates: {
                x: 140,
                y: 55
            },
            rightCoordinates: {
                x: 230,
                y: 60
            },
            width: 65,
            height: 65,
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
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Miami Heat Yellow - [NOT DONE]

    {
        shopifyHandle: 'porsche-4-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '23',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 15,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 275,
                y: 50
            },
            width: 55,
            height: 65,
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
                x: 2,
                y: 0
            },
            centerCoordinates: {
                x: 10,
                y: 15
            },
            rightCoordinates: {
                x: 252,
                y: 0
            },
            width: 85,
            height: 135,
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
                enabled: true
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
                enabled: true,
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
        shopifyHandle: 'audi-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '24',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/audi/logos/logo-with-text.svg',
            leftCoordinates: {
                x: 15,
                y: 60
            },
            centerCoordinates: {
                x: 140,
                y: 60
            },
            rightCoordinates: {
                x: 275,
                y: 60
            },
            width: 65,
            height: 45,
            glow:{ enabled: false }
        },
        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/audi/backgrounds/option-1',
            url: '/images/resources/cars/audi/backgrounds/option-1/1.png',
            leftCoordinates: {
                x: 10,
                y: 35
            },
            centerCoordinates: {
                x: 10,
                y: 35
            },
            rightCoordinates: {
                x: 10,
                y: 35
            },
            width: 325,
            height: 100,
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
        shopifyHandle: 'mustang-shelby-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '25',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                x: 30,
                y: 60
            },
            centerCoordinates: {
                x: 155,
                y: 60
            },
            rightCoordinates: {
                x: 250,
                y: 60
            },
            width: 35,
            height: 50,
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
                x: 2,
                y: 35
            },
            centerCoordinates: {
                x: 130,
                y: 35
            },
            rightCoordinates: {
                x: 252,
                y: 35
            },
            width: 85,
            height: 100,
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
                enabled: true
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
                enabled: true,
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
        shopifyHandle: 'porsche-5-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '26',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 235,
                y: 50
            },
            width: 65,
            height: 75,
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '27',
        shopifyHandle: 'aston-martin-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },

        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: 'public/images/resources/cars/aston-martin/logos/option-1/colors',
            url: '/images/resources/cars/aston-martin/logos/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 105,
                y: 65
            },
            rightCoordinates: {
                x: 210,
                y: 65
            },
            width: 125,
            height: 35,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },

        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/backgrounds/hexagon/option-6/colors',
            url: '/images/resources/backgrounds/hexagon/option-6/colors/gray.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: -15
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 350,
            height: 200,
        },
        
        backgroundSettings: {
            color: '#00685d',
            background: {
                enabled: false,
            },
            stroke: { enabled: true, color: "#000000"}
        },
        state:{
            color: '#000000',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '28',
        shopifyHandle: 'aston-martin-3-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,

        bottomLogo: { enabled: false },
        patternSettings: { enabled: false },
        fadeSettings: {  enabled: false },

        mainLogo: {
            enabled: true,
            hasColor: true,
            imageType: 'svg',
            name: "mercedes.svg",
            filePath: 'public/images/resources/cars/aston-martin/logos/option-1/colors',
            url: '/images/resources/cars/aston-martin/logos/option-1/colors/regular.svg',
            leftCoordinates: {
                x: 26,
                y: 65
            },
            centerCoordinates: {
                x: 105,
                y: 65
            },
            rightCoordinates: {
                x: 210,
                y: 65
            },
            width: 125,
            height: 35,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'white.png',
            imageType: 'png',
            filePath: '/images/resources/backgrounds/hexagon/option-6/colors',
            url: '/images/resources/backgrounds/hexagon/option-6/colors/white.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: -15
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 350,
            height: 200,
        },


        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: { enabled: true, color: "#000000"}
        },
        state:{
            color: '#b4b4b4',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '29',
        shopifyHandle: 'ferrari-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        bottomLogo: { enabled: false },
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/ferrari/logos/horse/colors',
            url: '/images/resources/cars/ferrari/logos/horse/colors/regular.svg',
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
                enabled: true
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '30',
        shopifyHandle: 'ferrari-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        bottomLogo: { enabled: false },
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/ferrari/logos/horse/colors',
            url: '/images/resources/cars/ferrari/logos/horse/colors/regular.svg',
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
                enabled: true
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '31',
        shopifyHandle: 'lamborghini-2-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            url: '/images/resources/cars/lamborghini/logos/bull/solid/colors/regular.png',
            filePath: '/images/resources/cars/lamborghini/logos/bull/solid/colors',
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
            glow: {
                enabled: false,
                color: '#000000'
            }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/text/SVJ/colors',
            url: '/images/resources/cars/lamborghini/text/SVJ/colors/regular.png',
            centerCoordinates: {
                x: 135,
                y: -5
            },
            width: 85,
            height: 30,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'white.png',
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/patterns/option-1/colors',
            url: '/images/resources/cars/lamborghini/patterns/option-1/colors/regular.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: -10
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 350,
            height: 175,
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
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
                x: 15,
                y: 35
            },
            centerCoordinates: {
                x: 115,
                y: 35
            },
            rightCoordinates: {
                x: 210,
                y: 35
            },
            width: 130,
            height: 100,
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: 'public/images/resources/sports/football/um/text/option-3/colors',
            url: '/images/resources/sports/football/um/text/option-3/colors/regular.png',
            centerCoordinates: {
                x: 125,
                y: 0
            },
            width: 100,
            height: 25,
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
                x: 0,
                y: 8
            },
            centerCoordinates: {
                x: 90,
                y: 8
            },
            rightCoordinates: {
                x: 185,
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
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 70,
            height: 70,
            glow: { enabled: false }
        },
        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/backgrounds/hexagon/fade/bottom-up',
            url: '/images/resources/backgrounds/hexagon/fade/bottom-up/black.png',
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
            width: 350,
            height: 200,
        },
        backgroundSettings: {
            color: '#a5a5a5',
            background: { enabled: false },
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
        shopifyHandle: 'miami-heat-red-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
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
                x: 40,
                y: 60
            },
            centerCoordinates: {
                x: 140,
                y: 55
            },
            rightCoordinates: {
                x: 230,
                y: 60
            },
            width: 65,
            height: 65,
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
                    x: 40,
                    y: 50
                },
                centerCoordinates: {
                    x: 142,
                    y: 60
                },
                rightCoordinates: {
                    x: 250,
                    y: 50
                },
                width: 60,
                height: 65,
                glow:{ enabled: false}
            },
            bottomLogo: {
                hasColor: false,
                enabled: true,
                name: "mercedes.svg",
                url: '/images/logos/flags/italian-rectangle-slanted.png',
                centerCoordinates: {
                    x: 100,
                    y: 0
                },
                width: 150,
                height: 3,
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
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/logos/brands/cars/lamborghini/crest.svg',
            leftCoordinates: {
                x: 40,
                y: 65
            },
            centerCoordinates: {
                x: 145,
                y: 65
            },
            rightCoordinates: {
                x: 250,
                y: 65
            },
            width: 45,
            height: 45,
            glow:{ enabled: true, color: '#a100b0' }
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
                enabled: true,
                file: {
                    url: '/images/bg/hexagons/hexagon-fade-2.png',
                    color: '#000000'
                },
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
                enabled: true
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
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        }
    }, // Lamborghini #5 [NOT DONE]

    {
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
                x: -30,
                y: 5
            },
            centerCoordinates: {
                x: 110,
                y: 5
            },
            rightCoordinates: {
                x: 200,
                y: 5
            },
            width: 145,
            height: 145,
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
        shopifyHandle: 'dolphins-2-template',
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
                x: 10,
                y: 32
            },
            centerCoordinates: {
                x: 100,
                y: 35
            },
            rightCoordinates: {
                x: 210,
                y: 32
            },
            width: 125,
            height: 100,
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
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 15,
        },

        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/sports/football/dolphins/flags/option-1/colors',
            url: '/images/resources/sports/football/dolphins/flags/option-1/colors/regular.png',
            leftCoordinates: {
                x: 50,
                y: 0
            },
            centerCoordinates: {
                x: 143,
                y: 0
            },
            rightCoordinates: {
                x: 245,
                y: 0
            },
            width: 60,
            height: 165,
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
                enabled: true
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
                enabled: true,
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
        shopifyHandle: 'dolphins-3-template-1',
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
                x: 10,
                y: 32
            },
            centerCoordinates: {
                x: 100,
                y: 35
            },
            rightCoordinates: {
                x: 210,
                y: 32
            },
            width: 125,
            height: 100,
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
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 15,
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
                enabled: true
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
                enabled: true,
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '40',
        shopifyHandle: 'corvette-1-template-1',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',

        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },

        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logo/logo.png',
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
            width: 120,
            height: 100,
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
            filePath: '/images/logos/brands/cars/corvette/text/colors',
            url: '/images/logos/brands/cars/corvette/text/colors/white.svg',
            centerCoordinates: {
                x: 106,
                y: 10
            },
            width: 145,
            height: 5,
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
                enabled: true
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
                enabled: true
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
                enabled: true
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        }
    }, //Corvette #1  - [Done]

    {
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
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 60,
            height: 60,
            glow: { enabled: true, color: '#ffcc40' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
                    hasColor: false,
                    url: '/images/bg/forged-carbon/option-1.png',
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
                enabled: true
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
                enabled: true
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
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffcc40'
            },
        }
    }, // Lamborghini #6 [DONE]

    {
        shopifyHandle: 'copy-of-lamborghini-6-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '42',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },

        mainLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors',
            url: '/images/resources/cars/lamborghini/logos/crest/solid-3d/colors/yellow.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 128,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 85,
            height: 100,
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

        bottomLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/lamborghini/text/old/colors',
            url: '/images/resources/cars/lamborghini/text/old/colors/white.png',
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 20,
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
        shopifyHandle: 'copy-of-ferrari-2-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '43',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                enabled: false,
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
    }, // Ferrari italy #3 [DONE] 

    {
        shopifyHandle: 'ferrari-4-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '44',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                y: 5
            },
            width: 150,
            height: 10,
        },

        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'gray.png',
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
                enabled: true
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
                enabled: true
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
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, // Ferrari #4 [DONE] 

    {
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
                x: 30,
                y: 60
            },
            centerCoordinates: {
                x: 146,
                y: 60
            },
            rightCoordinates: {
                x: 250,
                y: 60
            },
            width: 50,
            height: 50,
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
                enabled: false,
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
    }, // Rolls Royce #1 [DONE] 

    {
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
            imageType: 'svg',
            filePath: '/images/resources/cars/rolls-royce/logo/crest/colors',
            url: '/images/resources/cars/rolls-royce/logo/crest/colors/regular.svg',
            leftCoordinates: {
                x: 40,
                y: 45
            },
            centerCoordinates: {
                x: 150,
                y: 45
            },
            rightCoordinates: {
                x: 250,
                y: 45
            },
            width: 45,
            height: 75,
            glow:{ enabled: true, color: "#000000" }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: 'public/images/resources/cars/rolls-royce/text/black-badge/colors',
            url: '/images/resources/cars/rolls-royce/text/black-badge/colors/gray.png',
            centerCoordinates: {
                x: 106,
                y: 0
            },
            width: 145,
            height: 20,
            glow:{ enabled: true, color: "#000000" }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
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
                enabled: true
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
                enabled: true
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
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, // Rolls Royce #2 [DONE] 

    {
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
                x: 40,
                y: 45
            },
            centerCoordinates: {
                x: 145,
                y: 60
            },
            rightCoordinates: {
                x: 250,
                y: 45
            },
            width: 55,
            height: 55,
            glow:{ enabled: true, color: "#00a5b2" }
        },
        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            imageType: 'png',
            filePath: '/images/resources/cars/mercedes/text/mercedes/colors',
            url: '/images/resources/cars/mercedes/text/mercedes/colors/white.png',
            centerCoordinates: {
                x: 110,
                y: 0
            },
            width: 125,
            height: 15,
            glow:{ enabled: true, color: "#000000" }
        },

        backgroundLogo:{
            hasPresetColors: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/mercedes/backgrounds/option-1/colors',
            url: '/images/resources/cars/mercedes/backgrounds/option-1/colors/regular.png',
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
            width: 350,
            height: 200,
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
    }, // Mercedes #1 [DONE] 

    {
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
                x: 40,
                y: 45
            },
            centerCoordinates: {
                x: 140,
                y: 50
            },
            rightCoordinates: {
                x: 250,
                y: 45
            },
            width: 65,
            height: 65,
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
                enabled: true
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
                enabled: true
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
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, // Palms #1 [DONE] 

    {
        shopifyHandle: 'porsche-6-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '49',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 15,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 275,
                y: 50
            },
            width: 55,
            height: 65,
            glow:{ enabled: true, color: '#b07800' }
        },
        bottomLogo: {
            enabled: true,
            hasColor: true,
            name: "mercedes.svg",
            imageType: 'svg',
            filePath: '/images/resources/cars/porsche/text/turbo/colors',
            url: '/images/resources/cars/porsche/text/turbo/colors/white.svg',
            centerCoordinates: {
                x: 125,
                y: 0
            },
            width: 100,
            height: 20,
            glow:{ enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    hasColor: false,
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber/carbon-fiber-full-with-shadow.png',
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
                enabled: true
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
                enabled: true,
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
    }, //Porsche #6 - [Done]
    
    {
        shopifyHandle: 'porsche-7-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '50',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        fadeSettings: { enabled: false },
        patternSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/porsche/logos/logo.png',
            leftCoordinates: {
                x: 15,
                y: 50
            },
            centerCoordinates: {
                x: 145,
                y: 50
            },
            rightCoordinates: {
                x: 275,
                y: 50
            },
            width: 55,
            height: 65,
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
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#fdcc02'
            },
        }
    }, //Porsche #7 - [DONE]

    {
        shopifyHandle: 'tesla-x-stormtrooper-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '51',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                x: 30,
                y: 60
            },
            centerCoordinates: {
                x: 145,
                y: 60
            },
            rightCoordinates: {
                x: 250,
                y: 60
            },
            width: 50,
            height: 50,
            glow:{ enabled: true, color: '#ffffff' }
        },

        bottomLogo: {
            hasColor: true,
            enabled: true,
            imageType: 'png',
            filePath: '/images/resources/cars/tesla/text/stormtrooper/colors',
            url: '/images/resources/cars/tesla/text/stormtrooper/colors/white.png',
            centerCoordinates: {
                x: 110,
                y: 5
            },
            width: 125,
            height: 10,
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
                enabled: true
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
                enabled: true,
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
    }, //Tesla #1 - [Done]

    {
        shopifyHandle: 'lamborghini-8-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '52',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                x: 30,
                y: 55
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 245,
                y: 55
            },
            width: 60,
            height: 60,
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
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 106,
                y: 0
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 125,
            height: 20,
        },

        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'white.png',
            imageType: 'png',
            filePath: 'public/images/resources/backgrounds/hexagon/option-7/colors',
            url: '/images/resources/backgrounds/hexagon/option-7/colors/regular.png',
            leftCoordinates: {
                x: 0,
                y: 0
            },
            centerCoordinates: {
                x: 0,
                y: -10
            },
            rightCoordinates: {
                x: 0,
                y: 0
            },
            width: 350,
            height: 175,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
            stroke: { enabled: false }
        },

        state:{
            color: '#fffc00',
            glow: {
                enabled: false,
            },
            shadow: {
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Lambo #8 - [Done]

    {
        shopifyHandle: 'forged-carbon-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '53',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                    url: '/images/bg/forged-carbon/option-2.png',
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
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Forged Carbon Fiber #8 - [Done]

    {
        shopifyHandle: 'ferrari-5-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '54',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
            leftCoordinates: {
                x: 26,
                y: 32
            },
            centerCoordinates: {
                x: 125,
                y: -5
            },
            rightCoordinates: {
                x: 230,
                y: 32
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
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber/carbon-fiber-full-with-shadow.png',
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
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Ferrari #5 - [Done]

    {
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
                x: 26,
                y: 40
            },
            centerCoordinates: {
                x: 115,
                y: 40
            },
            rightCoordinates: {
                x: 230,
                y: 40
            },
            width: 85,
            height: 85,
            glow:{ enabled: true, color: '#000000' }
        },
        bottomLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/bmw/flag/bottom/option-1.png',
            centerCoordinates: {
                x: 0,
                y: -5
            },
            width: 350,
            height: 30,
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
            width: 350,
            height: 200,
        },


        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
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
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: true,
                color: '#ffffff'
            },
        }
    }, //BMW #2 - [Done]

    {
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
            imageType: 'svg',
            filePath: '/images/resources/cars/ferrari/logos/horse/colors',
            url: '/images/resources/cars/ferrari/logos/horse/colors/regular.svg',
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
                enabled: true
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
                enabled: true
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
        shopifyHandle: 'carbon-fiber-1-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '57',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        }
    }, //carbon fiber #2 - [Done]

    {
        shopifyHandle: 'mustang-shelby-2-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '58',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            hasColor: false,
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/ford/logos/cobra/cobra-silver.png',
            leftCoordinates: {
                x: 30,
                y: 60
            },
            centerCoordinates: {
                x: 145,
                y: 45
            },
            rightCoordinates: {
                x: 250,
                y: 60
            },
            width: 55,
            height: 85,
            glow:{ enabled: true, color: '#ffffff' }
        },
        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            filePath: '/images/resources/cars/ford/patterns/gt500/option-2',
            url: '/images/resources/cars/ford/patterns/gt500/option-2/gray.png',
            leftCoordinates: {
                x: 10,
                y: 5
            },
            centerCoordinates: {
                x: 265,
                y: 5
            },
            rightCoordinates: {
                x: 265,
                y: 5
            },
            width: 75,
            height: 150,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
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
                enabled: true
            },
            stroke: { enabled: false }
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true,
            },
            stroke: { enabled: false }
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false }
        }
    }, //Shelby #1  - [Done]

    {
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
                x: 40,
                y: 50
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 250,
                y: 50
            },
            width: 60,
            height: 60,
            glow: { enabled: true, color: '#000000' }
        },
        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/bg/carbon-fiber.png',
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
                enabled: true
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
                enabled: true,
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
    }, //lambo #9 - [Done]

    {
        shopifyHandle: 'lamborghini-10-template',
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '60',
        preset: true,
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                x: 30,
                y: 55
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 245,
                y: 55
            },
            width: 60,
            height: 60,
            glow:{ enabled: true, color: '#ff0000' }
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: true,
                file: {
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
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: false
            },
        }
    }, //Lambo #10 - [Done]

    {
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
            filePath: '/images/resources/cars/rolls-royce/logo/rr/colors',
            imageType: 'svg',
            url: '/images/resources/cars/rolls-royce/logo/rr/colors/orange.svg',
            leftCoordinates: {
                x: 30,
                y: 32
            },
            centerCoordinates: {
                x: 130,
                y: 35
            },
            rightCoordinates: {
                x: 230,
                y: 32
            },
            width: 85,
            height: 100,
            glow:{ enabled: true, color: '#000000' }
        },

        bottomLogo: {
            hasColor: true,
            enabled: true,
            name: "mercedes.svg",
            filePath: '/images/resources/cars/rolls-royce/text/black-badge/colors',
            imageType: 'png',
            url: '/images/resources/cars/rolls-royce/text/black-badge/colors/orange.png',
            centerCoordinates: {
                x: 105,
                y: 3
            },
            width: 145,
            height: 20,
            glow:{ enabled: true, color: "#000000" }
        },

        backgroundLogo:{
            hasColor: false,
            enabled: true,
            name: 'gray.png',
            url: '/images/resources/cars/rolls-royce/overlay/option-1/gray.svg',
            leftCoordinates: {
                x: 15,
                y: 5
            },
            centerCoordinates: {
                x: 105,
                y: 5
            },
            rightCoordinates: {
                x: 215,
                y: 5
            },
            width: 125,
            height: 150,
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
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        }
    }, //rolls-royce #3 - [Done]

    {
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
                hasColor: false,
                file:{
                    name: 'green-hexagons.png',
                    url: '/images/logos/misc/red-line.png',
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
                enabled: true
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
                enabled: true,
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
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        }
    }, //Red line - [Done]

    {
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
                y: 15
            },
            centerCoordinates: {
                x: 95,
                y: 15
            },
            rightCoordinates: {
                x: 200,
                y: 15
            },
            width: 135,
            height: 135,
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
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logo/logo.png',
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
            width: 120,
            height: 100,
            glow: {
                enabled: true,
                color: '#ffffff'
            }
        },
        bottomLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/text/colors/red.svg',
            centerCoordinates: {
                x: 104,
                y: 8
            },
            width: 145,
            height: 5,
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
                enabled: true
            },
            stroke: {
                enabled: true,
                color: 'red'
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
                enabled: true
            },
            stroke: {
                enabled: true,
                color: 'red'
            },
        }
    }, //Corvette #1  - [Done]

    {
        templateId: '66',
        shopifyHandle: 'mustang-shelby-3-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                x: 30,
                y: 60
            },
            centerCoordinates: {
                x: 140,
                y: 45
            },
            rightCoordinates: {
                x: 250,
                y: 60
            },
            width: 60,
            height: 85,
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
                x: 280,
                y: 5
            },
            centerCoordinates: {
                x: 280,
                y: 5
            },
            rightCoordinates: {
                x: 280,
                y: 5
            },
            width: 65,
            height: 150,
        },

        detailLogo1:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/ford/details/faded-stripe/colors',
            url: '/images/resources/cars/ford/details/faded-stripe/colors/regular.png',
            leftCoordinates: {
                x: 40,
                y: 0
            },
            centerCoordinates: {
                x: 40,
                y: 0
            },
            rightCoordinates: {
                x: 40,
                y: 0
            },
            width: 65,
            height: 150,
        },

        detailLogo2:{
            hasColor: true,
            enabled: true,
            name: 'gray.png',
            imageType: 'png',
            filePath: '/images/resources/cars/ford/logos/CS/colors',
            url: '/images/resources/cars/ford/logos/CS/colors/regular.png',
            leftCoordinates: {
                x: 15,
                y: 15
            },
            centerCoordinates: {
                x: 15,
                y: 15
            },
            rightCoordinates: {
                x: 15,
                y: 15
            },
            width: 15,
            height: 10,
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
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '67',
        shopifyHandle: 'dodge-ram-1-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        preset: true,
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/dodge/logos/ram/1.png',
            leftCoordinates: {
                x: 30,
                y: 55
            },
            centerCoordinates: {
                x: 142,
                y: 55
            },
            rightCoordinates: {
                x: 245,
                y: 55
            },
            width: 60,
            height: 60,
            glow: {
                enabled: true,
                color: '#000000'
            }
        },

        backgroundLogo:{
            hasColor: true,
            enabled: true,
            name: 'white.png',
            imageType: 'png',
            filePath: '/images/resources/cars/dodge/patterns/option-1',
            url: '/images/resources/cars/dodge/patterns/option-1/gray.png',
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
            width: 350,
            height: 185,
        },

        backgroundSettings: {
            color: '#000000',
            background: {
                enabled: false,
            },
        },
        state:{
            color: '#a0a0a0',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
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
                enabled: true
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
                enabled: true
            },
            stroke: {
                enabled: false,
            },
        }
    }, //Ram #1  - [Done]

    {
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '68',
        shopifyHandle: 'corvette-3-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
        patternSettings: { enabled: false },
        fadeSettings: { enabled: false },
        backgroundLogo: { enabled: false },
        bottomLogo: { enabled: false },
        mainLogo: {
            enabled: true,
            name: "mercedes.svg",
            url: '/images/resources/cars/corvette/logo/logo.png',
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
            width: 120,
            height: 100,
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
                enabled: true
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]

    {
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '69',
        shopifyHandle: 'two-colors-simple-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                enabled: true
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]

    {
        detailLogo1: { enabled: false},
        detailLogo2: {enabled: false},
        templateId: '70',
        shopifyHandle: 'pinstripe-template',
        startPlatePosition: 'center',
        startPlateText: 'SAM PLE',
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
                enabled: true
            },
            stroke: { enabled: false},
        },
        plateNumber: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false},
        },
        bottomText: {
            color: '#ffffff',
            glow: {
                enabled: false
            },
            shadow: {
                enabled: true
            },
            stroke: { enabled: false},
        }
    }, //Corvette #1  - [Done]

]
