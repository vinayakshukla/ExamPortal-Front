import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http: HttpClient) { }
  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`);
  }
  public addQuiz(data:any){
    return this._http.post(`${baseUrl}/quiz/`,data);
  } 
  public deleteQuiz(qId:number){
    return this._http.delete(`${baseUrl}/quiz/${qId}`);
  }
}
