"use server";

import ky from "ky";

const WEATHER_API_URL = process.env.WEATHER_API_URL;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

interface WeatherProps {
    lon: string;
    lat: string;
    lang: string;
}

export async function getWeather({
    lon,
    lat,
    lang = "ru",
}: WeatherProps) {
    if (!WEATHER_API_KEY)
        return {
            message:
                "Ошибка отправки запроса, API KEY или ссылка не действительны",
            status: 500,
        };

    const response = await ky
        .get("", {
            prefixUrl: `${WEATHER_API_URL}/data/2.5/weather`,
            searchParams: {
                appid: WEATHER_API_KEY,
                units: "metric",
                lang: lang,
                lon: lon,
                lat: lat,
            },
        })
        .json();

    return response;
}
