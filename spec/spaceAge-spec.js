import {AgeClass} from './../src/backEnd.js';

function randomDate(){
  // const randomDay=Math.floor((Math.random()*28) + 1);
  // const randomMonth=Math.floor((Math.random()*12) + 1);
  const randomYear=Math.floor(Math.random() * (2019 - 1900 + 1) ) + 1900;
  const fakeYear = new AgeClass(randomYear);
  console.log(fakeYear.year);
  return fakeYear;
}
let test = new AgeClass(1900);
randomDate();
describe ('dateToAge', function() {

  it("returns user's age on Earth", function() {
    let age = test.dateToAge('1997');
    expect(age).toEqual(22);
  });

});

describe ('mercuryAge', function() {

  it("returns user's age on Mercury", function() {
    let mercury = test.mercuryAge(22);
    expect(parseFloat(mercury)).toEqual(91.67);
  });

});

describe ('venusAge', function() {

  it("returns user's age on Venus", function() {
    let venus = test.venusAge(22);
    expect(parseFloat(venus)).toEqual(35.48);
  });

});

describe ('marsAge', function() {

  it("returns user's age on Mars", function() {
    let mars = test.marsAge(22);
    expect(parseFloat(mars)).toEqual(11.7);
  });

});

describe ('jupiterAge', function() {

  it("returns user's age on Jupiter", function() {
    let jupiter = test.jupiterAge(22);
    expect(parseFloat(jupiter)).toEqual(1.85);
  });

});
describe ('youDead', function() {

  it("predicts life expectancy ratio", function() {
    let deadByDate = test.youDead(22, 44);
    expect(deadByDate).toEqual(1);
  });

});
