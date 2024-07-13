export function formatPublishedAt(date: string) {
    return new Date(date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    })
}