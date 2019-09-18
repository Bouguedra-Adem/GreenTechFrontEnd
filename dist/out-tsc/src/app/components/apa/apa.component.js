import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApaService } from 'src/app/Services/apa.service';
var ApaComponent = /** @class */ (function () {
    function ApaComponent(apaservice) {
        this.apaservice = apaservice;
    }
    ApaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apaservice.getAllapa().subscribe(function (data) {
            _this.apa = data;
            console.log(data);
        });
    };
    ApaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-apa',
            templateUrl: './apa.component.html',
            styleUrls: ['./apa.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ApaService])
    ], ApaComponent);
    return ApaComponent;
}());
export { ApaComponent };
//# sourceMappingURL=apa.component.js.map