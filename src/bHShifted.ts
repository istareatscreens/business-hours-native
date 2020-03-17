import BusinessHours from "./businessHours";
import Day from "./day";

export default class BusinessHoursShifted extends BusinessHours {
  private constructor(data: DataObject) {
    super(data);
  }

  public static init(data: DataObject): BusinessHoursShifted {
    return new BusinessHoursShifted(data);
  }

  protected createDayObjects(): Day[] {
    let schedule: Day[] = [];
    for (let i = 0; i < 7; i++) schedule.push(super.createDayObject(i));

    return schedule;
  }

  protected adjustSchedule(): void {
    this.schedule.splice(0, 1);
    this.schedule.push(this.createDayObject(6));
  }
}
