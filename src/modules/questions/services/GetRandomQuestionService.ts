import { PrismaClient } from '@prisma/client';
import { Question } from '.prisma/client';

class GetRandomQuestionService {
  public async execute(): Promise<Question | null> {
    const prisma = new PrismaClient();

    const question = await prisma.$queryRaw`SELECT * FROM questions ORDER BY RANDOM() LIMIT 1` as Question[];

    return question[0];
  }
}

export default GetRandomQuestionService;
