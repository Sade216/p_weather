"use server";

import ky from "ky";

const WEATHER_API_URL = process.env.WEATHER_API_URL;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

interface ForecastProps {
    lon: string;
    lat: string;
    lang: string;
    cnt: number;
}

export async function getForecast({ lon, lat, lang = "ru", cnt = 40 }: ForecastProps) {
    if (!WEATHER_API_KEY)
        return {
            message:
                "Ошибка отправки запроса, API KEY или ссылка не действительны",
            status: 500,
        };

    const response = await ky
        .get("", {
            prefixUrl: `${WEATHER_API_URL}/data/2.5/forecast`,
            searchParams: {
                appid: WEATHER_API_KEY,
                units: "metric",
                lang: lang,
                lon: lon,
                lat: lat,
                cnt: cnt,
            },
        })
        .json();

    return response;
}
