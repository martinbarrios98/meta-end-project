export const formatedDate = (date) => new Date(date).toLocaleString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long"
});