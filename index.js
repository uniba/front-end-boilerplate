
const http = require('http');
const express = require('express');
const logger = require('morgan');

const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(`${__dirname}/.tmp`));
app.use(express.static(`${__dirname}/public`));

server.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
