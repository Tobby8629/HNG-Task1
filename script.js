
// Function to get the current day of the week
 const getCurrentDayOfWeek = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    return dayOfWeek;
}

// Function to get the current UTC time in milliseconds
const getCurrentUTCTime = () => {
    const now = new Date();
    return now.getTime();
}

// Update the elements with dynamic data
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${getCurrentUTCTime()} milliseconds`;
