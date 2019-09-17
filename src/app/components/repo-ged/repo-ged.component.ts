import { Component, OnInit } from '@angular/core';
import { GedService } from 'src/app/Services/ged.service';
import { IndexDoc } from 'src/app/ModelClasse/Lot1_5';
import { delay } from 'q';
import { Doc } from 'src/app/ModelClasse/Lot1_5/doc';

@Component({
  selector: 'app-repo-ged',
  templateUrl: './repo-ged.component.html',
  styleUrls: ['./repo-ged.component.css']
})
export class RepoGedComponent implements OnInit {
    docindex: IndexDoc[]
    ImageLien:String="../../../../assets/joradp.jpg"
    public nameDocument:String
    public bref_Description:String
    public date_publication:String
    public dateMsj:String;
    public type:String;
    public categorie:String;
    public tag:String;
    public lienAssetes:String;
    public doc :Doc=new Doc();
    public docIndex :IndexDoc=new IndexDoc();
    public nameDocumentIndex:String
    addAlertisVisibleError:boolean=false
    addAlertisVisibleSuccess:boolean=false
    ImageLien2:String//="../../../../../assets/ged/non_index/"

  constructor(private gedServie :GedService) { }

  ngOnInit() {
    this.gedServie.getAllIndex().subscribe(async (data:IndexDoc[])=>{
      await delay(3000)
      this.docindex=data      
      console.log(this.docindex)
    })
    
  }

  indexer(id:any,lienAssetes:String){
    this.addAlertisVisibleSuccess=false
    this.addAlertisVisibleError=false
    this.bref_Description=""
    this.categorie=""
    this.lienAssetes=""
    this.nameDocument=""
    this.tag=""
    this.type=""
    this.ImageLien=""
    this.dateMsj=""
    console.log(id+this.nameDocument)
    if (this.categorie!="" && this.dateMsj!="" && this.date_publication!="" && this.tag!="" && this.type!=""){
         this.doc.bref_Description=this.bref_Description
         this.doc.categorie=this.categorie
         this.doc.dateMsj=this.dateMsj
         this.doc.tag=this.tag
         this.doc.type=this.type
         this.doc.lienAssetes=lienAssetes
         this.doc.nameDocument=this.nameDocument
         this.gedServie.setIndex(id,this.doc)
         this.doc=new Doc()

         this.addAlertisVisibleSuccess=true
         
    }
    else{
      this.addAlertisVisibleError=true
    }
  }
  Addlien(id:String){
    console.log("this mt link"+this.ImageLien2)
    this.ImageLien2="../../../../../assets/ged/non_index/"+id
    console.log("this mt link"+this.ImageLien2)
  }
  createindex(nameDoc:String){
 
    if (nameDoc!=""){
      this.docIndex=new IndexDoc()
      this.docIndex.nameDocument=nameDoc+".pdf"
      console.log(  this.docIndex.nameDocument)
      this.docIndex.index=0
      this.gedServie.SaveIndex(this.docIndex)
    }
    
  }

}
