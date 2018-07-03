import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';

import { IEvento } from 'app/shared/model/evento.model';
import { EventoService } from './evento.service';
import { IAssistito } from 'app/shared/model/assistito.model';
import { AssistitoService } from 'app/entities/assistito';
import { ITipoEvento } from 'app/shared/model/tipo-evento.model';
import { TipoEventoService } from 'app/entities/tipo-evento';
import { IGestore } from 'app/shared/model/gestore.model';
import { GestoreService } from 'app/entities/gestore';
import { IProduttore } from 'app/shared/model/produttore.model';
import { ProduttoreService } from 'app/entities/produttore';
import { IStato } from 'app/shared/model/stato.model';
import { StatoService } from 'app/entities/stato';

@Component({
    selector: 'jhi-evento-update',
    templateUrl: './evento-update.component.html'
})
export class EventoUpdateComponent implements OnInit {
    private _evento: IEvento;
    isSaving: boolean;

    assistitos: IAssistito[];

    tipos: ITipoEvento[];

    gestores: IGestore[];

    produttores: IProduttore[];

    statoes: IStato[];
    tsEvento: string;

    constructor(
        private jhiAlertService: JhiAlertService,
        private eventoService: EventoService,
        private assistitoService: AssistitoService,
        private tipoEventoService: TipoEventoService,
        private gestoreService: GestoreService,
        private produttoreService: ProduttoreService,
        private statoService: StatoService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ evento }) => {
            this.evento = evento;
        });
        this.assistitoService.query({ filter: 'evento-is-null' }).subscribe(
            (res: HttpResponse<IAssistito[]>) => {
                if (!this.evento.assistito || !this.evento.assistito.id) {
                    this.assistitos = res.body;
                } else {
                    this.assistitoService.find(this.evento.assistito.id).subscribe(
                        (subRes: HttpResponse<IAssistito>) => {
                            this.assistitos = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.tipoEventoService.query({ filter: 'evento-is-null' }).subscribe(
            (res: HttpResponse<ITipoEvento[]>) => {
                if (!this.evento.tipo || !this.evento.tipo.id) {
                    this.tipos = res.body;
                } else {
                    this.tipoEventoService.find(this.evento.tipo.id).subscribe(
                        (subRes: HttpResponse<ITipoEvento>) => {
                            this.tipos = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.gestoreService.query({ filter: 'evento-is-null' }).subscribe(
            (res: HttpResponse<IGestore[]>) => {
                if (!this.evento.gestore || !this.evento.gestore.id) {
                    this.gestores = res.body;
                } else {
                    this.gestoreService.find(this.evento.gestore.id).subscribe(
                        (subRes: HttpResponse<IGestore>) => {
                            this.gestores = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.produttoreService.query().subscribe(
            (res: HttpResponse<IProduttore[]>) => {
                this.produttores = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.statoService.query().subscribe(
            (res: HttpResponse<IStato[]>) => {
                this.statoes = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.evento.tsEvento = moment(this.tsEvento, DATE_TIME_FORMAT);
        if (this.evento.id !== undefined) {
            this.subscribeToSaveResponse(this.eventoService.update(this.evento));
        } else {
            this.subscribeToSaveResponse(this.eventoService.create(this.evento));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IEvento>>) {
        result.subscribe((res: HttpResponse<IEvento>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackAssistitoById(index: number, item: IAssistito) {
        return item.id;
    }

    trackTipoEventoById(index: number, item: ITipoEvento) {
        return item.id;
    }

    trackGestoreById(index: number, item: IGestore) {
        return item.id;
    }

    trackProduttoreById(index: number, item: IProduttore) {
        return item.id;
    }

    trackStatoById(index: number, item: IStato) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
    get evento() {
        return this._evento;
    }

    set evento(evento: IEvento) {
        this._evento = evento;
        this.tsEvento = moment(evento.tsEvento).format(DATE_TIME_FORMAT);
    }
}
