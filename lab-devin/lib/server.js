'use strict';

const http = require('http');
const querystring = require('querystring');
const url = require('url');
const cowsay = require('cowsay');
const bodyParser = require('./lib/body-parser.js');

const server = module.exports = http.createServer((req, res) => {

  req.url = url.parse (req.url);
  req.querystring = querystring.parse (req.url.query);

  if(req.url.pathname == '/cowsay' && req.method == 'GET') {

    if(req.url.query.text) {
      res.writeHead(200, {'content-Type': 'text/plain'});

      res.write(cowsay.say({}))
    }
  }
});
