import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ressource } from '../ModelClasse/Lot4/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  RessourcesUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) {
    this.RessourcesUrl = 'http://localhost:8080';
  }

  getAllressources(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.RessourcesUrl+'/Ressources');
  }

  CreatRESSOURCE(ressource: Ressource) {
    this.http.post<Ressource>(this.RessourcesUrl+'/SaveRessource', ressource, this.httpOptions).subscribe(
      (val) => {console.log('Ressource ajouté avec succés', val); },
      response => {console.log('Une erreur s\'est produite !', response); },
      () => {console.log('The POST observable is now completed.'); });
  }
  DeleteRESSOURCE(id: number): Observable<any> {
    return this.http.delete(this.RessourcesUrl+`/Ressource/${id}`, { responseType: 'text' });
  }
  UpdateRESSOURCE(id: number, value: any): Observable<any> {
    return this.http.put(this.RessourcesUrl+`/Ressource/${id}`, value);
  }
}
