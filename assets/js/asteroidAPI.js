import apiKey from './../../.env';

export class AsteroidApi {

  constructor() {
    this.potHaz = [];
  }

  getPotHaz() {
    let that = this;
    let currentPage = 0;
    const totalPages = 5;
    while (currentPage < totalPages) {


      let apiCall = new Promise(function(resolve, reject) {
        console.log("apicall started");
        let request = new XMLHttpRequest();
        let url = `https://api.nasa.gov/neo/rest/v1/neo/browse?page=${currentPage}&api_key=eNXCT20gHf4OAbNMJlPXJBvxWiBgR0r9DSyoVSH0`;
        console.log(url);
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        };
        request.open("GET", url, true);
        request.send();
        console.log("apicall sent");
      });

      apiCall.then(function(response) {
        console.log("apicall response");
        let body = JSON.parse(response);
        for (var i = 0; i < body.near_earth_objects.length; i++) {
          if (body.near_earth_objects[i].is_potentially_hazardous_asteroid === true){
            that.potHaz.push(body.near_earth_objects[i]);
            console.log(body.near_earth_objects[i]);
          }
        }
      });
      currentPage ++;
    }
  }

}
