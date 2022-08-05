const axios = require('axios');
const express = require('express');
const app = express();


let cache = {};

async function getPhotos(req, res, next){
    //the front end will send a value to use to search for photos
   //Is the thing the user is requesting already in the cache?
    //we use key value pairs to store things in our cache. and our key should match the search term
    //so create a key so we can give a label to the thing we are putting in the cache.



  try {
    let searchQueryFromTheFrontEnd = req.query.searchQuery;

    let key = searchQueryFromTheFrontEnd + '-Data';
     //1000 milliseconds in a second: 60 seconds in a  minute: 60 minutes in an hour: 24 day: 30 month:
    let acceptableTimeToCache = 1000 * 60 * 60 * 24 * 30;
    console.log(acceptableTimeToCache);

    let testTimeToCache = 1000 * 10;
    //about ten seconds
    console.log(testTimeToCache);
    console.log('empty',cache);


    if(cache[key] && Date.now() - cache[key].timeStamp < testTimeToCache){
      //if it is already in cache give them that data from the cache.
      console.log('it is in the cache already');
      res.status(200).send(cache[key].data);
    } else {
      //we need to put it in the cache
      console.log('it is not in the cache yet');
      let url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQueryFromTheFrontEnd}&format=json`;
      let results = await axios.get(url);

      let pictureInstance = results.data.results.map((pic) => new Photos(pic));
      cache[key] = {
        data: pictureInstance,
        timeStamp: Date.now()
      };

      console.log(cache);
      
      res.status(200).send(pictureInstance);
    }
  
  } catch (error) {
    next(error);
  }
}

//CLASSES
class Photos{
  constructor(picture){
    this.src = picture.urls.regular;
    this.alt = picture.alt_description;
    this.artist = picture.user.name;
  }
}

//ERRORS
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(error.message);
});

module.exports = getPhotos;

// module.exports = { 1(), 2(), 3()}
