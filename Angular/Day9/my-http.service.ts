import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http ) {
   }

   getPost(){
     return this.http.get(this.url);
   }
 
   CreatePost(createdata){
      return this.http.post(this.url,JSON.stringify(createdata));

   }

   UpdateDATA(updateobj){

     return this.http.put(this.url+"/"+updateobj.id,JSON.stringify(updateobj));

   }

   DeleteData(item){

   return this.http.delete(this.url+"/"+item.id);

   }
   

}
