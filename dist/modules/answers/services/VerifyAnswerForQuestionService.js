"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = __importDefault(require("../../../shared/prisma/prisma-client"));
class VerifyAnswerForQuestionService {
    async execute(questionId, answerToVerify) {
        const answer = await prisma_client_1.default.answer.findMany({
            where: {
                questionId,
                isCorrectAnswer: true,
            },
        });
        const answerFound = answer.find((a) => a.description === answerToVerify);
        return !!answerFound;
    }
}
exports.default = VerifyAnswerForQuestionService;
//# sourceMappingURL=VerifyAnswerForQuestionService.js.map