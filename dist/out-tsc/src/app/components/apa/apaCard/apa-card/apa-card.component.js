import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Apa } from 'src/app/ModelClasse/Lot2/apa';
var ApaCardComponent = /** @class */ (function () {
    function ApaCardComponent() {
    }
    ApaCardComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Apa)
    ], ApaCardComponent.prototype, "apa", void 0);
    ApaCardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-apa-card',
            templateUrl: './apa-card.component.html',
            styleUrls: ['./apa-card.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ApaCardComponent);
    return ApaCardComponent;
}());
export { ApaCardComponent };
//# sourceMappingURL=apa-card.component.js.map