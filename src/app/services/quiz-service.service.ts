import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private httpClient: HttpClient) {
  }
  public getQuizzes() {
    return this.httpClient.get(`${baseURL}/quiz/`)
  }

  public addQuiz(quiz){
    if(quiz && quiz.active=='Active'){
      quiz.active=true;
    }else{
      quiz.active=false;
    }
    return this.httpClient.post(`${baseURL}/quiz/`,quiz)
  }

  public delete(qid){
    return this.httpClient.delete(`${baseURL}/quiz/${qid}`)
  }

  public getSingleQuiz(qid){
    return this.httpClient.get(`${baseURL}/quiz/${qid}`)
  }

  public update(quiz){
    if(quiz && quiz.active=='Active'){
      quiz.active=true;
    }else{
      quiz.active=false;
    }
    return this.httpClient.put(`${baseURL}/quiz/`,quiz)

  } 

  public getQuizByCategoryID(catId){
    return this.httpClient.get(`${baseURL}/quiz/category/${catId}`);
  }

  public getActiveQuizzes(){
    return this.httpClient.get(`${baseURL}/quiz/active`);
  }

  public getActiveQuizzesofCategory(cid){
    return this.httpClient.get(`${baseURL}/quiz/category/active/${cid}`)
  }
}
