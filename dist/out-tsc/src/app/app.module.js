import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AceuilComponent } from './components/aceuil/aceuil.component';
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
import { HttpClientModule } from '@angular/common/http';
import { CardDocComponent } from './components/ged/DocumentCard/card-doc/card-doc.component';
import { ApaCardComponent } from './components/apa/apaCard/apa-card/apa-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreatioCompteComponent } from './components/GestionDeCompte/Creation de compte/creatio-compte/creatio-compte.component';
import { SeConnecteComponent } from './components/GestionDeCompte/Se connecté/se-connecte/se-connecte.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationService } from './Services/authentification.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                AceuilComponent,
                GedComponent,
                ApaComponent,
                RessourceComponent,
                AnnuaireComponent,
                DemandePermisComponent,
                CardDocComponent,
                ApaCardComponent,
                FooterComponent,
                CreatioCompteComponent,
                SeConnecteComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                FormsModule
            ],
            providers: [AnnuaireService, ApaService, GedService, DemandePermisService, RessourceService,
                AuthentificationService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map