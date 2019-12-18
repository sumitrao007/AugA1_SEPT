import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';

@Component({
  selector: 'app-my-httpservice',
  templateUrl: './my-httpservice.component.html',
  styleUrls: ['./my-httpservice.component.css']
})
export class MyHttpserviceComponent implements OnInit {

  post=[];
  ishidden:boolean=true;
  myid:string='';
  mytitle:string='';
  mybody:string='';
  constructor(private service:MyHttpService) {

   }

  //  get post start
  ngOnInit() {
    this.service.getPost()
    .subscribe(response=>{
    //  console.log(response.json());
      this.post=response.json();
    },
    error=>{
      alert("Unexpected Error Occur!!!!!!!");
    }
    )
  }

   //  get post End

   //Post Data Start Code

  onPost(title,body){

    let tempobj={
      title:title,
      body:body
    };

    this.service.CreatePost(tempobj)
    .subscribe(myresponse=>{
        console.log(myresponse.json());
        let id =myresponse.json().id;
        this.post.splice(0,0,{id:id,title:title,body:body});
    })
    
  }

  //Post Data Start Code

  //Update Data Start Code

  OnUpdate(item){
  this.ishidden=false;
    this.myid=item.id;
    this.mytitle=item.title;
    this.mybody=item.body;
  }

  UpdateData(){

    let myobj={
      id:this.myid,
      title:this.mytitle,
      body:this.mybody
    }
    this.service.UpdateDATA(myobj)
    .subscribe(response=>{
      console.log(response.json());
      let id =response.json().id;
      console.log("Update Id Is "+id);
    })
  }

  //Update Data End Code

  //Delete Data Start Code

  OnDelete(item){
    this.service.DeleteData(item)
    .subscribe(response=>{
      console.log(response.json());
    })
  }

   //Delete Data Start Code

}
