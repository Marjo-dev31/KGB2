import express from 'express';
import { getMissions, addMission, updateMission, deleteMission } from '../controllers/backoffice.controller.js';

const backofficeRoutes = express.Router();

backofficeRoutes.route('/')
.get(getMissions)
.post(addMission)

backofficeRoutes.route('/:id')
.put(updateMission)
.delete(deleteMission)

export default backofficeRoutes;