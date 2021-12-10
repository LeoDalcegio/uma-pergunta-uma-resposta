import prisma from '../../../shared/prisma/prisma-client';

class VerifyAnswerForQuestionService {
  public async execute(questionId: number, answerToVerify: string): Promise<boolean> {
    const answer = await prisma.answer.findMany({
      where: {
        questionId: questionId,
        isCorrectAnswer: true
      }
    })

    const answerFound = answer.find(a => {
      a.description === answerToVerify
    })

    return !!answerFound;
  }
}

export default VerifyAnswerForQuestionService;
