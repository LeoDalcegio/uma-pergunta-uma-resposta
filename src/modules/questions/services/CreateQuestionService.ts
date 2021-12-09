import { Question } from '.prisma/client';
import AppError from '@shared/errors/AppError';
import { CreateQuestionDto } from '../dto/CreateQuestionDto';
import { PrismaClient } from '@prisma/client'

class CreateQuestionService {
  public async execute(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const prisma = new PrismaClient()

    const questionCreated = prisma.question.create({
      data: {
        description: createQuestionDto.question,
      }
    })



    return questionCreated;
  }
}

export default CreateQuestionService;