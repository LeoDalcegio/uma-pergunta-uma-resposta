import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import GetAnswerForQuestionService from '../services/GetAnswerForQuestionService';
import VerifyAnswerForQuestionService from '../services/VerifyAnswerForQuestionService';

export default class AnswersController {
  public async getAnswerForQuestion(request: Request, response: Response): Promise<Response> {
    const { questionId } = request.query;

    if (!questionId) {
      throw new AppError('Query parameter "questionId" was not provided');
    }

    const getAnswerForQuestionService = new GetAnswerForQuestionService();

    const answer = await getAnswerForQuestionService.execute(parseInt(questionId.toString(), 10));

    return response.json(answer);
  }

  public async verifyAnswerForQuestion(request: Request, response: Response): Promise<Response> {
    const { questionId } = request.query;

    if (!questionId) {
      throw new AppError('Query parameter "questionId" was not provided');
    }

    const { answer } = request.body;

    const verifyAnswerForQuestionService = new VerifyAnswerForQuestionService();

    const isAnswerRight = await verifyAnswerForQuestionService.execute(parseInt(questionId.toString(), 10), answer);

    return response.json(isAnswerRight);
  }
}
