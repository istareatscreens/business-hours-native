import Day from "./day";
import { DataObject, DayInfo, DayObject, OptionsData } from "./typings";

export default abstract class BusinessHours {
  protected data: DataObject;
  protected options: OptionsData;
  protected currentDate: string;
  protected currentDay: number;
  protected schedule: Day[];

  protected constructor(data: DataObject, shifted: boolean = true) {
    this.data = data;
    this.options = { ...data.Options };
    this.currentDate = this.getCurrentLocalBusinessTime();
    this.currentDay = shifted ? 0 : new Date(this.currentDate).getDay();
    this.schedule = <Day[]>this.createDayObjects();
  }

  protected abstract createDayObjects(): DayObject[];

  protected createDayObject(offset: number): Day {
    const { Day: days, Holidays: holidays } = this.data;
    return Day.init(offset, days, new Date(this.currentDate), holidays);
  }

  protected generateDayInfoObject(day: Day): DayInfo {
    return {
      Name: day.getDayName(),
      altName: day.getDayAltName(),
      HolidayName: day.getHolidayName(),
      isHoliday: day.isHoliday(),
      isClosed: day.getHours().length === 0 ? true : false,
      isCurrentDay:
        new Date(this.currentDate).getDate() === day.getDateObject().getDate()
          ? true
          : false,
      Hours: day.getHours(),
      dateObj: day.getDateObject(),
    };
  }

  protected abstract adjustSchedule(): void;

  public getCurrentLocalBusinessTime(): string {
    const { Format, timeZone } = this.options;
    return new Date().toLocaleString(Format === "" ? undefined : Format, {
      timeZone: timeZone,
    });
  }

  public refresh(): boolean {
    this.currentDate = this.getCurrentLocalBusinessTime();
    const currentDateObj = new Date(this.currentDate);
    if (
      currentDateObj.getDate() >
        this.schedule[this.currentDay].getDateObject().getDate() ||
      currentDateObj.getMonth() >
        this.schedule[this.currentDay].getDateObject().getMonth() ||
      currentDateObj.getFullYear() >
        this.schedule[this.currentDay].getDateObject().getFullYear()
    ) {
      this.adjustSchedule();
      return true;
    }
    return false;
  }

  public getCurrentDayInfo(): DayInfo {
    return this.generateDayInfoObject(this.schedule[this.currentDay]);
  }

  public getSchedule(): DayInfo[] {
    return this.schedule.map((day) => {
      return this.generateDayInfoObject(day);
    });
  }

  public getHolidayName(): string {
    return this.schedule[this.currentDay].getHolidayName();
  }

  public isHoliday(): boolean {
    return this.schedule[this.currentDay].isHoliday();
  }

  public isOpen(): boolean {
    return this.schedule[this.currentDay].isOpen(
      new Date(this.getCurrentLocalBusinessTime())
    );
  }
}
