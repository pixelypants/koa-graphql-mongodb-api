const mongoose = require('mongoose');

const initDB = () => {
  console.log("MongoD::MONGODB_PASS:", process.env.MONGODB_PASS)
  console.log("MongoDB::DEBUG:", process.env.DEBUG)
  
  if (process.env.DEBUG === "true"){
    mongoose.set('debug', true);
  }
  
  mongoose.connect(`mongodb+srv://koa-graphql:${process.env.MONGODB_PASS}@koa-graphql-cluster-g6ygk.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
}

module.exports = initDB;
