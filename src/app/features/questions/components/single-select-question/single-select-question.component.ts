import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { DATA } from '../question-view/question-view.component';

@Component({
  selector: 'single-select-question',
  imports: [],
  templateUrl: './single-select-question.component.html',
  styleUrl: './single-select-question.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleSelectQuestionComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.data);
  } 
  //@Input() data!: any;
  constructor(@Inject(DATA) public data: string) {}
}
