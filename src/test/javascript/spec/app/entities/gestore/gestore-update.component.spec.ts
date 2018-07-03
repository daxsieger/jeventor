/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { GestoreUpdateComponent } from 'app/entities/gestore/gestore-update.component';
import { GestoreService } from 'app/entities/gestore/gestore.service';
import { Gestore } from 'app/shared/model/gestore.model';

describe('Component Tests', () => {
    describe('Gestore Management Update Component', () => {
        let comp: GestoreUpdateComponent;
        let fixture: ComponentFixture<GestoreUpdateComponent>;
        let service: GestoreService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [GestoreUpdateComponent]
            })
                .overrideTemplate(GestoreUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(GestoreUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GestoreService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Gestore(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.gestore = entity;
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
                    const entity = new Gestore();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.gestore = entity;
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