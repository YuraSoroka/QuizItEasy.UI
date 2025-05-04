import { HttpClient, HttpParams } from '@angular/common/http';
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

  	getQuizCollections(pageNumber:number, pageSize:number): Observable<PagedResponse<QuizCollectionItem>> {
  	  	let params = new HttpParams()
  	  		.set('pageNumber', pageNumber)
  	  		.set('pageSize', pageSize);
			
  	  	return this.http.get<PagedResponse<QuizCollectionItem>>(this.apiUrl, { params });
  	}

}
