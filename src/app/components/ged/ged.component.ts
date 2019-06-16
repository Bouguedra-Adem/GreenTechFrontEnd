import { Component, OnInit } from '@angular/core';
import{GedService} from '../../Services/ged.service'
import { Ged } from 'src/app/ModelClasse/Lot1_5/ged';
import { Doc } from 'src/app/ModelClasse/Lot1_5/doc';


@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css']
})
export class GedComponent implements OnInit {
  public ged: Ged;
  private dc:Doc
  

  constructor(private gedServie :GedService ) { 
    
  }

  ngOnInit() {


    this.gedServie.getAll().subscribe((data:Ged)=>{
      this.ged=data
    })
    
    }
    

   
   
  }


