import { Component, OnInit, Input } from '@angular/core';
import { Ged } from 'src/app/ModelClasse/Lot1_5/ged';
import { Doc } from 'src/app/ModelClasse/Lot1_5/doc';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-card-doc',
  templateUrl: './card-doc.component.html',
  styleUrls: ['./card-doc.component.css']
})
export class CardDocComponent implements OnInit {
   @Input () doc:Doc
   docum:Doc;
   role:String
   ImageLien:String//="../../../../../assets/ged/index/"
  
 

  constructor( private auth:AuthentificationService) { 
    console.log(this.doc)
    if (this.auth.getCurrentUser()!=null){
      this.role=this.auth.getCurrentUser().role
      //this.ImageLien="../../../../../assets/ged/index/"+this.doc.lienAssetes
      console.log(this.ImageLien)
    }  
  
  }

  ngOnInit() {
   
    //this.ImageLien="../../../../../assets/ged/index/"+this.doc.lienAssetes
    console.log(this.doc)
   
   
  }
  AddFavorier(docid:any){
    console.log("ademmmm")
    this.auth.saveDocument(docid,this.auth.getCurrentUser().id)
    console.log(this.doc.lienAssetes)

  }
  Addlien(id:String){
    console.log("this mt link"+this.ImageLien)
    this.ImageLien="../../../../../assets/ged/index/"+id
    console.log("this mt link"+this.ImageLien)
  }

}
