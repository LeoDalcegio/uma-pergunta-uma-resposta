import { Answer } from '.prisma/client';
import prisma from '../../../shared/prisma/prisma-client';

class GetAnswerForQuestionService {
  public async execute(questionId: number): Promise<Answer[]> {
    const answer = await prisma.answer.findMany({
      where: {
        questionId: questionId,
        isCorrectAnswer: true
      }
    })

    return answer;
  }
}

export default GetAnswerForQuestionService;
