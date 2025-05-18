import { ChangeDetectionStrategy, Component, InjectionToken, Injector, OnInit, Type } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { Observable, of } from 'rxjs';
import { PagedResponse } from '../../../../shared/interfaces/paged-response';
import { QuestionResponse } from '../../../../shared/interfaces/question-response';
import { CommonModule } from '@angular/common';
import { PaginationModel } from '../../../../shared/models/pagination.model';
import { ActivatedRoute } from '@angular/router';
import { SingleSelectQuestionResponse } from '../../interfaces/single-select-question-response';
import { SingleSelectQuestionComponent } from '../single-select-question/single-select-question.component';
import { MultiSelectQuestionComponent } from '../multi-select-question/multi-select-question.component';

@Component({
  selector: 'question-view',
  imports: [CommonModule],
  templateUrl: './question-view.component.html',
  styleUrl: './question-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionViewComponent implements OnInit {

  paginationModel : PaginationModel = new PaginationModel(1);
  pagedResponse$: Observable<PagedResponse<QuestionResponse>> = of();

  componentMap: Record<string, Type<any>> = {
    SingleSelectQuestion: SingleSelectQuestionComponent,
    MultiSelectQuestion: MultiSelectQuestionComponent
  };

  constructor(
    private questionService: QuestionsService,
    private route: ActivatedRoute,
    private injector: Injector){ }
  
  ngOnInit(): void {
    let collectionId = this.route.snapshot.paramMap.get('collectionId');
    
    this.pagedResponse$ = this.questionService.getQuizCollections(
      collectionId!, 
      this.paginationModel.pageNumber);
  }

  isJson(str: string): boolean {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  getSingleSelectResponse(json: string): SingleSelectQuestionResponse{
    return JSON.parse(json) as SingleSelectQuestionResponse;
  }


  createInjector(data: string): Injector {
    return Injector.create({
      providers: [{ provide: DATA, useValue: data }],
      parent: this.injector
    });
  }
}

export const DATA = new InjectionToken<any>('DATA');
