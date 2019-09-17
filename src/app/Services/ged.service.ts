import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ged } from '../ModelClasse/Lot1_5/ged';
import { IndexDoc } from '../ModelClasse/Lot1_5';
import { Doc } from '../ModelClasse/Lot1_5/doc';

@Injectable({providedIn: 'root'})
export class GedService {
   public ged:Ged
   private GedUrl:String;
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
    
  }
  constructor(private http: HttpClient) {
    this.GedUrl="http://localhost:8080"
     

    

  }

  getAll(): Observable<Ged> {
    return this.http.get<Ged>(this.GedUrl+'/Ged');
  }
  setIndex(Idindex :any,Doc:Doc){
    console.log("hhhhh"+Idindex)
    const url = this.GedUrl+`/DocIndex/${Idindex}`; // DELETE api/heroes/42
    this.http.put(url,Doc,this.httpOptions).subscribe(res => {     
      console.log(res);
    }, err => {               
      console.log(err);
    });
  }
  deleteDoc(iddoc:any){
    this.http.delete(this.GedUrl+`/Doc/${iddoc}`,this.httpOptions).subscribe(
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
  getAllIndex():Observable<IndexDoc[]>{
    return this.http.get<IndexDoc[]>(this.GedUrl+'/DocIndex')
  }
  
  SaveIndex(doc:IndexDoc){
    console.log(doc)
   
   this.http.post<IndexDoc>(this.GedUrl+'/DocIndex/create',doc,this.httpOptions).subscribe(
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
