import { Component, OnInit } from '@angular/core';
import{GedService} from '../../Services/ged.service'
import { Ged } from 'src/app/ModelClasse/Lot1_5/ged';
import { Doc } from 'src/app/ModelClasse/Lot1_5/doc';
import { ConcatSource } from 'webpack-sources';
import { AuthentificationService } from 'src/app/Services/authentification.service';


@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css']
})
export class GedComponent implements OnInit {
  private  ged: Ged;
  private dc:Doc[];
  private dcFilter:Doc[];
  private saveFilter:Doc[];
  private inputRech :String="adddd";
  private Type:String="all";
  private Categorie:String="all";
  private Nbresult:String="all";
  private role :String="visiteur"
  

  constructor(private gedServie :GedService,private AuthService:AuthentificationService ) { 
   console.log(this.Nbresult);
   console.log(this.Categorie);
   console.log(this.Type);
   this.role=this.AuthService.Auth;
  }

  ngOnInit() {

  this.inputRech=""
    this.gedServie.getAll().subscribe((data:Ged)=>{
      this.ged=data
      this.dc=this.ged.document
      this.saveFilter=this.ged.document
    })
    
    }
    
   SearchDocTag(){
     this.dc=[]
      var i=0;
    if (this.inputRech!=""){
      this.ged.document.forEach(element => {
      
        if (element.tag.split(",").includes(this.inputRech.toString().toLocaleUpperCase() )||element.tag.split(",").includes(this.inputRech.toString().toLocaleLowerCase())){
          console.log(  element)
          this.dc[i]=element
          }
      });
    
      //this.inputRech=""  
    }
    else{
      this.dc=this.saveFilter
    }
   }
   
   /*****************************/
   Select(nameSelect:String){
     console.log(nameSelect)
     if (nameSelect=="type"){
       switch (this.Type){
        case 'all' :{
          this.Type="all"
          break;
        }
         case 'Loi' :{
           this.Type="Loi"
           break;
         }
         case 'type2' :{
          this.Type="type2"
          break;
        }
        case 'type3' :{
          this.Type="type3"
          break;
        }
        case 'type3' :{
          this.Type="type3"
          break;
        }

       }
     }
     if (nameSelect=="categorie"){
       switch (this.Categorie){
         case 'all':{
           this.Categorie="all";
           break;
         }
         case 'categorie1':{
          this.Categorie="categorie1";
          break;
        }
        case 'categorie2':{
          this.Categorie="categorie2";
          break;
        }
        case 'categorie3':{
          this.Categorie="categorie3";
          break;
        }
        case 'categorie4':{
          this.Categorie="categorie4";
          break;
        }
       }
     }
     if (nameSelect=="Nbresult"){
       switch(this.Nbresult){
         case 'all':{
           this.Nbresult='all';
           break;
         }
         case '2':{
           this.Nbresult="2";
           break;
         }
         case '4':{
          this.Nbresult="4";
          break;
        }
        case '8':{
          this.Nbresult="8";
          break;
        }
        case '10':{
          this.Nbresult="10";
          break;
        }
       }
     }
   }
   /************************** */
   Filter(){
     var i=0;
     var j=0;
     this.dc=this.saveFilter;
     this.dcFilter=[]
     if (this.Categorie !="all" ||this.Type!="all"){
        for (i;i<this.dc.length;i++){
         
          if (this.dc[i].type==this.Type && this.dc[i].categorie==this.Categorie ){
              console.log(this.dc[i].type+""+this.Type +this.dc[i].id)
              console.log(this.dc[i]) 
              this.dcFilter[j]=this.dc[i];
              j++;
            
          }
          if(this.dc[i].categorie==this.Categorie && this.Type=="all"){
            console.log(this.dc[i].categorie+""+this.Categorie)
            console.log(this.dc[i]) 
            this.dcFilter[j]=this.dc[i];
            j++;
          }
          if(this.dc[i].type==this.Type && this.Categorie=="all"){
            console.log(this.dc[i].categorie+""+this.Categorie)
            console.log(this.dc[i]) 
            this.dcFilter[j]=this.dc[i];
            j++;
          }   
        }
        this.dc=this.dcFilter
      }
      else{
        this.dc=this.saveFilter
      }
    }
    

}
    
  
