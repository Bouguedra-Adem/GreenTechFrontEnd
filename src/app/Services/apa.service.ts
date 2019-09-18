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
    this.ApaUrl = 'http://localhost:8080';
  }

  getAllapa(): Observable<Apa[]> {
    return this.http.get<Apa[]>(this.ApaUrl+'/Apa');
  }

  CreatAPA(Ap: Apa) {
    this.http.post<Apa>(this.ApaUrl+'/SaveApa', Ap, this.httpOptions).subscribe(
      (val) => {console.log('Document ajouté avec succés', val); },
      response => {console.log('Une erreur s\'est produite !', response); },
      () => {console.log('The POST observable is now completed.'); });
  }
  DeleteAPA(id: number): Observable<any> {
    return this.http.delete(this.ApaUrl+`/Apa/${id}`, { responseType: 'text' });
  }
  UpdateDocument(id: number, value: any): Observable<any> {
    return this.http.put(this.ApaUrl+`/Apa/${id}`, value);
  }
}
