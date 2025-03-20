import React from "react";

import styles from "./info-card.module.css";

interface Props {
    title?: string;
    value: string;
    className?: string;
}

export function InfoCard({ title, value, className }: Props) {
    return (
        <section className={`${styles.Card} ${className ? className : null}`}>
            {title && <h3>{title}</h3>}
            <p>{value}</p>
        </section>
    );
}
