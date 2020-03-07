import { expect } from "chai";
import "mocha";
import day from "../src/day";
import { buisnessHours } from "../src";

let jsondata = require("./assets/hours.json");

describe("#Day", function() {
  //init class
  const bH = buisnessHours.init(jsondata);
  const dayObject = day.init(
    0,
    jsondata.Day,
    bH.getCurrentLocalBusinessTime(),
    jsondata.Holidays
  );

  it("should return data object", function() {
    expect(JSON.stringify(bH.getData())).equal(JSON.stringify(jsondata));
  });

  it("should return days object", function() {
    expect(JSON.stringify(bH.getWeek())).equal(JSON.stringify(jsondata.Day));
  });
});
