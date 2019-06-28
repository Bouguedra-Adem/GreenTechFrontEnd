import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/ModelClasse/user/user';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { registerLocaleData } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-creatio-compte',
  templateUrl: './creatio-compte.component.html',
  styleUrls: ['./creatio-compte.component.css']
})
export class CreatioCompteComponent implements OnInit {
    public nom:String
    public prenom:String
    public nss:String
    public email:String;
    public organisme:String;
    public numTlef:String;
    public pass:String;
    public confpass:String;
    public user :User=new User();
    
  constructor(private auth:AuthentificationService,private router: Router) { }

  ngOnInit() {
  }
  SignUp(){
    
    if (this.nom==""){
      
    }
    else if(this.email==""){

    }
    else if (this.nss=""){

    }
    else if (this.numTlef=="" ){

    }
    else if (this.organisme==""){

    }
    else if (this.prenom==""){

    }
    else if (this.pass==""){

    }
    else if(this.confpass==""){

    }
    else if (this.pass!=this.confpass){

    }
    else{
      this.user.nom=this.nom
      this.user.email=this.email
      this.user.nss=this.nss
      this.user.numTelf=this.numTlef
      this.user.organisme=this.organisme
      this.user.prenom=this.prenom
      this.user.role="utilisateur"
      this.user.pass=this.pass
      this.user.doc=[]
      this.user.demandeRess=[]
    
     
       this.auth.Regester(this.user)
       this.router.navigate(['/Seconnecte'])
     }
      
    
    }
  
    
    

  }


