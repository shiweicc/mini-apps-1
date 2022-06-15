const express = require('express')
const db = require('./DB/index.js');
const path = require('path');
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'/public')));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

