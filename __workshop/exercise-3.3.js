// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q:  `${lat}, ${lng}`,
  };
  
  // return something...

    opencage
    .geocode(requestObj)
    .then((data) => {
      console.log(JSON.stringify(data["results"][0]["formatted"]));
    })
    .catch((error) => {
      console.log('error', error.message);
    });
}

// getAddressFromPosition('48.8584', '2.2945');



module.exports = { getAddressFromPosition };