const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const hostname = "127.0.0.1";
const port = 3000;

// app.set('view engine', 'ejs');
app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

// Check if the server is working
app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.post('/upload_json', function(req, res) {
   res.send(req.body.input);
})

// Start server on a specified port
app.listen(port, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});