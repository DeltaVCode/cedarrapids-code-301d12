'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const Cat = require('./models/cats.js');

async function clear(){
  try {
    await Cat.deleteMany({});
    console.log('cats cleared from MONGO-DATA-BASE');
  } catch (error) {
    console.error(error)
  } finally {
    mongoose.disconnect();
  }
}
clear();