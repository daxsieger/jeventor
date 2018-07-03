/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { StadioDetailComponent } from 'app/entities/stadio/stadio-detail.component';
import { Stadio } from 'app/shared/model/stadio.model';

describe('Component Tests', () => {
    describe('Stadio Management Detail Component', () => {
        let comp: StadioDetailComponent;
        let fixture: ComponentFixture<StadioDetailComponent>;
        const route = ({ data: of({ stadio: new Stadio(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [StadioDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(StadioDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StadioDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.stadio).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
