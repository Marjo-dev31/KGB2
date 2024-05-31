import express from 'express';
import { addUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/user.controller.js';

const userRoutes = express.Router();

userRoutes.route('/')
.get(getUsers)
.post(addUser)


userRoutes.route('/:id')
.put(updateUser)
.delete(deleteUser)
.get(getUserById)


export default userRoutes;