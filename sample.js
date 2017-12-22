// 'use latest';

const bodyParser = require('body-parser');
const express = require('express');
const Webtask = require('webtask-tools');

const server = express();
server.use(bodyParser.json());

server.post('/', (req, res) => {
  console.log('test');
  res.json({
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: 'Long pants, short sleeves, jacket in the afternoon',
      },
      shouldEndSession: true,
    },
    sessionAttributes: {},
  });
});

module.exports = Webtask.fromExpress(server);
