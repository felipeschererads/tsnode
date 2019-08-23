"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const USerSchema = new (0, _mongoose.Schema)({
  email: String,
  firstName: String,
  lastName: String
}, { timestamps: true })

exports. default = _mongoose.model.call(void 0, 'User', USerSchema)
