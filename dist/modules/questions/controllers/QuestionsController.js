"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateQuestionService_1 = __importDefault(require("../services/CreateQuestionService"));
const GetRandomQuestionService_1 = __importDefault(require("../services/GetRandomQuestionService"));
class QuestionsController {
    async create(request, response) {
        const { question, answer, answers } = request.body;
        const createQuestionDto = {
            question,
            answer,
            answers,
        };
        const createQuestionService = new CreateQuestionService_1.default();
        const questionCreated = await createQuestionService.execute(createQuestionDto);
        return response.json(questionCreated);
    }
    async getRandom(_request, response) {
        const getRandomQuestionService = new GetRandomQuestionService_1.default();
        const question = await getRandomQuestionService.execute();
        return response.json(question);
    }
}
exports.default = QuestionsController;
//# sourceMappingURL=QuestionsController.js.map