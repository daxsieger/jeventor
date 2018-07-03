import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IStato } from 'app/shared/model/stato.model';

@Component({
    selector: 'jhi-stato-detail',
    templateUrl: './stato-detail.component.html'
})
export class StatoDetailComponent implements OnInit {
    stato: IStato;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ stato }) => {
            this.stato = stato;
        });
    }

    previousState() {
        window.history.back();
    }
}
