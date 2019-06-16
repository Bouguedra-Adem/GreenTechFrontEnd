import { Component, OnInit, Input } from '@angular/core';
import { Apa } from 'src/app/ModelClasse/Lot2/apa';

@Component({
  selector: 'app-apa-card',
  templateUrl: './apa-card.component.html',
  styleUrls: ['./apa-card.component.css']
})
export class ApaCardComponent implements OnInit {
@Input() apa:Apa
  constructor() { }

  ngOnInit() {
  }

}
