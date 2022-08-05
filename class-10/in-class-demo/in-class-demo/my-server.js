'use strict';
console.log('image finder server is connected!!!');
//REQUIRES
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const getPhotos = require('./modules/my-photo.js');

//USE
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

//ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello from the Image Finder Server, have a great day!');
});
app.get('/photos', getPhotos);

app.get('*', (req, res) => {
  res.status(404).send('These are not the droids your looking 404.');
});

//LISTEN
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

