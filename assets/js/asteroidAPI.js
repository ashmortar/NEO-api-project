import apiKey from './../../.env';

export class AsteroidApi {

  constructor() {
    this.potHaz = "nothing";
  }

  getPotHaz() {
    let that = this;
    let apiCall = new Promise(function(resolve, reject) {
      console.log("apicall started");
      let request = new XMLHttpRequest();
      let url = `https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=50&api_key=ZIAijyAlc1SygwqRYgsFMiz0Ej9y4O4Z2QHCYXT6`;
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
      that.potHaz = body.near_earth_objects[0].name;
      console.log(that.potHaz);
    });

  }


}
