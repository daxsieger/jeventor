/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { ProduttoreUpdateComponent } from 'app/entities/produttore/produttore-update.component';
import { ProduttoreService } from 'app/entities/produttore/produttore.service';
import { Produttore } from 'app/shared/model/produttore.model';

describe('Component Tests', () => {
    describe('Produttore Management Update Component', () => {
        let comp: ProduttoreUpdateComponent;
        let fixture: ComponentFixture<ProduttoreUpdateComponent>;
        let service: ProduttoreService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [ProduttoreUpdateComponent]
            })
                .overrideTemplate(ProduttoreUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ProduttoreUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProduttoreService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Produttore(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.produttore = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Produttore();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.produttore = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
