export class Pickle{
  constructor(year,month,day){
    this.year=year;
    this.month=month;
    this.day=day;
  }

  calculateAge(){
    const today= new Date();
    const birthday= new Date;
    const difference=today-birthday;
    //time in day
    const years=difference/1000/60/60/24/365;
    return years.toFixed(2);
  }




  yearsConvert(){
  
  }
}
