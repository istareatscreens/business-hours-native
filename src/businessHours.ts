import Day from "./day";

export default class BusinessHours {
  private data: DataObject;
  private options: OptionsData;
  private currentDate: string;
  private currentDay: number;
  private schedule: Day[];
  private shifted: boolean;

  private constructor(data: DataObject, shifted: boolean) {
    this.data = data;
    this.shifted = shifted;
    this.options = { ...data.Options };
    this.currentDate = this.getCurrentLocalBusinessTime();
    this.currentDay = shifted ? 0 : new Date(this.currentDate).getDay();
    this.schedule = this.createDayObjects();
  }

  public static init(data: DataObject, shifted: boolean = false) {
    return new BusinessHours(data, shifted);
  }

  private createDayObjects(): Day[] {
    let schedule = [];
    if (!this.shifted) {
      for (let i = -this.currentDay; i < 0; i++) {
        schedule.push(this.createDayObject(i));
      }
      for (let i = 0; i < 7 - this.currentDay; i++) {
        schedule.push(this.createDayObject(i));
      }
    } else {
      for (let i = 0; i < 7; i++) schedule.push(this.createDayObject(i));
    }
    return schedule;
  }

  private createDayObject(offset: number): Day {
    const { Day: days, Holidays: holidays } = this.data;
    return Day.init(offset, days, new Date(this.currentDate), holidays);
  }

  private generateDayInfoObject(day: Day): DayInfo {
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
      dateObj: day.getDateObject()
    };
  }

  private adjustSchedule(): void {
    if (this.shifted) {
      this.schedule.splice(0, 1);
      this.schedule.push(this.createDayObject(6));
    } else {
      if (this.currentDay < 6) {
        this.currentDay++;
      } else {
        this.currentDay = 0;
        this.schedule = this.createDayObjects();
      }
    }
  }

  public getCurrentLocalBusinessTime(): string {
    const { Format, timeZone } = this.options;
    return new Date().toLocaleString(Format === "" ? undefined : Format, {
      timeZone: timeZone
    });
  }

  public refresh(): void {
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
    }
  }

  public getCurrentDayInfo(): DayInfo {
    return this.generateDayInfoObject(this.schedule[this.currentDay]);
  }

  public getSchedule(): DayInfo[] {
    return this.schedule.map(day => {
      return this.generateDayInfoObject(day);
    });
  }

  public getCurrentDayIndexNo(): number {
    return this.currentDay;
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
