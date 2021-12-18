"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = __importDefault(require("../../../shared/prisma/prisma-client"));
class GetRandomQuestionService {
    async execute() {
        const question = await prisma_client_1.default.$queryRaw `SELECT * FROM questions ORDER BY RANDOM() LIMIT 1`;
        return question;
    }
}
exports.default = GetRandomQuestionService;
//# sourceMappingURL=GetRandomQuestionService.js.map