import { type ForecastResponse, type Location } from "@/shared/model";
import ky from "ky";

export async function fetchForecast(props: Location): Promise<ForecastResponse> {
    const res = await ky.get<ForecastResponse>(
        `/api/forecast?lat=${props.lat}&lon=${props.lon}`
    ).json();

    return res
}
