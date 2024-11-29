export function convertToTime(index: number): string {
    const hours = Math.floor(index / 2); // Calculate the hour (0-23)
    const minutes = (index % 2) * 30; // Calculate the minutes (0 or 30)

    // Format hours and minutes to ensure 2 digits
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}`;
}
