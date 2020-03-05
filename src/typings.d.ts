type HoursRange = {
  from: string;
  to: string;
};

type HoursRangeArr = HoursRange[];

type WeekdayName =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";

interface WeekdayData {
  Name: string;
  Hours: HoursRangeArr;
}

interface DayData {
  Sunday: WeekdayData;
  Monday: WeekdayData;
  Tuesday: WeekdayData;
  Wednesday: WeekdayData;
  Thursday: WeekdayData;
  Friday: WeekdayData;
  Saturday: WeekdayData;
}

interface OptionsData {
  ClosedMsg: string;
  OpenMsg: string;
  timeZone: string;
}

export interface DataObject {
  Day: DayData;
  Options: OptionsData;
}

declare module "*.json" {
  const value: { [key: string]: any };
  export default value;
}

declare module "json!*" {
  const value: any;
  export default value;
}
