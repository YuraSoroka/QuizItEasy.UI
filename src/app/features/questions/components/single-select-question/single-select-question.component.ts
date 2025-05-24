import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { QUESTION_DATA } from '../../../../shared/utility/tokens/data.token';
import { SingleSelectQuestionResponse } from '../../interfaces/single-select-question-response';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'single-select-question',
  imports: [
    CommonModule,
    CardModule,
    DividerModule,
    RadioButtonModule,
    ReactiveFormsModule,
    FormsModule,
    StyleClassModule
  ],
  templateUrl: './single-select-question.component.html',
  styleUrl: './single-select-question.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SingleSelectQuestionComponent implements OnInit{

  answerId!: string;
  formGroup!: FormGroup;
  public singleSelectQuestion!: SingleSelectQuestionResponse;

  constructor(
    @Inject(QUESTION_DATA) public data: string
    ) {
    this.singleSelectQuestion = JSON.parse(data) as SingleSelectQuestionResponse;
    console.log(this.singleSelectQuestion);
    console.log(data);
  }

  ngOnInit() {
        this.formGroup = new FormGroup({
            selectedCategory: new FormControl()
        });
        console.log("oninit")
    }
}
