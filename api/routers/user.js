const { Router } = require('express');

const userController = require('../controllers/user');

const userRouter = Router();

userRouter.post("/register", userController.register);
userRouter.get("/:id", userController.show);

module.exports = { userRouter }
