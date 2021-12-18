"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
const prisma_client_1 = __importDefault(require("../../../shared/prisma/prisma-client"));
class GetAnswerForQuestionService {
    async execute(questionId) {
        const answer = await prisma_client_1.default.answer.findMany({
            where: {
                questionId,
                isCorrectAnswer: true,
            },
        });
        if (!answer || answer.length === 0) {
            throw new AppError_1.default(`Answer for question #${questionId} not found`, 404);
        }
        return answer;
    }
}
exports.default = GetAnswerForQuestionService;
//# sourceMappingURL=GetAnswerForQuestionService.js.map