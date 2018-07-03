/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { StatoDetailComponent } from 'app/entities/stato/stato-detail.component';
import { Stato } from 'app/shared/model/stato.model';

describe('Component Tests', () => {
    describe('Stato Management Detail Component', () => {
        let comp: StatoDetailComponent;
        let fixture: ComponentFixture<StatoDetailComponent>;
        const route = ({ data: of({ stato: new Stato(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [StatoDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(StatoDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StatoDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.stato).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
