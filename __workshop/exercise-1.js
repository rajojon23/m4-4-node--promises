// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code

	myPromise = new Promise((resolve, reject) => {

		const isString = (element) => typeof(element) === "string";	

	

		if (array.every(isString) === true){
			let newarr = [];
			array.forEach((word)=>{
				newarr.push(word.toUpperCase());
			})

			resolve(newarr);
		}
		else{
			reject('did not receive an array with strings');
		}

	});




};

const sortWords = (array) => {
  // write some code

	myPromise = new Promise((resolve, reject) => {

		const isString = (element) => typeof(element) === "string";	

		if (array.every(isString) === true){
			resolve(array.sort());
		}
		else{
			reject('did not receive an array with strings');
		}

	});
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
