import { Component, OnInit } from '@angular/core';
import{GedService} from '../../Services/ged.service'
import { Ged } from 'src/app/ModelClasse/Lot1_5/ged';
import { Doc } from 'src/app/ModelClasse/Lot1_5/doc';
import { ConcatSource } from 'webpack-sources';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { delay } from 'q';




@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css']
})
export class GedComponent implements OnInit {
  private  ged: Ged;
  private dc:Doc[];
  private dcFilter:Doc[];
  private SaveDocument:Doc[];
  private inputRech :String="adddd";
  private Type:String="Tous";
  private Categorie:String="Tous";
  private Nbresult:String="Tous";
  private role :String=""
   img:String="../../assets/joradp.jpg"

  constructor(private gedServie :GedService,private AuthService:AuthentificationService ) { 
   console.log(this.Nbresult);
   console.log(this.Categorie);
   console.log(this.Type);
   if (this.AuthService.getCurrentUser()!=null){
     console.log("je suis la");
     this.role=this.AuthService.getCurrentUser().role;
     
   }
  
  }

  ngOnInit() {
    

  this.inputRech=""
    this.gedServie.getAll().subscribe(async (data:Ged)=>{
      await delay(3000)
      this.ged=data

      this.dc=this.ged.document
     
      this.SaveDocument=this.ged.document
      console.log(this.dc)
    })
    
    }
    
   SearchDocTag(){
    
     this.dc=[]
      var i=0;
    if (this.inputRech!=""){
      this.ged.document.forEach(element => {
               
        if (element.tag.split(",").includes(this.inputRech.toString().toLocaleUpperCase() )||element.tag.split(",").includes(this.inputRech.toString().toLowerCase())){
          console.log(  element.tag)
          this.dc.push(element)
          }
      });
    
       
    }
    else{
      this.dc=this.SaveDocument
    }
    console.log(this.dc)
   }
   
   /*****************************/
   Select(nameSelect:String){
     console.log(nameSelect)
     if (nameSelect=="type"){
       switch (this.Type){
        case 'Tous' :{
          this.Type="Tous"
          break;
        }
         case 'Pdf' :{
           this.Type="Pdf"
           break;
         }
         case 'Png' :{
          this.Type="Png"
          break;
        }
       

       }
     }
     if (nameSelect=="categorie"){
       switch (this.Categorie){
         case 'Tous':{
           this.Categorie="Tous";
           break;
         }
         case 'Loi':{
          this.Categorie="Loi";
          break;
        }
        case 'Protocol':{
          this.Categorie="Protocol";
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
     this.dc=this.SaveDocument;
     this.dcFilter=[]
     if (this.Categorie !="Tous" ||this.Type!="Tous"){
        for (i;i<this.dc.length;i++){
            console.log("i'm i="+i)
          if (this.dc[i].type.toLowerCase()==this.Type.toLowerCase() && this.dc[i].categorie.toLowerCase()==this.Categorie.toLowerCase() ){
             console.log('hereee1')
             console.log(this.dc[i].type+" "+this.Type.toLowerCase)
              this.dcFilter[j]=this.dc[i];
              j++;
            
          }
          if(this.dc[i].categorie.toLowerCase()==this.Categorie.toLowerCase() && this.Type.toLowerCase()=="Tous".toLowerCase()){
            console.log('hereee2')

            this.dcFilter[j]=this.dc[i];
            j++;
          }
          if(this.dc[i].type.toLowerCase()==this.Type.toLowerCase() && this.Categorie.toLowerCase()=="Tous".toLowerCase()){
            console.log('hereee3')
            
            this.dcFilter[j]=this.dc[i];
            j++;
          }   
        }
        this.dc=this.dcFilter
      }
      else{
        this.dc=this.SaveDocument
      }
    }
    affichePanier(){
     let idUser=this.AuthService.getCurrentUser().id
     this.AuthService.getDocumentUser(idUser).subscribe((data : Doc[]) =>{
     
       this.dc=data
     })
   }
   afficheGed(){
        this.dc=this.SaveDocument
   }
  afficheMesDocumentFavories(){
   
  }  
  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    console.log("image");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }
 /* download(){
    let doc = new jsPDF();
    
     let imageData= this.getBase64Image(document.getElementById('img'));
     console.log(imageData);
       doc.addImage(imageData, "JPG", 10, (1)*10, 180, 150);
       doc.addPage();
       doc.save('Test.pdf');
  }*/

}
    
  
