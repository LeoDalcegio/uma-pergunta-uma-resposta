import { Request, Response } from 'express';
import { CreateQuestionDto } from '../dto/CreateQuestionDto';
import CreateQuestionService from '../services/CreateQuestionService';

export default class QuestionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { question, answer } = request.body;

    const createQuestionDto: CreateQuestionDto = {
      question,
      answer
    };

    const createQuestionService = new CreateQuestionService();

    const questionCreated = await createQuestionService.execute(createQuestionDto);

    return response.json(questionCreated);
  }
}