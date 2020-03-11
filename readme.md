[![Build Status](https://travis-ci.com/istareatscreens/business-hours-native.svg?branch=master)](https://travis-ci.com/istareatscreens/business-hours-native)[![codecov](https://codecov.io/gh/istareatscreens/business-hours-native/branch/master/graph/badge.svg)](https://codecov.io/gh/istareatscreens/business-hours-native)

# business-hours-native

This package provides a way to report a schedule of business hours and open status dynamically using the native JavaScript date object and no dependencies. Scheduling data is stored in a [JSON file](https://raw.githubusercontent.com/istareatscreens/business-hours-native/master/assets/hoursTemplate.json).

## Features:

- Times reported are localized to the business using [UTC corrections](https://earthsky.org/astronomy-essentials/universal-time)
- Shifting schedule where the first day of week is always the current day and fixed scheduling where Sunday is the first day and Saturday is the last
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
- Closed business days can be specified by providing an empty array [] for the index hours, or no hours index
- Multiple open periods must be specified in their own objects, where index "from" specifies the time of opening and index "to" specifies the time of closing
- A UTC offset is used to specify the businesses time zone and must be specified.
  UTC offsets for time zone are located [HERE](https://earthsky.org/astronomy-essentials/universal-time) and [HERE](https://www.timetemperature.com/abbreviations/united_states_time_zone_abbreviations.shtml)
  For example the [template](https://raw.githubusercontent.com/istareatscreens/business-hours-native/master/assets/hoursTemplate.json) specifies an EST business time zone

## Initialization

Initialization of the businessHours object is conducted via the static init method. Arguments include the JSON configuration file and a boolean value
specifying if the object should return a shifted (true) (index 0 is the current day) or fixed (false) schedule (index 0 is Sunday)

### `businessHours.init(JSON: object, shifted: boolean): Date`

```javascript
import { businessHours } from "business-hours-native";
import jsonHoursConfig from "jsonHoursConfig.json";

const bH = businessHours.init(jsonHourConfig, true);
//returns businessHours object
```

## Methods

### `getCurrentLocalBusinessTime(): Date`

Returns date object specifying the current local time of the business.

```javascript
bH.getCurrentLocalBusinessTime();
//returns Date object local to the business
```

### `refresh(): void`

Refreshes objects time, and scheduling. Allows for dynamic scheduling and open status.
All method calls after will return up to date open status and scheduling

```javascript
bH.refresh();
//All method calls after will return current time and date information
```

### `getCurrentDayInfo(): object`

Returns an objected containing all information about the current day

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

If shifted was specified as true on business hour initialization returns current day as index 0 of array with increasing days of the week

If shifted was specified as false on business hour initialization returns Sunday at index 0 and Saturday as the last index. Note current day index can be obtained with the getCurrentDayIndexNo() method

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
//  dateObj: Date //returns Date object with correct year, day, month corresponding to the current day
//  }
//  ...]
```

### `getCurrentDayIndexNo(): number`

Returns the index number (0-6) corresponding to the current day in the array returned from the
getCurrentDayInfo() method. Note this method is only useful when shifted is specified as false

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
// return true
```
