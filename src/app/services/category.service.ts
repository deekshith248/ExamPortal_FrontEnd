import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClent:HttpClient) {
   }
   public getAllCategories():Observable<any>{
    return this.httpClent.get(`${baseURL}/category/`)
  }
  public addCategoty(category):Observable<any>{
    return this.httpClent.post(`${baseURL}/category/`,category)
  }
  public delete(categoryId){
    return this.httpClent.delete(`${baseURL}/category/${categoryId}`)
  }
}
