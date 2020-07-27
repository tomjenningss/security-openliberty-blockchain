import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Car} from '../car';

@Component({
  selector: 'app-addcar',
  templateUrl: './queryaspecificcar.component.html',
  styleUrls: ['./queryaspecificcar.component.css']
})
export class QueryaspecificcarComponent implements OnInit {

  name:string = '';
  car:string = '';
  objCar:Car;

  constructor(private httpClient:HttpClient) { }
  onNameKeyUp(event:any){
    this.name = event.target.value;
    
  }

  getProfile(){
    console.log(this.name);
    this.httpClient.get(`http://localhost:9081/org-2-ol-blockchain/System/Resources/Car?Key=${this.name}`)
    .subscribe(
      (data:any) => {
          console.log(data);
          this.objCar = data;
      }
      
    )
  }
  
  ngOnInit() {
        
  }

}
