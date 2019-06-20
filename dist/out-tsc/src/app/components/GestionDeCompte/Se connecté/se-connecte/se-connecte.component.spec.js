import { async, TestBed } from '@angular/core/testing';
import { SeConnecteComponent } from './se-connecte.component';
describe('SeConnecteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SeConnecteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SeConnecteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=se-connecte.component.spec.js.map