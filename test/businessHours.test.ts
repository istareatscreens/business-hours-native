import { expect } from "chai";
import sinon from "sinon";
import "mocha";
import { buisnessHours } from "../src/index";
var timezone_mock = require("timezone-mock");
let jsondata = require("./assets/hours_test_template.json");
import {
  buisnessHoursTestObj,
  buisnessHoursTestDynamicObj,
  buisnessHoursTestDynamicShiftedObj,
  buisnessHoursTimeZoneTestObj
} from "./testObj";
import BusinessHours from "../src/businessHours";

describe("#buisnessHours", function() {
  let clock: any;

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

        it("Should return initialized businessHours object", () => {
          expect(buisnessHours.init(jsondata, shifted)).to.instanceof(
            BusinessHours
          );
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

  let date = new Date(2020, 1, 28);
  let dateObject = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours() - 5,
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

  clock = sinon.useFakeTimers(dateObject.getTime());
  let bH = buisnessHours.init(jsondata, false);
  clock.restore();
  buisnessHoursTestDynamicObj.forEach(
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
          clock = sinon.useFakeTimers(dateObj.getTime());
        });

        this.afterEach(() => {
          clock.restore();
        });

        it("Should return initialized businessHours object", () => {
          expect(buisnessHours.init(jsondata, false)).to.instanceof(
            BusinessHours
          );
        });

        it("Should return initialized businessHours object", () => {
          expect(buisnessHours.init(jsondata)).to.instanceof(BusinessHours);
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

  const dateS = new Date(2020, 11, 30);
  const dateObjectS = new Date(
    dateS.getUTCFullYear(),
    dateS.getUTCMonth(),
    dateS.getUTCDate(),
    dateS.getUTCHours() - 5,
    dateS.getUTCMinutes(),
    dateS.getUTCSeconds()
  );

  clock = sinon.useFakeTimers(dateObjectS.getTime());
  const bHS = buisnessHours.init(jsondata, true);
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
          clock = sinon.useFakeTimers(dateObj.getTime());
        });

        this.afterEach(() => {
          clock.restore();
        });

        it("Should return initialized businessHours object ", () => {
          expect(buisnessHours.init(jsondata, true)).to.instanceof(
            BusinessHours
          );
        });

        it("Should refresh date", function() {
          expect(bHS.getCurrentLocalBusinessTime()).to.exist;
        });

        it("Should refresh Object", function() {
          expect(bHS.refresh()).to.be.undefined;
        });

        it("Should return current local business time Date Object", function() {
          expect(bHS.getCurrentLocalBusinessTime()).deep.eq(dateObj);
        });

        it("Should return get current day info", function() {
          expect(bHS.getCurrentDayInfo()).deep.eq(currentDayInfo);
        });

        it("Should return fulll schedule", function() {
          expect(bHS.getSchedule()).deep.eq(schedule);
        });

        it("Should return current day index number ", function() {
          expect(bHS.getCurrentDayIndexNo()).to.be.equal(indexCD);
        });

        it("Should return holiday name", function() {
          expect(bHS.getHolidayName()).to.be.equal(holidayName);
        });

        it("Should return if the current day is a holiday", function() {
          expect(bHS.isHoliday()).to.be.equal(isHoliday);
        });

        it("Should return if is Open", function() {
          expect(bHS.isOpen()).to.be.equal(isOpen);
        });
      })
  );

  //timezone testing

  buisnessHoursTimeZoneTestObj(jsondata).forEach(
    ({
      description,
      dateObj,
      currentDayInfo,
      schedule,
      indexCD,
      holidayName,
      isHoliday,
      isOpen,
      shifted,
      timezone
    }) =>
      context(
        "Testing timezones with testobject having: " + description,
        () => {
          timezone_mock.register(timezone);

          beforeEach(() => {
            clock = sinon.useFakeTimers(dateObj.getTime());
          });

          this.afterEach(() => {
            clock.restore();
          });

          it("Should return initialized businessHours object", () => {
            expect(buisnessHours.init(jsondata, shifted)).to.instanceof(
              BusinessHours
            );
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
        }
      )
  );
});
