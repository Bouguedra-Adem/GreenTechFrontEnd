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
      let param: any = {'password': pass};
       this.http.get<User>('//localhost:8080/User/var',{params: param}).subscribe(user=>{
         console.log(user)
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
    Regester(user:User){
     console.log(user)
    
    this.http.post<User>('//localhost:8080/User',user,this.httpOptions).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
        
      },
      response => {
        console.log('POST call in error', response);
       
      },
      () => {
        console.log('The POST observable is now completed.');
       
      });
      
   }
   saveDocument(iddoc:number,iduser:number){
     console.log(iddoc+''+iduser)
    let param: any = {'idDocument':iddoc,'iduser':iduser};
    this.http.put('//localhost:8080/User/Document',this.httpOptions,{params:param}).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
        
      },
      response => {
        console.log('POST call in error', response);
       
      },
      () => {
        console.log('The POST observable is now completed.');
       
      });
   }
   DeleteDocument(iddoc:any,iduser:any){
    this.http.delete('//localhost:8080/User/Document/${iddoc}/${iduser}',null)
   }
}
