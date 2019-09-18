import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ApaService = /** @class */ (function () {
    function ApaService(http) {
        this.http = http;
        this.ApaUrl = "http://localhost:8080/Apa";
    }
    ApaService.prototype.getAllapa = function () {
        return this.http.get("//localhost:8080/Apa");
    };
    ApaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApaService);
    return ApaService;
}());
export { ApaService };
//# sourceMappingURL=apa.service.js.map