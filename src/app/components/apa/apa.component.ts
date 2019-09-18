import { Component, OnInit, ɵConsole, Input, Directive } from '@angular/core';
import { ApaService } from 'src/app/Services/apa.service';
import { Apa } from 'src/app/ModelClasse/Lot2/apa';
import { AuthentificationService } from '../../Services/authentification.service';
import { NgForm } from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-apa',
  templateUrl: './apa.component.html',
  styleUrls: ['./apa.component.css']
})
export class ApaComponent implements OnInit {
  apa: Apa[];
  role: String = 'visiteur';
  apaNomDocument: String;
  apaDescriptionDocument: String;
  apaTypeDocument: String;
  apaCategorieDocument: String;
  apaTagDocument: String;
  nbDocument = 0;
  private apaFilter: Apa[];
  private Type: String = 'aucun';
  private Categorie: String = 'aucun';
  private Nbresult: number = 1;
  private SaveDocument: Apa[];
  private inputRech: String;
  private isVisible = false;
  private addAlertisVisibleError = false;
  private addAlertisVisibleSuccess = false;

  constructor(private apaservice: ApaService, private auth: AuthentificationService) { }

  ngOnInit() {
    this.apaservice.getAllapa().subscribe(data => {
      this.apa = data;
      this.nbDocument = data.length;
      this.SaveDocument = data;
      this.isVisible = false;
      this.role = this.auth.getCurrentUser().role;
    });
  }

  onSubmit(f: NgForm) {
    this.apa = [];
    const tagText: string = f.value.inputRech.toString();
    let i = 0;

    if (tagText !== '') {
      this.SaveDocument.forEach(element => {
        if (element.tagAPA.split(',').includes(tagText)) {
          this.apa.push(element);
          console.log('UPPERCASE');
          i++;
        } else {
            console.log('AUCUN RESULTAT');
        }
      });
    } else {
      this.apa = this.SaveDocument;
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
    this.apa = this.SaveDocument;
    this.apaFilter = [];
    if (this.Type !== 'aucun' || this.Categorie !== 'aucun') {
      for (i; i < this.apa.length; i++) {
        if (this.apa[i].typeAPA === this.Type && this.apa[i].categorieAPA === this.Categorie) {
          this.apaFilter[j] = this.apa[i];
          j++;

        }
        if (this.apa[i].categorieAPA === this.Categorie && this.Type === 'aucun') {
          this.apaFilter[j] = this.apa[i];
          j++;
        }
        if (this.apa[i].typeAPA === this.Type && this.Categorie === 'aucun') {
          this.apaFilter[j] = this.apa[i];
          j++;
        }
      }
      this.apa = this.apaFilter;
      this.nbDocument = j;
    } else {
      this.apa = this.SaveDocument;
    }
  }

  addApa() {
    const ap: Apa = new Apa();

    ap.nameAPA = this.apaNomDocument;
    ap.descriptionAPA = this.apaDescriptionDocument;
    ap.categorieAPA = this.apaCategorieDocument;
    ap.typeAPA = this.apaTypeDocument;
    ap.tagAPA = this.apaTagDocument;
    ap.datePublicationAPA = formatDate(new Date(), 'yyyy/MM/dd | HH:mm:ss', 'en').toString();
    ap.dateMaj = formatDate(new Date(), 'yyyy/MM/dd | HH:mm:ss', 'en').toString();
    ap.idEditeur = this.auth.getCurrentUser().id;

    console.log(ap);
    this.apaservice.CreatAPA(ap);
    this.addAlertisVisibleSuccess = true;
    this.reloadData();
  }

  reloadData() {
    this.apaservice.getAllapa().subscribe(data => {
      this.apa = data;
      this.nbDocument = data.length;
      this.SaveDocument = data;
    });
  }

}
