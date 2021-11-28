const PORT = 4444;


const express = require('express');
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes')

server.use(morgan('dev'));
server.use(bodyParser.json());
server.use('/points', router)


server.listen(PORT, async () => {
  console.log(`Server is running on ${ PORT }!`);
});