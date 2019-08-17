import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../ModelClasse/user/user';
import { Doc } from '../ModelClasse/Lot1_5/doc';
import { resolve } from 'url';


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

    Login(pass:String){
      let param: any = {'password': pass};
       this.http.get<User>('//localhost:8080/User/var',{params: param}).subscribe(user=>{
         console.log(user)
         if (user!=null){
          localStorage.setItem('currentUser', JSON.stringify(user));
         }
      })
    }
    getDocumentUser(iduser:any):Observable<Doc[]>{
      let param: any = {'iduser': iduser};
     return this.http.get<Doc[]>('//localhost:8080/User/GetDocumentUser',{params: param})
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
   getAllUser():Observable<User[]>{

    return this.http.get<User[]>("//localhost:8080/AllUser")
   }
   deliteUser(id :number ){
    console.log("hhhhh"+id)
    const url = `//localhost:8080/User/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, this.httpOptions).subscribe(res => {     
      console.log(res);
     }, err => {               
      console.log(err);
     });
   }
   setUserValide(valide :number,id:number){
      console.log("hhhhh"+id)
      const url = `//localhost:8080/User/${id}`; // DELETE api/heroes/42
      return this.http.delete(url, this.httpOptions).subscribe(res => {     
        console.log(res);
      }, err => {               
        console.log(err);
      });
   }
   DeleteDocument(iddoc:any,iduser:any){
    this.http.delete<void>('//localhost:8080/User/Document/${iddoc}/${iduser}')
   }
   ifUserValide (pass:String):any{
    let param: any = {'password': pass};
    let valideUser=0
    this.http.get<any>('//localhost:8080/User/valide',{params: param}).subscribe(valide=>{
      console.log("user est :"+valide)
     valideUser=valide
   })
  }
  UpdateUserValide(valide:any,iduser:any){
    let param: any = {'valide':valide,'iduser':iduser};
    this.http.put('//localhost:8080/User/valide',this.httpOptions,{params:param}).subscribe(
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
   
}
