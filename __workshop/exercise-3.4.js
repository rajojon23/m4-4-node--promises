// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");


const getDistanceFromIss = (address) => {

  let AfromP = getPositionFromAddress(address);
  let posIss = getIssPosition();


 return Promise.all([AfromP, posIss]).then((values) => {
  console.log(getDistance(values[0], values[1]));

});


};


// Euclidian distance between two points
const getDistance = (pos1, pos2) => {

  return Math.sqrt(
    Math.pow(Number(pos1.lat) - Number(pos2.lat), 2) + Math.pow(Number(pos1.lng) - Number(pos2.lon), 2)
  );
};

getDistanceFromIss("1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8");