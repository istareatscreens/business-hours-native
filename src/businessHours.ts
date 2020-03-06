// eslint-disable-next-line no-unused-vars
import { DataObject, WeekdayName, OptionsData, DayData } from "./typings";

export class BusinessHours {
  private options: OptionsData;
  private currentDate: Date;
  private currentDay: number;
  private schedule: DayData;
  private data: DataObject;
  private isOpen: boolean = true;

  constructor(data: DataObject, shifted: boolean) {
    this.data = data;
    this.options = { ...data.Options };
    this.currentDate = this.getCurrentLocalBusinessTime();
    this.createDayObjects(data, shifted);
  }

  public static init(data: DataObject, shifted: boolean = false) {
    return new BusinessHours(data, shifted);
  }

  private createDayObjects(data: DataObject, shifted: boolean) {
    //if (shifted)
  }

  private weekdayOverflow(num: number) {
    if (num < 6) {
      return 0;
    } else {
      return num;
    }
  }

  private createHolidayObjects() {}

  // private getCurrentUTCTime() {
  //   return new Date(new Date().toUTCString().substr(0, 25));
  // }

  private getCurrentLocalBusinessTime() {
    const now = new Date();
    const timezone = this.options.UTCoffset;
    return new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours() + timezone,
      now.getUTCMinutes(),
      now.getUTCSeconds()
    );
  }

  public getWeek() {
    return this.data.Day;
  }

  public getData() {
    return this.data;
  }
}

export default BusinessHours;
