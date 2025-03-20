import { formatTimestamp } from "./format-timestamp";

test("formatTimestamp проверка полного возврата", () => {
    expect(formatTimestamp(1741861221, "datetime")).toBe("13.03.2025, 17:20:21");
});

test("formatTimestamp проверка возврата времени", () => {
    expect(formatTimestamp(1741861221, "time")).toBe("17:20:21");
});

test("formatTimestamp проверка возврата даты", () => {
    expect(formatTimestamp(1741861221, "date")).toBe("13.03.2025");
});

test("formatTimestamp проверка возврата 12-часового типа времени", () => {
    expect(formatTimestamp(1741861221, "time", true)).toBe("05:20:21 PM");
});

test("formatTimestamp проверка возврата 12-часового даты и времени", () => {
    expect(formatTimestamp(1741861221, "datetime", true)).toBe("13.03.2025, 05:20:21 PM");
});
