export class AgeClass{
  constructor(year){
    // this.day=day;
    // this.month=month;
    this.year=year;
  }

  dateToAge(bday){
    const today= new Date();
    const currYear = today.getFullYear();
    const age = currYear - bday;
    return age;
  }
  mercuryAge(age){
    let mercury = (age / .24).toFixed(2);
    return mercury;
  }

  venusAge(age){
    let venus = (age / .62).toFixed(2);
    return venus;
  }

  marsAge(age){
    let mars = (age / 1.88).toFixed(2);
    return mars;
  }

  jupiterAge(age){
    let jupiter = (age / 11.86).toFixed(2);
    return jupiter;

  }
  //create ratio so I can multiple planet ages with this return value
  youDead(age, lifeExpectInput){
    let deadByDate = ((lifeExpectInput - age)/ age);
    return deadByDate;
  }

}
