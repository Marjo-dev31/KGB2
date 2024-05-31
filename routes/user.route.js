import express from 'express';
import { addUser, deleteUser, getUsers, updateUser } from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.route('/')
.get(getUsers)
.post(addUser)


userRoutes.route('/:id')
.put(updateUser)
.delete(deleteUser)


export default userRoutes;