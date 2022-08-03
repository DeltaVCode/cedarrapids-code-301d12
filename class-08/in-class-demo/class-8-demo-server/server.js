'use strict';
console.log('image finder server is connected!!!');


//REQUIRE
//====PACKAGES
const express = require('express');
//via npm
//the command to download it and save is 'npm install -S express
const cors = require('cors');
//Cross origin Resource sharing: allows connection between 2 local servers or websites: it can block or allow access to any list of urls.
//By default it allows localhost to talk to itself
require('dotenv').config();
const axios = require('axios');

//USE
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

//ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello from the Image Finder Server, have a great day!');
});




app.get('/photos', async (req, res, next) =>{
  try {
    //front end will send us a value for a search for photos
    let searchQueryFromTheFrontEnd = req.query.searchQuery;
    //then take that value and use it to construct a url to make a request to the api
    // console.log('!!!!! req search: ',searchQueryFromTheFrontEnd);

    let url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_API_KEY}&query=kittens&format=json`;

    let results = await axios.get(url);
    console.log('results from api', results.data.results);

    let pictureInstance = results.data.results.map((pic) => new Photos(pic));

    // console.log('!!!!url',url);

    res.status(200).send(pictureInstance);
  } catch (error) {
    next(error);
  }








  let url ='https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY';
});












app.get('*', (req, res) => {
  res.status(404).send('These are not the droids your looking 404.');
});










//CLASSES
class Photos{
  constructor(picture){
    // console.log('image source: ', picture.urls.regular);
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

//LISTEN
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

