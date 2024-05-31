import express from 'express';
import { getMissionsDetails } from '../controllers/mission.controller.js';

const missionRoutes = express.Router();

missionRoutes.route('/')
.get(getMissionsDetails);

export default missionRoutes;