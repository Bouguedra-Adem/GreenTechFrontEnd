import { Component, OnInit, ɵConsole, Input, Directive } from '@angular/core';
import { RessourceService } from 'src/app/Services/ressource.service';
import { Ressource } from 'src/app/ModelClasse/Lot4/ressource';
import { AuthentificationService } from '../../Services/authentification.service';
import { NgForm } from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
  ressources: Ressource[];
  role: String = 'visiteur';
  ressourceNomDocument: String;
  ressourceDescriptionDocument: String;
  ressourceTypeDocument: String;
  ressourceCategorieDocument: String;
  ressourceTagDocument: String;
  nbDocument = 0;
  private ressourceFilter: Ressource[];
  private TypeTwo: String = 'aucun';
  private CategorieTwo: String = 'aucun';
   Type="tous"
  private Nbresult: number = 3;
  private SaveDocument: Ressource[];
  private inputRech: String;
  private isVisible = false;
  private addAlertisVisibleError = false;
  private addAlertisVisibleSuccess = false;

  constructor(private ressourceService: RessourceService, private auth: AuthentificationService) { }

  ngOnInit() {
    this.ressourceService.getAllressources().subscribe(data => {
      this.ressources = data;
      this.nbDocument = data.length;
      this.SaveDocument = data;
      this.isVisible = false;
      this.role = this.auth.getCurrentUser().role;
    });
  }

  onSubmit(f: NgForm) {
    this.ressources = [];
    const tagText: string = f.value.inputRech.toString();
    let i = 0;

    if (tagText !== '') {
      this.SaveDocument.forEach(element => {
        if (element.ressource_name==tagText) {
          this.ressources.push(element);
          console.log('UPPERCASE');
          i++;
        } else {
            console.log('AUCUN RESULTAT');
        }
      });
    } else {
      this.ressources = this.SaveDocument;
    }
    console.log(i);
    if (i === 0) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
    this.nbDocument = i;
    i = 0;
  }

  Filter() {
    let i = 0;
    let j = 0;
    this.ressources = this.SaveDocument;
    this.ressourceFilter = [];
    if (this.Type !== 'tous') {
      for (i; i < this.ressources.length; i++) {
        if (this.ressources[i].ressource_type === this.Type) {
          this.ressourceFilter[j] = this.ressources[i];
          j++;

        }
      }
      this.ressources = this.ressourceFilter;
      this.nbDocument   = j;
    } else {
      this.ressources = this.SaveDocument;
    }
  }

  addRessource() {
    const ressource: Ressource = new Ressource();

    ressource.ressource_name= this.ressourceNomDocument;
    ressource.ressource_description = this.ressourceDescriptionDocument;
    ressource.ressource_type = this.ressourceTypeDocument;
    ressource.ressource_occcupe =0;

    console.log(ressource);
    this.ressourceService.CreatRESSOURCE(ressource);
    this.addAlertisVisibleSuccess = true;
    this.reloadData();
  }

  reloadData() {
    this.ressourceService.getAllressources().subscribe(data => {
      this.ressources = data;
      this.nbDocument = data.length;
      this.SaveDocument = data;
    });
  }

}
