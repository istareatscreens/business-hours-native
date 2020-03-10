import { expect } from "chai";
import sinon from "sinon";
import "mocha";
import { buisnessHours } from "../src/index";

let jsondata = require("./assets/hours_test_template.json");
import {
  buisnessHoursTestObj,
  buisnessHoursTestDynamicShiftedObj
} from "./testObj";

describe("#buisnessHours", function() {
  //init class
  let clock: any;

  // it("should return data object", function() {
  //   expect(JSON.stringify(bH.getRawData())).equal(JSON.stringify(jsondata));
  // });

  buisnessHoursTestObj(jsondata).forEach(
    ({
      description,
      dateObj,
      currentDayInfo,
      schedule,
      indexCD,
      holidayName,
      isHoliday,
      isOpen,
      shifted
    }) =>
      context("With testobject having: " + description, () => {
        beforeEach(() => {
          clock = sinon.useFakeTimers(dateObj.getTime());
        });

        this.afterEach(() => {
          clock.restore();
        });

        it("Should return current local business time Date Object", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.getCurrentLocalBusinessTime()).deep.eq(dateObj);
        });

        it("Should return get current day info", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.getCurrentDayInfo()).deep.eq(currentDayInfo);
        });

        it("Should return fulll schedule", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.getSchedule()).deep.eq(schedule);
        });

        it("Should return current day index number ", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.getCurrentDayIndexNo()).to.be.equal(indexCD);
        });

        it("Should return holiday name", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.getHolidayName()).to.be.equal(holidayName);
        });

        it("Should return if the current day is a holiday", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.isHoliday()).to.be.equal(isHoliday);
        });

        it("Should return if is Open", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.isOpen()).to.be.equal(isOpen);
        });
      })
  );

  const date = new Date(2020, 1, 28);
  const dateObject = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours() - 5,
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

  clock = sinon.useFakeTimers(dateObject.getTime());
  const bH = buisnessHours.init(jsondata, false);
  clock.restore();
  buisnessHoursTestDynamicShiftedObj.forEach(
    ({
      description,
      dateObj,
      currentDayInfo,
      schedule,
      indexCD,
      holidayName,
      isHoliday,
      isOpen
    }) =>
      context("Dynamic With testobject having: " + description, () => {
        beforeEach(() => {
          //console.log(dateObj);
          clock = sinon.useFakeTimers(dateObj.getTime());
          //console.log(dateObj);
        });

        this.afterEach(() => {
          clock.restore();
        });

        it("Should refresh date", function() {
          expect(bH.getCurrentLocalBusinessTime()).to.exist;
        });

        it("Should refresh Object", function() {
          expect(bH.refresh()).to.be.undefined;
        });

        it("Should return current local business time Date Object", function() {
          expect(bH.getCurrentLocalBusinessTime()).deep.eq(dateObj);
        });

        it("Should return get current day info", function() {
          expect(bH.getCurrentDayInfo()).deep.eq(currentDayInfo);
        });

        it("Should return fulll schedule", function() {
          expect(bH.getSchedule()).deep.eq(schedule);
        });

        it("Should return current day index number ", function() {
          expect(bH.getCurrentDayIndexNo()).to.be.equal(indexCD);
        });

        it("Should return holiday name", function() {
          expect(bH.getHolidayName()).to.be.equal(holidayName);
        });

        it("Should return if the current day is a holiday", function() {
          expect(bH.isHoliday()).to.be.equal(isHoliday);
        });

        it("Should return if is Open", function() {
          expect(bH.isOpen()).to.be.equal(isOpen);
        });
      })
  );
});
