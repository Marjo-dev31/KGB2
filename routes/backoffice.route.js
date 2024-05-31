import express from 'express';
import { getMissions, addMission, updateMission, deleteMission } from '../controllers/backoffice.controller.js';
import verifyToken from '../middlewares/authorization.middleware.js';

const backofficeRoutes = express.Router();

backofficeRoutes.route('/')
.get(verifyToken, getMissions)
.post(verifyToken, addMission)

backofficeRoutes.route('/:id')
.put(verifyToken, updateMission)
.delete(verifyToken, deleteMission)

export default backofficeRoutes;