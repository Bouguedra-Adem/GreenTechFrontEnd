import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apa } from '../ModelClasse/Lot2/apa';

@Injectable({
  providedIn: 'root'
})
export class ApaService {
  ApaUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) {
    this.ApaUrl = 'http://localhost:8080/Apa';
  }

  getAllapa(): Observable<Apa[]> {
    return this.http.get<Apa[]>('//localhost:8080/Apa');
  }

  CreatAPA(Ap: Apa) {
    this.http.post<Apa>('//localhost:8080/SaveApa', Ap, this.httpOptions).subscribe(
      (val) => {console.log('Document ajouté avec succés', val); },
      response => {console.log('Une erreur s\'est produite !', response); },
      () => {console.log('The POST observable is now completed.'); });
  }
  DeleteAPA(id: number): Observable<any> {
    return this.http.delete(`//localhost:8080/Apa/${id}`, { responseType: 'text' });
  }
  UpdateDocument(id: number, value: any): Observable<any> {
    return this.http.put(`//localhost:8080/Apa/${id}`, value);
  }
}
