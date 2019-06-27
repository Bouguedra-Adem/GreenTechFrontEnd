import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../ModelClasse/user/user';
import { Doc } from '../ModelClasse/Lot1_5/doc';
import { LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

     
   
     httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    }
  constructor(private http:HttpClient) {

   }
   ngOnInit(): void {
    
     
   }

    Login(pass :String){
       this.http.get<User>('//localhost:8080/User/var?password=${pass}').subscribe(user=>{
         if (user!=null){
          localStorage.setItem('currentUser', JSON.stringify(user));
         }
      })
    }
    Logout(){
        localStorage.removeItem('currentUser');
      
     } 
     getCurrentUser():User{
       return JSON.parse(localStorage.getItem('currentUser')) as User 

     } 
    Regester(user:User):Boolean{
     console.log(user)
     var bool:boolean
    this.http.post<User>('//localhost:8080/User',user,this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
         bool=true;
      },
      response => {
        console.log('POST call in error', response);
        bool=false
      },
      () => {
        console.log('The POST observable is now completed.');
      });
      return bool
   }
   saveDemande(iddoc:any,iduser:any){
    this.http.put('//localhost:8080/User/Document/${iddoc}/${iduser}',null)
   }
   DeleteDemande(iddoc:any,iduser:any){
    this.http.delete('//localhost:8080/User/Document/${iddoc}/${iduser}',null)
   }
}
