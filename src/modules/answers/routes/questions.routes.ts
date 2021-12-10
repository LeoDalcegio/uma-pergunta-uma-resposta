import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import QuestionsController from '../controllers/AnswersController';

const questionsRouter = Router();
const questionsController = new QuestionsController();

questionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      question: Joi.string().required(),
      answer: Joi.string().required(),
    },
  }),
  questionsController.create,
);

questionsRouter.get(
  '/random',
  questionsController.getRandom,
);

export default questionsRouter;
