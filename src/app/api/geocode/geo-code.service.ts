"use server";

import ky from "ky";

const GEOCODE_API_URL = process.env.GEOCODE_API_URL;
const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

export async function getGeoCode(city: string) {
    if (!GEOCODE_API_KEY)
        return {
            message:
                "Ошибка отправки запроса, API KEY или ссылка не действительны",
            status: 500,
        };

    const response = await ky
        .get("searchJSON", {
            prefixUrl: `${GEOCODE_API_URL}`,
            searchParams: {
                q: city,
                maxRows: 1,
                username: GEOCODE_API_KEY,
            },
        })
        .json();

    return response;
}
