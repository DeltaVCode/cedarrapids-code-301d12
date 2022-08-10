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
app.use(express.json());





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
//how to handle new cats from the front end: POST them to dB
app.post('/cats', postCats);

//we must have path parameter. It will be the unknown id
//we will use a variable to capture that id like saying let id = id
//to create that  variable we add ':<variable-name> in place of the path parameter
app.delete('/cats/:id', deleteCats);

app.put('/cats/:id', putCats);



//Similar to our let search = req.query.search, now we are going to use the .body
//data from front end can be complicated so we send it on the body of the request object.
//POST http://localhost:3001/cats       grab cat object . 

async function postCats(req, res, next){
  console.log('!! req.body', req.body);
  
  try {
    //so just like the seed data lets use the .create() again...
                    //returns cat created after entering into our db
  //pass to frontend                
  let createdCat =  await Cat.create(req.body);
                  res.status(200).send(createdCat);
  } catch (error) {
    next(error);
  }
}


//8. so far we have used the path parameters from the request object
/** 
    req.query
    req.body
    req.params
    have to get the right one in the right place.
*/
async function deleteCats(req, res, next){
  let id = req.params.id
  try {
    //let us delete the cats from the database
    await Cat.findByIdAndDelete(id);
    //lets respond with a 200 cat delete
    res.status(200).send('Cat was Deleted');
  } catch (error) {
    next(error);
  }
}


async function putCats(request, response, next){
  try {
     let id = request.params.id;
      //data lives in the req object in the 'body'
     let data = request.body;
     //take 3 arguments
     //1. is the ID
     //2. is updated data object
     //3. is wher we give it an options object
     //This is a put() which says replace my entire object in the db with my new one.
     //patch we would replace an item or entry not the entire record. 
     let updatedCat = await Cat.findByIdAndUpdate(id,data,{new: true, overwrite: true});
    response.status(200).send(updatedCat);
  } catch (error) {
    next(error);
  }
}






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
