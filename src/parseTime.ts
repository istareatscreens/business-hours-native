export default function parseTime(time: string, hours: boolean = true): number {
  return hours
    ? Number(time.match(/([0-9]|[1-9][0-9])(?=:)/s)![0])
    : Number(time.match(/((?<=:)([1-9][0-9]))|([1-9]+)(?!.*\d)|(00)/s)![0]);
}
