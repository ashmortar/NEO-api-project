import {AsteroidApi} from './../assets/js/asteroidAPI.js';


describe('AsteroidApi', function() {
  let testData = new AsteroidApi();
  testData.getPotHaz();

  beforeEach(function(done) {
    setTimeout(function() {
      done();
    }, 500);
  })

  it('should get back something from the api request', function(done) {
    expect("21277 (1996 TO5)").toEqual(testData.potHaz);
    done();
  });

});
