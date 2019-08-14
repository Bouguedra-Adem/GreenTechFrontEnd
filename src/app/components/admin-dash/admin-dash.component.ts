import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  
  constructor(){
  }
  ngOnInit(): void {
    $(document).ready(function() {
      //$('#example');
    } );
  }

}

