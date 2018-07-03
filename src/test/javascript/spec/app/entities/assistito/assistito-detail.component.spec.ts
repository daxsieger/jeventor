/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { AssistitoDetailComponent } from 'app/entities/assistito/assistito-detail.component';
import { Assistito } from 'app/shared/model/assistito.model';

describe('Component Tests', () => {
    describe('Assistito Management Detail Component', () => {
        let comp: AssistitoDetailComponent;
        let fixture: ComponentFixture<AssistitoDetailComponent>;
        const route = ({ data: of({ assistito: new Assistito(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [AssistitoDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(AssistitoDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AssistitoDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.assistito).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
