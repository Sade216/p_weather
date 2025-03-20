import { WeatherResponse } from "@/shared/model";
import { formatTimestamp } from "@/shared/lib";
import React from "react";

import styles from "./weather-info.module.css";
import { Temperature, WeatherIcon } from "@/shared/ui";
import { MapPin } from "lucide-react";
import { InfoCard } from "./info-card";

type Props = {
    data: WeatherResponse;
};

export function WeatherInfo({ data }: Props) {
    return (
        <section className={styles.Wrapper}>
            <div className={styles.UpperBar}>
                <div className={styles.Left}>
                    <h3 className={styles.Location}>
                        <MapPin />
                        {data.name}
                    </h3>
                    <div className={styles.AddText}>
                        <div>
                            {`Восход: ${formatTimestamp(
                                data.sys.sunrise,
                                "time"
                            )}`}
                        </div>
                        <div>
                            {`Закат: ${formatTimestamp(
                                data.sys.sunset,
                                "time"
                            )}`}
                        </div>
                    </div>
                </div>
                <WeatherIcon
                    className={styles.Icon}
                    iconName={data.weather[0].icon}
                />
            </div>
            <div className={styles.BottomBar}>
                <div>
                    <Temperature
                        className={styles.Temperature}
                        value={data.main.temp}
                    />
                    <Temperature
                        value={data.main.feels_like}
                        text="Ощущается как:"
                    />
                </div>
                <div className={styles.Additional}>
                    <div className={styles.Card}>
                        <InfoCard
                            title="Видимость"
                            value={`${Math.round(data.visibility / 1000)} км.`}
                        />
                    </div>
                    <div className={styles.Card}>
                        <InfoCard
                            title="Влажность"
                            value={`${data.main.humidity}%`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
