import { expect } from "chai";
import "mocha";
import day from "../src/day";
//import { buisnessHours } from "../src";
let jsonTemplate = require("./assets/hours_testtemplate.json");

const dayTestObject = [
  {
    description: "1. fixed day, no holiday month object, not holiday",
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
    dayAlias: jsonTemplate.Day["Thursday"].Name,
    openStatus: true,
    openDateObj: new Date(2010, 1, 20, 11, 20, 20)
  },
  {
    description:
      "2. fixed day, no holiday month object, empty array for hours, not holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 2, 8, 10, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Sunday",
    fixedDate: new Date(2020, 2, 8, 10, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Sunday"],
    hours: jsonTemplate.Day["Sunday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Sunday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 2, 8, 12, 20, 20)
  },
  {
    description:
      "3. fixed day, no holiday month object, empty array for hours, not holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 2, 7, 10, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Saturday",
    fixedDate: new Date(2020, 2, 7, 10, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Saturday"],
    hours: [],
    holidayName: "",
    dayAlias: jsonTemplate.Day["Saturday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 2, 7, 12, 20, 20)
  },
  {
    description: "4. fixed day, single holiday month object, is holiday",
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
    dayAlias: jsonTemplate.Day["Friday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 11, 25, 4, 30, 20)
  },
  {
    description:
      "5. fixed day using String Name, fixed year, double holiday month object, is holiday, closed after last interval",
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
    dayAlias: jsonTemplate.Day["Sunday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 3, 12, 20, 20, 20)
  },
  {
    description:
      "6. fixed day using String Name, fixed year, double holiday month object, holiday same day previous year, is not a holiday, closed before first interval",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 21, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Tuesday",
    fixedDate: new Date(2020, 3, 21, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Tuesday"],
    hours: jsonTemplate.Day["Tuesday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Tuesday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 3, 21, 9, 10, 10)
  },
  {
    description:
      "7. fixed day using String Name, fixed year, double holiday month object, holiday same day previous year, is not a holiday, is closed inbetween intervals",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 21, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Tuesday",
    fixedDate: new Date(2020, 3, 21, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Tuesday"],
    hours: jsonTemplate.Day["Tuesday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Tuesday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 3, 21, 15, 10, 10)
  },
  {
    description:
      "8. fixed day using String Name, double holiday month object, holiday same day previous year, is not a holiday, first interval open",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 21, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Tuesday",
    fixedDate: new Date(2020, 3, 21, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Tuesday"],
    hours: jsonTemplate.Day["Tuesday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Tuesday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 3, 21, 11, 10, 10)
  },
  {
    description:
      "9. fixed day using String Name, fixed year, single holiday month object, holiday first monday first week of the month, is a holiday, second interval open holiday",
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
    dayAlias: jsonTemplate.Day["Monday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 8, 7, 12, 10, 10)
  },
  {
    description: "10. shifted -1 day, no holiday month object, not holiday",
    testObject: day.init(
      -1,
      jsonTemplate.Day,
      new Date(2020, 1, 20, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Wednesday",
    fixedDate: new Date(2020, 1, 19, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Wednesday"],
    hours: jsonTemplate.Day["Wednesday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Wednesday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 1, 19, 20, 20, 20)
  },
  {
    description: "11. shifted +4 day, no holiday month object, not holiday",
    testObject: day.init(
      4,
      jsonTemplate.Day,
      new Date(2020, 1, 20, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Monday",
    fixedDate: new Date(2020, 1, 24, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Monday"],
    hours: jsonTemplate.Day["Monday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Monday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 1, 24, 20, 20, 20)
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
      dayName,
      holidayName,
      description,
      openStatus,
      openDateObj
    }) =>
      context("With testobject having: " + description, function() {
        it("should return date object", function() {
          expect(dayObject.getDateObject().valueOf()).equal(
            fixedDate.valueOf()
          );
        });

        it("should return " + openStatus, function() {
          expect(dayObject.isOpen(openDateObj)).equal(openStatus);
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

        it("should return day name", function() {
          expect(dayObject.getDayName()).equal(dayName);
        });
      })
  );
});
