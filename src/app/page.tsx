'use client'
import Link from "next/link";

import styles from "./page.module.css";
import { FormEvent, RefObject, useRef } from "react";
import { redirect } from "next/navigation";

export default function Home() {

    const inputRef = useRef<HTMLInputElement | null>(null)

    function handleSubmit(e: FormEvent<HTMLInputElement>, ref: RefObject<HTMLInputElement | null>){
        e.preventDefault();
        const value = ref.current?.value || ''
        if(!value) return
        redirect(`/weather?q=${value}`)
    }

    return (
        <div>
            <main className={styles.Main}>
                <div className={styles.Hero}>
                    <h1 className={styles.HeroTitle}>Погода в вашем городе</h1>
                    <Link
                        href="/weather"
                        className={styles.Link}>
                        Узнать погоду
                    </Link>
                    <div>или</div>
                    <h2 className={styles.HeroTitle}>
                        Найти погоду в другом городе
                    </h2>
                    <div className={styles.Form} >
                        <input
                            className={styles.Input}
                            ref={inputRef}
                            type="text"
                            name="city"
                            placeholder="London"
                        />
                        <input className={styles.Submit} type="submit" value="Узнать погоду" onClick={(e)=>handleSubmit(e, inputRef)} />
                    </div>
                </div>
            </main>
        </div>
    );
}
