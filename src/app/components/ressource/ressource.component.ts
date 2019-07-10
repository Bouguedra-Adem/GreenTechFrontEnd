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
        if (element.tagRESSOURCE.split(',').includes(tagText)) {
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
    if (this.TypeTwo !== 'aucun' || this.CategorieTwo !== 'aucun') {
      for (i; i < this.ressources.length; i++) {
        if (this.ressources[i].typeRESSOURCE === this.TypeTwo && this.ressources[i].categorieRESSOURCE === this.CategorieTwo) {
          this.ressourceFilter[j] = this.ressources[i];
          j++;

        }
        if (this.ressources[i].categorieRESSOURCE === this.CategorieTwo && this.TypeTwo === 'aucun') {
          this.ressourceFilter[j] = this.ressources[i];
          j++;
        }
        if (this.ressources[i].typeRESSOURCE === this.TypeTwo && this.CategorieTwo === 'aucun') {
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

    ressource.nameRESSOURCE = this.ressourceNomDocument;
    ressource.descriptionRESSOURCE = this.ressourceDescriptionDocument;
    ressource.categorieRESSOURCE = this.ressourceCategorieDocument;
    ressource.typeRESSOURCE = this.ressourceTypeDocument;
    ressource.tagRESSOURCE = this.ressourceTagDocument;
    ressource.datePublicationRESSOURCE = formatDate(new Date(), 'yyyy/MM/dd | HH:mm:ss', 'en').toString();
    ressource.dateMaj = formatDate(new Date(), 'yyyy/MM/dd | HH:mm:ss', 'en').toString();
    ressource.idEditeur = this.auth.getCurrentUser().id;

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
