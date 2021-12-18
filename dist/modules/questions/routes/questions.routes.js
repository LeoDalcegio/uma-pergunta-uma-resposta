"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const QuestionsController_1 = __importDefault(require("../controllers/QuestionsController"));
const questionsRouter = (0, express_1.Router)();
const questionsController = new QuestionsController_1.default();
questionsRouter.post('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        question: celebrate_1.Joi.string().required(),
        answer: celebrate_1.Joi.string().optional(),
        answers: celebrate_1.Joi.array().optional(),
    },
}), questionsController.create);
questionsRouter.get('/random', questionsController.getRandom);
exports.default = questionsRouter;
//# sourceMappingURL=questions.routes.js.map