import Day from "../src/day";
let jsondata = require("./assets/hours_test_template.json");

//SHIFTED
let dateTestOne = new Date();
let dateTestOneI = shiftDay(1);
//UNSHIFTED
let dateTestTwo = new Date();
const { Day: days, Holidays: holidays } = jsondata;

//modify day in date object
function shiftDay(offset) {
  return new Date(new Date().setDate(new Date().getDate() + offset));
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

//SHIFTED VARIABLES
let day = Day.init(0, days, dateTestOne, holidays);
let props = getProperties(dateTestOne, jsondata);
//SHIFTED VARIABLES + 1 DAY
let dayI = Day.init(0, days, dateTestOneI, holidays);
let propsI = getProperties(dateTestOneI, jsondata);

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
  },
  {
    description: "Baisc Test Shifted",
    dateObj: new Date(
      dateTestOneI.toLocaleString("en-US", {
        timeZone: "Africa/Bissau"
      })
    ),
    currentDayInfo: propsI[0],
    schedule: propsI,
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: propsI[0].isHoliday,
    isOpen: dayI.isOpen(timeZoneConvert(dateTestOneI))
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
