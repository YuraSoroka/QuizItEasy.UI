import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleSelectQuestionsService {

  private baseUrl = 'https://localhost:7080/single-selects';

  constructor(private http: HttpClient) { }

  checkSingleSelectAnswer(questionId: string, selectedAnswer: string): Observable<boolean> {
    let apiUrl = this.baseUrl + `/${questionId}/check-answer`;
    
    const body = {
      questionId: questionId,
      answerId: selectedAnswer
    };
    
    return this.http.post<boolean>(apiUrl, body);
  }

}
