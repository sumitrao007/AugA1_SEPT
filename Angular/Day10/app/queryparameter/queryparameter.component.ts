import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  queryobj={};
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap
    .subscribe(param=>{
      this.queryobj={
        mybrand:param.get('brand'),
        myyear: param.get('year'),
        myrank: param.get('rank')
      }
    })

  }

}
