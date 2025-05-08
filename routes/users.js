const express = require('express');
const userController = require('../controllers/users');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/', userController.createUser);

router.route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;