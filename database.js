const mongoose = require('mongoose');

const initDB = () => {
  console.log("MongoDB Pass:", process.env.MONGODB_PASS)
  mongoose.connect(`mongodb+srv://koa-graphql:${process.env.MONGODB_PASS}@koa-graphql-cluster-g6ygk.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
}

module.exports = initDB;
