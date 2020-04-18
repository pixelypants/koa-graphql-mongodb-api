// https://medium.com/better-programming/how-to-setup-a-powerful-api-with-graphql-koa-and-mongodb-339cfae832a1
const Koa = require('koa');

const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');

require('dotenv').config()
const initDB = require('./database');

initDB();

const app = new Koa();

app.listen(9000);

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

app.on('error', err => {
  log.error('server error', err)
});
