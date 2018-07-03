/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { JeventorTestModule } from '../../../test.module';
import { TransizioniDeleteDialogComponent } from 'app/entities/transizioni/transizioni-delete-dialog.component';
import { TransizioniService } from 'app/entities/transizioni/transizioni.service';

describe('Component Tests', () => {
    describe('Transizioni Management Delete Component', () => {
        let comp: TransizioniDeleteDialogComponent;
        let fixture: ComponentFixture<TransizioniDeleteDialogComponent>;
        let service: TransizioniService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [TransizioniDeleteDialogComponent]
            })
                .overrideTemplate(TransizioniDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TransizioniDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TransizioniService);
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
