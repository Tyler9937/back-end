const express = require('express');

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
// server.get('/', (req, res) => {
//   res.sendFile('../index.html');
// });

server.get('/', function(req, res) {
  res.sendFile(
    'C:/Users/Jrive/Desktop/Lambda projects/back-end/imgs/index.html'
  );
  //__dirname : It will resolve to your project folder.
});

module.exports = server;
