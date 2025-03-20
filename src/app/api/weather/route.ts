import { NextResponse } from "next/server";
import {
    getWeather
} from "./weather.service";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const lon = searchParams.get("lon");
        const lat = searchParams.get("lat");

        if (!lon || !lat)
            return NextResponse.json(
                { error: `Город или координаты не предоставлены` },
                { status: 404 }
            );

        const data = await getWeather({ lon, lat, lang: "ru" });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: `Ошибка получения данных ${error}` },
            { status: 500 }
        );
    }
}
