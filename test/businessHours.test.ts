import { expect } from "chai";
import sinon from "sinon";
import "mocha";
import { buisnessHours } from "../src/index";

let jsondata = require("./assets/hours_testtemplate.json");

const buisnessHoursTestObj = [
  {
    description: "No Holiday Week",
    dateObj: new Date(2020, 2, 1),
    date: new Date(
      new Date(2020, 2, 1).getUTCFullYear(),
      new Date(2020, 2, 1).getUTCMonth(),
      new Date(2020, 2, 1).getUTCDate(),
      new Date(2020, 2, 1).getUTCHours() - 5,
      new Date(2020, 2, 1).getUTCMinutes(),
      new Date(2020, 2, 1).getUTCSeconds()
    ),
    currentDayInfo: {
      Name: "Sunday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: []
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: []
      },
      {
        Name: "Monday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: false,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ]
      },
      {
        Name: "Tuesday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: false,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ]
      },
      {
        Name: "Wednesday",
        Alias: "Wed",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: false,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ]
      },
      {
        Name: "Thursday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: false,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ]
      },
      {
        Name: "Friday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: false,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ]
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: []
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  }
];

describe("#buisnessHours", function() {
  //init class
  let clock: any;

  // it("should return data object", function() {
  //   expect(JSON.stringify(bH.getRawData())).equal(JSON.stringify(jsondata));
  // });

  buisnessHoursTestObj.forEach(
    ({
      description,
      dateObj,
      date,
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
          expect(bH.getCurrentLocalBusinessTime()).deep.eq(date);
        });

        it("Should return get current day info", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.getCurrentDayInfo()).to.be.equal(currentDayInfo);
        });

        it("Should return fulll schedule", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.getSchedule()).to.be.equal(schedule);
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

        it("Should return if isOpen", function() {
          const bH = buisnessHours.init(jsondata, shifted);
          expect(bH.isOpen()).to.be.equal(isOpen);
        });
      })
  );
});
