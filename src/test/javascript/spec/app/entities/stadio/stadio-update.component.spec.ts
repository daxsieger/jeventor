/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JeventorTestModule } from '../../../test.module';
import { StadioUpdateComponent } from 'app/entities/stadio/stadio-update.component';
import { StadioService } from 'app/entities/stadio/stadio.service';
import { Stadio } from 'app/shared/model/stadio.model';

describe('Component Tests', () => {
    describe('Stadio Management Update Component', () => {
        let comp: StadioUpdateComponent;
        let fixture: ComponentFixture<StadioUpdateComponent>;
        let service: StadioService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [StadioUpdateComponent]
            })
                .overrideTemplate(StadioUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(StadioUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StadioService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new Stadio(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.stadio = entity;
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
                    const entity = new Stadio();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.stadio = entity;
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
