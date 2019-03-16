import {Pickle} from './../src/backEnd.js';
const today= new Date();

function randomCase(){
  const randomDay=Math.floor((Math.random()*28) + 1);
  const randomMonth=Math.floor((Math.random()*12) + 1);
  const randomYear=Math.floor(Math.random() * (2019 - 1900 + 1) ) + 1900;
  const strDay=randomDay.toString();
  let strMonth;
  if(randomMonth<10){
    strMonth="0"+randomMonth.toString();
  } else{
    strMonth=randomMonth.toString();
  }
  const strYear=randomYear.toString();
  const fakeCase = new Pickle(strYear,strMonth,strDay);
  return fakeCase;
}

describe('Space Age Detective', function(){
  const trialRun= randomCase();
  const birthday= new Date;
  const diff=today-birthday;
  const years=diff/1000/60/60/24/365.2422;
  const age=years.toFixed(2);
  // const planets=["earth","mercury","venus","mars","jupiter"];

  it('detects age from given date',function(){
    expect(trialRun.calculateAge()).toEqual(age);
  });


  it('gives life expectancy variant to planet',function(){
    expect(trialRun.yearsConvert());

  });

});
