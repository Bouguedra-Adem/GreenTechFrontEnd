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
   role:String="visiteur";
 

  constructor( private auth:AuthentificationService) { 
    
   this.role=auth.Auth
  }

  ngOnInit() {
   
    
   
   
  }

}
