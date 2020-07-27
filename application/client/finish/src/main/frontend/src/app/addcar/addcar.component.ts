import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }
 
  make:string = '';
  model:string = '';
  color:string = '';
  owner:string = '';
  key:string = '';

  makeEvent(event:any){
    this.make = event.target.value; 
  }
  modelEvent(event:any){
    this.model = event.target.value; 
  }
  colorEvent(event:any){
    this.color = event.target.value; 
  }
  ownerEvent(event:any){
    this.owner = event.target.value; 
  }
  keyEvent(event:any){
    this.key = event.target.value; 
  }
  
  submitDetails(){
    console.log(this.make);
    console.log(this.model);
    console.log(this.color);
    console.log(this.owner);
    console.log(this.key);

    this.httpClient.post(`http://localhost:9081/org-2-ol-blockchain/System/Resources/Car`,
    {
      make:this.make,
      model:this.model,
      color:this.color,
      owner:this.owner,
      key:this.key
    })
    .subscribe(
      (data:any) => {
          console.log(data);
         }
      )
    }
    
}
