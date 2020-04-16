const mongoose = require('mongoose');
const pass = "xxx"

const initDB = () => {
  mongoose.connect(`mongodb+srv://koa-graphql:${pass}@koa-graphql-cluster-g6ygk.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
}

module.exports = initDB;
