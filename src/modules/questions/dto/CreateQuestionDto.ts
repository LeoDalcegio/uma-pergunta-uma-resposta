import { CreateQuestionAnswerDto } from "./CreateQuestionAnswerDto";

export interface CreateQuestionDto {
  question: string;
  answer: string | CreateQuestionAnswerDto[];
}
