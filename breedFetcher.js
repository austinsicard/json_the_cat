const request = require('request'); // Require a library

const fetchBreedDescription = (breedName, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => { 
    // Checking for invalid domain name
    if (error) { 
      callback("Request failed: INVALID DOMAIN", null);
      return;
    }
    const data = JSON.parse(body);

    // Checking for invalid breed type
    if (data.length === 0) {
      callback("Error: Invalid Breed Type", null);
      return;
    }
    callback(error, data[0].description);
  });
};
// console.log(args);
// console.log(url);

// console.log('body:', body); // Print the HTML for the Google homepage.
// console.log(typeof body);
// console.log(data);
// console.log(typeof data);

module.exports = { fetchBreedDescription };