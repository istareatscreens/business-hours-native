[![Build Status](https://app.travis-ci.com/istareatscreens/business-hours-native.svg?branch=master)](https://travis-ci.com/istareatscreens/business-hours-native)[![codecov](https://codecov.io/gh/istareatscreens/business-hours-native/branch/master/graph/badge.svg)](https://codecov.io/gh/istareatscreens/business-hours-native)

# business-hours-native

This package provides a way to report a schedule of business hours and open status dynamically using the native JavaScript date object and no dependencies. Input data is delieverd via a JSON configuration file, example [HERE](https://raw.githubusercontent.com/istareatscreens/business-hours-native/master/assets/hoursTemplate.json).

This package uses the Date objects [toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) function to support timezones. Browser support for this function is listed [HERE](https://caniuse.com/#feat=date-tolocaledatestring).

## Features:

- Times reported are localized to the business using the date function [toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) and [specifying a timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
- Shifting schedule where the first day of the week is always the current day and fixed scheduling where Sunday is the first day of the week and Saturday is the last day of the week
- Dynamic time and scheduling adjustments by calling the refresh() function
- Holiday hours - including support for reoccurring fixed week and named day of the week (e.g. Labour Day), and fixed date of the month holidays (e.g. Christmas)
- Day alternative names for language support
- Supports multiple open time periods in a single day
- No dependencies

## Installing

```
npm i business-hours-native
```

## Configuration

Configuration is achieved through a JSON file, a template file can be found [HERE](https://raw.githubusercontent.com/istareatscreens/business-hours-native/master/assets/hoursTemplate.json).

### JSON File Formatting

- Times must be in 24 hour format 00:00 to 24:00
- Day index names must start with a capital letter
- Holidays are stored in an array of objects index by numbers corresponding to the month they occur on
- A value of -1 is used for Holiday properties that are not applicable
- Closed business days can be specified by providing an empty array [] for the index hours, or no hours index
- Multiple open periods must be specified in their own objects, where index "from" specifies the time of opening and index "to" specifies the time of closing
- Time zone options are located here [HERE](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), lookup country codes are found [HERE](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
- locale formating for the output of the function getCurrentLocalBusinessTime() can be found [HERE](https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript).
- For possible increased browser support specify an empty string for the Format option

```
"Options": {
  "timezone": "America/New_York",
  "format": ""
}
```

## Initialization

Initialization of the businessHours or businessHoursUnshifted object is conducted via the static init method. Arguments include a JSON configuration file

businessHours object provides a shifted schedule. Therefore for all returned arrays index 0 is the current day

businessHoursUnshifted object provides a schedule where the first day is the most recent Sunday (index 0) and the last day is Saturday. The array index of the current day is provided by the method getCurrentDayIndexNo()

### `businessHours.init(JSON: object, shifted: boolean): Date`

```javascript
import { businessHours, businessHoursUnshifted } from "business-hours-native";
import jsonHoursConfig from "jsonHoursConfig.json";

const bH = businessHours.init(jsonHoursConfig);
//returns businessHours object with shifted schedule (index 0 = current day)
const bHUS = businessHoursUnshifted.init(jsonHoursConfig);
//returns businessHoursUnshifted object with unshifted schedule (index 0 = Sunday, index 6 = Saturday)
```

## Methods

### `getCurrentLocalBusinessTime(): string`

Returns string specifying the current local time of the business in the
format specified in the JSON Config file (e.g. en-us). Documentation can be found [HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) regarding the string format. The returned string can be passed as an argument to the native Date object if needed.

```javascript
bH.getCurrentLocalBusinessTime();
//returns string in specified format
```

### `refresh(): boolean`

Refreshes objects time, and scheduling. Allows for dynamic scheduling and open status.
All method calls after will return up to date open status and scheduling
Value of true will be returned when a change occurs in the date, month or year

```javascript
bH.refresh();
//All method calls after will return current time and date information will return true if date, month or year changes
```

### `getCurrentDayInfo(): object`

Returns an object containing all information about the current day

```javascript
bH.getCurrentDayInfo();
// returns
// {
//  Name: string, //Default day name e.g. Monday, Tuesday
//  altName: string, //Alternative name listed in configuration e.g. "Mon"
//  HolidayName: string, //Name of the days holiday or empty string "" if not holiday
//  isHoliday: boolean, //true if day is holiday else false
//  isClosed: boolean, //true if the business has no listed open hours for the day, otherwise false
//  isCurrentDay: boolean //true if it is the current day of the week (always true)
//  Hours: object[] // array of {from: XX:XX, to: XX:XX} objects reporting opening/closing times
//  dateObj: Date //returns Date object with correct year, day, month corresponding to the current day
// }
```

### `getSchedule(): object[]`

Returns an array of objects containing all information about the current week (7 days).

If shifted was specified as true on business hour initialization returns current day as
index 0 of array with increasing days of the week

If shifted was specified as false on business hour initialization returns Sunday at index 0
and Saturday as the last index. Note current day index can be obtained with the getCurrentDayIndexNo() method

```javascript
bH.getCurrentDayInfo();
// returns
// [
//  {
//  Name: string, //Default day name e.g. Monday, Tuesday
//  altName: string, //Alternative name listed in configuration e.g. "Mon"
//  HolidayName: string, //Name of the days holiday or empty string "" if not holiday
//  isHoliday: boolean, //true if day is holiday else false
//  isClosed: boolean, //true if the business has no listed open hours for the day, otherwise false
//  isCurrentDay: boolean //true if it is the current day of the week, else false
//  Hours: object[] // array of {from: XX:XX, to: XX:XX} objects reporting opening/closing times
//  dateObj: Date //returns Date object with correct year, day, month corresponding to each day in the array
//  }
//  ...]
```

### `getCurrentDayIndexNo(): number`

Note method is only available on businessHoursUnshifted object as businessHours object current day index is always 0

Returns the index number (0-6) corresponding to the current day in the array returned from the
getCurrentDayInfo() method.

```javascript
bH.getCurrentDayIndexNo();
// returns 0 or 1 or 2 ... or ... 6
```

### `getHolidayName(): string`

Returns holiday name (specified in JSON config) if current day is a holiday,
else returns an empty string ""

```javascript
bH.getHolidayName();
// returns "Christmas"
```

### `isHoliday(): boolean`

Returns boolean value of true if current day is a holiday else false

```javascript
bH.isHoliday();
// returns true
```

### `isOpen(): boolean`

Returns if business is currently open or not dependant on business hours listed for the day and the current time the method is called at.

For example if the business is open from 3:00 to 5:00 on the current day and the method isOpen() is called at 4:00 local business time the method will return true.

```javascript
bH.isOpen();
// returns true
```

## Helper functions

### `twelveHourTimeConvert(hoursArr: Object[]): Object[]`

Converts time in arrays of {to: string, from: string} objects from 24hr time (default) to 12hr time (AM/PM)

```javascript
import { twelveHourTimeConvert as convert } from "business-hours-native";

let currentDayHours = convert(daybH.getCurrentDayInfo().Hours);

// returns [{from: "10:00 AM", "7:00 PM"},
// {from: "8:00PM", to "9:00PM"}]
```
