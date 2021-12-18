import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AnswersController from '../controllers/AnswersController';

const answersRouter = Router();
const answersController = new AnswersController();

answersRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      questionId: Joi.number().required(),
    },
  }),
  answersController.getAnswerForQuestion,
);

answersRouter.post(
  '/verify',
  celebrate({
    [Segments.BODY]: {
      answer: Joi.string().required(),
    },
    [Segments.QUERY]: {
      questionId: Joi.number().required(),
    },
  }),
  answersController.verifyAnswerForQuestion,
);

export default answersRouter;
