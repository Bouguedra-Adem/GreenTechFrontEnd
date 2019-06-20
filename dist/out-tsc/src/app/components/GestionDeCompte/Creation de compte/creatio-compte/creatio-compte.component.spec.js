import { async, TestBed } from '@angular/core/testing';
import { CreatioCompteComponent } from './creatio-compte.component';
describe('CreatioCompteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CreatioCompteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CreatioCompteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=creatio-compte.component.spec.js.map