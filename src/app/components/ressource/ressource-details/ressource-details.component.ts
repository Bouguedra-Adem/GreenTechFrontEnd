import { Component, OnInit, Input } from '@angular/core';
import { Ressource } from 'src/app/ModelClasse/Lot4/ressource';
import { RessourceComponent } from '../ressource.component';
import { RessourceService } from '../../../Services/ressource.service';
import { formatDate } from '@angular/common';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-ressource-details',
  templateUrl: './ressource-details.component.html',
  styleUrls: ['./ressource-details.component.css']
})
export class RessourceDetailsComponent implements OnInit {
  updateAlertisVisibleSuccess = false;
  updateAlertisVisibleError = false;
  deleteAlertisVisibleSuccess = false;

  @Input() ressource: Ressource;
  constructor(private ressourceService: RessourceService, private ressourceComponent: RessourceComponent) { }

  ngOnInit() {
    this.updateAlertisVisibleSuccess = false;
    this.updateAlertisVisibleError = false;
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
    this.ressourceService.UpdateRESSOURCE(this.ressource.id,
      { nameRESSOURCE: this.ressource.nameRESSOURCE,
        descriptionRESSOURCE: this.ressource.descriptionRESSOURCE,
        typeRESSOURCE: this.ressource.typeRESSOURCE,
        categorieRESSOURCE: this.ressource.categorieRESSOURCE,
        tagRESSOURCE: this.ressource.tagRESSOURCE,
        dateMaj: formatDate(new Date(), 'yyyy/MM/dd | HH:mm:ss', 'en').toString() })
      .subscribe(
        data => {
          console.log(data);
          this.ressource = data as Ressource;
          this.updateAlertisVisibleSuccess = true;
        },
        error => {
          console.log(error);
          this.updateAlertisVisibleError = true;
        });
  }

}
