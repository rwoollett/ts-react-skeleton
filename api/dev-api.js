"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var api = require('./api');
var app = (0, express_1.default)();
app.use(express_1.default.json());
api.defineApi(app);
app.listen(8081, function () {
    console.log('API is up!');
});
//# sourceMappingURL=dev-api.js.map