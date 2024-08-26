import express from 'express';
import { getMissions, addMission, updateMission, deleteMission } from '../controllers/backoffice.controller.js';
import verifyToken from '../middlewares/authorization.middleware.js';
import isAdmin from '../middlewares/verifyrole.middleware.js';
import checkCountry from '../middlewares/specification.middleware.js';

const backofficeRoutes = express.Router();

backofficeRoutes.route('/')
.get(verifyToken, getMissions)
.post(verifyToken, isAdmin, checkCountry, addMission)

backofficeRoutes.route('/:id')
.put(verifyToken, isAdmin, updateMission)
.delete(verifyToken, isAdmin, deleteMission)

export default backofficeRoutes;