import { Component, OnInit } from '@angular/core';
import { ApaService } from 'src/app/Services/apa.service';
import { Apa } from 'src/app/ModelClasse/Lot2/apa';

@Component({
  selector: 'app-apa',
  templateUrl: './apa.component.html',
  styleUrls: ['./apa.component.css']
})
export class ApaComponent implements OnInit {
   apa:Apa[]
  constructor(private apaservice:ApaService) { }

  ngOnInit() {
    this.apaservice.getAllapa().subscribe(data=>{
      this.apa=data
      console.log(data)
    })

  }

}
