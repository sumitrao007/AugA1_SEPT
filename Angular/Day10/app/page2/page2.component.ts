import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  myid:number;
  myusername:string='';
  constructor(private param:ActivatedRoute) { }

  
  ngOnInit() {

    this.param.paramMap
    .subscribe(param=>{

      this.myid=+param.get('id');
      this.myusername=param.get('username');
    })

  }

}
