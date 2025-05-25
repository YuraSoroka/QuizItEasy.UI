export class QuestionData{
    
    constructor(questionNumber: number, questionData: string) {
        this.questionNumber = questionNumber;
        this.questionData = questionData;    
    }

    questionNumber: number;
    questionData: string;
}