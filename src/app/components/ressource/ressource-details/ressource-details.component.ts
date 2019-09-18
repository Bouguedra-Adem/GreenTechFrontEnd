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
  occupe=""

  @Input() ressource: Ressource;
  constructor(private ressourceService: RessourceService, private ressourceComponent: RessourceComponent) { }

  ngOnInit() {
    this.updateAlertisVisibleSuccess = false;
    this.updateAlertisVisibleError = false;
    console.log(this.ressource)
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

}
