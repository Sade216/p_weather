import { type Location, type WeatherResponse } from "@/shared/model";
import ky from "ky";

export async function fetchWeather(props: Location): Promise<WeatherResponse> {
    const res = await ky.get<WeatherResponse>(
        `/api/weather?lat=${props.lat}&lon=${props.lon}`
    ).json();

    return res
}
