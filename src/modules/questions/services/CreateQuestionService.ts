import { PrismaClient } from '@prisma/client';
import { Question } from '.prisma/client';
import { CreateQuestionDto } from '../dto/CreateQuestionDto';

class CreateQuestionService {
  public async execute(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const prisma = new PrismaClient();

    const createdQuestion = await prisma.question.create({
      data: {
        description: createQuestionDto.question,
      },
    });

    await prisma.answer.create({
      data: {
        description: createQuestionDto.answer,
        isCorrectAnswer: true,
        question: {
          connect: {
            id: createdQuestion.id,
          },
        },
      },
    });

    return createdQuestion;
  }
}

export default CreateQuestionService;
