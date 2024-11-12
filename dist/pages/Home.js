"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Navbar_1 = require("../components/Navbar");
var Hero_1 = require("../components/Hero");
var Analytics_1 = require("../components/Analytics");
var Newsletter_1 = require("../components/Newsletter");
var Footer_1 = require("../components/Footer");
var react_1 = require("react");
var Home = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(Hero_1.default, {}), (0, jsx_runtime_1.jsx)(Analytics_1.default, {}), (0, jsx_runtime_1.jsx)(Newsletter_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Home;
