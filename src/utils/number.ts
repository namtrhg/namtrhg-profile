export function addLeadingZero(number: number): string {
  return number < 10 ? `0${number}` : `${number}`;
}
