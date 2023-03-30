const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_USER, MONGO_PASS, MONGO_DBNAME} = process.env;
const MONGODB_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.eoqwdpr.mongodb.net/${MONGO_DBNAME}`;

const connectDB = async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  console.log('connected to db: ', MONGO_DBNAME, '...');
  
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
};

module.exports = connectDB;
