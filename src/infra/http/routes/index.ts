import { Router } from 'express';
import questionsRouter from '../../../modules/questions/routes/questions.routes';
import answersRouter from '../../../modules/answers/routes/answers.routes';

const routes = Router();

routes.use('/questions', questionsRouter);
routes.use('/answers', answersRouter);

export default routes;
