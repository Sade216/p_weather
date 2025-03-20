import { NextResponse } from "next/server";
import { getGeoCode } from "./geo-code.service";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const city = searchParams.get("city");

        if (!city)
            return NextResponse.json(
                { error: `Город не найден` },
                { status: 500 }
            );

        const data = await getGeoCode(city);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: `Ошибка получения данных ${error}` },
            { status: 500 }
        );
    }
}
