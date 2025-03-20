"use client";
import React from "react";
import Link from "next/link";

import styles from "./header.module.css";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/shared/ui";

export function Header() {
    const router = useRouter();
    return (
        <header>
            <Container className={styles.Header}>
                <div className={styles.LeftBar}>
                    <button onClick={() => router.back()}>
                        <ChevronLeft />
                    </button>
                    <button onClick={() => router.forward()}>
                        <ChevronRight />
                    </button>
                </div>
                <div className={styles.Links}>
                    <Link href={"/"}>Главная</Link>
                    <Link href={"/weather"}>Погода</Link>
                </div>
            </Container>
        </header>
    );
}
