"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _gmail = require("../controllers/gmail.js");
var _whatsapp = require("../controllers/whatsapp.js");
var _passport = _interopRequireDefault(require("passport"));
var _auth = require("../services/auth.js");
var _usersController = require("../controllers/users.controller.js");
var _products = _interopRequireDefault(require("./products.router"));
var _users = _interopRequireDefault(require("./users.router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.json({
    message: "Petición desde el SERVIDOR -> ROUTER"
  });
});
router.use('/products', _products["default"]);
router.use('/auth', _users["default"]);
router.use('/notifications', NotificationRouter);
var _default = router;
exports["default"] = _default;