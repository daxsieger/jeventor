/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { AssistitoUpdateComponent } from 'app/entities/assistito/assistito-update.component';
import { AssistitoService } from 'app/entities/assistito/assistito.service';
import { Assistito } from 'app/shared/model/assistito.model';

describe('Component Tests', () => {
    describe('Assistito Management Update Component', () => {
        let comp: AssistitoUpdateComponent;
        let fixture: ComponentFixture<AssistitoUpdateComponent>;
        let service: AssistitoService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [AssistitoUpdateComponent]
            })
                .overrideTemplate(AssistitoUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(AssistitoUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AssistitoService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Assistito(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.assistito = entity;
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
                    const entity = new Assistito();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.assistito = entity;
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
