import day from "../src/day";

export const dayTestObject = jsonTemplate => [
  {
    description: "1. fixed day, no holiday month object, not holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 1, 20, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Thursday",
    fixedDate: new Date(2020, 1, 20, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Thursday"],
    hours: jsonTemplate.Day["Thursday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Thursday"].Name,
    openStatus: true,
    openDateObj: new Date(2010, 1, 20, 11, 20, 20)
  },
  {
    description:
      "2. fixed day, no holiday month object, empty array for hours, not holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 2, 8, 10, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Sunday",
    fixedDate: new Date(2020, 2, 8, 10, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Sunday"],
    hours: jsonTemplate.Day["Sunday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Sunday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 2, 8, 12, 20, 20)
  },
  {
    description:
      "3. fixed day, no holiday month object, empty array for hours, not holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 2, 7, 10, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Saturday",
    fixedDate: new Date(2020, 2, 7, 10, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Saturday"],
    hours: [],
    holidayName: "",
    dayAlias: jsonTemplate.Day["Saturday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 2, 7, 12, 20, 20)
  },
  {
    description: "4. fixed day, single holiday month object, is holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 11, 25, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Friday",
    fixedDate: new Date(2020, 11, 25, 20, 20, 20),
    isHoliday: true,
    dayDataObject: jsonTemplate.Day["Friday"],
    hours: jsonTemplate.Holidays[12][0].Hours,
    holidayName: "Christmas",
    dayAlias: jsonTemplate.Day["Friday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 11, 25, 4, 30, 20)
  },
  {
    description:
      "5. fixed day using String Name, fixed year, double holiday month object, is holiday, closed after last interval",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 12, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Sunday",
    fixedDate: new Date(2020, 3, 12, 20, 20, 20),
    isHoliday: true,
    dayDataObject: jsonTemplate.Day["Sunday"],
    hours: jsonTemplate.Holidays[4][0].Hours,
    holidayName: "Easter",
    dayAlias: jsonTemplate.Day["Sunday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 3, 12, 20, 20, 20)
  },
  {
    description:
      "6. fixed day using String Name, fixed year, double holiday month object, holiday same day previous year, is not a holiday, closed before first interval",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 21, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Tuesday",
    fixedDate: new Date(2020, 3, 21, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Tuesday"],
    hours: jsonTemplate.Day["Tuesday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Tuesday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 3, 21, 9, 10, 10)
  },
  {
    description:
      "7. fixed day using String Name, fixed year, double holiday month object, holiday same day previous year, is not a holiday, is closed inbetween intervals",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 21, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Tuesday",
    fixedDate: new Date(2020, 3, 21, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Tuesday"],
    hours: jsonTemplate.Day["Tuesday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Tuesday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 3, 21, 15, 10, 10)
  },
  {
    description:
      "8. fixed day using String Name, double holiday month object, holiday same day previous year, is not a holiday, first interval open",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 3, 21, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Tuesday",
    fixedDate: new Date(2020, 3, 21, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Tuesday"],
    hours: jsonTemplate.Day["Tuesday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Tuesday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 3, 21, 11, 10, 10)
  },
  {
    description:
      "9. fixed day using String Name, fixed year, single holiday month object, holiday first monday first week of the month, is a holiday, second interval open holiday",
    testObject: day.init(
      0,
      jsonTemplate.Day,
      new Date(2020, 8, 7, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Monday",
    fixedDate: new Date(2020, 8, 7, 20, 20, 20),
    isHoliday: true,
    dayDataObject: jsonTemplate.Day["Monday"],
    hours: jsonTemplate.Holidays[9][0].Hours,
    holidayName: "Labour Day",
    dayAlias: jsonTemplate.Day["Monday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 8, 7, 12, 10, 10)
  },
  {
    description: "10. shifted -1 day, no holiday month object, not holiday",
    testObject: day.init(
      -1,
      jsonTemplate.Day,
      new Date(2020, 1, 20, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Wednesday",
    fixedDate: new Date(2020, 1, 19, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Wednesday"],
    hours: jsonTemplate.Day["Wednesday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Wednesday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 1, 19, 20, 20, 20)
  },
  {
    description: "11. shifted +4 day, no holiday month object, not holiday",
    testObject: day.init(
      4,
      jsonTemplate.Day,
      new Date(2020, 1, 20, 20, 20, 20),
      jsonTemplate.Holidays
    ),
    dayName: "Monday",
    fixedDate: new Date(2020, 1, 24, 20, 20, 20),
    isHoliday: false,
    dayDataObject: jsonTemplate.Day["Monday"],
    hours: jsonTemplate.Day["Monday"].Hours,
    holidayName: "",
    dayAlias: jsonTemplate.Day["Monday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 1, 24, 20, 20, 20)
  }
];

export const buisnessHoursTestObj = jsondata => [
  {
    description: "No Holiday Week, shifted = false",
    dateObj: new Date(2020, 2, 1),
    currentDayInfo: {
      Name: "Sunday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: new Date(
        new Date(2020, 2, 1).getUTCFullYear(),
        new Date(2020, 2, 1).getUTCMonth(),
        new Date(2020, 2, 1).getUTCDate(),
        new Date(2020, 2, 1).getUTCHours() - 5,
        new Date(2020, 2, 1).getUTCMinutes(),
        new Date(2020, 2, 1).getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: new Date(
          new Date(2020, 2, 1).getUTCFullYear(),
          new Date(2020, 2, 1).getUTCMonth(),
          new Date(2020, 2, 1).getUTCDate() + 0,
          new Date(2020, 2, 1).getUTCHours() - 5,
          new Date(2020, 2, 1).getUTCMinutes(),
          new Date(2020, 2, 1).getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          new Date(2020, 2, 1).getUTCFullYear(),
          new Date(2020, 2, 1).getUTCMonth(),
          new Date(2020, 2, 1).getUTCDate() + 1,
          new Date(2020, 2, 1).getUTCHours() - 5,
          new Date(2020, 2, 1).getUTCMinutes(),
          new Date(2020, 2, 1).getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          new Date(2020, 2, 1).getUTCFullYear(),
          new Date(2020, 2, 1).getUTCMonth(),
          new Date(2020, 2, 1).getUTCDate() + 2,
          new Date(2020, 2, 1).getUTCHours() - 5,
          new Date(2020, 2, 1).getUTCMinutes(),
          new Date(2020, 2, 1).getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          new Date(2020, 2, 1).getUTCFullYear(),
          new Date(2020, 2, 1).getUTCMonth(),
          new Date(2020, 2, 1).getUTCDate() + 3,
          new Date(2020, 2, 1).getUTCHours() - 5,
          new Date(2020, 2, 1).getUTCMinutes(),
          new Date(2020, 2, 1).getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          new Date(2020, 2, 1).getUTCFullYear(),
          new Date(2020, 2, 1).getUTCMonth(),
          new Date(2020, 2, 1).getUTCDate() + 4,
          new Date(2020, 2, 1).getUTCHours() - 5,
          new Date(2020, 2, 1).getUTCMinutes(),
          new Date(2020, 2, 1).getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          new Date(2020, 2, 1).getUTCFullYear(),
          new Date(2020, 2, 1).getUTCMonth(),
          new Date(2020, 2, 1).getUTCDate() + 5,
          new Date(2020, 2, 1).getUTCHours() - 5,
          new Date(2020, 2, 1).getUTCMinutes(),
          new Date(2020, 2, 1).getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          new Date(2020, 2, 1).getUTCFullYear(),
          new Date(2020, 2, 1).getUTCMonth(),
          new Date(2020, 2, 1).getUTCDate() + 6,
          new Date(2020, 2, 1).getUTCHours() - 5,
          new Date(2020, 2, 1).getUTCMinutes(),
          new Date(2020, 2, 1).getUTCSeconds()
        )
      }
    ],
    shifted: false,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "Holiday Week Christmas, open, shifted",
    dateObj: new Date(2020, 11, 25, 4, 0),
    currentDayInfo: {
      Name: "Friday",
      Alias: "Sun",
      HolidayName: "Christmas",
      isHoliday: true,
      isClosed: false,
      isCurrentDay: true,
      Hours: jsondata.Holidays[12][0].Hours,
      dateObj: new Date(
        new Date(2020, 11, 25, 4, 0).getUTCFullYear(),
        new Date(2020, 11, 25, 4, 0).getUTCMonth(),
        new Date(2020, 11, 25, 4, 0).getUTCDate() + 0,
        new Date(2020, 11, 25, 4, 0).getUTCHours() - 5,
        new Date(2020, 11, 25, 4, 0).getUTCMinutes(),
        new Date(2020, 11, 25, 4, 0).getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Friday",
        Alias: "Sun",
        HolidayName: "Christmas",
        isHoliday: true,
        isClosed: false,
        isCurrentDay: true,
        Hours: [{ from: "03:00", to: "05:00" }],
        dateObj: new Date(
          new Date(2020, 11, 25, 4).getUTCFullYear(),
          new Date(2020, 11, 25, 4).getUTCMonth(),
          new Date(2020, 11, 25, 4).getUTCDate(),
          new Date(2020, 11, 25, 4).getUTCHours() - 5,
          new Date(2020, 11, 25, 4).getUTCMinutes(),
          new Date(2020, 11, 25, 4).getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          new Date(2020, 11, 25, 4).getUTCFullYear(),
          new Date(2020, 11, 25, 4).getUTCMonth(),
          new Date(2020, 11, 25, 4).getUTCDate() + 1,
          new Date(2020, 11, 25, 4).getUTCHours() - 5,
          new Date(2020, 11, 25, 4).getUTCMinutes(),
          new Date(2020, 11, 25, 4).getUTCSeconds()
        )
      },
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          new Date(2020, 11, 25, 4).getUTCFullYear(),
          new Date(2020, 11, 25, 4).getUTCMonth(),
          new Date(2020, 11, 25, 4).getUTCDate() + 2,
          new Date(2020, 11, 25, 4).getUTCHours() - 5,
          new Date(2020, 11, 25, 4).getUTCMinutes(),
          new Date(2020, 11, 25, 4).getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          new Date(2020, 11, 25, 4).getUTCFullYear(),
          new Date(2020, 11, 25, 4).getUTCMonth(),
          new Date(2020, 11, 25, 4).getUTCDate() + 3,
          new Date(2020, 11, 25, 4).getUTCHours() - 5,
          new Date(2020, 11, 25, 4).getUTCMinutes(),
          new Date(2020, 11, 25, 4).getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          new Date(2020, 11, 25, 4).getUTCFullYear(),
          new Date(2020, 11, 25, 4).getUTCMonth(),
          new Date(2020, 11, 25, 4).getUTCDate() + 4,
          new Date(2020, 11, 25, 4).getUTCHours() - 5,
          new Date(2020, 11, 25, 4).getUTCMinutes(),
          new Date(2020, 11, 25, 4).getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          new Date(2020, 11, 25, 4).getUTCFullYear(),
          new Date(2020, 11, 25, 4).getUTCMonth(),
          new Date(2020, 11, 25, 4).getUTCDate() + 5,
          new Date(2020, 11, 25, 4).getUTCHours() - 5,
          new Date(2020, 11, 25, 4).getUTCMinutes(),
          new Date(2020, 11, 25, 4).getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          new Date(2020, 11, 25, 4).getUTCFullYear(),
          new Date(2020, 11, 25, 4).getUTCMonth(),
          new Date(2020, 11, 25, 4).getUTCDate() + 6,
          new Date(2020, 11, 25, 4).getUTCHours() - 5,
          new Date(2020, 11, 25, 4).getUTCMinutes(),
          new Date(2020, 11, 25, 4).getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "Christmas",
    isHoliday: true,
    isOpen: true
  }
];

const date = [
  new Date(2020, 1, 28),
  new Date(2020, 1, 29),
  new Date(2020, 2, 1),
  new Date(2020, 2, 2),
  new Date(2020, 2, 3),
  new Date(2020, 2, 4),
  new Date(2020, 2, 5),
  new Date(2020, 2, 6),
  new Date(2021, 1, 5)
];

export const buisnessHoursTestDynamicObj = [
  {
    description: "0 No Holiday Week, shifted = false",
    dateObj: date[0],
    currentDayInfo: {
      Name: "Friday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        date[0].getUTCFullYear(),
        date[0].getUTCMonth(),
        date[0].getUTCDate(),
        date[0].getUTCHours() - 5,
        date[0].getUTCMinutes(),
        date[0].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[0].getUTCFullYear(),
          date[0].getUTCMonth(),
          date[0].getUTCDate() - 5,
          date[0].getUTCHours() - 5,
          date[0].getUTCMinutes(),
          date[0].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[0].getUTCFullYear(),
          date[0].getUTCMonth(),
          date[0].getUTCDate() + -4,
          date[0].getUTCHours() - 5,
          date[0].getUTCMinutes(),
          date[0].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[0].getUTCFullYear(),
          date[0].getUTCMonth(),
          date[0].getUTCDate() - 3,
          date[0].getUTCHours() - 5,
          date[0].getUTCMinutes(),
          date[0].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[0].getUTCFullYear(),
          date[0].getUTCMonth(),
          date[0].getUTCDate() - 2,
          date[0].getUTCHours() - 5,
          date[0].getUTCMinutes(),
          date[0].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[0].getUTCFullYear(),
          date[0].getUTCMonth(),
          date[0].getUTCDate() - 1,
          date[0].getUTCHours() - 5,
          date[0].getUTCMinutes(),
          date[0].getUTCSeconds()
        )
      },
      {
        Name: "Friday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          date[0].getUTCFullYear(),
          date[0].getUTCMonth(),
          date[0].getUTCDate() + 0,
          date[0].getUTCHours() - 5,
          date[0].getUTCMinutes(),
          date[0].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[0].getUTCFullYear(),
          date[0].getUTCMonth(),
          date[0].getUTCDate() + 1,
          date[0].getUTCHours() - 5,
          date[0].getUTCMinutes(),
          date[0].getUTCSeconds()
        )
      }
    ],
    shifted: false,
    indexCD: 5,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "+1 day not shifted No Holiday Week, shifted = false",
    dateObj: date[1],
    currentDayInfo: {
      Name: "Saturday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: new Date(
        date[1].getUTCFullYear(),
        date[1].getUTCMonth(),
        date[1].getUTCDate(),
        date[1].getUTCHours() - 5,
        date[1].getUTCMinutes(),
        date[1].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[1].getUTCFullYear(),
          date[1].getUTCMonth(),
          date[1].getUTCDate() + -6,
          date[1].getUTCHours() - 5,
          date[1].getUTCMinutes(),
          date[1].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[1].getUTCFullYear(),
          date[1].getUTCMonth(),
          date[1].getUTCDate() + -5,
          date[1].getUTCHours() - 5,
          date[1].getUTCMinutes(),
          date[1].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[1].getUTCFullYear(),
          date[1].getUTCMonth(),
          date[1].getUTCDate() + -4,
          date[1].getUTCHours() - 5,
          date[1].getUTCMinutes(),
          date[1].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[1].getUTCFullYear(),
          date[1].getUTCMonth(),
          date[1].getUTCDate() + -3,
          date[1].getUTCHours() - 5,
          date[1].getUTCMinutes(),
          date[1].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[1].getUTCFullYear(),
          date[1].getUTCMonth(),
          date[1].getUTCDate() + -2,
          date[1].getUTCHours() - 5,
          date[1].getUTCMinutes(),
          date[1].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[1].getUTCFullYear(),
          date[1].getUTCMonth(),
          date[1].getUTCDate() + -1,
          date[1].getUTCHours() - 5,
          date[1].getUTCMinutes(),
          date[1].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: new Date(
          date[1].getUTCFullYear(),
          date[1].getUTCMonth(),
          date[1].getUTCDate() + 0,
          date[1].getUTCHours() - 5,
          date[1].getUTCMinutes(),
          date[1].getUTCSeconds()
        )
      }
    ],
    shifted: false,
    indexCD: 6,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description:
      "+2 day not shifted, new week refresh, No Holiday Week, shifted = false",
    dateObj: date[2],
    currentDayInfo: {
      Name: "Sunday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: new Date(
        date[2].getUTCFullYear(),
        date[2].getUTCMonth(),
        date[2].getUTCDate(),
        date[2].getUTCHours() - 5,
        date[2].getUTCMinutes(),
        date[2].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: new Date(
          date[2].getUTCFullYear(),
          date[2].getUTCMonth(),
          date[2].getUTCDate() + 0,
          date[2].getUTCHours() - 5,
          date[2].getUTCMinutes(),
          date[2].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[2].getUTCFullYear(),
          date[2].getUTCMonth(),
          date[2].getUTCDate() + 1,
          date[2].getUTCHours() - 5,
          date[2].getUTCMinutes(),
          date[2].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[2].getUTCFullYear(),
          date[2].getUTCMonth(),
          date[2].getUTCDate() + 2,
          date[2].getUTCHours() - 5,
          date[2].getUTCMinutes(),
          date[2].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[2].getUTCFullYear(),
          date[2].getUTCMonth(),
          date[2].getUTCDate() + 3,
          date[2].getUTCHours() - 5,
          date[2].getUTCMinutes(),
          date[2].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[2].getUTCFullYear(),
          date[2].getUTCMonth(),
          date[2].getUTCDate() + 4,
          date[2].getUTCHours() - 5,
          date[2].getUTCMinutes(),
          date[2].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[2].getUTCFullYear(),
          date[2].getUTCMonth(),
          date[2].getUTCDate() + 5,
          date[2].getUTCHours() - 5,
          date[2].getUTCMinutes(),
          date[2].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[2].getUTCFullYear(),
          date[2].getUTCMonth(),
          date[2].getUTCDate() + 6,
          date[2].getUTCHours() - 5,
          date[2].getUTCMinutes(),
          date[2].getUTCSeconds()
        )
      }
    ],
    shifted: false,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description:
      "+3 day not shifted, new week refresh, No Holiday Week, shifted = false",
    dateObj: date[3],
    currentDayInfo: {
      Name: "Monday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        date[3].getUTCFullYear(),
        date[3].getUTCMonth(),
        date[3].getUTCDate(),
        date[3].getUTCHours() - 5,
        date[3].getUTCMinutes(),
        date[3].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[3].getUTCFullYear(),
          date[3].getUTCMonth(),
          date[3].getUTCDate() - 1,
          date[3].getUTCHours() - 5,
          date[3].getUTCMinutes(),
          date[3].getUTCSeconds()
        )
      },
      {
        Name: "Monday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          date[3].getUTCFullYear(),
          date[3].getUTCMonth(),
          date[3].getUTCDate() + 0,
          date[3].getUTCHours() - 5,
          date[3].getUTCMinutes(),
          date[3].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[3].getUTCFullYear(),
          date[3].getUTCMonth(),
          date[3].getUTCDate() + 1,
          date[3].getUTCHours() - 5,
          date[3].getUTCMinutes(),
          date[3].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[3].getUTCFullYear(),
          date[3].getUTCMonth(),
          date[3].getUTCDate() + 2,
          date[3].getUTCHours() - 5,
          date[3].getUTCMinutes(),
          date[3].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[3].getUTCFullYear(),
          date[3].getUTCMonth(),
          date[3].getUTCDate() + 3,
          date[3].getUTCHours() - 5,
          date[3].getUTCMinutes(),
          date[3].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[3].getUTCFullYear(),
          date[3].getUTCMonth(),
          date[3].getUTCDate() + 4,
          date[3].getUTCHours() - 5,
          date[3].getUTCMinutes(),
          date[3].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[3].getUTCFullYear(),
          date[3].getUTCMonth(),
          date[3].getUTCDate() + 5,
          date[3].getUTCHours() - 5,
          date[3].getUTCMinutes(),
          date[3].getUTCSeconds()
        )
      }
    ],
    shifted: false,
    indexCD: 1,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description:
      "+4 day not shifted, new week refresh, No Holiday Week, shifted = false",
    dateObj: date[4],
    currentDayInfo: {
      Name: "Tuesday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        date[4].getUTCFullYear(),
        date[4].getUTCMonth(),
        date[4].getUTCDate(),
        date[4].getUTCHours() - 5,
        date[4].getUTCMinutes(),
        date[4].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[4].getUTCFullYear(),
          date[4].getUTCMonth(),
          date[4].getUTCDate() + -2,
          date[4].getUTCHours() - 5,
          date[4].getUTCMinutes(),
          date[4].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[4].getUTCFullYear(),
          date[4].getUTCMonth(),
          date[4].getUTCDate() + -1,
          date[4].getUTCHours() - 5,
          date[4].getUTCMinutes(),
          date[4].getUTCSeconds()
        )
      },
      {
        Name: "Tuesday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          date[4].getUTCFullYear(),
          date[4].getUTCMonth(),
          date[4].getUTCDate() + 0,
          date[4].getUTCHours() - 5,
          date[4].getUTCMinutes(),
          date[4].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[4].getUTCFullYear(),
          date[4].getUTCMonth(),
          date[4].getUTCDate() + 1,
          date[4].getUTCHours() - 5,
          date[4].getUTCMinutes(),
          date[4].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[4].getUTCFullYear(),
          date[4].getUTCMonth(),
          date[4].getUTCDate() + 2,
          date[4].getUTCHours() - 5,
          date[4].getUTCMinutes(),
          date[4].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[4].getUTCFullYear(),
          date[4].getUTCMonth(),
          date[4].getUTCDate() + 3,
          date[4].getUTCHours() - 5,
          date[4].getUTCMinutes(),
          date[4].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[4].getUTCFullYear(),
          date[4].getUTCMonth(),
          date[4].getUTCDate() + 4,
          date[4].getUTCHours() - 5,
          date[4].getUTCMinutes(),
          date[4].getUTCSeconds()
        )
      }
    ],
    shifted: false,
    indexCD: 2,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description:
      "+5 day not shifted, new week refresh, No Holiday Week, shifted = false",
    dateObj: date[5],
    currentDayInfo: {
      Name: "Wednesday",
      Alias: "Wed",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        date[5].getUTCFullYear(),
        date[5].getUTCMonth(),
        date[5].getUTCDate(),
        date[5].getUTCHours() - 5,
        date[5].getUTCMinutes(),
        date[5].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[5].getUTCFullYear(),
          date[5].getUTCMonth(),
          date[5].getUTCDate() + -3,
          date[5].getUTCHours() - 5,
          date[5].getUTCMinutes(),
          date[5].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[5].getUTCFullYear(),
          date[5].getUTCMonth(),
          date[5].getUTCDate() + -2,
          date[5].getUTCHours() - 5,
          date[5].getUTCMinutes(),
          date[5].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[5].getUTCFullYear(),
          date[5].getUTCMonth(),
          date[5].getUTCDate() - 1,
          date[5].getUTCHours() - 5,
          date[5].getUTCMinutes(),
          date[5].getUTCSeconds()
        )
      },
      {
        Name: "Wednesday",
        Alias: "Wed",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          date[5].getUTCFullYear(),
          date[5].getUTCMonth(),
          date[5].getUTCDate() + 0,
          date[5].getUTCHours() - 5,
          date[5].getUTCMinutes(),
          date[5].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[5].getUTCFullYear(),
          date[5].getUTCMonth(),
          date[5].getUTCDate() + 1,
          date[5].getUTCHours() - 5,
          date[5].getUTCMinutes(),
          date[5].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[5].getUTCFullYear(),
          date[5].getUTCMonth(),
          date[5].getUTCDate() + 2,
          date[5].getUTCHours() - 5,
          date[5].getUTCMinutes(),
          date[5].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[5].getUTCFullYear(),
          date[5].getUTCMonth(),
          date[5].getUTCDate() + 3,
          date[5].getUTCHours() - 5,
          date[5].getUTCMinutes(),
          date[5].getUTCSeconds()
        )
      }
    ],
    shifted: false,
    indexCD: 3,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description:
      "+6 day not shifted, new week refresh, No Holiday Week, shifted = false",
    dateObj: date[6],
    currentDayInfo: {
      Name: "Thursday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        date[6].getUTCFullYear(),
        date[6].getUTCMonth(),
        date[6].getUTCDate(),
        date[6].getUTCHours() - 5,
        date[6].getUTCMinutes(),
        date[6].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[6].getUTCFullYear(),
          date[6].getUTCMonth(),
          date[6].getUTCDate() + -4,
          date[6].getUTCHours() - 5,
          date[6].getUTCMinutes(),
          date[6].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[6].getUTCFullYear(),
          date[6].getUTCMonth(),
          date[6].getUTCDate() + -3,
          date[6].getUTCHours() - 5,
          date[6].getUTCMinutes(),
          date[6].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[6].getUTCFullYear(),
          date[6].getUTCMonth(),
          date[6].getUTCDate() + -2,
          date[6].getUTCHours() - 5,
          date[6].getUTCMinutes(),
          date[6].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[6].getUTCFullYear(),
          date[6].getUTCMonth(),
          date[6].getUTCDate() + -1,
          date[6].getUTCHours() - 5,
          date[6].getUTCMinutes(),
          date[6].getUTCSeconds()
        )
      },
      {
        Name: "Thursday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          date[6].getUTCFullYear(),
          date[6].getUTCMonth(),
          date[6].getUTCDate() + -0,
          date[6].getUTCHours() - 5,
          date[6].getUTCMinutes(),
          date[6].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[6].getUTCFullYear(),
          date[6].getUTCMonth(),
          date[6].getUTCDate() + 1,
          date[6].getUTCHours() - 5,
          date[6].getUTCMinutes(),
          date[6].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[6].getUTCFullYear(),
          date[6].getUTCMonth(),
          date[6].getUTCDate() + 2,
          date[6].getUTCHours() - 5,
          date[6].getUTCMinutes(),
          date[6].getUTCSeconds()
        )
      }
    ],
    shifted: false,
    indexCD: 4,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description:
      "+7 day not shifted, new week refresh, No Holiday Week, shifted = false",
    dateObj: date[7],
    currentDayInfo: {
      Name: "Friday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        date[7].getUTCFullYear(),
        date[7].getUTCMonth(),
        date[7].getUTCDate(),
        date[7].getUTCHours() - 5,
        date[7].getUTCMinutes(),
        date[7].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[7].getUTCFullYear(),
          date[7].getUTCMonth(),
          date[7].getUTCDate() - 5,
          date[7].getUTCHours() - 5,
          date[7].getUTCMinutes(),
          date[7].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[7].getUTCFullYear(),
          date[7].getUTCMonth(),
          date[7].getUTCDate() + -4,
          date[7].getUTCHours() - 5,
          date[7].getUTCMinutes(),
          date[7].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[7].getUTCFullYear(),
          date[7].getUTCMonth(),
          date[7].getUTCDate() + -3,
          date[7].getUTCHours() - 5,
          date[7].getUTCMinutes(),
          date[7].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[7].getUTCFullYear(),
          date[7].getUTCMonth(),
          date[7].getUTCDate() + -2,
          date[7].getUTCHours() - 5,
          date[7].getUTCMinutes(),
          date[7].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          date[7].getUTCFullYear(),
          date[7].getUTCMonth(),
          date[7].getUTCDate() + -1,
          date[7].getUTCHours() - 5,
          date[7].getUTCMinutes(),
          date[7].getUTCSeconds()
        )
      },
      {
        Name: "Friday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          date[7].getUTCFullYear(),
          date[7].getUTCMonth(),
          date[7].getUTCDate() + 0,
          date[7].getUTCHours() - 5,
          date[7].getUTCMinutes(),
          date[7].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          date[7].getUTCFullYear(),
          date[7].getUTCMonth(),
          date[7].getUTCDate() + 1,
          date[7].getUTCHours() - 5,
          date[7].getUTCMinutes(),
          date[7].getUTCSeconds()
        )
      }
    ],
    shifted: false,
    indexCD: 5,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  }
];

const dateShifted = [
  new Date(2020, 11, 30),
  new Date(2020, 11, 31),
  new Date(2021, 0, 1),
  new Date(2021, 0, 2),
  new Date(2021, 0, 3),
  new Date(2021, 0, 4),
  new Date(2021, 0, 5),
  new Date(2021, 0, 6),
  new Date(2021, 0, 7)
];

export const buisnessHoursTestDynamicShiftedObj = [
  {
    description: "0 end of year, open, shifted",
    dateObj: dateShifted[0],
    currentDayInfo: {
      Name: "Wednesday",
      Alias: "Wed",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        dateShifted[0].getUTCFullYear(),
        dateShifted[0].getUTCMonth(),
        dateShifted[0].getUTCDate() + 0,
        dateShifted[0].getUTCHours() - 5,
        dateShifted[0].getUTCMinutes(),
        dateShifted[0].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Wednesday",
        Alias: "Wed",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          dateShifted[0].getUTCFullYear(),
          dateShifted[0].getUTCMonth(),
          dateShifted[0].getUTCDate() + 0,
          dateShifted[0].getUTCHours() - 5,
          dateShifted[0].getUTCMinutes(),
          dateShifted[0].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[0].getUTCFullYear(),
          dateShifted[0].getUTCMonth(),
          dateShifted[0].getUTCDate() + 1,
          dateShifted[0].getUTCHours() - 5,
          dateShifted[0].getUTCMinutes(),
          dateShifted[0].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[0].getUTCFullYear(),
          dateShifted[0].getUTCMonth(),
          dateShifted[0].getUTCDate() + 2,
          dateShifted[0].getUTCHours() - 5,
          dateShifted[0].getUTCMinutes(),
          dateShifted[0].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[0].getUTCFullYear(),
          dateShifted[0].getUTCMonth(),
          dateShifted[0].getUTCDate() + 3,
          dateShifted[0].getUTCHours() - 5,
          dateShifted[0].getUTCMinutes(),
          dateShifted[0].getUTCSeconds()
        )
      },
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[0].getUTCFullYear(),
          dateShifted[0].getUTCMonth(),
          dateShifted[0].getUTCDate() + 4,
          dateShifted[0].getUTCHours() - 5,
          dateShifted[0].getUTCMinutes(),
          dateShifted[0].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[0].getUTCFullYear(),
          dateShifted[0].getUTCMonth(),
          dateShifted[0].getUTCDate() + 5,
          dateShifted[0].getUTCHours() - 5,
          dateShifted[0].getUTCMinutes(),
          dateShifted[0].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[0].getUTCFullYear(),
          dateShifted[0].getUTCMonth(),
          dateShifted[0].getUTCDate() + 6,
          dateShifted[0].getUTCHours() - 5,
          dateShifted[0].getUTCMinutes(),
          dateShifted[0].getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "+1 end of year, open, shifted",
    dateObj: dateShifted[1],
    currentDayInfo: {
      Name: "Thursday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        dateShifted[1].getUTCFullYear(),
        dateShifted[1].getUTCMonth(),
        dateShifted[1].getUTCDate() + 0,
        dateShifted[1].getUTCHours() - 5,
        dateShifted[1].getUTCMinutes(),
        dateShifted[1].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Thursday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          dateShifted[1].getUTCFullYear(),
          dateShifted[1].getUTCMonth(),
          dateShifted[1].getUTCDate() + 0,
          dateShifted[1].getUTCHours() - 5,
          dateShifted[1].getUTCMinutes(),
          dateShifted[1].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[1].getUTCFullYear(),
          dateShifted[1].getUTCMonth(),
          dateShifted[1].getUTCDate() + 1,
          dateShifted[1].getUTCHours() - 5,
          dateShifted[1].getUTCMinutes(),
          dateShifted[1].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[1].getUTCFullYear(),
          dateShifted[1].getUTCMonth(),
          dateShifted[1].getUTCDate() + 2,
          dateShifted[1].getUTCHours() - 5,
          dateShifted[1].getUTCMinutes(),
          dateShifted[1].getUTCSeconds()
        )
      },
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[1].getUTCFullYear(),
          dateShifted[1].getUTCMonth(),
          dateShifted[1].getUTCDate() + 3,
          dateShifted[1].getUTCHours() - 5,
          dateShifted[1].getUTCMinutes(),
          dateShifted[1].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[1].getUTCFullYear(),
          dateShifted[1].getUTCMonth(),
          dateShifted[1].getUTCDate() + 4,
          dateShifted[1].getUTCHours() - 5,
          dateShifted[1].getUTCMinutes(),
          dateShifted[1].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[1].getUTCFullYear(),
          dateShifted[1].getUTCMonth(),
          dateShifted[1].getUTCDate() + 5,
          dateShifted[1].getUTCHours() - 5,
          dateShifted[1].getUTCMinutes(),
          dateShifted[1].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[1].getUTCFullYear(),
          dateShifted[1].getUTCMonth(),
          dateShifted[1].getUTCDate() + 6,
          dateShifted[1].getUTCHours() - 5,
          dateShifted[1].getUTCMinutes(),
          dateShifted[1].getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "+2 end of year, open, shifted",
    dateObj: dateShifted[2],
    currentDayInfo: {
      Name: "Friday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        dateShifted[2].getUTCFullYear(),
        dateShifted[2].getUTCMonth(),
        dateShifted[2].getUTCDate() + 0,
        dateShifted[2].getUTCHours() - 5,
        dateShifted[2].getUTCMinutes(),
        dateShifted[2].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Friday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          dateShifted[2].getUTCFullYear(),
          dateShifted[2].getUTCMonth(),
          dateShifted[2].getUTCDate() + 0,
          dateShifted[2].getUTCHours() - 5,
          dateShifted[2].getUTCMinutes(),
          dateShifted[2].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[2].getUTCFullYear(),
          dateShifted[2].getUTCMonth(),
          dateShifted[2].getUTCDate() + 1,
          dateShifted[2].getUTCHours() - 5,
          dateShifted[2].getUTCMinutes(),
          dateShifted[2].getUTCSeconds()
        )
      },
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[2].getUTCFullYear(),
          dateShifted[2].getUTCMonth(),
          dateShifted[2].getUTCDate() + 2,
          dateShifted[2].getUTCHours() - 5,
          dateShifted[2].getUTCMinutes(),
          dateShifted[2].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[2].getUTCFullYear(),
          dateShifted[2].getUTCMonth(),
          dateShifted[2].getUTCDate() + 3,
          dateShifted[2].getUTCHours() - 5,
          dateShifted[2].getUTCMinutes(),
          dateShifted[2].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[2].getUTCFullYear(),
          dateShifted[2].getUTCMonth(),
          dateShifted[2].getUTCDate() + 4,
          dateShifted[2].getUTCHours() - 5,
          dateShifted[2].getUTCMinutes(),
          dateShifted[2].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[2].getUTCFullYear(),
          dateShifted[2].getUTCMonth(),
          dateShifted[2].getUTCDate() + 5,
          dateShifted[2].getUTCHours() - 5,
          dateShifted[2].getUTCMinutes(),
          dateShifted[2].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[2].getUTCFullYear(),
          dateShifted[2].getUTCMonth(),
          dateShifted[2].getUTCDate() + 6,
          dateShifted[2].getUTCHours() - 5,
          dateShifted[2].getUTCMinutes(),
          dateShifted[2].getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "+3 Last of year, open, shifted",
    dateObj: dateShifted[3],
    currentDayInfo: {
      Name: "Saturday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: new Date(
        dateShifted[3].getUTCFullYear(),
        dateShifted[3].getUTCMonth(),
        dateShifted[3].getUTCDate() + 0,
        dateShifted[3].getUTCHours() - 5,
        dateShifted[3].getUTCMinutes(),
        dateShifted[3].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: new Date(
          dateShifted[3].getUTCFullYear(),
          dateShifted[3].getUTCMonth(),
          dateShifted[3].getUTCDate() + 0,
          dateShifted[3].getUTCHours() - 5,
          dateShifted[3].getUTCMinutes(),
          dateShifted[3].getUTCSeconds()
        )
      },
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[3].getUTCFullYear(),
          dateShifted[3].getUTCMonth(),
          dateShifted[3].getUTCDate() + 1,
          dateShifted[3].getUTCHours() - 5,
          dateShifted[3].getUTCMinutes(),
          dateShifted[3].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[3].getUTCFullYear(),
          dateShifted[3].getUTCMonth(),
          dateShifted[3].getUTCDate() + 2,
          dateShifted[3].getUTCHours() - 5,
          dateShifted[3].getUTCMinutes(),
          dateShifted[3].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[3].getUTCFullYear(),
          dateShifted[3].getUTCMonth(),
          dateShifted[3].getUTCDate() + 3,
          dateShifted[3].getUTCHours() - 5,
          dateShifted[3].getUTCMinutes(),
          dateShifted[3].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[3].getUTCFullYear(),
          dateShifted[3].getUTCMonth(),
          dateShifted[3].getUTCDate() + 4,
          dateShifted[3].getUTCHours() - 5,
          dateShifted[3].getUTCMinutes(),
          dateShifted[3].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[3].getUTCFullYear(),
          dateShifted[3].getUTCMonth(),
          dateShifted[3].getUTCDate() + 5,
          dateShifted[3].getUTCHours() - 5,
          dateShifted[3].getUTCMinutes(),
          dateShifted[3].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[3].getUTCFullYear(),
          dateShifted[3].getUTCMonth(),
          dateShifted[3].getUTCDate() + 6,
          dateShifted[3].getUTCHours() - 5,
          dateShifted[3].getUTCMinutes(),
          dateShifted[3].getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "+4 end of year, open, shifted",
    dateObj: dateShifted[4],
    currentDayInfo: {
      Name: "Sunday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: new Date(
        dateShifted[4].getUTCFullYear(),
        dateShifted[4].getUTCMonth(),
        dateShifted[4].getUTCDate() + 0,
        dateShifted[4].getUTCHours() - 5,
        dateShifted[4].getUTCMinutes(),
        dateShifted[4].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: new Date(
          dateShifted[4].getUTCFullYear(),
          dateShifted[4].getUTCMonth(),
          dateShifted[4].getUTCDate() + 0,
          dateShifted[4].getUTCHours() - 5,
          dateShifted[4].getUTCMinutes(),
          dateShifted[4].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[4].getUTCFullYear(),
          dateShifted[4].getUTCMonth(),
          dateShifted[4].getUTCDate() + 1,
          dateShifted[4].getUTCHours() - 5,
          dateShifted[4].getUTCMinutes(),
          dateShifted[4].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[4].getUTCFullYear(),
          dateShifted[4].getUTCMonth(),
          dateShifted[4].getUTCDate() + 2,
          dateShifted[4].getUTCHours() - 5,
          dateShifted[4].getUTCMinutes(),
          dateShifted[4].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[4].getUTCFullYear(),
          dateShifted[4].getUTCMonth(),
          dateShifted[4].getUTCDate() + 3,
          dateShifted[4].getUTCHours() - 5,
          dateShifted[4].getUTCMinutes(),
          dateShifted[4].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[4].getUTCFullYear(),
          dateShifted[4].getUTCMonth(),
          dateShifted[4].getUTCDate() + 4,
          dateShifted[4].getUTCHours() - 5,
          dateShifted[4].getUTCMinutes(),
          dateShifted[4].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[4].getUTCFullYear(),
          dateShifted[4].getUTCMonth(),
          dateShifted[4].getUTCDate() + 5,
          dateShifted[4].getUTCHours() - 5,
          dateShifted[4].getUTCMinutes(),
          dateShifted[4].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[4].getUTCFullYear(),
          dateShifted[4].getUTCMonth(),
          dateShifted[4].getUTCDate() + 6,
          dateShifted[4].getUTCHours() - 5,
          dateShifted[4].getUTCMinutes(),
          dateShifted[4].getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "+5 end of year, open, shifted",
    dateObj: dateShifted[5],
    currentDayInfo: {
      Name: "Monday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        dateShifted[5].getUTCFullYear(),
        dateShifted[5].getUTCMonth(),
        dateShifted[5].getUTCDate() + 0,
        dateShifted[5].getUTCHours() - 5,
        dateShifted[5].getUTCMinutes(),
        dateShifted[5].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Monday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          dateShifted[5].getUTCFullYear(),
          dateShifted[5].getUTCMonth(),
          dateShifted[5].getUTCDate() + 0,
          dateShifted[5].getUTCHours() - 5,
          dateShifted[5].getUTCMinutes(),
          dateShifted[5].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[5].getUTCFullYear(),
          dateShifted[5].getUTCMonth(),
          dateShifted[5].getUTCDate() + 1,
          dateShifted[5].getUTCHours() - 5,
          dateShifted[5].getUTCMinutes(),
          dateShifted[5].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[5].getUTCFullYear(),
          dateShifted[5].getUTCMonth(),
          dateShifted[5].getUTCDate() + 2,
          dateShifted[5].getUTCHours() - 5,
          dateShifted[5].getUTCMinutes(),
          dateShifted[5].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[5].getUTCFullYear(),
          dateShifted[5].getUTCMonth(),
          dateShifted[5].getUTCDate() + 3,
          dateShifted[5].getUTCHours() - 5,
          dateShifted[5].getUTCMinutes(),
          dateShifted[5].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[5].getUTCFullYear(),
          dateShifted[5].getUTCMonth(),
          dateShifted[5].getUTCDate() + 4,
          dateShifted[5].getUTCHours() - 5,
          dateShifted[5].getUTCMinutes(),
          dateShifted[5].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[5].getUTCFullYear(),
          dateShifted[5].getUTCMonth(),
          dateShifted[5].getUTCDate() + 5,
          dateShifted[5].getUTCHours() - 5,
          dateShifted[5].getUTCMinutes(),
          dateShifted[5].getUTCSeconds()
        )
      },
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[5].getUTCFullYear(),
          dateShifted[5].getUTCMonth(),
          dateShifted[5].getUTCDate() + 6,
          dateShifted[5].getUTCHours() - 5,
          dateShifted[5].getUTCMinutes(),
          dateShifted[5].getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "+6 end of year, open, shifted",
    dateObj: dateShifted[6],
    currentDayInfo: {
      Name: "Tuesday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        dateShifted[6].getUTCFullYear(),
        dateShifted[6].getUTCMonth(),
        dateShifted[6].getUTCDate() + 0,
        dateShifted[6].getUTCHours() - 5,
        dateShifted[6].getUTCMinutes(),
        dateShifted[6].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Tuesday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          dateShifted[6].getUTCFullYear(),
          dateShifted[6].getUTCMonth(),
          dateShifted[6].getUTCDate() + 0,
          dateShifted[6].getUTCHours() - 5,
          dateShifted[6].getUTCMinutes(),
          dateShifted[6].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[6].getUTCFullYear(),
          dateShifted[6].getUTCMonth(),
          dateShifted[6].getUTCDate() + 1,
          dateShifted[6].getUTCHours() - 5,
          dateShifted[6].getUTCMinutes(),
          dateShifted[6].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[6].getUTCFullYear(),
          dateShifted[6].getUTCMonth(),
          dateShifted[6].getUTCDate() + 2,
          dateShifted[6].getUTCHours() - 5,
          dateShifted[6].getUTCMinutes(),
          dateShifted[6].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[6].getUTCFullYear(),
          dateShifted[6].getUTCMonth(),
          dateShifted[6].getUTCDate() + 3,
          dateShifted[6].getUTCHours() - 5,
          dateShifted[6].getUTCMinutes(),
          dateShifted[6].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[6].getUTCFullYear(),
          dateShifted[6].getUTCMonth(),
          dateShifted[6].getUTCDate() + 4,
          dateShifted[6].getUTCHours() - 5,
          dateShifted[6].getUTCMinutes(),
          dateShifted[6].getUTCSeconds()
        )
      },
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[6].getUTCFullYear(),
          dateShifted[6].getUTCMonth(),
          dateShifted[6].getUTCDate() + 5,
          dateShifted[6].getUTCHours() - 5,
          dateShifted[6].getUTCMinutes(),
          dateShifted[6].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[6].getUTCFullYear(),
          dateShifted[6].getUTCMonth(),
          dateShifted[6].getUTCDate() + 6,
          dateShifted[6].getUTCHours() - 5,
          dateShifted[6].getUTCMinutes(),
          dateShifted[6].getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "+7 end of year, open, shifted",
    dateObj: dateShifted[7],
    currentDayInfo: {
      Name: "Wednesday",
      Alias: "Wed",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        dateShifted[7].getUTCFullYear(),
        dateShifted[7].getUTCMonth(),
        dateShifted[7].getUTCDate() + 0,
        dateShifted[7].getUTCHours() - 5,
        dateShifted[7].getUTCMinutes(),
        dateShifted[7].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Wednesday",
        Alias: "Wed",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          dateShifted[7].getUTCFullYear(),
          dateShifted[7].getUTCMonth(),
          dateShifted[7].getUTCDate() + 0,
          dateShifted[7].getUTCHours() - 5,
          dateShifted[7].getUTCMinutes(),
          dateShifted[7].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[7].getUTCFullYear(),
          dateShifted[7].getUTCMonth(),
          dateShifted[7].getUTCDate() + 1,
          dateShifted[7].getUTCHours() - 5,
          dateShifted[7].getUTCMinutes(),
          dateShifted[7].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[7].getUTCFullYear(),
          dateShifted[7].getUTCMonth(),
          dateShifted[7].getUTCDate() + 2,
          dateShifted[7].getUTCHours() - 5,
          dateShifted[7].getUTCMinutes(),
          dateShifted[7].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[7].getUTCFullYear(),
          dateShifted[7].getUTCMonth(),
          dateShifted[7].getUTCDate() + 3,
          dateShifted[7].getUTCHours() - 5,
          dateShifted[7].getUTCMinutes(),
          dateShifted[7].getUTCSeconds()
        )
      },
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[7].getUTCFullYear(),
          dateShifted[7].getUTCMonth(),
          dateShifted[7].getUTCDate() + 4,
          dateShifted[7].getUTCHours() - 5,
          dateShifted[7].getUTCMinutes(),
          dateShifted[7].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[7].getUTCFullYear(),
          dateShifted[7].getUTCMonth(),
          dateShifted[7].getUTCDate() + 5,
          dateShifted[7].getUTCHours() - 5,
          dateShifted[7].getUTCMinutes(),
          dateShifted[7].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[7].getUTCFullYear(),
          dateShifted[7].getUTCMonth(),
          dateShifted[7].getUTCDate() + 6,
          dateShifted[7].getUTCHours() - 5,
          dateShifted[7].getUTCMinutes(),
          dateShifted[7].getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  },
  {
    description: "+8 Last of year, open, shifted",
    dateObj: dateShifted[8],
    currentDayInfo: {
      Name: "Thursday",
      Alias: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: false,
      isCurrentDay: true,
      Hours: [
        {
          from: "10:00",
          to: "13:30"
        },
        {
          from: "18:00",
          to: "22:00"
        }
      ],
      dateObj: new Date(
        dateShifted[8].getUTCFullYear(),
        dateShifted[8].getUTCMonth(),
        dateShifted[8].getUTCDate() + 0,
        dateShifted[8].getUTCHours() - 5,
        dateShifted[8].getUTCMinutes(),
        dateShifted[8].getUTCSeconds()
      )
    },
    schedule: [
      {
        Name: "Thursday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: false,
        isCurrentDay: true,
        Hours: [
          {
            from: "10:00",
            to: "13:30"
          },
          {
            from: "18:00",
            to: "22:00"
          }
        ],
        dateObj: new Date(
          dateShifted[8].getUTCFullYear(),
          dateShifted[8].getUTCMonth(),
          dateShifted[8].getUTCDate() + 0,
          dateShifted[8].getUTCHours() - 5,
          dateShifted[8].getUTCMinutes(),
          dateShifted[8].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[8].getUTCFullYear(),
          dateShifted[8].getUTCMonth(),
          dateShifted[8].getUTCDate() + 1,
          dateShifted[8].getUTCHours() - 5,
          dateShifted[8].getUTCMinutes(),
          dateShifted[8].getUTCSeconds()
        )
      },
      {
        Name: "Saturday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[8].getUTCFullYear(),
          dateShifted[8].getUTCMonth(),
          dateShifted[8].getUTCDate() + 2,
          dateShifted[8].getUTCHours() - 5,
          dateShifted[8].getUTCMinutes(),
          dateShifted[8].getUTCSeconds()
        )
      },
      {
        Name: "Sunday",
        Alias: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          dateShifted[8].getUTCFullYear(),
          dateShifted[8].getUTCMonth(),
          dateShifted[8].getUTCDate() + 3,
          dateShifted[8].getUTCHours() - 5,
          dateShifted[8].getUTCMinutes(),
          dateShifted[8].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[8].getUTCFullYear(),
          dateShifted[8].getUTCMonth(),
          dateShifted[8].getUTCDate() + 4,
          dateShifted[8].getUTCHours() - 5,
          dateShifted[8].getUTCMinutes(),
          dateShifted[8].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[8].getUTCFullYear(),
          dateShifted[8].getUTCMonth(),
          dateShifted[8].getUTCDate() + 5,
          dateShifted[8].getUTCHours() - 5,
          dateShifted[8].getUTCMinutes(),
          dateShifted[8].getUTCSeconds()
        )
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
        ],
        dateObj: new Date(
          dateShifted[8].getUTCFullYear(),
          dateShifted[8].getUTCMonth(),
          dateShifted[8].getUTCDate() + 6,
          dateShifted[8].getUTCHours() - 5,
          dateShifted[8].getUTCMinutes(),
          dateShifted[8].getUTCSeconds()
        )
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  }
];
