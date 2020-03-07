export default class Day {
  private dayName: WeekdayName;
  private holidayName: string = "";
  private dayoffset: number;
  private data: WeekdayData;
  private isAHoliday: boolean = false;
  private date: Date;

  private constructor(
    dayoffset: number,
    data: DayData,
    date: Date,
    holidayData: HolidayMonthsData
  ) {
    this.dayoffset = dayoffset;
    this.date = new Date(date.setDate(date.getDate() + this.dayoffset));
    this.dayName = this.setDayName(date);
    this.data = this.setData(data[`${this.dayName}`], holidayData);
  }

  public static init(
    dayoffset: number,
    data: DayData,
    date: Date,
    holidayData: HolidayMonthsData
  ) {
    return new Day(dayoffset, data, date, holidayData);
  }

  private setData(
    data: WeekdayData,
    holidayData: HolidayMonthsData
  ): WeekdayData {
    const holidayHours: HoursRangeArr = this.checkIfHoliday(holidayData);
    return {
      Name: data.Name,
      Hours: this.isAHoliday ? holidayHours : this.deepCopyHours(data.Hours)
    };
  }

  private checkIfHoliday(holidayData: HolidayMonthsData): HoursRangeArr {
    const year: number = this.date.getFullYear();
    //add +1 because date objects months range from 0-11
    const month: MonthNumber = <MonthNumber>(this.date.getMonth() + 1);
    const day: number = this.date.getDate();
    const weekOfMonth: number = Math.ceil(day / 7);
    const possibleHolidays: HolidayData[] = holidayData[<MonthNumber>month];
    if (possibleHolidays !== undefined && possibleHolidays.length !== 0) {
      for (const holiday of possibleHolidays) {
        //Account for day of the year holiday
        if (holiday.WeekNo == -1 && holiday.Year == -1) {
          if (day == holiday.Day) return this.adjustDayForHoliday(holiday);
          //Account for fixed Week and day holidays (i.e. first Monday of the month)
        } else if (holiday.WeekNo != -1) {
          if (weekOfMonth == holiday.WeekNo && this.dayName == holiday.Day)
            return this.adjustDayForHoliday(holiday);
          //Account for holiday with fixed year
        } else if (holiday.Year != -1) {
          if (holiday.Year == year && day == holiday.Day)
            return this.adjustDayForHoliday(holiday);
        }
      }
    }
    return [];
  }

  private adjustDayForHoliday(holiday: HolidayData): HoursRangeArr {
    this.isAHoliday = true;
    this.holidayName = holiday.Name;
    return this.deepCopyHours(holiday.Hours);
  }

  private setDayName(date: Date): WeekdayName {
    //Note to self use appended Date
    return this.returnDayName(
      new Date(date.setDate(date.getDate() + this.dayoffset)).getDay()
    );
  }

  private deepCopyHours(Hours: HoursRangeArr): HoursRangeArr {
    return Hours.map((timeRange: HoursRange) => {
      return { ...timeRange };
    });
  }

  private returnDayName(day: number): WeekdayName {
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

  public getHours(): HoursRange[] {
    return this.deepCopyHours(this.data.Hours);
  }

  public getDayAlias(): string {
    return this.data.Name;
  }

  public getHolidayName(): string {
    return this.holidayName;
  }

  public isHoliday(): boolean {
    return this.isAHoliday;
  }

  public getDateObject(): Date {
    return this.date;
  }
}
