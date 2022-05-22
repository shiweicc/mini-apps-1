const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }).single('uploaded_file');
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

// POST request to submit JSON file
app.post('/', function(req, res) {
  upload(req, res, (err) => {
    if (err) {
      console.log('Error uploading file.');
      return;
    } else {
      console.log('File is uploaded!');

      fs.readFile(req.file.path, "utf8", (err, data)=> {
        if(err) {
          console.log('Error reading the uploaded file!');
          return;
        } else {
          console.log('Read file!')

          var data = flatten(JSON.parse(data));
          req.body = data;
          var csv = req.body;

          const filePath = path.join(__dirname, 'csvReports');

          fs.writeFile(filePath + '/csvReoprt.csv', csv, (err) => {
            if (err) {
              console.log('Error writing csv report!');
              return;
            } else {
              console.log('Write csv report!');
              res.redirect('/');
            }
          })
        }
      })
    }
  })
})

// Start server on a specified port
app.listen(port, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});