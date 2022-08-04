const axios = require('axios');
const express = require('express');
const app = express();


// async function getPhotos(req, res, next){
//   try {
//     let searchQueryFromTheFrontEnd = req.query.searchQuery;
//     let url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQueryFromTheFrontEnd}&format=json`;
//     let results = await axios.get(url);
//     console.log('results from api', results.data.results);
//     let pictureInstance = results.data.results.map((pic) => new Photos(pic));
//     res.status(200).send(pictureInstance);
//   } catch (error) {
//     next(error);
//   }
// }

function getPhotos(req, res){
  let searchQueryFromTheFrontEnd = req.query.searchQuery;
  let url = `https://api.unsplash.com/search/photos`;
  let params ={
    client_id : process.env.UNSPLASH_API_KEY,
    query : searchQueryFromTheFrontEnd,
  };
  axios.get(url,{params})
    .then(results => results.data.results.map((pic) => new Photos(pic)))
    .then(pictureInstance => res.status(200).send(pictureInstance)
      .catch(error => console.log(error)));
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
