// src/routes/index.ts
import { Router } from 'express';
import users from './users.routes';
import sessions from './sessions.routes';

const routes = Router();

routes.use('/users', users);
routes.use('/sessions', sessions);

export default routes;
