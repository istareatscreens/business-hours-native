//import { day, dayProperties } from "./day";

// type WEEKDAYS = {
//   Sunday: dayProperties;
//   Monday: dayProperties;
//   Tuesday: dayProperties;
//   WednesDay: dayProperties;
//   Thursday: dayProperties;
//   Friday: dayProperties;
//   Saturday: dayProperties;
// };

type HoursRange = {
  from: string;
  to: string;
};

export type WeekdayName =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";

type WeekdayData = {
  [Weekday in WeekdayName]: [
    {
      name: string;
    },
    {
      Hours: HoursRange[];
    }
  ];
};

type OptionsData = {
  Options: {
    ClosedMsg: string;
    OpenMsg: string;
    timeZone: string;
  };
};

type DataObject = {
  Day: WeekdayData[];
  Options: OptionsData[];
};

//type businessHoursProperties = {
//   weekdays: WEEKDAYS;
// };

export class businessHours {
  // constructor(days: dayProperties) {}

  public static init(data: string) {
    let parsedData: DataObject = JSON.parse(data);
    console.log(parsedData);
    return;
  }
}

export default businessHours;
