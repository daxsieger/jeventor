import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITransizioni } from 'app/shared/model/transizioni.model';

@Component({
    selector: 'jhi-transizioni-detail',
    templateUrl: './transizioni-detail.component.html'
})
export class TransizioniDetailComponent implements OnInit {
    transizioni: ITransizioni;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ transizioni }) => {
            this.transizioni = transizioni;
        });
    }

    previousState() {
        window.history.back();
    }
}
