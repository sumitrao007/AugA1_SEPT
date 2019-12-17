import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) { 

  }

  getPost(){
    return this.http.get(this.url);
  }

}
