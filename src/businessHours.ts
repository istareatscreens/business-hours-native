// eslint-disable-next-line no-unused-vars
import { DataObject } from "./typings";

export class BusinessHours {
  // constructor(days: dayProperties) {}

  private data: DataObject;

  constructor(data: DataObject) {
    this.data = data;
  }

  public static init(data: DataObject) {
    return new BusinessHours(data);
  }

  public getData() {
    return this.data;
  }

  public() {
    this.data;
  }
}

export default BusinessHours;
