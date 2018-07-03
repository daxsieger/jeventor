import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ITransizioni } from 'app/shared/model/transizioni.model';
import { TransizioniService } from './transizioni.service';
import { IProcesso } from 'app/shared/model/processo.model';
import { ProcessoService } from 'app/entities/processo';
import { IStadio } from 'app/shared/model/stadio.model';
import { StadioService } from 'app/entities/stadio';

@Component({
    selector: 'jhi-transizioni-update',
    templateUrl: './transizioni-update.component.html'
})
export class TransizioniUpdateComponent implements OnInit {
    private _transizioni: ITransizioni;
    isSaving: boolean;

    processos: IProcesso[];

    stadios: IStadio[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private transizioniService: TransizioniService,
        private processoService: ProcessoService,
        private stadioService: StadioService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ transizioni }) => {
            this.transizioni = transizioni;
        });
        this.processoService.query().subscribe(
            (res: HttpResponse<IProcesso[]>) => {
                this.processos = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.stadioService.query().subscribe(
            (res: HttpResponse<IStadio[]>) => {
                this.stadios = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.transizioni.id !== undefined) {
            this.subscribeToSaveResponse(this.transizioniService.update(this.transizioni));
        } else {
            this.subscribeToSaveResponse(this.transizioniService.create(this.transizioni));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITransizioni>>) {
        result.subscribe((res: HttpResponse<ITransizioni>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackProcessoById(index: number, item: IProcesso) {
        return item.id;
    }

    trackStadioById(index: number, item: IStadio) {
        return item.id;
    }
    get transizioni() {
        return this._transizioni;
    }

    set transizioni(transizioni: ITransizioni) {
        this._transizioni = transizioni;
    }
}
