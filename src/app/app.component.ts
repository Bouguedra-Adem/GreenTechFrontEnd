import { Component } from '@angular/core';
import { AuthentificationService } from './Services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GreenTechFrontEndApp';
  path="assets/logoGreenTech.jpg";
  public path1="assets/gmail.png";
  public path2="assets/facebook.png";
  public path3="assets/google-plus.png";
  public path4="assets/Background.jpg";
  public role:String;
  constructor( private auth:AuthentificationService,private router:Router){
   
      
  }
  ngOnInit(): void {
     
    if ( this.auth.getCurrentUser()!=null){
      this.role=this.auth.getCurrentUser().role
    }
    
  }
  logout(){
    this.auth.Logout()
    this.router.navigate(['/']).then(()=>{
      window.location.reload()
    })

  }
}
