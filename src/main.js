import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
// import './backEnd.js';
import $ from 'jquery';

import {AgeClass} from "./backEnd.js";


$(document).ready(function(){
  $("#ageForm").submit(function(event){
  event.preventDefault();
  $('.result').show();
  let bday = new AgeClass(parseInt($('#birthdayInput').val()));

  let lifeExpect = parseInt($('#lifeExpectInput').val());
  let age = bday.dateToAge(bday.year);
  // console.log(age);
  // console.log(bday.jupiterAge(age));
  let deadRatio = bday.youDead(age,lifeExpect);

  $('#mercuryAge').text(parseFloat(bday.mercuryAge(age)));
  $('#venusAge').text(parseFloat(bday.venusAge(age)));
  $('#marsAge').text(parseFloat(bday.marsAge(age)));
  $('#jupiterAge').text(parseFloat(bday.jupiterAge(age)));


  $('#merked').text(parseInt(bday.mercuryAge(age)* deadRatio));
  $('#venusDead').text(parseInt(bday.venusAge(age)* deadRatio));
  $('#marsDead').text(parseInt(bday.marsAge(age)* deadRatio));
  $('#jupiterDead').text(parseInt(bday.jupiterAge(age)* deadRatio));
  $('#earthDead').text(parseInt(age * deadRatio));



  // console.log()
  });
});
