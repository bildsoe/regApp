var express = require('express');
var app = express();
var pg = require('pg');

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connectionString = 'postgres://postgres:1234@localhost:5432/regApp';

var showForm = (req, res) => {

  var forms = [];

  pg.connect(connectionString, (err, client, done) => {
  
    if(err) {
      return console.error('error fetching client from pool', err);
    }

    // SQL Query > Select Data
    var query = client.query('SELECT * FROM reg1.form1');

    // Stream results back one row at a time
    query.on('row', function(row) {
        forms.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', function() {
        client.end();
        return res.json(forms);
    });

  });
  
};


console.log('logged into db');

//Set up static directory for serving static html
app.use(express.static(__dirname + '/public'));


var router = express.Router();

router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.route('/showForm')
  .get(showForm);

router.route('/test')
  .get((req, res) => {
    res.send('hello world');
  });


app.use('/', router);


app.listen(3000);
console.log('Server startet on port 3000');



