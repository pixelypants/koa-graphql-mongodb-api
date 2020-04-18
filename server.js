// https://medium.com/better-programming/how-to-setup-a-powerful-api-with-graphql-koa-and-mongodb-339cfae832a1
const Koa = require('koa');

const logger = require('koa-logger')
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');

require('dotenv').config()
const initDB = require('./database');

initDB();

const app = new Koa();
app.use(logger())

app.listen(9000);

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

app.on('error', err => {
  log.error('server error', err)
});

console.log('\n > listening on port 9000');
console.log(' > Navigate to: http://localhost:9000/graphql \n');
