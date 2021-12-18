import questionsRouter from '@modules/questions/routes/questions.routes';
import answersRouter from '@modules/answers/routes/answers.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/questions', questionsRouter);
routes.use('/answers', answersRouter);

export default routes;
