import { expect } from "chai";
import sinon from "sinon";
import "mocha";
import { buisnessHours } from "../src/index";
let jsondata = require("./assets/hours_test_template.json");
let jsondataNoFormat = require("./assets/hours_test_template.json");

import { buisnessHoursTestObj } from "./testObjbH";

import BusinessHours from "../src/businessHours";

let clock;
let firstRun = true;
let bH;
//Testing shifting = true
buisnessHoursTestObj.forEach(
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
        bH = buisnessHours.init(jsondata, true);
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
