import { CreateQuestionDto } from '../dto/CreateQuestionDto';
import prisma from '../../../shared/prisma/prisma-client';

class CreateQuestionService {
  public async execute(createQuestionDto: CreateQuestionDto) {
    const { question, answer } = createQuestionDto;

    const createdQuestion = await prisma.question.create({
      data: {
        description: question,
      },
    });

    if (typeof answer === 'string' || answer instanceof String) {
      await prisma.answer.create({
        data: {
          description: answer as string,
          isCorrectAnswer: true,
          question: {
            connect: {
              id: createdQuestion.id,
            },
          },
        },
      });

      return
    }

    for (const answerOption of answer) {
      await prisma.answer.create({
        data: {
          description: answerOption.description,
          isCorrectAnswer: answerOption.isCorrectAnswer,
          question: {
            connect: {
              id: createdQuestion.id,
            },
          },
        },
      });
    }
  }
}

export default CreateQuestionService;
