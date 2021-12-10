import questionsRouter from '@modules/questions/routes/questions.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/questions', questionsRouter);

export default routes;
