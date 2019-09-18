import { async, TestBed } from '@angular/core/testing';
import { AceuilComponent } from './aceuil.component';
import { describe } from 'jasmine';
describe('AceuilComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AceuilComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AceuilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=aceuil.component.spec.js.map