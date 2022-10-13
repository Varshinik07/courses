import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  addcourse=(data:any)=>{
    return this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",data)
  }
}
