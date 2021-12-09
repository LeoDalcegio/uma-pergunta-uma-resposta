import { Router } from 'express';
import QuestionController from '../controllers/QuestionController';
import { celebrate, Joi, Segments } from 'celebrate';

const questionsRouter = Router();
const questionController = new QuestionController();

questionsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  questionController.show,
);

questionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().precision(2).required(),
    },
  }),
  questionController.create,
);

export default questionsRouter;