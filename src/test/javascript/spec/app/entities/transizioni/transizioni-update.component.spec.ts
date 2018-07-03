/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { TransizioniUpdateComponent } from 'app/entities/transizioni/transizioni-update.component';
import { TransizioniService } from 'app/entities/transizioni/transizioni.service';
import { Transizioni } from 'app/shared/model/transizioni.model';

describe('Component Tests', () => {
    describe('Transizioni Management Update Component', () => {
        let comp: TransizioniUpdateComponent;
        let fixture: ComponentFixture<TransizioniUpdateComponent>;
        let service: TransizioniService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [TransizioniUpdateComponent]
            })
                .overrideTemplate(TransizioniUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TransizioniUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TransizioniService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Transizioni(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.transizioni = entity;
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
                    const entity = new Transizioni();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.transizioni = entity;
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
