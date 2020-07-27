import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-updatecar',
  templateUrl: './updatecar.component.html',
  styleUrls: ['./updatecar.component.css']
})
export class UpdatecarComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  owner:string = '';
  key:string = '';

  ownerEvent(event:any){
    this.owner = event.target.value; 
  }
  keyEvent(event:any){
    this.key = event.target.value; 
  }

  updateDetails(){
    console.log(this.owner);
    console.log(this.key);
    this.httpClient.post(`http://localhost:9081/org-2-ol-blockchain/System/Resources/Car`,
    {
      owner:this.owner,
      key:this.key
    })
    .subscribe(
      (data:any) => {
          console.log(data);
         }
      )
    }

  ngOnInit() {
  }

}
