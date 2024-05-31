import express from 'express'
import { login } from '../controllers/login.controller.js';

const loginRoutes = express.Router();

loginRoutes.route('/')
post(login)

export default loginRoutes