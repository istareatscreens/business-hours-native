import Day from "./day";

export class BusinessHours {
  private data: DataObject;
  private options: OptionsData;
  private currentDate: Date;
  private currentDay: number;
  private schedule: Day[];
  private shifted: boolean;

  constructor(data: DataObject, shifted: boolean) {
    this.data = data;
    this.shifted = shifted;
    this.options = { ...data.Options };
    this.currentDate = this.getCurrentLocalBusinessTime();
    this.currentDay = this.getCurrentDayIndex(shifted);
    this.schedule = this.createDayObjects();
  }

  public static init(data: DataObject, shifted: boolean = false) {
    return new BusinessHours(data, shifted);
  }

  private createDayObjects(): Day[] {
    let schedule = [];
    if (this.shifted) {
      for (let i = -this.currentDay; i < 0; i++) {
        schedule.push(this.createDayObject(-i));
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
    return Day.init(offset, days, this.currentDate, holidays);
  }

  private getCurrentDayIndex(shifted: boolean): number {
    if (shifted) {
      return 0;
    } else {
      return this.currentDate.getDay();
    }
  }

  public getCurrentLocalBusinessTime() {
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

  public getSchedule(): DayInfo[] {
    return this.schedule.map(day => {
      return this.generateDayInfoObject(day);
    });
  }

  private generateDayInfoObject(day: Day): DayInfo {
    return {
      Name: day.getDayName(),
      Alias: day.getDayAlias(),
      HolidayName: day.getHolidayName(),
      isHoliday: day.isHoliday(),
      isClosed: day.getHours.length === 0 ? true : false,
      isCurrentDay:
        this.currentDate.getDate() === day.getDateObject().getDate()
          ? true
          : false,
      Hours: day.getHours()
    };
  }

  private adjustSchedule(): void {
    if (this.shifted) {
      this.schedule.splice(0, 1);
      this.schedule.push(this.createDayObject(6));
    } else {
      if (this.currentDay < 7) {
        this.currentDay++;
      } else {
        this.currentDay = 0;
        this.schedule = this.createDayObjects();
      }
    }
  }

  public refresh(): void {
    this.currentDate = this.getCurrentLocalBusinessTime();
    if (
      this.currentDate.getDate() >
      this.schedule[this.currentDay].getDateObject().getDate()
    ) {
      this.adjustSchedule();
    }
  }

  public getCurrentDayInfo(): DayInfo {
    return this.generateDayInfoObject(this.schedule[this.currentDay]);
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
      this.getCurrentLocalBusinessTime()
    );
  }
}

export default BusinessHours;
