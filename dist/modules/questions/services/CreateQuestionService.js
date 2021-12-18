"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = __importDefault(require("../../../shared/prisma/prisma-client"));
class CreateQuestionService {
    async createMultipleAnswers(answers, createdQuestionId) {
        const answersArray = [];
        answers === null || answers === void 0 ? void 0 : answers.forEach((answerOption) => {
            answersArray.push({
                description: answerOption.description,
                isCorrectAnswer: answerOption.isCorrectAnswer,
                questionId: createdQuestionId,
            });
        });
        await prisma_client_1.default.answer.createMany({
            data: answersArray,
        });
    }
    async execute(createQuestionDto) {
        const { question, answer, answers } = createQuestionDto;
        const createdQuestion = await prisma_client_1.default.question.create({
            data: {
                description: question,
            },
        });
        if (answer) {
            await prisma_client_1.default.answer.create({
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
exports.default = CreateQuestionService;
//# sourceMappingURL=CreateQuestionService.js.map