import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apa } from '../ModelClasse/Lot2/apa';

@Injectable({
  providedIn: 'root'
})
export class ApaService {
   ApaUrl:string;
  constructor(private http:HttpClient) { 
    this.ApaUrl="http://localhost:8080/Apa"
  }

getAllapa():Observable<Apa[]>{
  return this.http.get<Apa[]>("//localhost:8080/Apa");
}
}
