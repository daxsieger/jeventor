import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IGestore } from 'app/shared/model/gestore.model';

@Component({
    selector: 'jhi-gestore-detail',
    templateUrl: './gestore-detail.component.html'
})
export class GestoreDetailComponent implements OnInit {
    gestore: IGestore;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ gestore }) => {
            this.gestore = gestore;
        });
    }

    previousState() {
        window.history.back();
    }
}
