import AppError from '@shared/errors/AppError';
import prisma from '@shared/prisma/prisma-client';
import { Answer } from '.prisma/client';

class GetAnswerForQuestionService {
  public async execute(questionId: number): Promise<Answer[]> {
    const answer = await prisma.answer.findMany({
      where: {
        questionId,
        isCorrectAnswer: true,
      },
    });

    if (!answer || answer.length === 0) {
      throw new AppError(`Answer for question #${questionId} not found`, 404);
    }

    return answer;
  }
}

export default GetAnswerForQuestionService;
