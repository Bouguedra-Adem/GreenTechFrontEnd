import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AceuilComponent } from './components/aceuil/aceuil.component';
import { ApaComponent } from 'src/app/components/apa/apa.component';
import { GedComponent } from 'src/app/components/ged/ged.component';
import { RessourceComponent } from 'src/app/components/ressource/ressource.component';
import { AnnuaireComponent } from 'src/app/components/annuaire/annuaire.component';
import { CreatioCompteComponent } from './components/GestionDeCompte/Creation de compte/creatio-compte/creatio-compte.component';
import { SeConnecteComponent } from './components/GestionDeCompte/Se connecté/se-connecte/se-connecte.component';
var routes = [
    { path: '', component: AceuilComponent },
    { path: 'apa', component: ApaComponent },
    { path: 'ged', component: GedComponent },
    { path: 'RG', component: AnnuaireComponent },
    { path: 'Ressource', component: RessourceComponent },
    { path: 'CreationCompte', component: CreatioCompteComponent },
    { path: 'Seconnecte', component: SeConnecteComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map