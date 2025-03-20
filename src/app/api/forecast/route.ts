import { NextResponse } from "next/server";
import { getForecast } from "./forecast.service";

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

        const data = await getForecast({ lon, lat, lang: "ru", cnt: 40 });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: `Ошибка получения данных ${error}` },
            { status: 500 }
        );
    }
}
