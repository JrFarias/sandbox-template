const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const swagger = require('swagger-koa');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');

require('dotenv').config();

const myRouter = require('./src/router');

const server = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

const apis = `./src/api/${fs.readdirSync('src/api').join(',')}`;

server.use(swagger.init({
  apiVersion: '1.0',
  swaggerVersion: '1.0',
  basePath: `${process.env.HOST}:${port}`,
  swaggerURL: '/swagger',
  swaggerJSON: '/api-docs.json',
  swaggerUI: path.join(__dirname, 'public', 'swagger'),
  apis: [apis]
}));

server.use(serve(path.join(__dirname, 'public')));

router.get('*', async (ctx, next) => {
  ctx.body = `<html><body>olar</body></html>`;
});

server.use(helmet())
server.use(bodyParser())
server.use(router.routes())
  .use(router.allowedMethods());

myRouter(router);

server.listen(port, function() {
  console.log('Server running on port ' + port);
});
