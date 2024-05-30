import express from 'express';
import { getMissions } from '../controllers/mission.controller.js';

const missionRoutes = express.Router();

missionRoutes.route('/')
.get(getMissions);

export default missionRoutes;