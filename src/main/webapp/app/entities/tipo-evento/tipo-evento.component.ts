import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ITipoEvento } from 'app/shared/model/tipo-evento.model';
import { Principal } from 'app/core';
import { TipoEventoService } from './tipo-evento.service';

@Component({
    selector: 'jhi-tipo-evento',
    templateUrl: './tipo-evento.component.html'
})
export class TipoEventoComponent implements OnInit, OnDestroy {
    tipoEventos: ITipoEvento[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private tipoEventoService: TipoEventoService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {}

    loadAll() {
        this.tipoEventoService.query().subscribe(
            (res: HttpResponse<ITipoEvento[]>) => {
                this.tipoEventos = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInTipoEventos();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ITipoEvento) {
        return item.id;
    }

    registerChangeInTipoEventos() {
        this.eventSubscriber = this.eventManager.subscribe('tipoEventoListModification', response => this.loadAll());
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
