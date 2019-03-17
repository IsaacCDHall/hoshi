export class AgeConverter{
  constructor(day,month,year){
    this.day=day;
    this.month=month;
    this.year=year;
  }

  dateToAge(){
    const today= new Date();
    const birthday= new Date(`${this.year}-${this.month}-${this.day}`);
    // const difference=today-birthday;
    // //time in day
    // const years=difference/1000/60/60/24/365;
    // return years.toFixed(2);

  }




  yearsConvert(){

  }
}
