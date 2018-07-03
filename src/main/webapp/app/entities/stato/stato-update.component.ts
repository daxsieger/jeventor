import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';

import { IStato } from 'app/shared/model/stato.model';
import { StatoService } from './stato.service';
import { IStadio } from 'app/shared/model/stadio.model';
import { StadioService } from 'app/entities/stadio';
import { IEvento } from 'app/shared/model/evento.model';
import { EventoService } from 'app/entities/evento';

@Component({
    selector: 'jhi-stato-update',
    templateUrl: './stato-update.component.html'
})
export class StatoUpdateComponent implements OnInit {
    private _stato: IStato;
    isSaving: boolean;

    stadios: IStadio[];

    eventos: IEvento[];
    tsCambioStato: string;

    constructor(
        private jhiAlertService: JhiAlertService,
        private statoService: StatoService,
        private stadioService: StadioService,
        private eventoService: EventoService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ stato }) => {
            this.stato = stato;
        });
        this.stadioService.query({ filter: 'stato-is-null' }).subscribe(
            (res: HttpResponse<IStadio[]>) => {
                if (!this.stato.stadio || !this.stato.stadio.id) {
                    this.stadios = res.body;
                } else {
                    this.stadioService.find(this.stato.stadio.id).subscribe(
                        (subRes: HttpResponse<IStadio>) => {
                            this.stadios = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.eventoService.query().subscribe(
            (res: HttpResponse<IEvento[]>) => {
                this.eventos = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.stato.tsCambioStato = moment(this.tsCambioStato, DATE_TIME_FORMAT);
        if (this.stato.id !== undefined) {
            this.subscribeToSaveResponse(this.statoService.update(this.stato));
        } else {
            this.subscribeToSaveResponse(this.statoService.create(this.stato));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IStato>>) {
        result.subscribe((res: HttpResponse<IStato>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackStadioById(index: number, item: IStadio) {
        return item.id;
    }

    trackEventoById(index: number, item: IEvento) {
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
    get stato() {
        return this._stato;
    }

    set stato(stato: IStato) {
        this._stato = stato;
        this.tsCambioStato = moment(stato.tsCambioStato).format(DATE_TIME_FORMAT);
    }
}
