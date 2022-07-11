import { expect } from "chai";
import "mocha";
//import { buisnessHours } from "../src";
const jsonTemplate = require("./assets/hours_test_template.json");
import { dayTestObject } from "./testObjDays";

describe("#Day", function () {
  //input test
  dayTestObject(jsonTemplate).forEach(
    ({
      testObject: dayObject,
      fixedDate,
      isHoliday,
      dayaltName,
      hours,
      dayName,
      holidayName,
      description,
      openStatus,
      openDateObj,
    }) =>
      context("With testobject having: " + description, function () {
        it("should return date object", function () {
          expect(dayObject.getDateObject().valueOf()).equal(
            fixedDate.valueOf()
          );
        });

        it("should return " + openStatus, function () {
          expect(dayObject.isOpen(openDateObj)).equal(openStatus);
        });

        it("should return if day is a holiday", function () {
          expect(dayObject.isHoliday()).equal(isHoliday);
        });

        it("should return day altName", function () {
          expect(dayObject.getDayAltName()).equal(dayaltName);
        });

        it("should return day hours", function () {
          expect(dayObject.getHours()).deep.eq(hours);
        });

        it("should return holiday name", function () {
          expect(dayObject.getHolidayName()).equal(holidayName);
        });

        it("should return day name", function () {
          expect(dayObject.getDayName()).equal(dayName);
        });
      })
  );
});
