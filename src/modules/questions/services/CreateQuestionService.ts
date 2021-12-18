import { CreateQuestionDto } from '../dto/CreateQuestionDto';
import prisma from '../../../shared/prisma/prisma-client';
import { Answer } from '.prisma/client';
import { CreateQuestionAnswerDto } from '../dto/CreateQuestionAnswerDto';

class CreateQuestionService {
  private async createMultipleAnswers(answers: CreateQuestionAnswerDto[], createdQuestionId: number) {
    const answersArray = [] as Partial<Answer>[];

    answers?.forEach((answerOption) => {
      answersArray.push({
        description: answerOption.description,
        isCorrectAnswer: answerOption.isCorrectAnswer,
        questionId: createdQuestionId,
      });
    });

    await prisma.answer.createMany({
      data: answersArray as Answer[],
    });
  }

  public async execute(createQuestionDto: CreateQuestionDto) {
    const { question, answer, answers } = createQuestionDto;

    const createdQuestion = await prisma.question.create({
      data: {
        description: question,
      },
    });

    if (answer) {
      await prisma.answer.create({
        data: {
          description: answer,
          isCorrectAnswer: true,
          question: {
            connect: {
              id: createdQuestion.id,
            },
          },
        },
      });

      return;
    }

    if (answers) {
      await this.createMultipleAnswers(answers, createdQuestion.id);
    }
  }
}

export default CreateQuestionService;
