'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// USE
// implement express
const app = express();

// middleware its like our bouncer....
app.use(cors());

//npm install mongoose this will bring in mongoose.
const mongoose = require('mongoose');


//we shoulds create models folder and a file for our model and schema for cats
const Cat = require('./models/cats.js');


//Make sure we can connect to our DB
//Add the actual connect call to mongo using mongoose!
mongoose.connect(process.env.DB_URL);



//add valiation to confirm we are wired up to our Mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});





// define PORT validate env is working
const PORT = process.env.PORT || 3002;

// ROUTES
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
});


app.get('/cats', getCats);


async function getCats(request, response, next){
  try {
    //look at the documentation
    let results = await Cat.find();
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }

}



//star do?
app.get('*', (request, response) => {
  response.status(404).send('Not available');
});








// ERROR
// eslint-disable-next-line no-unused-vars
app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});

// LISTEN
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
