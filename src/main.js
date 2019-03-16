import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
// import './backEnd.js';
import $ from 'jquery';

import {Pickle} from "./backEnd.js";


$(document).ready(function(){
  $("#ageForm").submit(function(event){
  event.preventDefault();
  $('.result').show();
  const years = $('#birthdayInput').val();
  // yearsConvert();
  // $('.mercuryAge').text(mercuryAge);
  // $('.venusAge').text(venusAge);
  // $('.marsAge').text(marsAge);
  // $('.jupiterAge').text(jupiterAge);

  });
});
