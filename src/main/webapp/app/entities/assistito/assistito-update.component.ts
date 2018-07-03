import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAssistito } from 'app/shared/model/assistito.model';
import { AssistitoService } from './assistito.service';

@Component({
    selector: 'jhi-assistito-update',
    templateUrl: './assistito-update.component.html'
})
export class AssistitoUpdateComponent implements OnInit {
    private _assistito: IAssistito;
    isSaving: boolean;

    constructor(private assistitoService: AssistitoService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ assistito }) => {
            this.assistito = assistito;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.assistito.id !== undefined) {
            this.subscribeToSaveResponse(this.assistitoService.update(this.assistito));
        } else {
            this.subscribeToSaveResponse(this.assistitoService.create(this.assistito));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IAssistito>>) {
        result.subscribe((res: HttpResponse<IAssistito>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get assistito() {
        return this._assistito;
    }

    set assistito(assistito: IAssistito) {
        this._assistito = assistito;
    }
}
