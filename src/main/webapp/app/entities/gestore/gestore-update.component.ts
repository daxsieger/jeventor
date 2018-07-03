import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IGestore } from 'app/shared/model/gestore.model';
import { GestoreService } from './gestore.service';

@Component({
    selector: 'jhi-gestore-update',
    templateUrl: './gestore-update.component.html'
})
export class GestoreUpdateComponent implements OnInit {
    private _gestore: IGestore;
    isSaving: boolean;

    constructor(private gestoreService: GestoreService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ gestore }) => {
            this.gestore = gestore;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.gestore.id !== undefined) {
            this.subscribeToSaveResponse(this.gestoreService.update(this.gestore));
        } else {
            this.subscribeToSaveResponse(this.gestoreService.create(this.gestore));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IGestore>>) {
        result.subscribe((res: HttpResponse<IGestore>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get gestore() {
        return this._gestore;
    }

    set gestore(gestore: IGestore) {
        this._gestore = gestore;
    }
}
