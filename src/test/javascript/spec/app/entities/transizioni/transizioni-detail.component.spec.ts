/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { TransizioniDetailComponent } from 'app/entities/transizioni/transizioni-detail.component';
import { Transizioni } from 'app/shared/model/transizioni.model';

describe('Component Tests', () => {
    describe('Transizioni Management Detail Component', () => {
        let comp: TransizioniDetailComponent;
        let fixture: ComponentFixture<TransizioniDetailComponent>;
        const route = ({ data: of({ transizioni: new Transizioni(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [TransizioniDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(TransizioniDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TransizioniDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.transizioni).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
