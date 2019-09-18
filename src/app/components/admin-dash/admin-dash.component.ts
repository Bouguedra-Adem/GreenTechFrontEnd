import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { User } from 'src/app/ModelClasse/user/user';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { delay } from 'q';



@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  private users:User[];
 
  

  constructor(private AuthService:AuthentificationService) { }

  ngOnInit(): void {
   this.getAllUser()
    
    };
   
    ValideAccount(event,index) {
      if(event.target.checked){
      
        this.AuthService.UpdateUserValide(1,Number(index))
      }
      else{
        this.AuthService.UpdateUserValide(0,Number(index))
      
      }
     
    } 
    
    getAllUser(){
      this.AuthService.getAllUser().subscribe(async (data:User[])=>{
        //await delay(3000)
        this.users=data
      }) 
    }
    delete(index){
      this.AuthService.deliteUser(Number(index))
     this.getAllUser()
    } 

    SetRole(id:any,role:string) {
      this.AuthService.UpdateUserRole(role,id)
     /*if(event.target.checked){
        
        
      }
      else{
        this.AuthService.UpdateUserValide(0,Number(index))
      
      }*/
      console.log(id,role)
     
    } 
  }

 


