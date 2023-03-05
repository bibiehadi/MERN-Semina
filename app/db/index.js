const mongoose = require('mongoose');

const { urlDb } = require('../config');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.URL_MONGO_DB, () => {
  console.log('Connected to MongoDb');
});

const db = mongoose.connection;

module.exports = db;
