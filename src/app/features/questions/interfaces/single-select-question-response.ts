export interface SingleSelectQuestionResponse {
  id: string;
  text: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  value: string;
}