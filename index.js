const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
let breed = args[0];

fetchBreedDescription(breed, (error, description) => {

  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});

