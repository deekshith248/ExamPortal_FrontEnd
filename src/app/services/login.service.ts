import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, Subject } from 'rxjs';
import { User } from '../user';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  //generate Token

  public loginSubject=new Subject<boolean>();
  public generateToken(loginData:any){
    return this.httpClient.post(`${baseURL}/generate-token`,loginData)
  }

  public getCurrentUser(){
    return this.httpClient.get(`${baseURL}/current-user`);
  }

  //login user : set token in local storage

  public loginUser(token: any){
    localStorage.setItem('token',token);
    return true;
  }

  // is login :user logged in or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined||tokenStr=='' || tokenStr==null ){
      return false;
    }else{
      return true;
    }
  }

  //logout:remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    return true;
  }

  //getToken
  public getToken(){
    return localStorage.getItem('token');

  }

  // setting user in localstroage
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));

  }

  //getting user from localstorage
  public getUser(){
    // return localStorage.getItem('user')!=""?JSON.parse(localStorage.getItem('user')):null;
    let userStr=localStorage.getItem('user')
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      return null;
    }
  }

  //get User role
  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }
}
