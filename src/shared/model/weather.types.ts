export type Location = {
    lat: number;
    lon: number;
};

export type City = {
    id: number;
    name: string;
    coord: Location;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
};

export type Main = {
    feels_like: number;
    grnd_level: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
};

export type Weather = {
    id: number;
    description: string;
    main: string;
    icon: string;
};

export type Wind = {
    speed: number;
    deg: number;
    gust: number;
};

export type ForecastListItem = {
    dt: number;
    clouds: { all: number };
    dt_txt: string;
    main: Main;
    pop: number;
    snow?: { "3h": number };
    sys: { pod: string };
    visibility: number;
    weather: Weather[];
    wind: Wind;
};

export type ForecastResponse = {
    cod: string;
    cnt: number;
    message: string;
    list: ForecastListItem[];
    city: City;
};

export type WeatherResponse = {
    coord: Location;
    weather: Weather[];
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: { all: number };
    rain: { "1h": number };
    snow: { "1h": number };
    dt: number;
    sys: {
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: string;
};
