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
    expect(1).toEqual(testData.potHaz.length);
    done();
  });

});
