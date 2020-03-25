import Day from "../src/day";
let jsondata = require("./assets/hours_test_template.json");
let jsondataNoFormat = require("./assets/hours_test_template_noTZformat.json");

//get needed data for day object init
const { Day: days, Holidays: holidays } = jsondata;
const { Day: daysNF, Holidays: holidaysNF } = jsondataNoFormat;

//UNSHIFTED
let dateTestTwo = new Date();

//modify day in date object
function shiftDay(date, offset) {
  return new Date(date.setDate(date.getDate() + offset));
}

function setDate(year, month, day, hours) {
  return new Date(year, month, day, hours);
}

function timeZoneConvert(date) {
  return new Date(
    new Date(date).toLocaleString("en-US", {
      timeZone: "Africa/Bissau"
    })
  );
}

//SHIFTED FUNCTION property generation
function getProperties(date, jsondata) {
  const { Day: days, Holidays: holidays } = jsondata;
  let properties = [];
  for (let i = 0; i < 7; i++) {
    let day = Day.init(i, days, timeZoneConvert(date), holidays);
    properties.push({
      Name: day.getDayName(),
      altName: day.getDayAltName(),
      HolidayName: day.getHolidayName(),
      isHoliday: day.isHoliday(),
      isClosed: day.getHours().length === 0 ? true : false,
      //current day unshifted always 0
      isCurrentDay: i === 0 ? true : false,
      Hours: day.getHours(),
      dateObj: day.getDateObject()
    });
  }
  return properties;
}
//SHIFTED FUNCTION test object generation
function getTestObject(day, props, date) {
  return {
    description: "Baisc Test Shifted",
    dateObj: new Date(
      date.toLocaleString("en-US", {
        timeZone: "Africa/Bissau"
      })
    ),
    currentDayInfo: props[0],
    schedule: props,
    shifted: true,
    indexCD: 0,
    holidayName: props[0].HolidayName,
    isHoliday: props[0].isHoliday,
    isOpen: day.isOpen(timeZoneConvert(date))
  };
}

//generates test object array for shifted businessHour object
function generateShiftedTestObjects(initialDate, numberOfDays) {
  let objects = [];
  for (let i = 0; i < numberOfDays; i++) {
    let date = shiftDay(new Date(initialDate), i);
    objects.push(
      getTestObject(
        Day.init(0, days, date, holidays),
        getProperties(date, jsondata),
        date
      )
    );
  }
  return objects;
}

export const businessHoursTestObj = generateShiftedTestObjects(
  setDate(2020, 11, 20, 20),
  20
);

//UNSHIFTED FUNCTIONS
function createDayObjects(day) {
  return {
    Name: day.getDayName(),
    altName: day.getDayAltName(),
    HolidayName: day.getHolidayName(),
    isHoliday: day.isHoliday(),
    isClosed: day.getHours().length === 0 ? true : false,
    isCurrentDay: false,
    Hours: day.getHours(),
    dateObj: day.getDateObject()
  };
}

function getPropertiesUnshifted(date, jsondata, currentDay) {
  const { Day: days, Holidays: holidays } = jsondata;
  let properties = [];
  let day;
  for (let i = -currentDay; i < 0; i++) {
    day = Day.init(i, days, date, holidays);
    properties.push(createDayObjects(day));
  }

  for (let i = 0; i < 7 - currentDay; i++) {
    day = Day.init(i, days, date, holidays);
    properties.push(createDayObjects(day));
  }
  properties[currentDay].isCurrentDay = true;
  return properties;
}

//UNSHIFTED FUNCTION test object generation
function getTestObjectUS(day, props, date, currentDay) {
  return {
    description: "Baisc Test Unshifted",
    dateObj: date,
    currentLocalBusinessTime: new Date(date).toLocaleString(undefined, {
      timeZone: "Africa/Bissau"
    }),
    currentDayInfo: props[currentDay],
    schedule: props,
    shifted: false,
    indexCD: currentDay,
    holidayName: props[currentDay].HolidayName,
    isHoliday: props[currentDay].isHoliday,
    isOpen: day.isOpen(timeZoneConvertUS(date))
  };
}

function timeZoneConvertUS(date) {
  return new Date(
    new Date(date).toLocaleString(undefined, {
      timeZone: "Africa/Bissau"
    })
  );
}

//generates test object array for shifted businessHour object
function generateUnshiftedTestObjects(initialDate, numberOfDays) {
  let objects = [];

  for (let i = 0; i < numberOfDays; i++) {
    let date = shiftDay(new Date(initialDate), i);
    let currentDay = timeZoneConvert(new Date(date)).getDay();
    objects.push(
      getTestObjectUS(
        Day.init(
          currentDay,
          daysNF,
          timeZoneConvert(new Date(date)),
          holidaysNF
        ),
        getPropertiesUnshifted(
          timeZoneConvert(new Date(date)),
          jsondataNoFormat,
          currentDay
        ),
        date,
        currentDay
      )
    );
  }
  return objects;
}

export const businessHoursTestUnshiftedObj = generateUnshiftedTestObjects(
  setDate(2020, 11, 20, 1),
  20
);
