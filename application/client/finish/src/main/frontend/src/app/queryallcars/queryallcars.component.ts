import { Component, OnInit } from '@angular/core';
import {Car} from '../car';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-queryallcars',
  templateUrl: './queryallcars.component.html',
  styleUrls: ['./queryallcars.component.css']
})

export class QueryallcarsComponent implements OnInit {

  allCars:Car[];
  constructor(private httpClient:HttpClient){} 

    ngOnInit() {
      this.httpClient.get(`https://localhost:9445/org-1-ol-blockchain/System/Resources/Cars`)
    .subscribe(
      (data:any) => {
          console.log(data);
          this.allCars = data;
      }
    )       
  }
}

