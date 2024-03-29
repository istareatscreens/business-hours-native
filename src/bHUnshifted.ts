import BusinessHours from "./businessHours";
import { DataObject, DayObject } from "./typings";

export default class BusinessHoursUnshifted extends BusinessHours {
  private constructor(data: DataObject) {
    super(data, false);
  }

  public static init(data: DataObject): BusinessHoursUnshifted {
    return new BusinessHoursUnshifted(data);
  }

  protected createDayObjects(): DayObject[] {
    const schedule: DayObject[] = [];
    for (let i = -this.currentDay; i < 0; i++)
      schedule.push(this.createDayObject(i));

    for (let i = 0; i < 7 - this.currentDay; i++)
      schedule.push(this.createDayObject(i));

    return schedule;
  }

  protected adjustSchedule(): void {
    if (this.currentDay < 6) {
      this.currentDay++;
    } else {
      this.currentDay = 0;
      this.schedule = <any>this.createDayObjects();
    }
  }

  public getCurrentDayIndexNo(): number {
    return this.currentDay;
  }
}
