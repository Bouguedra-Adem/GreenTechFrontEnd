import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GedService } from '../../Services/ged.service';
import { AuthentificationService } from 'src/app/Services/authentification.service';
var GedComponent = /** @class */ (function () {
    function GedComponent(gedServie, AuthService) {
        this.gedServie = gedServie;
        this.AuthService = AuthService;
        this.inputRech = "adddd";
        this.Type = "all";
        this.Categorie = "all";
        this.Nbresult = "all";
        console.log(this.Nbresult);
        console.log(this.Categorie);
        console.log(this.Type);
        this.Auth = this.AuthService.Auth;
    }
    GedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputRech = "";
        this.gedServie.getAll().subscribe(function (data) {
            _this.ged = data;
            _this.dc = _this.ged.document;
            _this.saveFilter = _this.ged.document;
        });
    };
    GedComponent.prototype.SearchDocTag = function () {
        var _this = this;
        this.dc = [];
        var i = 0;
        if (this.inputRech != "") {
            this.ged.document.forEach(function (element) {
                if (element.tag.split(",").includes(_this.inputRech.toString().toLocaleUpperCase()) || element.tag.split(",").includes(_this.inputRech.toString().toLocaleLowerCase())) {
                    console.log(element);
                    _this.dc[i] = element;
                }
            });
            //this.inputRech=""  
        }
        else {
            this.dc = this.saveFilter;
        }
    };
    /*****************************/
    GedComponent.prototype.Select = function (nameSelect) {
        console.log(nameSelect);
        if (nameSelect == "type") {
            switch (this.Type) {
                case 'all': {
                    this.Type = "all";
                    break;
                }
                case 'Loi': {
                    this.Type = "Loi";
                    break;
                }
                case 'type2': {
                    this.Type = "type2";
                    break;
                }
                case 'type3': {
                    this.Type = "type3";
                    break;
                }
                case 'type3': {
                    this.Type = "type3";
                    break;
                }
            }
        }
        if (nameSelect == "categorie") {
            switch (this.Categorie) {
                case 'all': {
                    this.Categorie = "all";
                    break;
                }
                case 'categorie1': {
                    this.Categorie = "categorie1";
                    break;
                }
                case 'categorie2': {
                    this.Categorie = "categorie2";
                    break;
                }
                case 'categorie3': {
                    this.Categorie = "categorie3";
                    break;
                }
                case 'categorie4': {
                    this.Categorie = "categorie4";
                    break;
                }
            }
        }
        if (nameSelect == "Nbresult") {
            switch (this.Nbresult) {
                case 'all': {
                    this.Nbresult = 'all';
                    break;
                }
                case '2': {
                    this.Nbresult = "2";
                    break;
                }
                case '4': {
                    this.Nbresult = "4";
                    break;
                }
                case '8': {
                    this.Nbresult = "8";
                    break;
                }
                case '10': {
                    this.Nbresult = "10";
                    break;
                }
            }
        }
    };
    /************************** */
    GedComponent.prototype.Filter = function () {
        var i = 0;
        var j = 0;
        this.dc = this.saveFilter;
        this.dcFilter = [];
        if (this.Categorie != "all" || this.Type != "all") {
            for (i; i < this.dc.length; i++) {
                if (this.dc[i].type == this.Type && this.dc[i].categorie == this.Categorie) {
                    console.log(this.dc[i].type + "" + this.Type + this.dc[i].id);
                    console.log(this.dc[i]);
                    this.dcFilter[j] = this.dc[i];
                    j++;
                }
                if (this.dc[i].categorie == this.Categorie && this.Type == "all") {
                    console.log(this.dc[i].categorie + "" + this.Categorie);
                    console.log(this.dc[i]);
                    this.dcFilter[j] = this.dc[i];
                    j++;
                }
                if (this.dc[i].type == this.Type && this.Categorie == "all") {
                    console.log(this.dc[i].categorie + "" + this.Categorie);
                    console.log(this.dc[i]);
                    this.dcFilter[j] = this.dc[i];
                    j++;
                }
            }
            this.dc = this.dcFilter;
        }
        else {
            this.dc = this.saveFilter;
        }
    };
    GedComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ged',
            templateUrl: './ged.component.html',
            styleUrls: ['./ged.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [GedService, AuthentificationService])
    ], GedComponent);
    return GedComponent;
}());
export { GedComponent };
//# sourceMappingURL=ged.component.js.map