import { expect } from "chai";
import "mocha";
import day from "../src/day";
import { buisnessHours } from "../src";

let jsondata = require("./assets/hours.json");

describe("#Day", function() {
  //init class
  const bH = buisnessHours.init(jsondata);
  const fixedDate: Date = new Date(2020, 1, 20, 20, 20, 20);
  const dayObject = day.init(0, jsondata.Day, fixedDate, jsondata.Holidays);
  const dayName = "Thursday";
  const isHoliday = false;
  const dayDataObject = jsondata.Day[`${dayName}`];
  const hours = dayDataObject.Hours;
  const holidayName = "";
  const dayAlias = dayDataObject.Name;

  it("should return date object", function() {
    expect(dayObject.getDateObject().valueOf()).equal(fixedDate.valueOf());
  });

  it("should return if day is a holiday", function() {
    expect(dayObject.isHoliday()).equal(isHoliday);
  });

  it("should return day Alias", function() {
    expect(dayObject.getDayAlias()).equal(dayAlias);
  });

  it("should return day hours", function() {
    expect(dayObject.getHours()).deep.eq(hours);
  });

  it("should return holiday name", function() {
    expect(dayObject.getHolidayName()).equal(holidayName);
  });
});
