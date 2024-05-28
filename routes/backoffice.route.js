import express from 'express';
import { getMissions } from '../controllers/backoffice.controller.js';

const backofficeRoutes = express.Router();

backofficeRoutes.route('/')
.get(getMissions);

export default backofficeRoutes;