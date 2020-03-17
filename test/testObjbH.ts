import Day from "../src/day";
let jsondata = require("./assets/hours_test_template.json");

let dateTestOne = new Date();
let dateTestTwo = new Date();
const { Day: days, Holidays: holidays } = jsondata;

function timeZoneConvert(date) {
  return new Date(
    new Date(date).toLocaleString("en-US", {
      timeZone: "Africa/Bissau"
    })
  );
}

//SHIFTED FUNCTIONS
function getProperties(dates, jsondata) {
  const { Day: days, Holidays: holidays } = jsondata;
  let properties = [];
  for (let i = 0; i < 7; i++) {
    let day = Day.init(i, days, timeZoneConvert(dateTestOne), holidays);
    properties.push({
      Name: day.getDayName(),
      altName: day.getDayAltName(),
      HolidayName: day.getHolidayName(),
      isHoliday: day.isHoliday(),
      isClosed: day.getHours().length === 0 ? true : false,
      isCurrentDay:
        timeZoneConvert(dateTestOne).getDate() === day.getDateObject().getDate()
          ? true
          : false,
      Hours: day.getHours(),
      dateObj: day.getDateObject()
    });
  }
  return properties;
}

//SHIFTED VARIABLES
let day = Day.init(0, days, dateTestOne, holidays);
let props = getProperties(dateTestOne, jsondata);

export const buisnessHoursTestObj = [
  {
    description: "Baisc Test Shifted",
    dateObj: new Date(
      dateTestOne.toLocaleString("en-US", {
        timeZone: "Africa/Bissau"
      })
    ),
    currentDayInfo: props[0],
    schedule: props,
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: props[0].isHoliday,
    isOpen: day.isOpen(timeZoneConvert(dateTestOne))
  }
];

//UNSHIFTED FUNCTIONS
function createDayObjects(day, date) {
  return {
    Name: day.getDayName(),
    altName: day.getDayAltName(),
    HolidayName: day.getHolidayName(),
    isHoliday: day.isHoliday(),
    isClosed: day.getHours().length === 0 ? true : false,
    isCurrentDay:
      date.getDate() === day.getDateObject().getDate() ? true : false,
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
    properties.push(createDayObjects(day, date));
  }

  for (let i = 0; i < 7 - currentDay; i++) {
    day = Day.init(i, days, date, holidays);
    properties.push(createDayObjects(day, date));
  }
  return properties;
}

//UNSHIFTED VARIABLES
let currentDayUS = timeZoneConvert(dateTestTwo).getDay();
let dayUS = Day.init(
  currentDayUS,
  days,
  timeZoneConvert(dateTestTwo),
  holidays
);
let propsUS = getPropertiesUnshifted(
  timeZoneConvert(dateTestTwo),
  jsondata,
  currentDayUS
);
console.log(timeZoneConvert(dateTestTwo).getDay());

export const buisnessHoursTestUnshiftedObj = [
  {
    description: "Baisc Test Unshifted",
    dateObj: new Date(
      dateTestTwo.toLocaleString("en-US", {
        timeZone: "Africa/Bissau"
      })
    ),
    currentDayInfo: propsUS[currentDayUS],
    schedule: propsUS,
    shifted: false,
    indexCD: currentDayUS,
    holidayName: "",
    isHoliday: propsUS[currentDayUS].isHoliday,
    isOpen: dayUS.isOpen(timeZoneConvert(dateTestTwo))
  }
];
