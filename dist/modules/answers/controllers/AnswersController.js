"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
const GetAnswerForQuestionService_1 = __importDefault(require("../services/GetAnswerForQuestionService"));
const VerifyAnswerForQuestionService_1 = __importDefault(require("../services/VerifyAnswerForQuestionService"));
class AnswersController {
    async getAnswerForQuestion(request, response) {
        const { questionId } = request.query;
        if (!questionId) {
            throw new AppError_1.default('Query parameter "questionId" was not provided');
        }
        const getAnswerForQuestionService = new GetAnswerForQuestionService_1.default();
        const answer = await getAnswerForQuestionService.execute(parseInt(questionId.toString(), 10));
        return response.json(answer);
    }
    async verifyAnswerForQuestion(request, response) {
        const { questionId } = request.query;
        if (!questionId) {
            throw new AppError_1.default('Query parameter "questionId" was not provided');
        }
        const { answer } = request.body;
        const verifyAnswerForQuestionService = new VerifyAnswerForQuestionService_1.default();
        const isAnswerRight = await verifyAnswerForQuestionService.execute(parseInt(questionId.toString(), 10), answer);
        return response.json(isAnswerRight);
    }
}
exports.default = AnswersController;
//# sourceMappingURL=AnswersController.js.map