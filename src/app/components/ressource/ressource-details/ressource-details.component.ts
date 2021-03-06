import { Component, OnInit, Input } from '@angular/core';
import { Ressource } from 'src/app/ModelClasse/Lot4/ressource';
import { RessourceComponent } from '../ressource.component';
import { RessourceService } from '../../../Services/ressource.service';
import { formatDate } from '@angular/common';
import { Routes } from '@angular/router';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { Demand } from 'src/app/ModelClasse/Lot1_5/demand';


@Component({
  selector: 'app-ressource-details',
  templateUrl: './ressource-details.component.html',
  styleUrls: ['./ressource-details.component.css']
})
export class RessourceDetailsComponent implements OnInit {
  updateAlertisVisibleSuccess = false;
  updateAlertisVisibleError = false;
  deleteAlertisVisibleSuccess = false;
  role:String
  occupe=""
  dm:Demand=new Demand()

  @Input() ressource: Ressource;
  constructor(private auth:AuthentificationService,private ressourceService: RessourceService, private ressourceComponent: RessourceComponent ) { }

  ngOnInit() {
    this.updateAlertisVisibleSuccess = false;
    this.updateAlertisVisibleError = false;
    console.log(this.ressource)
    if (this.auth.getCurrentUser()!=null){
      this.role=this.auth.getCurrentUser().role
      //this.ImageLien="../../../../../assets/ged/index/"+this.doc.lienAssetes
     
    }  
  }
  deleteRessource() {
    this.ressourceService.DeleteRESSOURCE(this.ressource.id)
      .subscribe(
        data => {
          this.deleteAlertisVisibleSuccess = true;
        },
        error => console.log(error));
  }
  updateActive(isActive: boolean) {
    this.ressourceService.setRessourceOcup(this.ressource.id ,this.occupe)
  }
  savedemande(){
    this.dm.nomressource=this.ressource.ressource_name
    this.dm.ressourceid=this.ressource.id
    this.dm.valide=1
    this.auth.saveDamande(this.dm,this.auth.getCurrentUser().id)
  }
}
