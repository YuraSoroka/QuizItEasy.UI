export interface SingleSelectQuestionResponse {
  Id: string;
  Text: string;
  Answers: Answer[];
}

export interface Answer {
  Id: string;
  Value: string;
}