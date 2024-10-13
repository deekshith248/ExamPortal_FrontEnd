import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpClient
  ) { }

  public  createUser(user:User):Observable<any>{
    return this.httpClient.post(`${baseURL}/user/`,user)
    
  }

  public getUser(userName:string):Observable<any>{
    return this.httpClient.get(`${baseURL}/${userName}`)
  }
}