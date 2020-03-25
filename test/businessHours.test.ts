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
      currentLocalBusinessTime,
      date,
      currentDayInfo,
      schedule,
      holidayName,
      isHoliday,
      isOpen
    }) =>
      describe("Dynamic With testobject having: " + description, () => {
        beforeEach(() => {
          clock = sinon.useFakeTimers(date.getTime());
        });

        let refreshValue = true;
        //deal with initial refresh returning false
        if (firstRun) {
          clock = sinon.useFakeTimers(date.getTime());
          bH = businessHours.init(jsondata);
          clock.restore();
          firstRun = false;
          refreshValue = false;
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
          expect(bH.refresh()).to.be.equal(refreshValue);
        });

        it("Should return current local business time", function() {
          expect(bH.getCurrentLocalBusinessTime()).to.equal(
            currentLocalBusinessTime
          );
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

        let refreshValue = true;

        if (secondRun) {
          clock = sinon.useFakeTimers(dateObj.getTime());
          bHS = businessHoursUnshifted.init(jsondataNoFormat);
          clock.restore();
          secondRun = false;
          refreshValue = false;
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
          expect(bHS.refresh()).to.be.equal(refreshValue);
        });

        it("Should refresh Object and return false", function() {
          expect(bHS.refresh()).to.be.false;
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
