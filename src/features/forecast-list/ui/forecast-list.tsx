"use client";

import { ForecastResponse, Location } from "@/shared/model";
import React, { useEffect, useState } from "react";
import { fetchForecast } from "../api/api";

import styles from "./forecast-list.module.css";
import Card from "./card/card";

interface Props {
    location: Location;
}

export function ForecastList({ location }: Props) {
    const [data, setData] = useState<ForecastResponse>();

    useEffect(() => {
        if (!location) return;
        fetchForecast(location).then((data) => {
            setData(data);
        });
    }, [location]);

    return (
        <>
            {data && (
                <div className={styles.Wrapper}>
                    {data.list.map((item, key) => (
                        <Card
                            key={key}
                            time={item.dt}
                            icon={item.weather[0].icon}
                            description={item.weather[0].description}
                            temp={item.main.temp}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
