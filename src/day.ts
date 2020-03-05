export type dayProperties = {
  defaultDayName: WEEKDAY;
  customDayName?: string;
  opensAt: string;
  closesAt: string;
};

export type WEEKDAY =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";

export class day {}
