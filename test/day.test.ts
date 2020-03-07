import { expect } from "chai";
import "mocha";
import day from "../src/day";
//import { buisnessHours } from "../src";
let jsonTemplate = require("./assets/hours_testtemplate.json");

const dayTestObject = [
  {
    description: "fixed day, no holiday month object, not holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 1, 20, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Thursday",
    fixedDate: new Date(2020, 1, 20, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Thursday"],
    hours: jsonTemplate.Day["Thursday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Thursday"].Name
  },
  {
    description: "fixed day, single holiday month object, is holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 11, 25, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Friday",
    fixedDate: new Date(2020, 11, 25, 20, 20, 20),
    isHoliday: true,
    dayDataObject: jsonTemplate.Day["Friday"],
    hours: jsonTemplate.Holidays[12][0].Hours,
    holidayName: "Christmas",
    dayAlias: jsonTemplate.Day["Friday"].Name
  },
  {
    description:
      "fixed day using String Name, fixed year, double holiday month object, is holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 12, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Sunday",
    fixedDate: new Date(2020, 3, 12, 20, 20, 20),
    isHoliday: true,
    dayDataObject: jsonTemplate.Day["Sunday"],
    hours: jsonTemplate.Holidays[4][0].Hours,
    holidayName: "Easter",
    dayAlias: jsonTemplate.Day["Sunday"].Name
  },
  {
    description:
      "fixed day using String Name, fixed year, double holiday month object, holiday same day previous year, is not a holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 21, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Monday",
    fixedDate: new Date(2020, 3, 21, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Monday"],
    hours: jsonTemplate.Day["Monday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Monday"].Name
  },
  {
    description:
      "fixed day using String Name, fixed year, double holiday month object, holiday same day previous year, is not a holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 21, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Monday",
    fixedDate: new Date(2020, 3, 21, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Monday"],
    hours: jsonTemplate.Day["Monday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Monday"].Name
  },
  {
    description:
      "fixed day using String Name, double holiday month object, holiday same day previous year, is not a holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 21, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Monday",
    fixedDate: new Date(2020, 3, 21, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Monday"],
    hours: jsonTemplate.Day["Monday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Monday"].Name
  },
  {
    description:
      "fixed day using String Name, fixed year, single holiday month object, holiday first monday first week of the month, is a holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 8, 7, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Monday",
    fixedDate: new Date(2020, 8, 7, 20, 20, 20),
    isHoliday: true,
    dayDataObject: jsonTemplate.Day["Monday"],
    hours: jsonTemplate.Holidays[9][0].Hours,
    holidayName: "Labour Day",
    dayAlias: jsonTemplate.Day["Monday"].Name
  }
];

describe("#Day", function() {
  //input test
  dayTestObject.forEach(
    ({
      testObject: dayObject,
      fixedDate,
      isHoliday,
      dayAlias,
      hours,
      holidayName,
      description
    }) =>
      context("With testobject having: " + description, function() {
        it("should return date object", function() {
          expect(dayObject.getDateObject().valueOf()).equal(
            fixedDate.valueOf()
          );
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
      })
  );
});
