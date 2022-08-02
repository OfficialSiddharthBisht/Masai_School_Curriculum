const express = require('express');
const { createUser, userLogin, checkUserByToken } = require('../Handlers/user');

const userRouter = express.Router();

userRouter.post('/createUser', createUser);
userRouter.post('/login', userLogin);
userRouter.post('/checkUserByToken', checkUserByToken);


module.exports = {userRouter};