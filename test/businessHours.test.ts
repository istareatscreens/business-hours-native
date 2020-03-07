import { expect } from "chai";
import "mocha";
import { buisnessHours } from "../src/index";

let jsondata = require("./assets/hours_testtemplate.json");

describe("#buisnessHours", function() {
  //init class
  const bH = buisnessHours.init(jsondata);

  it("should return data object", function() {
    expect(JSON.stringify(bH.getData())).equal(JSON.stringify(jsondata));
  });

  it("should return days object", function() {
    expect(JSON.stringify(bH.getWeek())).equal(JSON.stringify(jsondata.Day));
  });
});

// bb26IncrementInputTest.forEach(({ input, result }) =>
// context("with argument " + input, function() {
//   it("should return " + result, function() {
//     expect(bb26Increment(input)).to.equal(result);
//   });
// })
