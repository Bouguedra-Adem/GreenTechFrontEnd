import { Component, OnInit, Input } from '@angular/core';
import { Apa } from 'src/app/ModelClasse/Lot2/apa';
import { ApaComponent } from '../../apa.component';
import { ApaService } from '../../../../Services/apa.service';
import { formatDate } from '@angular/common';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-apa-card',
  templateUrl: './apa-card.component.html',
  styleUrls: ['./apa-card.component.css']
})
export class ApaCardComponent implements OnInit {
  updateAlertisVisibleSuccess = false;
  updateAlertisVisibleError = false;
  deleteAlertisVisibleSuccess = false;

  @Input() apa: Apa;
  constructor(private apaService: ApaService, private apaComponent: ApaComponent) { }

  ngOnInit() {
    this.updateAlertisVisibleSuccess = false;
    this.updateAlertisVisibleError = false;
  }
  deleteApa() {
    this.apaService.DeleteAPA(this.apa.id)
      .subscribe(
        data => {
          this.deleteAlertisVisibleSuccess = true;
        },
        error => console.log(error));
  }
  updateActive(isActive: boolean) {
    this.apaService.UpdateDocument(this.apa.id,
      { nameAPA: this.apa.nameAPA,
        descriptionAPA: this.apa.descriptionAPA,
        typeAPA: this.apa.typeAPA,
        categorieAPA: this.apa.categorieAPA,
        tagAPA: this.apa.tagAPA,
        dateMaj: formatDate(new Date(), 'yyyy/MM/dd | HH:mm:ss', 'en').toString() })
      .subscribe(
        data => {
          console.log(data);
          this.apa = data as Apa;
          this.updateAlertisVisibleSuccess = true;
        },
        error => {
          console.log(error);
          this.updateAlertisVisibleError = true;
        });
  }

}
