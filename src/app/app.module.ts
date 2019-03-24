import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AceuilComponent } from './components/aceuil/aceuil.component'
import { GedComponent } from './components/ged/ged.component';
import { ApaComponent } from './components/apa/apa.component';
import { RessourceComponent } from './components/ressource/ressource.component';
import { AnnuaireComponent } from './components/annuaire/annuaire.component';
import { DemandePermisComponent } from './components/demande-permis/demande-permis.component';
import { RessourceService } from 'src/app/Services/ressource.service';
import { AnnuaireService } from 'src/app/Services/annuaire.service';
import { ApaService } from 'src/app/Services/apa.service';
import { GedService } from 'src/app/Services/ged.service';
import { DemandePermisService } from 'src/app/Services/demande-permis.service';

@NgModule({
  declarations: [
    AppComponent,
    AceuilComponent,
    GedComponent,
    ApaComponent,
    RessourceComponent,
    AnnuaireComponent,
    DemandePermisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AnnuaireService,ApaService,GedService, DemandePermisService ,RessourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
