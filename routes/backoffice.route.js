import express from 'express';
import { getMissions, addMission } from '../controllers/backoffice.controller.js';

const backofficeRoutes = express.Router();

backofficeRoutes.route('/')
.get(getMissions)
.post(addMission)

export default backofficeRoutes;