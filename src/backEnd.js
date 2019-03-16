export class Pickle{
  constructor(year,month,day){
    this.year=year;
    this.month=month;
    this.day=day;
  }

  calculateAge(){
    const today= new Date();
    const birthday= new Date;
    const diff=today-birthday;
    const years=diff/1000/60/60/24/365;
    return years.toFixed(2);
  }




  yearsConvert(){
    // const mercuryAge = (bday.getFullYear())/0.24;
    // const venusAge = (bday.getFullYear())/0.62;
    // const marsAge = (bday.getFullYear())/1.88;
    // const jupiterAge = (bday.getFullYear())/11.86;
    // return confusion;
  }
}
