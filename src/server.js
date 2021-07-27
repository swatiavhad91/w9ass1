const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('users.json');
const middleware = jsonServer.defaults();

server.use((req, res, next) => {
   setTimeout(() => next(), 20000);
});
server.use(middleware);
server.use(router);
server.listen(3000, () => {
   console.log(`JSON Server is running...`);
});jy