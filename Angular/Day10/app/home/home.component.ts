import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number;
  myusername:string='';
  myobj={
    brand:"Renuka Group",
    year:2017,
    rank:1
  }
  constructor(private router:Router) { }

  ngOnInit() {
    this.myid=9;
    this.myusername="Sumit Raokhande";
  }
  onClick(value){    
    if(value==1){
      this.myid=8;
      this.router.navigate(['/PAGE1',this.myid]);

    }else if(value==2){
      this.myid=11;
      this.myusername='Osama Khan';
      this.router.navigate(['/PAGE2',this.myid,this.myusername])

    }else if(value==3){
      this.router.navigate(['/Follower']);

    }else if(value==4){
      this.myobj.brand="Google";
      this.myobj.year=2003;
      this.myobj.rank=1;
      this.router.navigate(['/QueryParameter'],{ queryParams: this.myobj })
    }
  }

}
