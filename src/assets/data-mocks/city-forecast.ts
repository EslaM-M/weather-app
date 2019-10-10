export const cityForecastResponseMock = {
    cod: "200",
    message: 0.0097,
    cnt: 5,
    list: [
        {
            dt: new Date().getTime()/1000,
            main: {
                temp: 15.39,
                temp_min: 13.45,
                temp_max: 15.39,
                pressure: 1012.32,
                sea_level: 1012.32,
                grnd_level: 1007.41,
                humidity: 85,
                temp_kf: 1.94
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d"
                }
            ],
            clouds: {
                all: 100
            },
            wind: {
                speed: 5.69,
                deg: 195.452
            },
            rain: {
                '3h': 0.062
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2019-10-07 15:00:00"
        },
        {
            dt: new Date().getTime()/1000,
            main: {
                temp: 15.9,
                temp_min: 14.45,
                temp_max: 15.9,
                pressure: 1010.61,
                sea_level: 1010.61,
                grnd_level: 1005.18,
                humidity: 92,
                temp_kf: 1.45
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n"
                }
            ],
            clouds: {
                all: 100
            },
            wind: {
                speed: 5.46,
                deg: 203.342
            },
            rain: {
                '3h': 0.5
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2019-10-07 18:00:00"
        },
        {
            dt: new Date().getTime()/1000,
            main: {
                temp: 14.25,
                temp_min: 13.28,
                temp_max: 14.25,
                pressure: 1010.39,
                sea_level: 1010.39,
                grnd_level: 1005.59,
                humidity: 85,
                temp_kf: 0.97
            },
            weather: [
                {
                    id: 501,
                    main: "Rain",
                    description: "moderate rain",
                    icon: "10n"
                }
            ],
            clouds: {
                all: 100
            },
            wind: {
                speed: 4.28,
                deg: 259.654
            },
            rain: {
                '3h': 4.125
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2019-10-07 21:00:00"
        },
        {
            dt: 1470492800,
            main: {
                temp: 13.84,
                temp_min: 13.36,
                temp_max: 13.84,
                pressure: 1009.68,
                sea_level: 1009.68,
                grnd_level: 1004.8,
                humidity: 85,
                temp_kf: 0.48
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n"
                }
            ],
            clouds: {
                all: 100
            },
            wind: {
                speed: 4.15,
                deg: 249.373
            },
            rain: {
                '3h': 0.375
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2019-10-08 00:00:00"
        },
        {
            dt: 1470503600,
            main: {
                temp: 11.79,
                temp_min: 11.79,
                temp_max: 11.79,
                pressure: 1009.47,
                sea_level: 1009.47,
                grnd_level: 1004.52,
                humidity: 89,
                temp_kf: 0
            },
            weather: [
                {
                    id: 801,
                    main: "Clouds",
                    description: "few clouds",
                    icon: "02n"
                }
            ],
            clouds: {
                all: 20
            },
            wind: {
                speed: 4.13,
                deg: 249.918
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2019-10-08 03:00:00"
        },
    ],
    city: {
        id: 2643743,
        name: "London",
        coord: {
            lat: 51.5085,
            lon: -0.1258
        },
        country: "GB",
        timezone: 3600,
        sunrise: 1570428610,
        sunset: 1570469187
    }
}