"use strict";

var _dva = _interopRequireDefault(require("dva"));

require("./index.css");

require("weui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1. Initialize
var app = (0, _dva["default"])(); // 2. Plugins
// app.use({});
// 3. Model
// app.model(require('./models/example').default);
// 4. Router

app.router(require('./router')["default"]); // 5. Start

app.start('#root');