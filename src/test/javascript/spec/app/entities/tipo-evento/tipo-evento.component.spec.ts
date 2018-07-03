/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { JeventorTestModule } from '../../../test.module';
import { TipoEventoComponent } from 'app/entities/tipo-evento/tipo-evento.component';
import { TipoEventoService } from 'app/entities/tipo-evento/tipo-evento.service';
import { TipoEvento } from 'app/shared/model/tipo-evento.model';

describe('Component Tests', () => {
    describe('TipoEvento Management Component', () => {
        let comp: TipoEventoComponent;
        let fixture: ComponentFixture<TipoEventoComponent>;
        let service: TipoEventoService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [JeventorTestModule],
                declarations: [TipoEventoComponent],
                providers: []
            })
                .overrideTemplate(TipoEventoComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(TipoEventoComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TipoEventoService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new TipoEvento(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.tipoEventos[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
