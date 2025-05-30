import { inject } from '@angular/core';
import type { ResolveFn } from '@angular/router';
import { QuestionsService } from '../services/questions.service';
import { PagedResponse } from '../../../shared/interfaces/paged-response';
import { QuestionResponse } from '../../../shared/interfaces/question-response';

export const questionViewResolver: ResolveFn<PagedResponse<QuestionResponse>> = (route) => {
  
  const collectionId = route.paramMap.get('collectionId')!;
  const pageNumber = +route.queryParamMap.get('pageNumber')!;

  return inject(QuestionsService).getQuizQuestion(collectionId, pageNumber);
};
