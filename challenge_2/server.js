const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const hostname = "127.0.0.1";
const port = 3000;
const flatten = require ('./flattenJSON');
const fs = require('fs');
const path = require('path');


// app.set('view engine', 'ejs');
app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

// Check if the server is working
app.get('/', function(req, res) {
  res.send('Hello World!')
});


app.post('/', function(req, res) {

  let data = JSON.parse(req.body.input);
  let csv = flatten(data);

  const filePath = path.join(__dirname, 'csvReports');

  fs.writeFile(filePath + '/csvReoprt.csv', csv, (err) => {
    if (err) {
      console.log('Cannot write the csv report!');
    } else {
      console.log('Writting the csv report succefully!');
    }
  })

  res.redirect('/');
})

// Start server on a specified port
app.listen(port, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});