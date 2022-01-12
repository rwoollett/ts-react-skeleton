// External libraries
import express from 'express';

// Local files
import defineApi from './api';

import * as BundleEnv from '../env';

// set default ports for webpack env if no ENV port set
// In mode production the API is on server AND
// react frontend is static page index.html at path /.
let port:number = 0;
if (process.env.PORT) {
    port = Number.parseInt(process.env.PORT);
} else if (process.env.NODE_ENV === 'development') {
  port = BundleEnv.devApi.port;
} else {
  // If env has no PORT, we will default to webpack'd env
  port = BundleEnv.defaultPort;
}

var app = express();
app.use(express.json());

// We serve the bundle folder, which
// should contain an `index.html` and
// a `bundle.js` file only.
//app.use(express.static('dist'));
app.use('/', express.static('dist'));

// We define the API routes here
defineApi(app);
app.get(/.*/, function (req, res) {
  res.sendFile('index.html', { root: __dirname + "./../../dist" });
})

app.listen(port, function () {
  console.log('Both front-end and API are up!', port)
});
