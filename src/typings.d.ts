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

type DayData = {
  [index in WeekdayName]: WeekdayData;
};

type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type HolidayMonthsData = {
  [index in MonthNumber]?: HolidayData[];
};

interface DayInfo {
  Name: WeekdayName;
  altName: string;
  HolidayName: string;
  isHoliday: boolean;
  isClosed: boolean;
  isCurrentDay: boolean;
  Hours: HoursRangeArr;
  dateObj: Date;
}

interface HolidayData {
  Name: string;
  Month: MonthNumber;
  Day: HolidayDay;
  WeekNo: number;
  Year: number;
  Hours: HoursRangeArr;
}

interface OptionsData {
  timeZone: string;
  Format: string;
}

interface DataObject {
  Day: DayData;
  Options: OptionsData;
  Holidays: HolidayMonthsData;
}

interface DayObject {
  getHours: () => HoursRange[];
  getDayAltName: () => string;
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
