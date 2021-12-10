import { Request, Response } from 'express';
import GetAnswerForQuestionService from '../services/GetAnswerForQuestionService';
import VerifyAnswerForQuestionService from '../services/VerifyAnswerForQuestionService';

export default class AnswersController {
  public async getAnswerForQuestion(request: Request, response: Response): Promise<Response> {
    const questionId = parseInt(request.params.questionId);

    const getAnswerForQuestionService = new GetAnswerForQuestionService();

    const answer = await getAnswerForQuestionService.execute(questionId);

    return response.json(answer);
  }

  public async verifyAnswerForQuestion(request: Request, response: Response): Promise<Response> {
    const questionId = parseInt(request.params.questionId);

    const { answer } = request.body

    const verifyAnswerForQuestionService = new VerifyAnswerForQuestionService();

    const isAnswerRight = await verifyAnswerForQuestionService.execute(questionId, answer);

    return response.json(isAnswerRight);
  }
}
