import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { QUESTION_DATA } from '../../../../shared/utility/tokens/data.token';
import { SingleSelectQuestionResponse } from '../../interfaces/single-select-question-response';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { QuestionData } from '../../../../shared/models/question-data.model';
import { SingleSelectQuestionsService } from '../../services/single-select-questions.service';

@Component({
  selector: 'single-select-question',
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    RadioButtonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ],
  templateUrl: './single-select-question.component.html',
  styleUrl: './single-select-question.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SingleSelectQuestionComponent {

  questionNumber: number;
  answerId!: string;
  public singleSelectQuestion!: SingleSelectQuestionResponse;

  constructor(
    @Inject(QUESTION_DATA) private data: QuestionData,
    private singleSelectQuestionService: SingleSelectQuestionsService
  ) {
    this.singleSelectQuestion = JSON.parse(data.questionData) as SingleSelectQuestionResponse;
    this.questionNumber = data.questionNumber;
    console.log(this.singleSelectQuestion);
    console.log(data);
  }

  checkAnswer(selectedAnswerId: string){
    this.singleSelectQuestionService.checkSingleSelectAnswer(
      this.singleSelectQuestion.id, 
      selectedAnswerId
    )
    .subscribe(e => console.log(e));
  }
}
