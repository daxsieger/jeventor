/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { JeventorTestModule } from '../../../test.module';
import { GestoreDeleteDialogComponent } from 'app/entities/gestore/gestore-delete-dialog.component';
import { GestoreService } from 'app/entities/gestore/gestore.service';

describe('Component Tests', () => {
    describe('Gestore Management Delete Component', () => {
        let comp: GestoreDeleteDialogComponent;
        let fixture: ComponentFixture<GestoreDeleteDialogComponent>;
        let service: GestoreService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [GestoreDeleteDialogComponent]
            })
                .overrideTemplate(GestoreDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(GestoreDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GestoreService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});
