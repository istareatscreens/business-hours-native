import { expect } from "chai";
import "mocha";
import { buisnessHours } from "../src/index";
// eslint-disable-next-line no-unused-vars
import { DataObject } from "../src/typings";
let jsondata: DataObject = require("./assets/hours.json");

describe("#buisnessHours", function() {
  //init class
  const bH = buisnessHours.init(jsondata);

  it("should return data object", function() {
    expect(JSON.stringify(bH.getData())).equal(JSON.stringify(jsondata));
  });
});

// bb26IncrementInputTest.forEach(({ input, result }) =>
// context("with argument " + input, function() {
//   it("should return " + result, function() {
//     expect(bb26Increment(input)).to.equal(result);
//   });
// })
