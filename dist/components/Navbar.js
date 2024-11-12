"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("react");
var ai_1 = require("react-icons/ai");
var react_router_dom_1 = require("react-router-dom");
var Navbar = function () {
    var _a = (0, react_1.useState)(false), nav = _a[0], setNav = _a[1];
    var handleNav = function () {
        setNav(!nav);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'w-full text-3xl font-bold text-[#00df9a]', children: "GREEN SIGHT" }), (0, jsx_runtime_1.jsxs)("ul", { className: 'hidden md:flex', children: [(0, jsx_runtime_1.jsx)("li", { className: 'p-4', children: "Home" }), (0, jsx_runtime_1.jsx)("li", { className: 'p-4', children: "Sobre" }), (0, jsx_runtime_1.jsx)("li", { className: 'p-4', children: "Servi\u00E7os" }), (0, jsx_runtime_1.jsx)("li", { className: 'p-4', children: "Contato" }), (0, jsx_runtime_1.jsx)("li", { className: 'p-4 border-2 border-[#00df9a] rounded-lg cursor-pointer bg-[#00df9a] text-white font-medium', children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/login", children: "Login" }) })] }), (0, jsx_runtime_1.jsx)("div", { onClick: handleNav, className: 'block md:hidden', children: nav ? (0, jsx_runtime_1.jsx)(ai_1.AiOutlineClose, { size: 20 }) : (0, jsx_runtime_1.jsx)(ai_1.AiOutlineMenu, { size: 20 }) }), (0, jsx_runtime_1.jsxs)("div", { className: nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'w-full text-3xl font-bold text-[#00df9a] m-4', children: "GREEN SIGHT" }), (0, jsx_runtime_1.jsxs)("ul", { className: 'uppercase p-4', children: [(0, jsx_runtime_1.jsx)("li", { className: 'p-4 border-b border-gray-600', children: "Home" }), (0, jsx_runtime_1.jsx)("li", { className: 'p-4 border-b border-gray-600', children: "Sobre" }), (0, jsx_runtime_1.jsx)("li", { className: 'p-4 border-b border-gray-600', children: "Servi\u00E7os" }), (0, jsx_runtime_1.jsx)("li", { className: 'p-4 border-b border-gray-600', children: "Contato" }), (0, jsx_runtime_1.jsx)("li", { className: 'p-4', children: "Login" })] })] })] }));
};
exports.default = Navbar;
