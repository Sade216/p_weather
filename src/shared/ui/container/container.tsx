import React, { ReactNode } from "react";

import styles from "./container.module.css";

interface Props {
    children: ReactNode;
    className?: string;
}

export function Container({ children, className  }: Props) {
    return <div className={`${styles.Container} ${className ? className : null}`}>{children}</div>;
}
