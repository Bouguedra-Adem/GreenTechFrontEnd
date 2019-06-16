import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceuil',
  templateUrl: './aceuil.component.html',
  styleUrls: ['./aceuil.component.css']
})
export class AceuilComponent implements OnInit {
  public carousal1="assets/1.jpg";
  public carousal2="assets/2.jpg";
  public carousal3="assets/3.jpg";
  public carousal4="assets/4.jpg";
  constructor() { }

  ngOnInit() {
  }

}
