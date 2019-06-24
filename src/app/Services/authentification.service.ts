import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../ModelClasse/user/user';
import { Doc } from '../ModelClasse/Lot1_5/doc';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 public Auth="visiteur"
  constructor(private http:HttpClient) {

   }

   findByPassword(pass :String):Observable<User>{
     return this.http.get<User>('//localhost:8080/User/var?password=${pass}')
   }  
   saveUser(user:User){
    this.http.post('//localhost:8080/User',user)
   }
   saveDemande(iddoc:any,iduser:any){
    this.http.put('//localhost:8080/User/Document/${iddoc}/${iduser}',null)
   }
   DeleteDemande(iddoc:any,iduser:any){
    this.http.delete('//localhost:8080/User/Document/${iddoc}/${iduser}',null)
   }
}
