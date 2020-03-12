import { expect } from "chai";
import sinon from "sinon";
import "mocha";
import { buisnessHours } from "../src/index";
let jsondata = require("./assets/hours_test_template.json");
let jsondataNoFormat = require("./assets/hours_test_template.json");

import {
  buisnessHoursTestObj,
  buisnessHoursTestDynamicObj,
  buisnessHoursTestDynamicShiftedObj
} from "./testObj";
import BusinessHours from "../src/businessHours";

//Basic tests, open/closed, holidays
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
      describe("With testobject having: " + description, () => {
        beforeEach(() => {
          clock = sinon.useFakeTimers(dateObj.getTime());
        });

        afterEach(() => {
          clock.restore();
        });

        it("Should return initialized businessHours object", () => {
          expect(buisnessHours.init(jsondata, shifted)).to.instanceof(
            BusinessHours
          );
        });

        it("Should return current local business time Date string", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.getCurrentLocalBusinessTime()).to.equal(
            new Date(dateObj).toLocaleString("en-US", {
              timeZone: "America/New_York"
            })
          );
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

  let firstRun = true;
  let bH;
  //Testing shifting = false
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
      describe("Dynamic With testobject having: " + description, () => {
        beforeEach(() => {
          clock = sinon.useFakeTimers(dateObj.getTime());
        });

        if (firstRun) {
          clock = sinon.useFakeTimers(dateObj.getTime());
          bH = buisnessHours.init(jsondata, false);
          clock.restore();
          firstRun = false;
        }

        afterEach(() => {
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

        it("Should refresh Object", function() {
          expect(bH.refresh()).to.be.undefined;
        });

        it("Should return current local business time Date Object", function() {
          expect(bH.getCurrentLocalBusinessTime()).to.equal(
            dateObj.toLocaleString("en-US", {
              timeZone: "America/New_York"
            })
          );
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

        it("Should refresh date", function() {
          expect(bH.getCurrentLocalBusinessTime()).to.exist;
        });

        it("Should return if is Open", function() {
          expect(bH.isOpen()).to.be.equal(isOpen);
        });
      })
  );

  const dateS = new Date(
    new Date(2020, 11, 30).toLocaleString("en-US", {
      timeZone: "America/New_York"
    })
  );

  clock = sinon.useFakeTimers(dateS.getTime());
  const bHS = buisnessHours.init(jsondata, true);
  clock.restore();

  //testing shifting = true and no format option
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
      describe("Dynamic With testobject having: " + description, function() {
        beforeEach(() => {
          clock.restore();
          clock = sinon.useFakeTimers(new Date(dateObj).getTime());
        });

        afterEach(() => {
          clock.restore();
        });

        it("Should return initialized businessHours object ", () => {
          expect(buisnessHours.init(jsondataNoFormat, true)).to.instanceof(
            BusinessHours
          );
        });

        it("Should refresh Object", function() {
          expect(bHS.refresh()).to.be.undefined;
        });

        it("Should return current local business time Date Object", function() {
          expect(bHS.getCurrentLocalBusinessTime()).to.equal(
            dateObj.toLocaleString(jsondataNoFormat.Options.Format, {
              timeZone: jsondataNoFormat.Options.timeZone
            })
          );
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
});
