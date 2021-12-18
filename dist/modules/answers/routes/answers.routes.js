"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const AnswersController_1 = __importDefault(require("../controllers/AnswersController"));
const answersRouter = (0, express_1.Router)();
const answersController = new AnswersController_1.default();
answersRouter.get('/', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.QUERY]: {
        questionId: celebrate_1.Joi.number().required(),
    },
}), answersController.getAnswerForQuestion);
answersRouter.post('/verify', (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        answer: celebrate_1.Joi.string().required(),
    },
    [celebrate_1.Segments.QUERY]: {
        questionId: celebrate_1.Joi.number().required(),
    },
}), answersController.verifyAnswerForQuestion);
exports.default = answersRouter;
//# sourceMappingURL=answers.routes.js.map