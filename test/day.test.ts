import { expect } from "chai";
import "mocha";
//import { buisnessHours } from "../src";
let jsonTemplate = require("./assets/hours_test_template.json");
import { dayTestObject } from "./testObj";

describe("#Day", function() {
  //input test
  dayTestObject(jsonTemplate).forEach(
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
