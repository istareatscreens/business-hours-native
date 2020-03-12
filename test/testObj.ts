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
    dayaltName: jsonTemplate.Day["Thursday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 1, 20, 11, 20, 20)
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
    dayaltName: jsonTemplate.Day["Sunday"].Name,
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
    dayaltName: jsonTemplate.Day["Saturday"].Name,
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
    dayaltName: jsonTemplate.Day["Friday"].Name,
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
    dayaltName: jsonTemplate.Day["Sunday"].Name,
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
    dayaltName: jsonTemplate.Day["Tuesday"].Name,
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
    dayaltName: jsonTemplate.Day["Tuesday"].Name,
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
    dayaltName: jsonTemplate.Day["Tuesday"].Name,
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
    dayaltName: jsonTemplate.Day["Monday"].Name,
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
    dayaltName: jsonTemplate.Day["Wednesday"].Name,
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
    dayaltName: jsonTemplate.Day["Monday"].Name,
    openStatus: true,
    openDateObj: new Date(2020, 1, 24, 20, 20, 20)
  },
  {
    description: "11. checking open status at open time, but incorrect year",
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
    dayaltName: jsonTemplate.Day["Monday"].Name,
    openStatus: false,
    openDateObj: new Date(2021, 1, 24, 20, 20, 20)
  },
  {
    description: "12. checking open status at open time, but incorrect date",
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
    dayaltName: jsonTemplate.Day["Monday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 1, 25, 20, 20, 20)
  },
  {
    description: "13. checking open status at open time, but incorrect date",
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
    dayaltName: jsonTemplate.Day["Monday"].Name,
    openStatus: false,
    openDateObj: new Date(2020, 0, 24, 20, 20, 20)
  }
];

function dateConversion(date) {
  return new Date(
    date.toLocaleString("en-US", {
      timeZone: "America/New_York"
    })
  );
}

export const buisnessHoursTestObj = jsondata => [
  {
    description: "No Holiday Week, shifted = false",
    dateObj: new Date(
      new Date(2020, 2, 1).toLocaleString("en-US", {
        timeZone: "America/New_York"
      })
    ),
    currentDayInfo: {
      Name: "Sunday",
      altName: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: new Date(
        new Date(2020, 2, 1).toLocaleString("en-US", {
          timeZone: "America/New_York"
        })
      )
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: new Date(
          new Date(2020, 2, 1).toLocaleString("en-US", {
            timeZone: "America/New_York"
          })
        )
      },
      {
        Name: "Monday",
        altName: "Sun",
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
          new Date(2020, 2, 2).toLocaleString("en-US", {
            timeZone: "America/New_York"
          })
        )
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
          new Date(2020, 2, 3).toLocaleString("en-US", {
            timeZone: "America/New_York"
          })
        )
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
          new Date(2020, 2, 4).toLocaleString("en-US", {
            timeZone: "America/New_York"
          })
        )
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
          new Date(2020, 2, 5).toLocaleString("en-US", {
            timeZone: "America/New_York"
          })
        )
      },
      {
        Name: "Friday",
        altName: "Sun",
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
          new Date(2020, 2, 6).toLocaleString("en-US", {
            timeZone: "America/New_York"
          })
        )
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: new Date(
          new Date(2020, 2, 7).toLocaleString("en-US", {
            timeZone: "America/New_York"
          })
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
    dateObj: dateConversion(new Date(2020, 11, 25, 4, 0)),
    currentDayInfo: {
      Name: "Friday",
      altName: "Sun",
      HolidayName: "Christmas",
      isHoliday: true,
      isClosed: false,
      isCurrentDay: true,
      Hours: jsondata.Holidays[12][0].Hours,
      dateObj: dateConversion(new Date(2020, 11, 25, 4, 0))
    },
    schedule: [
      {
        Name: "Friday",
        altName: "Sun",
        HolidayName: "Christmas",
        isHoliday: true,
        isClosed: false,
        isCurrentDay: true,
        Hours: [{ from: "03:00", to: "05:00" }],
        dateObj: dateConversion(new Date(2020, 11, 25, 4))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 11, 25 + 1, 4))
      },
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 11, 25 + 2, 4))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 11, 25 + 3, 4))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 11, 25 + 4, 4))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(2020, 11, 25 + 5, 4))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 11, 25 + 6, 4))
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "Christmas",
    isHoliday: true,
    isOpen: true
  }
];

