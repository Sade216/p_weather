import { CircleSmall } from "lucide-react";
import React from "react";

import styles from "./temperature.module.css";

interface Props {
    value: number;
    text?: string;
    className?: string;
    tempType?: "C" | "K" | "F";
}

export function Temperature({ value, className, text, tempType = "C" }: Props) {
    return (
        <div className={`${styles.Wrapper} ${className ? className : ""}`}>
            {text && <div className={styles.Label}>{text}</div>}
            <div className={styles.Value}>
                {Math.round(value)}
                <CircleSmall className={styles.Icon} />
                {tempType}
            </div>
        </div>
    );
}
