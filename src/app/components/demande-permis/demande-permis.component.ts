import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande-permis',
  templateUrl: './demande-permis.component.html',
  styleUrls: ['./demande-permis.component.css']
})
export class DemandePermisComponent implements OnInit {
   tab:String[]=["1","2","3","4"]
  constructor() { }

  ngOnInit() {
  }

}
