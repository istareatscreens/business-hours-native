export type HoursRange = {
  from: string;
  to: string;
};

export type HoursRangeArr = HoursRange[];

export type WeekdayName =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export interface WeekdayData {
  Name: string;
  Hours: HoursRangeArr;
}

export type HolidayDay = WeekdayName | number;

export type DayData = {
  // eslint-disable-next-line no-unused-vars
  [index in WeekdayName]: WeekdayData;
};

export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type HolidayMonthsData = {
  // eslint-disable-next-line no-unused-vars
  [index in MonthNumber]?: HolidayData[];
};

// eslint-disable-next-line no-unused-vars
export interface DayInfo {
  Name: WeekdayName;
  altName: string;
  HolidayName: string;
  isHoliday: boolean;
  isClosed: boolean;
  isCurrentDay: boolean;
  Hours: HoursRangeArr;
  dateObj: Date;
}

export interface HolidayData {
  Name: string;
  Month: MonthNumber;
  Day: HolidayDay;
  WeekNo: number;
  Year: number;
  Hours: HoursRangeArr;
}

export interface OptionsData {
  timeZone: string;
  Format: string;
}

// eslint-disable-next-line no-unused-vars
export interface DataObject {
  Day: DayData;
  Options: OptionsData;
  Holidays: HolidayMonthsData;
}

// eslint-disable-next-line no-unused-vars
export interface DayObject {
  getHours: () => HoursRange[];
  getDayAltName: () => string;
  getHolidayName: () => string;
  isHoliday: () => boolean;
  getDateObject: () => Date;
  // eslint-disable-next-line no-unused-vars
  isOpen: (date: Date) => boolean;
  getDayName: () => WeekdayName;
}

declare module "*.json" {
  const value: { [key: string]: any };
  export default value;
}

declare module "json!*" {
  const value: any;
  export default value;
}
