import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AddCar } from '../addcar';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

@Injectable()
export class ServicesComponent implements OnInit {

  constructor(private httpclient: HttpClient) { }

  getcomments(): Observable<any>{
    return this.httpclient.get("http://localhost:9081/org-2-ol-blockchain/System/Resources/Cars")
  }

  
  getcommentsbyparameter(): Observable<any>{

    let params1 = new HttpParams().set('Key', 'CAR778');
    return this.httpclient.get("http://localhost:9081/org-2-ol-blockchain/System/Resources/Car", {params:params1})
  }

  //post(submitCar:AddCar): Observable<any>{
  //  return this.httpclient.post("http://localhost:9081/org-2-ol-blockchain/System/Resources/Car", submitCar);
  //}

  post():Observable<any>{
    let params1 = new HttpParams().set('Key', 'CAR100');
    return this.httpclient.post("http://localhost:9081/org-2-ol-blockchain/System/Resources/Car", 
    {params:params1});

  }

  ngOnInit() {
  }

}

