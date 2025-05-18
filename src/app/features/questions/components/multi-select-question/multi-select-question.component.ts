import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { DATA } from '../question-view/question-view.component';

@Component({
  selector: 'multi-select-question',
  imports: [],
  templateUrl: './multi-select-question.component.html',
  styleUrl: './multi-select-question.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectQuestionComponent { 
  constructor(@Inject(DATA) public data: string) {}
}
