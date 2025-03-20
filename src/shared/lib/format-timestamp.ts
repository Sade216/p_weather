export function formatTimestamp(
    timestamp: number,
    format: "date" | "time" | "datetime" | "day_month" = "datetime",
    hour12: boolean = false
): string {
    const date = new Date(timestamp * 1000);

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12,
    };

    switch (format) {
        case "date":
            return date.toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        case "time":
            return date.toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12,
            });
        case "day_month":
            return date.toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "short",
            });
        case "datetime":
        default:
            return date.toLocaleString("ru-RU", options);
    }
}
