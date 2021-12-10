import { Question } from '.prisma/client';
import prisma from '../../../shared/prisma/prisma-client';

class GetRandomQuestionService {
  public async execute(): Promise<Question | null> {
    const question = await prisma.$queryRaw<Question>`SELECT * FROM questions ORDER BY RANDOM() LIMIT 1`;

    return question;
  }
}

export default GetRandomQuestionService;
