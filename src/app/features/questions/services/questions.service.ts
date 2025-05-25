import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedResponse } from '../../../shared/interfaces/paged-response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QuestionResponse } from '../../../shared/interfaces/question-response';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

	private baseUrl = 'https://localhost:7080/quiz-collections';

	constructor(private http: HttpClient) { }

	getQuizCollections(collectionId: string, pageNumber: number): Observable<PagedResponse<QuestionResponse>> {

		let params = new HttpParams()
			.set('pageNumber', pageNumber);

		let apiUrl = this.baseUrl + `/${collectionId}/questions`;

		return this.http.get<PagedResponse<QuestionResponse>>(apiUrl, { params });
	}
}
