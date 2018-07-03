/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { GestoreDetailComponent } from 'app/entities/gestore/gestore-detail.component';
import { Gestore } from 'app/shared/model/gestore.model';

describe('Component Tests', () => {
    describe('Gestore Management Detail Component', () => {
        let comp: GestoreDetailComponent;
        let fixture: ComponentFixture<GestoreDetailComponent>;
        const route = ({ data: of({ gestore: new Gestore(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [GestoreDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(GestoreDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(GestoreDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.gestore).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
