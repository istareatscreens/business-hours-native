import { expect } from "chai";
import sinon from "sinon";
import "mocha";
import { businessHours, businessHoursUnshifted } from "../src/index";
let jsondata = require("./assets/hours_test_template.json");
let jsondataNoFormat = require("./assets/hours_test_template_noTZformat.json");

import {
  businessHoursTestObj,
  businessHoursTestUnshiftedObj
} from "./testObjbH";

import BusinessHours from "../src/businessHours";

describe("#businessHours", function() {
  let clock;
  let firstRun = true;
  let bH;
  //Testing shifting = true
  businessHoursTestObj.forEach(
    ({
      description,
      dateObj,
      currentDayInfo,
      schedule,
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
          bH = businessHours.init(jsondata);
          clock.restore();
          firstRun = false;
        }

        afterEach(() => {
          clock.restore();
        });

        it("Should return initialized businessHours object", () => {
          expect(businessHours.init(jsondata)).to.instanceof(businessHours);
        });

        it("Should return initialized businessHours object", () => {
          expect(businessHours.init(jsondata)).to.instanceof(BusinessHours);
        });

        it("Should refresh Object", function() {
          expect(bH.refresh()).to.be.undefined;
        });

        it("Should return current local business time", function() {
          const date = new Date(bH.getCurrentLocalBusinessTime());
          const testDate = new Date(dateObj);

          const getDateParams = date =>
            date.getFullYear +
            ", " +
            date.getMonth() +
            ", " +
            date.getDate() +
            ", " +
            date.getHours() +
            ", " +
            date.getMinutes();
          expect(getDateParams(date)).to.equal(getDateParams(testDate));
        });

        it("Should return get current day info", function() {
          expect(bH.getCurrentDayInfo()).deep.eq(currentDayInfo);
        });

        it("Should return full schedule", function() {
          expect(bH.getSchedule()).deep.eq(schedule);
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

  //Unshifted
  let secondRun = true;
  let bHS;
  businessHoursTestUnshiftedObj.forEach(
    ({
      description,
      currentLocalBusinessTime,
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

        if (secondRun) {
          clock = sinon.useFakeTimers(dateObj.getTime());
          bHS = businessHoursUnshifted.init(jsondataNoFormat);
          clock.restore();
          secondRun = false;
        }

        afterEach(() => {
          clock.restore();
        });

        it("Should return initialized businessHours object", () => {
          expect(businessHoursUnshifted.init(jsondataNoFormat)).to.instanceof(
            businessHoursUnshifted
          );
        });

        it("Should return initialized businessHours object", () => {
          expect(businessHoursUnshifted.init(jsondataNoFormat)).to.instanceof(
            businessHoursUnshifted
          );
        });

        it("Should refresh Object", function() {
          expect(bHS.refresh()).to.be.undefined;
        });

        it("Should refresh date", function() {
          expect(bHS.getCurrentLocalBusinessTime()).to.exist;
        });

        it("Should return current local business time", function() {
          expect(bHS.getCurrentLocalBusinessTime()).to.equal(
            currentLocalBusinessTime
          );
        });

        it("Should return get current day info", function() {
          expect(bHS.getCurrentDayInfo()).deep.eq(currentDayInfo);
        });

        it("Should return full schedule", function() {
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
