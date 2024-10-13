import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) {
   }

   public getQuestions(qId){
    return this.httpClient.get(`${baseURL}/question/quiz/all/${qId}`)

   }
   public addQuestion(question){
    return this.httpClient.post(`${baseURL}/question/`,question)
   }
   public removeQuestion(quesId){
    return this.httpClient.delete(`${baseURL}/question/${quesId}`);

   }

   public getSingleQUestion(quesId){
  return this.httpClient.get(`${baseURL}/question/${quesId}`);
   }

   public update(question){
    return this.httpClient.put(`${baseURL}/question/`,question)
   }

   public evalQuiz(questions){
    return this.httpClient.post(`${baseURL}/question/evaluate`,questions)
   }
}
