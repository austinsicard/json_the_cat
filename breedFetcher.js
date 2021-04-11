const request = require('request'); // Require a library

const args = process.argv.slice(2);
let breed = args[0];

let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("Request Failed: ", error);
    return;
  }
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("Error: Invalid Breed Type");
    return;
  }
  console.log(data[0].description);
});
// console.log(args);
// console.log(url);

// console.log('body:', body); // Print the HTML for the Google homepage.
// console.log(typeof body);
// console.log(data);
// console.log(typeof data);