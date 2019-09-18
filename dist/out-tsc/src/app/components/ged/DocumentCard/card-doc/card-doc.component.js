import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Doc } from 'src/app/ModelClasse/Lot1_5/doc';
var CardDocComponent = /** @class */ (function () {
    function CardDocComponent() {
    }
    CardDocComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Doc)
    ], CardDocComponent.prototype, "doc", void 0);
    CardDocComponent = tslib_1.__decorate([
        Component({
            selector: 'app-card-doc',
            templateUrl: './card-doc.component.html',
            styleUrls: ['./card-doc.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CardDocComponent);
    return CardDocComponent;
}());
export { CardDocComponent };
//# sourceMappingURL=card-doc.component.js.map