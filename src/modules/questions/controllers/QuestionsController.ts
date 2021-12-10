import { Request, Response } from 'express';
import { CreateQuestionDto } from '../dto/CreateQuestionDto';
import CreateQuestionService from '../services/CreateQuestionService';
import GetRandomQuestionService from '../services/GetRandomQuestionService';

export default class QuestionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { question, answer } = request.body;

    const createQuestionDto: CreateQuestionDto = {
      question,
      answer,
    };

    const createQuestionService = new CreateQuestionService();

    const questionCreated = await createQuestionService.execute(createQuestionDto);

    return response.json(questionCreated);
  }

  public async getRandom(_request: Request, response: Response): Promise<Response> {
    const getRandomQuestionService = new GetRandomQuestionService();

    const question = await getRandomQuestionService.execute();

    return response.json(question);
  }
}
