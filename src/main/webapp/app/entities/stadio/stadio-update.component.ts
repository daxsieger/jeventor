import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IStadio } from 'app/shared/model/stadio.model';
import { StadioService } from './stadio.service';
import { IProcesso } from 'app/shared/model/processo.model';
import { ProcessoService } from 'app/entities/processo';

@Component({
    selector: 'jhi-stadio-update',
    templateUrl: './stadio-update.component.html'
})
export class StadioUpdateComponent implements OnInit {
    private _stadio: IStadio;
    isSaving: boolean;

    processos: IProcesso[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private stadioService: StadioService,
        private processoService: ProcessoService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ stadio }) => {
            this.stadio = stadio;
        });
        this.processoService.query().subscribe(
            (res: HttpResponse<IProcesso[]>) => {
                this.processos = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.stadio.id !== undefined) {
            this.subscribeToSaveResponse(this.stadioService.update(this.stadio));
        } else {
            this.subscribeToSaveResponse(this.stadioService.create(this.stadio));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IStadio>>) {
        result.subscribe((res: HttpResponse<IStadio>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
    get stadio() {
        return this._stadio;
    }

    set stadio(stadio: IStadio) {
        this._stadio = stadio;
    }
}
