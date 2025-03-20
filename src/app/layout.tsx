import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import { Header } from "@/features/header";

const interFont = Inter({
    variable: "--font-inter",
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: "Weather app",
    description: "NextJS weather app with Feature Based architecture (Simplier FSD, because FSD overload small project)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${interFont.variable}`}>
                <Header/>
                {children}
            </body>
        </html>
    );
}
