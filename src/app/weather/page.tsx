"use client";
import React, { useEffect, useState } from "react";

import styles from "./page.module.css";
import { Weather } from "@/features/weather";
import { ForecastList } from "@/features/forecast-list";
import { useGeolocation } from "@/shared/hooks/useGeolocation";
import { useSearchParams } from "next/navigation";
import { fetchGeoCode } from "@/shared/api";
import { Location } from "@/shared/model";

function WeatherPage() {
    const { location, error } = useGeolocation();
    const params = useSearchParams();

    const [city, setCity] = useState<Location | null>(null);

    useEffect(() => {
        const q = params.get("q");
        if (!q) return;
        else {
            fetchGeoCode(q).then((res) => {
                setCity({ lat: res.geonames[0].lat, lon: res.geonames[0].lng });
            });
        }
    }, [params]);

    return (
        <main className={styles.Wrapper}>
            {location && (
                <>
                    <Weather location={city ? city : location} />
                    <ForecastList location={city ? city : location} />
                </>
            )}
            {error && (
                <section className={styles.Error}>
                    <h1 className={styles.ErrorTitle}>
                        Не удалось определить вашу геолокацию.
                    </h1>
                    <code className={styles.ErrorResponse}>{error}</code>
                    <p>
                        Для автоматического определения вашего местоположения,
                        необходимо включить функцию её определения в вашем
                        браузере.
                    </p>
                </section>
            )}
        </main>
    );
}

export default WeatherPage;
