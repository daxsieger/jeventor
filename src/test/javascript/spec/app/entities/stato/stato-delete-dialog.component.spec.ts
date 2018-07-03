/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { JeventorTestModule } from '../../../test.module';
import { StatoDeleteDialogComponent } from 'app/entities/stato/stato-delete-dialog.component';
import { StatoService } from 'app/entities/stato/stato.service';

describe('Component Tests', () => {
    describe('Stato Management Delete Component', () => {
        let comp: StatoDeleteDialogComponent;
        let fixture: ComponentFixture<StatoDeleteDialogComponent>;
        let service: StatoService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [StatoDeleteDialogComponent]
            })
                .overrideTemplate(StatoDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StatoDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StatoService);
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
