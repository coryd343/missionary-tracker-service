const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.get("/", (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  for (i = 1; i < 7; i++) {
      //write a response to the client
      res.write('<h' + i + ' style="color:blue">Missionary-Tracker Back End</h' + i + '>'); 
  }
  res.end(); //end the response
});

let index = require('./routes/index.js');
app.use('/index', index);

let users = require('./routes/users.js');
app.use('/users', users);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server up and running on port: " + (process.env.PORT || 3000));
});