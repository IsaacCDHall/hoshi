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
  console.log(bday.year);
  let age = bday.dateToAge(bday.year);
  console.log(age);
  console.log(bday.jupiterAge(age));

  $('#mercuryAge').text(parseFloat(bday.mercuryAge(age)));
  $('#venusAge').text(parseFloat(bday.venusAge(age)));
  $('#marsAge').text(parseFloat(bday.marsAge(age)));
  $('#jupiterAge').text(parseFloat(bday.jupiterAge(age)));

  });
});
