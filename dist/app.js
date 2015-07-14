'use strict';

var express = require('express');
var app = express();
var Sequelize = require('sequelize'),
    sequelize = new Sequelize('regApp', 'postgres', '1234', {
  dialect: 'postgres',
  port: 5433
});

sequelize.authenticate().then(function (err) {
  console.log('Connection has been established successfully.');
}, function (err) {
  console.log('Unable to connect to the database:', err);
});

app.get('/', function (req, res) {
  res.send('hello world');
});

console.log('Server startet on port 3000');

app.listen(3000);