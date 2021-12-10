import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AnswersController from '../controllers/AnswersController';

const answersRouter = Router();
const answersController = new AnswersController();

answersRouter.get(
  '/',
  celebrate({
    [Segments.PARAMS]: {
      questionId: Joi.number().required(),
    },
  }),
  answersController.getAnswerForQuestion,
);

answersRouter.get(
  '/verify',
  celebrate({
    [Segments.BODY]: {
      answer: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      questionId: Joi.number().required(),
    },
  }),
  answersController.verifyAnswerForQuestion,
);

export default answersRouter;
