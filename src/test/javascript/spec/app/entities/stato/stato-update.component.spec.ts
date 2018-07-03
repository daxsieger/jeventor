/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { StatoUpdateComponent } from 'app/entities/stato/stato-update.component';
import { StatoService } from 'app/entities/stato/stato.service';
import { Stato } from 'app/shared/model/stato.model';

describe('Component Tests', () => {
    describe('Stato Management Update Component', () => {
        let comp: StatoUpdateComponent;
        let fixture: ComponentFixture<StatoUpdateComponent>;
        let service: StatoService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [StatoUpdateComponent]
            })
                .overrideTemplate(StatoUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(StatoUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StatoService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Stato(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.stato = entity;
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
                    const entity = new Stato();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.stato = entity;
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
