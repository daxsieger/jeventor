import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProcesso } from 'app/shared/model/processo.model';
import { ProcessoService } from './processo.service';

@Component({
    selector: 'jhi-processo-update',
    templateUrl: './processo-update.component.html'
})
export class ProcessoUpdateComponent implements OnInit {
    private _processo: IProcesso;
    isSaving: boolean;

    constructor(private processoService: ProcessoService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ processo }) => {
            this.processo = processo;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.processo.id !== undefined) {
            this.subscribeToSaveResponse(this.processoService.update(this.processo));
        } else {
            this.subscribeToSaveResponse(this.processoService.create(this.processo));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IProcesso>>) {
        result.subscribe((res: HttpResponse<IProcesso>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get processo() {
        return this._processo;
    }

    set processo(processo: IProcesso) {
        this._processo = processo;
    }
}
