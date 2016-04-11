
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 3000);
app.use(express.static(`${__dirname}/.tmp`));
app.use(express.static(`${__dirname}/public`));

server.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
