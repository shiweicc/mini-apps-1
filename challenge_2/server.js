const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const hostname = "127.0.0.1";
const port = 3000;

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

// Check if the server is working
app.get('/', function(req, res) {
   console.log(req.body);
  res.send('Hello World!')
});

// Start server on a specified port
app.listen(port, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});