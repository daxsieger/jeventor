/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { JeventorTestModule } from '../../../test.module';
import { AssistitoDeleteDialogComponent } from 'app/entities/assistito/assistito-delete-dialog.component';
import { AssistitoService } from 'app/entities/assistito/assistito.service';

describe('Component Tests', () => {
    describe('Assistito Management Delete Component', () => {
        let comp: AssistitoDeleteDialogComponent;
        let fixture: ComponentFixture<AssistitoDeleteDialogComponent>;
        let service: AssistitoService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [AssistitoDeleteDialogComponent]
            })
                .overrideTemplate(AssistitoDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(AssistitoDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AssistitoService);
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
