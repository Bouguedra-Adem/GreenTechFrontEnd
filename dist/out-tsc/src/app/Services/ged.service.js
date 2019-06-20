import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var GedService = /** @class */ (function () {
    function GedService(http) {
        this.http = http;
        this.GedUrl = "http://localhost:8080/Ged";
    }
    GedService.prototype.getAll = function () {
        return this.http.get('//localhost:8080/Ged');
    };
    GedService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GedService);
    return GedService;
}());
export { GedService };
//# sourceMappingURL=ged.service.js.map