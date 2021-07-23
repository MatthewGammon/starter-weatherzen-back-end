const router = require('express').Router({ mergeParams: true });
const controller = require('./observations.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');
const cors = require('cors');

router
  .route('/')
  .post(cors(), controller.create)
  .get(controller.list)
  .all(methodNotAllowed);

module.exports = router;
