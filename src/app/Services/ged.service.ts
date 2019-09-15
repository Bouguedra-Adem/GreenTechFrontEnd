import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ged } from '../ModelClasse/Lot1_5/ged';

@Injectable({providedIn: 'root'})
export class GedService {
   public ged:Ged
   private GedUrl:String;
  constructor(private http: HttpClient) {
    this.GedUrl="http://localhost:8080"
     

    

  }

  getAll(): Observable<Ged> {
    return this.http.get<Ged>(this.GedUrl+'/Ged');
  }
}