// Exercise 3.1 - `getIssPosition`
// -----------------------------

const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...
const getIssPosition = () => {
    return request('http://api.open-notify.org/iss-now.json') // 1
      .then((response) => JSON.parse(response))
      .then((parsedResponse) => {
        let lat = parsedResponse['iss_position']['latitude'];
        let lon = parsedResponse['iss_position']['longitude'];
        
        return {lat: lat, lon: lon}; // 2
      })
      .catch((err) => {
  
        return err.error ? JSON.parse(err.error) : err;
      });
  };
  
  // Testing
  // getIssPosition().then((result) => console.log(result)); 


  module.exports = { getIssPosition };
