import {AsteroidApi} from './../assets/js/asteroidApi.js';
const moment = require("moment");

$(document).ready(function(){

  let data = new AsteroidApi();
  data.getPotHaz();


  $('#form').submit(function(event){
    event.preventDefault();



  });
});
