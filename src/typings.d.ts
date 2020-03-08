type HoursRange = {
  from: string;
  to: string;
};

type HoursRangeArr = HoursRange[];

type WeekdayName =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

interface WeekdayData {
  Name: string;
  Hours: HoursRangeArr;
}

type HolidayDay = WeekdayName | number;

interface DayData {
  [Sunday: string]: WeekdayData;
  Monday: WeekdayData;
  Tuesday: WeekdayData;
  Wednesday: WeekdayData;
  Thursday: WeekdayData;
  Friday: WeekdayData;
  Saturday: WeekdayData;
}

type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type HolidayMonthsData = {
  [index in MonthNumber]?: HolidayData[];
};

interface DayInfo {
  Name: WeekdayName;
  Alias: string;
  HolidayName: string;
  isHoliday: boolean;
  isClosed: boolean;
  isCurrentDay: boolean;
  Hours: HoursRangeArr;
}

interface HolidayData {
  Name: string;
  Month: number;
  Day: HolidayDay;
  WeekNo: number;
  Year: number;
  Hours: HoursRangeArr;
}

interface OptionsData {
  ClosedMsg: string;
  OpenMsg: string;
  UTCoffset: number;
}

interface DataObject {
  Day: DayData;
  Options: OptionsData;
  Holidays: HolidayMonthsData;
}

interface DayObject {
  getHours: () => HoursRange[];
  getDayAlias: () => string;
  getHolidayName: () => string;
  isHoliday: () => boolean;
  getDateObject: () => Date;
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
