import {
    Cloud,
    CloudDrizzle,
    CloudLightning,
    CloudMoon,
    CloudMoonRain,
    CloudSun,
    CloudSunRain,
    Cloudy,
    Moon,
    Snowflake,
    Sun,
    Waves,
} from "lucide-react";
import React, { ReactNode } from "react";

interface IconMap {
    [key: string]: ReactNode;
}
interface Props {
    iconName: string;
    className?: string;
}

const icons: IconMap = {
    "01d": <Sun />,
    "02d": <CloudSun />,
    "03d": <Cloud />,
    "04d": <Cloudy />,
    "09d": <CloudDrizzle />,
    "10d": <CloudSunRain />,
    "11d": <CloudLightning />,
    "13d": <Snowflake />,
    "50d": <Waves />,
    "01n": <Moon />,
    "02n": <CloudMoon />,
    "03n": <Cloud />,
    "04n": <Cloudy />,
    "09n": <CloudDrizzle />,
    "10n": <CloudMoonRain />,
    "11n": <CloudLightning />,
    "13n": <Snowflake />,
    "50n": <Waves />,
};

export function WeatherIcon({ iconName, className }: Props) {
    const IconComponent = icons[iconName] || "Нет иконки";
    return <div className={className ? className : undefined}>{IconComponent}</div>;
}
