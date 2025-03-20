import { Temperature, WeatherIcon } from "@/shared/ui";
import React from "react";

import styles from "./card.module.css";
import { formatTimestamp } from "@/shared/lib";

interface Props {
    time: number;
    icon: string;
    description: string;
    temp: number;
}

function Card(props: Props) {
    return (
        <div className={styles.Card}>
            <div>
                <div className={styles.Time}>
                    {formatTimestamp(props.time, "time").slice(0, 5)}
                </div>
                <div className={styles.Date}>
                    {formatTimestamp(props.time, "day_month")}
                </div>
                <WeatherIcon
                    className={styles.Icon}
                    iconName={props.icon}
                />
            </div>
            <Temperature
                className={styles.Temp}
                value={props.temp}
            />
            <div className={styles.Description}>{props.description}</div>
        </div>
    );
}

export default Card;
