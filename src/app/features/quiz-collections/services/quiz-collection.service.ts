import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedResponse } from '../../../shared/interfaces/paged-response';
import { QuizCollectionItem } from '../interfaces/quiz-collection-item';

@Injectable({
  providedIn: 'root'
})
export class QuizCollectionService {

  private apiUrl = 'https://localhost:7080/quiz-collections';

  constructor(private http: HttpClient) {}

  getQuizCollections(): Observable<PagedResponse<QuizCollectionItem>> {
    return this.http.get<PagedResponse<QuizCollectionItem>>(this.apiUrl);
  }

}
