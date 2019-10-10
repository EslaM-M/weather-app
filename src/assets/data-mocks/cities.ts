export const citiesResponseMock = {
    cnt: 2,
    list: [
        {
            coord: {
                lon: -0.13,
                lat: 51.51
            },
            sys: {
                country: "GB",
                timezone: 3600,
                sunrise: 1570342113,
                sunset: 1570382923
            },
            weather: [
                {
                    id: 300,
                    main: "Drizzle",
                    description: "light intensity drizzle",
                    icon: "09n"
                }
            ],
            main: {
                temp: 12.67,
                pressure: 1016,
                humidity: 76,
                temp_min: 11,
                temp_max: 14
            },
            visibility: 10000,
            wind: {
                speed: 5.7,
                deg: 300
            },
            clouds: {
                all: 90
            },
            dt: 1570399762,
            id: 2643743,
            name: "London"
        },
        {
            coord: {
                lon: 4.89,
                lat: 52.37
            },
            sys: {
                country: "NL",
                timezone: 7200,
                sunrise: 1570427450,
                sunset: 1570467940
            },
            weather: [
                {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04n"
                }
            ],
            main: {
                temp: 8.97,
                pressure: 1013,
                humidity: 81,
                temp_min: 7.78,
                temp_max: 10
            },
            visibility: 10000,
            wind: {
                speed: 7.2,
                deg: 80
            },
            clouds: {
                all: 75
            },
            dt: 1570399763,
            id: 2759794,
            name: "Amsterdam"
        },
    ]
}

