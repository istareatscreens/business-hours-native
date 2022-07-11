import { expect } from "chai";
import "mocha";
//import { buisnessHours } from "../src";
const jsonTemplate = require("./assets/hours_test_template.json");
import Day from "../src/day";
import { twelveHourTimeConvert as convert } from "../src/index";

//testing actual output
const dayObject = Day.init(
  0,
  jsonTemplate.Day,
  new Date(2020, 1, 20, 20, 20, 20),
  jsonTemplate.Holidays
);

describe("#twelveHourTimeConvert", function () {
  //input test
  it("should return hours object from days object in 12 hours time format", function () {
    expect(convert(dayObject.getHours())).deep.eq([
      { from: "10:00 AM", to: "1:30 PM" },
      { from: "6:00 PM", to: "10:00 PM" },
    ]);
  });
  it("should return 12-hour time format hours objects", function () {
    expect(
      convert([
        { from: "0:00", to: "4:10" },
        { from: "0:01", to: "4:00" },
        { from: "06:10", to: "7:00" },
        { from: "12:00", to: "13:44" },
      ])
    ).deep.eq([
      { from: "12:00 AM", to: "4:10 AM" },
      { from: "12:01 AM", to: "4:00 AM" },
      { from: "6:10 AM", to: "7:00 AM" },
      { from: "12:00 PM", to: "1:44 PM" },
    ]);
  });
});
