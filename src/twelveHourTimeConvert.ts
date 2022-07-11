import parseTime from "./parseTime";
import { HoursRange, HoursRangeArr } from "./typings";
export default function twelveHourTimeConvert(
  hoursArr: HoursRangeArr
): HoursRangeArr {
  return hoursArr.map((hours: HoursRange) => {
    return { from: convert(hours.from), to: convert(hours.to) };
  });
}

function convert(time: string): string {
  const hrs: number = parseTime(time);
  let mins: string | number = parseTime(time, false);
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs > 12 && hrs < 24) {
    return hrs - 12 + ":" + mins + " PM";
  } else if (hrs === 0) {
    return "12" + ":" + mins + " AM";
  } else if (hrs == 12) {
    return "12" + ":" + mins + " PM";
  }

  return hrs + ":" + mins + " AM";
}
