import {Router} from 'express'
import {supportedForms} from '../features/conjuction';
const routes = Router();

routes.get('/', (req, res) =>{
  res.status(200);
  res.json(supportedForms);
})

export default routes;