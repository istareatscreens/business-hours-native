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

interface HolidayMonthsData {
  1: HolidayData[];
  2: HolidayData[];
  3: HolidayData[];
  4: HolidayData[];
  5: HolidayData[];
  6: HolidayData[];
  7: HolidayData[];
  8: HolidayData[];
  9: HolidayData[];
  10: HolidayData[];
  11: HolidayData[];
  12: HolidayData[];
}

interface HolidayData {
  Name: string;
  Month: number;
  Day: HolidayDay;
  WeekNo: number;
  Year: number;
  Hours: HoursRange[];
}

interface OptionsData {
  ClosedMsg: string;
  OpenMsg: string;
  UTCoffset: number;
}

interface DataObject {
  Day: DayData;
  Options: OptionsData;
  Holidays: HolidayData[];
}

declare module "*.json" {
  const value: { [key: string]: any };
  export default value;
}

declare module "json!*" {
  const value: any;
  export default value;
}
