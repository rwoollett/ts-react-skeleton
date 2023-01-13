import express from 'express';
import defineApi from './api';
import * as BundleEnv from '../env';

let port:number = 0;
console.log(process.env.NODE_ENV);
console.log('env port', process.env.PORT);
console.log(BundleEnv.devServer, BundleEnv.devApi, BundleEnv.defaultPort);

// Find local API port
if (process.env.NODE_ENV === 'development') {
  port = BundleEnv.devApi.port;

} else if (process.env.PORT) {
    // Production env API portT
  port = Number.parseInt(process.env.PORT);
} else {
  // If env has no PORT, we will default to webpack'd env
  port = BundleEnv.defaultPort;
}

var app = express();
app.use(express.json());

app.use('/', express.static('dist'));

defineApi(app);
app.get(/.*/, function (req, res) {
  res.sendFile('index.html', { root: __dirname + "./../../dist" });
})

app.listen(port, function () {
  if (process.env.NODE_ENV === 'development') {
    console.log('Front-end: ', BundleEnv.devServer.host + ':' + BundleEnv.devServer.port);
    console.log('API: ',       BundleEnv.devServer.host + ':' + BundleEnv.devApi.port );

  } else {
    // default is a production mode to run server with bundled js and index.html
    // along with api served with node server (server.js)
    //   -- defined in package.json scripts.
    console.log('Both front-end and API are up!', port)
  }
});
