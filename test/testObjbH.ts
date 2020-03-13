import Day from "../src/day";
let jsondata = require("./assets/hours_test_template.json");

export let dateTestOne = new Date();
const { Day: days, Holidays: holidays } = jsondata;

// function createArrayOfDatesShifted() {
//   let dates = [];
//   for (let i = -1; i < 6; i++) {
//     dates.push(
//       new Date(
//       )
//     );
//   }
//   return dates;
// }

function timeZoneConvert(date) {
  return new Date(
    new Date(date).toLocaleString("en-US", {
      timeZone: "America/New_York"
    })
  );
}

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

//let dates = createArrayOfDatesShifted();
let day = Day.init(0, days, dateTestOne, holidays);
let props = getProperties(dateTestOne, jsondata);
export const buisnessHoursTestObj = [
  {
    description: "Baisc Test",
    dateObj: new Date(
      dateTestOne.toLocaleString("en-US", {
        timeZone: "America/New_York"
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
