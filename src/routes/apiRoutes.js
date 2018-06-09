import {Router} from 'express'
import availableForms from './availableForms';

const apiRoutes = Router();

apiRoutes.use('/available_forms', availableForms);

export default apiRoutes;