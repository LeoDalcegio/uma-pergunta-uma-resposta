import { PrismaClient } from '@prisma/client';
import { Question } from '.prisma/client';
import { CreateQuestionDto } from '../dto/CreateQuestionDto';

class CreateQuestionService {
  public async execute(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const prisma = new PrismaClient();

    const questionCreated = await prisma.question.create({
      data: {
        description: createQuestionDto.question,
      },
    });

    return questionCreated;
  }
}

export default CreateQuestionService;
