import {AsteroidApi} from './../assets/js/asteroidApi.js';
var moment = require("moment");

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

  $('#plot').click(function() {
    let x = [];
    let y1 = [];
    let y2 = []
    for (var k = 0; k < data.potHaz.length; k++) {
      x[k] = data.potHaz[k].name
      y1[k] = data.potHaz[k].estimated_diameter.kilometers.estimated_diameter_min;
      y2[k] = data.potHaz[k].estimated_diameter.kilometers.estimated_diameter_max;
    }

    let trace1 = {
      x: x,
      y: y1,
      name: "estimated diameter minimum",
      type: 'bar'
    };

    let trace2 = {
      x: x,
      y: y2,
      name: "estimated diameter maximum",
      type: 'bar'
    };

    let stuff = [trace1, trace2];
    var layout = {barmode: 'group'};


    Plotly.newPlot('graphOne', stuff, layout);

  })

});
