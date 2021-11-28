const PORT = 4444;


const express = require('express');
const server = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


server.use(morgan('dev'));
server.use(bodyParser.json());
server.listen(PORT, async () => {
  console.log(`Server is running on ${ PORT }!`);
});