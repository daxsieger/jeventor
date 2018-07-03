import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProduttore } from 'app/shared/model/produttore.model';
import { ProduttoreService } from './produttore.service';

@Component({
    selector: 'jhi-produttore-update',
    templateUrl: './produttore-update.component.html'
})
export class ProduttoreUpdateComponent implements OnInit {
    private _produttore: IProduttore;
    isSaving: boolean;

    constructor(private produttoreService: ProduttoreService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ produttore }) => {
            this.produttore = produttore;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.produttore.id !== undefined) {
            this.subscribeToSaveResponse(this.produttoreService.update(this.produttore));
        } else {
            this.subscribeToSaveResponse(this.produttoreService.create(this.produttore));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IProduttore>>) {
        result.subscribe((res: HttpResponse<IProduttore>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
    get produttore() {
        return this._produttore;
    }

    set produttore(produttore: IProduttore) {
        this._produttore = produttore;
    }
}
