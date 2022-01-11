"use strict";
var express = require('express');
//var api = require('./api');
var app = express();
//app.use(express.json());
app.use('/', express.static('dist'));
app.listen(3000, function () {
    console.log('Both front-end and API are up!');
});
//# sourceMappingURL=prod-server.js.map