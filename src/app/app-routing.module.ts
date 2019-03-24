import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AceuilComponent } from './components/aceuil/aceuil.component'
import { ApaComponent } from 'src/app/components/apa/apa.component';
import { GedComponent } from 'src/app/components/ged/ged.component';
import { RessourceComponent } from 'src/app/components/ressource/ressource.component';
import { AnnuaireComponent } from 'src/app/components/annuaire/annuaire.component';

const routes: Routes = [
  { path:'',component:AceuilComponent },
  { path:'apa',component:ApaComponent},
  { path:'ged',component:GedComponent},
  { path:'RG',component:AnnuaireComponent },
  { path:'Ressource',component:RessourceComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
