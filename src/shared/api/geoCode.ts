import ky from "ky";

import { GeoCodeResponse } from "@/shared/model";

export async function fetchGeoCode(city: string) {
    const res = await ky.get<GeoCodeResponse>(
        `/api/geocode?city=${city}`
    ).json();

    return res
}
