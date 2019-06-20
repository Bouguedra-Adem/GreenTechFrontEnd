import { async, TestBed } from '@angular/core/testing';
import { DemandePermisComponent } from './demande-permis.component';
describe('DemandePermisComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DemandePermisComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DemandePermisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=demande-permis.component.spec.js.map