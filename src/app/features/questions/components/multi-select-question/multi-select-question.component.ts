import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { QUESTION_DATA } from '../../../../shared/utility/tokens/data.token';

@Component({
  selector: 'multi-select-question',
  imports: [],
  templateUrl: './multi-select-question.component.html',
  styleUrl: './multi-select-question.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectQuestionComponent { 
  constructor(@Inject(QUESTION_DATA) public data: string) {
  }
}
