// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q:  address,
  };
  
  // return something...

    return opencage
    .geocode(requestObj)
    .then((data) => {
      // console.log(data["results"][0]["geometry"]);
      return data["results"][0]["geometry"];
    })
    .catch((error) => {
      // console.log('error', error.message);
      return {'error': error.message};
    });
};

// getPositionFromAddress(
//   '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
// );


module.exports = { getPositionFromAddress };
