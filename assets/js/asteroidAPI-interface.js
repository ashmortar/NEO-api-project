import {AsteroidApi} from './../assets/js/asteroidApi.js';
const moment = require("moment");

$(document).ready(function(){
  let data = new AsteroidApi();
  data.getPotHaz();

  $('#go').click(function(){
    for (var i = 0; i < data.potHaz.length; i++) {
      if(data.potHaz[i].close_approach_data.length > 0) {

        $('#results').append("<li><strong>" + data.potHaz[i].name + "</strong><ul id='" + i + "'><li><a href='"+data.potHaz[i].nasa_jpl_url+"'>learn more</a></li></ul></li>");

        for (var j = 0; j < data.potHaz[i].close_approach_data.length; j++) {
          let id = i;
          $(`#${id}`).append("<li><strong>Close approach date "+ (j+1) +":</strong> " + data.potHaz[i].close_approach_data[j].close_approach_date + "</li><li><strong>Relative velocity:</strong> " + data.potHaz[i].close_approach_data[j].relative_velocity.kilometers_per_hour + " km</li><li><strong>Approach distance:</strong> " + data.potHaz[i].close_approach_data[j].miss_distance.kilometers + " km</li>")
        }

      } else {
        $('#results').append("<li><strong>"+ data.potHaz[i].name +"</strong><ul><li><a href='"+data.potHaz[i].nasa_jpl_url+"'>learn more</a></li><li>no recorded close approaches</li></ul></li>");
      }


    }

  });
});

// asteroid name
//  if close_approach_date.length > 0;
//  for (each date)
//      miss distance in km
//      relative velocity in km
