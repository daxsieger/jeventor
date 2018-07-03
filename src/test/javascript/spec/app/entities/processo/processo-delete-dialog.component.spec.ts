/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { JeventorTestModule } from '../../../test.module';
import { ProcessoDeleteDialogComponent } from 'app/entities/processo/processo-delete-dialog.component';
import { ProcessoService } from 'app/entities/processo/processo.service';

describe('Component Tests', () => {
    describe('Processo Management Delete Component', () => {
        let comp: ProcessoDeleteDialogComponent;
        let fixture: ComponentFixture<ProcessoDeleteDialogComponent>;
        let service: ProcessoService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [ProcessoDeleteDialogComponent]
            })
                .overrideTemplate(ProcessoDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ProcessoDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ProcessoService);
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
