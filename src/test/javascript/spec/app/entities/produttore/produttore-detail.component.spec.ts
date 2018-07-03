/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { ProduttoreDetailComponent } from 'app/entities/produttore/produttore-detail.component';
import { Produttore } from 'app/shared/model/produttore.model';

describe('Component Tests', () => {
    describe('Produttore Management Detail Component', () => {
        let comp: ProduttoreDetailComponent;
        let fixture: ComponentFixture<ProduttoreDetailComponent>;
        const route = ({ data: of({ produttore: new Produttore(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [ProduttoreDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ProduttoreDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ProduttoreDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.produttore).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
