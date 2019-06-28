import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-se-connecte',
  templateUrl: './se-connecte.component.html',
  styleUrls: ['./se-connecte.component.css']
})
export class SeConnecteComponent implements OnInit {
  public email:String
  public pass:String
  constructor(private Auth:AuthentificationService,private router:Router) { }

  ngOnInit() {
  }
SignIn(){
  if (this.email!='' && this.pass!=''){
    this.Auth.Login(this.pass)
    
    this.router.navigate(['/']).then(()=>{
      window.location.reload()
    })
    
   


    
  }
}
}
