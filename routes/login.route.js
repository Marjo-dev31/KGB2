import express from 'express'
import { login } from '../controllers/login.controller.js';
import createJWT from '../middlewares/authentication.middleware.js';

const loginRoutes = express.Router();

loginRoutes.route('/')
.post(createJWT, login)

export default loginRoutes