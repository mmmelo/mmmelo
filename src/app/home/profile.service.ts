import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
// import * as data from './../data-mmmelo.json';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private http: HttpClient) { }

  getProfileFile(): Observable<any> {
    // this.http.get("assets/data-mmmelo.json").subscribe( data => {
    //   return data;
    // })

    return this.http.get("assets/data-mmmelo.json").pipe(

    );


  }
}
