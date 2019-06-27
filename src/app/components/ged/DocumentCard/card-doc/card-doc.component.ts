import { Component, OnInit, Input } from '@angular/core';
import { Ged } from 'src/app/ModelClasse/Lot1_5/ged';
import { Doc } from 'src/app/ModelClasse/Lot1_5/doc';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-card-doc',
  templateUrl: './card-doc.component.html',
  styleUrls: ['./card-doc.component.css']
})
export class CardDocComponent implements OnInit {
   @Input () doc:Doc
   docum:Doc;
   role:String
  
 

  constructor( private auth:AuthentificationService) { 
    if (this.auth.getCurrentUser()!=null){
      this.role=this.auth.getCurrentUser().role
    }  
  
  }

  ngOnInit() {
   
    console.log(this.doc)
   
   
  }

}
