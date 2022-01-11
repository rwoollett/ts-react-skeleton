// External libraries
import express from 'express';

// Local files
//var api = require('./api');
import defineApi from './api';

// set default ports for webpack env if no ENV port set
let port:number = 0;
if (process.env.PORT) {
    port = Number.parseInt(process.env.PORT);
} else if (process.env.NODE_ENV === 'development') {
  port = 8081;
} else {
  port = 8080;
}

var app = express();
app.use(express.json());

// We serve the bundle folder, which
// should contain an `index.html` and
// a `bundle.js` file only.
app.use(express.static(__dirname + '/dist'));

// We define the API routes here
defineApi(app);
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})

app.listen(port, function () {
  console.log('Both front-end and API are up!', port)
});
