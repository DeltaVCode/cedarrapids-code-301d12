'use strict';

//This is where I will declare my schema
//We are declaring what the data should look like
//Same as a header in an excel file.
//1. Bring in moongoose
//2. Create the schema to conform the data its our Data Bouncers
//3. Define the Modal so that we can write code to the mongoose and 'use' the schema.

//bring in mongoose
const mongoose = require('mongoose');

//extract the Schema property from the mongoose object
const { Schema } =  mongoose;

const catSchema = new Schema({
  //like the header of our table
  name: {type: String, require: true},
  color:{type: String, require: true},
  spayNeuter:{type: Boolean, require: true},
  location:{type: String, require: true}
});

//Define our model
//this is what will give our database functionality. It will assign the predefined schema to shape our data.
//this method takes in two properties a string and a schema:

const CatModel = mongoose.model('Cat', catSchema);

module.exports = CatModel;