export const buisnessHoursTestDynamicObj = [
  {
    description: "0 No Holiday Week, shifted = false",
    dateObj: new Date(dateConversion(new Date(2020, 1, 28))),
    currentDayInfo: {
      Name: "Friday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(2020, 1, 28))
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 1, 28 - 5))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 1, 28 - 4))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 1, 28 - 3))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(2020, 1, 28 - 2))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 1, 28 - 1))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 1, 28))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 1, 28 + 1))
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
    dateObj: new Date(dateConversion(new Date(2020, 1, 29))),
    currentDayInfo: {
      Name: "Saturday",
      altName: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: dateConversion(new Date(2020, 1, 29))
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 1, 29 - 6))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 1, 29 - 5))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 1, 29 - 4))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(2020, 1, 29 - 3))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 1, 29 - 2))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 1, 29 - 1))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 1, 29))
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
    dateObj: dateConversion(new Date(2020, 2, 1)),
    currentDayInfo: {
      Name: "Sunday",
      altName: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: dateConversion(new Date(2020, 2, 1))
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 1))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 1 + 1))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 1 + 2))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(2020, 2, 1 + 3))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 1 + 4))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 1 + 5))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 1 + 6))
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
    dateObj: dateConversion(new Date(2020, 2, 2)),
    currentDayInfo: {
      Name: "Monday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(2020, 2, 2))
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 2 - 1))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 2))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 2 + 1))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(2020, 2, 2 + 2))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 2 + 3))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 2 + 4))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 2 + 5))
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
    dateObj: dateConversion(new Date(2020, 2, 3)),
    currentDayInfo: {
      Name: "Tuesday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(2020, 2, 3))
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 1))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 2))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 3))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(2020, 2, 4))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 5))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 6))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 7))
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
    dateObj: dateConversion(new Date(2020, 2, 4)),
    currentDayInfo: {
      Name: "Wednesday",
      altName: "Wed",
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
      dateObj: dateConversion(new Date(2020, 2, 4))
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 1))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 2))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 3))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(2020, 2, 4))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 5))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 6))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 7))
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
    dateObj: dateConversion(new Date(2020, 2, 5)),
    currentDayInfo: {
      Name: "Thursday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(2020, 2, 5))
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 1))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 2))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 3))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(2020, 2, 4))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 5))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 6))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 7))
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
    dateObj: dateConversion(new Date(2020, 2, 6)),
    currentDayInfo: {
      Name: "Friday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(2020, 2, 6))
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 1))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 2))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 3))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(2020, 2, 4))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 5))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(2020, 2, 6))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(2020, 2, 7))
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
  "2020, 12, 30",
  "2020, 12, 31",
  "2021, 1, 1",
  "2021, 1, 2",
  "2021, 1, 3",
  "2021, 1, 4",
  "2021, 1, 5",
  "2021, 1, 6",
  "2021, 1, 7",
  "2021, 1, 8",
  "2021, 1, 9",
  "2021, 1, 10",
  "2021, 1, 11",
  "2021, 1, 12",
  "2021, 1, 13"
];

export const buisnessHoursTestDynamicShiftedObj = [
  {
    description: "0 end of year, open, shifted",
    dateObj: dateConversion(new Date(dateShifted[0])),
    currentDayInfo: {
      Name: "Wednesday",
      altName: "Wed",
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
      dateObj: dateConversion(new Date(dateShifted[0]))
    },
    schedule: [
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(dateShifted[0]))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[1]))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[2]))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[3]))
      },
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[4]))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[5]))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[6]))
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
    dateObj: dateConversion(new Date(dateShifted[1])),
    currentDayInfo: {
      Name: "Thursday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(dateShifted[1]))
    },
    schedule: [
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[1]))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[2]))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[3]))
      },
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[4]))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[5]))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[6]))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(dateShifted[7]))
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
    dateObj: dateConversion(new Date(dateShifted[2])),
    currentDayInfo: {
      Name: "Friday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(dateShifted[2]))
    },
    schedule: [
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[2]))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[3]))
      },
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[4]))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[5]))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[6]))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(dateShifted[7]))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[8]))
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
    dateObj: dateConversion(new Date(dateShifted[3])),
    currentDayInfo: {
      Name: "Saturday",
      altName: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: dateConversion(new Date(dateShifted[3]))
    },
    schedule: [
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[3]))
      },
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[4]))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[5]))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[6]))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(dateShifted[7]))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[8]))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[9]))
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
    dateObj: dateConversion(new Date(dateShifted[4])),
    currentDayInfo: {
      Name: "Sunday",
      altName: "Sun",
      HolidayName: "",
      isHoliday: false,
      isClosed: true,
      isCurrentDay: true,
      Hours: [],
      dateObj: dateConversion(new Date(dateShifted[4]))
    },
    schedule: [
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: true,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[4]))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[5]))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[6]))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(dateShifted[7]))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[8]))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[9]))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[10]))
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
    dateObj: dateConversion(new Date(dateShifted[5])),
    currentDayInfo: {
      Name: "Monday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(dateShifted[5]))
    },
    schedule: [
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[5]))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[6]))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(dateShifted[7]))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[8]))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[9]))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[10]))
      },
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[11]))
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
    dateObj: dateConversion(new Date(dateShifted[6])),
    currentDayInfo: {
      Name: "Tuesday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(dateShifted[6]))
    },
    schedule: [
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[6]))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(dateShifted[7]))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[8]))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[9]))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[10]))
      },
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[11]))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[12]))
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
    dateObj: dateConversion(new Date(dateShifted[7])),
    currentDayInfo: {
      Name: "Wednesday",
      altName: "Wed",
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
      dateObj: dateConversion(new Date(dateShifted[7]))
    },
    schedule: [
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(dateShifted[7]))
      },
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[8]))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[9]))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[10]))
      },
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[11]))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[12]))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[13]))
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
    dateObj: dateConversion(new Date(dateShifted[8])),
    currentDayInfo: {
      Name: "Thursday",
      altName: "Sun",
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
      dateObj: dateConversion(new Date(dateShifted[8]))
    },
    schedule: [
      {
        Name: "Thursday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[8]))
      },
      {
        Name: "Friday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[9]))
      },
      {
        Name: "Saturday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[10]))
      },
      {
        Name: "Sunday",
        altName: "Sun",
        HolidayName: "",
        isHoliday: false,
        isClosed: true,
        isCurrentDay: false,
        Hours: [],
        dateObj: dateConversion(new Date(dateShifted[11]))
      },
      {
        Name: "Monday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[12]))
      },
      {
        Name: "Tuesday",
        altName: "Sun",
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
        dateObj: dateConversion(new Date(dateShifted[13]))
      },
      {
        Name: "Wednesday",
        altName: "Wed",
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
        dateObj: dateConversion(new Date(dateShifted[14]))
      }
    ],
    shifted: true,
    indexCD: 0,
    holidayName: "",
    isHoliday: false,
    isOpen: false
  }
];
