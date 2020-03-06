// eslint-disable-next-line no-unused-vars
import {
  WeekdayData,
  HoursRange,
  WeekdayName,
  DayData,
  HoursRangeArr
} from "./typings";

export class Day {
  private dayName: string;
  private dayoffset: number;
  private data: WeekdayData;
  private isHoliday: boolean = false;

  constructor(dayoffset: number, data: DayData, date: Date) {
    this.dayoffset = dayoffset;
    this.setDayName(date);
    this.data = { Name: data[`${this.dayName}`].dayName, Hours };
  }

  private setDayName(date: Date) {
    this.dayName = this.getDayName(
      new Date(date.setDate(date.getDate() + this.dayoffset)).getDay()
    );
  }

  private deepCopyHours(Hours: HoursRangeArr) {
    return Hours.map((timeRange: HoursRange) => {
      return { ...timeRange };
    });
  }

  private getDayName(day: number) {
    const dayName: WeekdayName[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return dayName[day];
  }

  public getDayProperties() {}
}
