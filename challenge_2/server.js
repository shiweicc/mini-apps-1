const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' }).single('uploaded_file');
const fileUpload = require("express-fileupload");
const app = express();
const bodyParser = require('body-parser');
const hostname = "127.0.0.1";
const port = 3000;
const flatten = require ('./flattenJSON');
const fs = require('fs');
const path = require('path');

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload());


// Check if the server is working
app.get('/', (req, res) => {
  res.send('Hello World!')
});


// POST request to submit JSON file
/***Using express-fileupload***/
app.post('/upload_json', (req, res) => {
  console.log('req.files', req.files.uploaded_file);
  console.log('here:', JSON.parse(req.files.uploaded_file.data));

  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }

  var filePath = path.join(__dirname, 'csvReports');
  var csv = flatten(JSON.parse(req.files.uploaded_file.data));


  fs.writeFile(filePath + '/csvReoprt.csv', csv, (err) => {
    if (err) {
      console.log('Error writing csv report!');
      return;
    } else {
      console.log('Write csv report!');
      res.send(csv);
    }
  })

});


// Start server on a specified port
app.listen(port, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});







/******* Using multer (Ajax doesn't work) *********/
// app.post('/upload_json', function(req, res) {
//   console.log('req.body: ', req.body);
//   console.log('req.files', req.files.uploaded_file);
//   console.log('here:', JSON.parse(req.files.uploaded_file.data));

//   const filePath = path.join(__dirname, 'csvReports');

//   upload(req, res, (err) => {
//     if (err) {
//       console.log('Error uploading file.');
//       return;
//     } else {
//       console.log('File is uploaded!');
//       console.log('here: ', req.body);

//       fs.readFile(req.file.path, "utf8", (err, data)=> {
//         if(err) {
//           console.log('Error reading the uploaded file!');
//           return;
//         } else {
//           console.log('Read file!')

//           var data = flatten(JSON.parse(data));
//           req.body = data;
//           var csv = req.body;

//           const filePath = path.join(__dirname, 'csvReports');

//           fs.writeFile(filePath + '/csvReoprt.csv', csv, (err) => {
//             if (err) {
//               console.log('Error writing csv report!');
//               return;
//             } else {
//               console.log('Write csv report!');
//               res.send(csv);
//             }
//           })
//         }
//       })
//     }
//   })
// })



/******Working code for form with a textarea********/
/*

app.post('/', (req, res) => {

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

  res.end();
});

*/