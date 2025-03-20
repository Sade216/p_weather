"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { WeatherInfo } from "./weather-info/weather-info";

import { fetchWeather } from "../api/api";

import { type WeatherResponse, type Location } from "@/shared/model";
import styles from "./weather.module.css";

interface Props {
    location: Location;
}

export function Weather({ location }: Props) {
    const [data, setData] = useState<WeatherResponse>();

    async function fetchByGeo(props: Location) {
        fetchWeather(props).then((res) => setData(res));
    }

    useEffect(() => {
        fetchByGeo(location);
    }, [location]);

    const Map = dynamic(
        () => import("./map/map").then((module) => module.default),
        {
            ssr: false,
        }
    );

    return (
        <>
            {data && (
                <div className={styles.Main}>
                    <WeatherInfo data={data} />
                    <Map
                        location={location}
                        markers={[{ location: location }]}
                    />
                </div>
            )}
        </>
    );
}
