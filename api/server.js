const express = require('express');
var path = require('path');

const server = express();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const ApiRouter = require('../api/api-routes');

server.use(express.json());
server.use(morgan('combined'));
server.use(helmet());
server.use(cors());

server.use('/api', ApiRouter);
// server.get('/', (req, res) => {
//   res.status(200).json({ message: 'ITS WORKING!!!' });
// });

server.use(express.static(path.join(__dirname, '../imgs')));

server.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../imgs', 'index.html'));
});

module.exports = server;
