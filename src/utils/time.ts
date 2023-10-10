export function formatTimeWithDate(date: Date): string {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1); // Months are zero-based, so we add 1
  const year = date.getFullYear();

  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${dayOfWeek}, ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function padZero(value: number): string {
  return value < 10 ? `0${value}` : value.toString()
}