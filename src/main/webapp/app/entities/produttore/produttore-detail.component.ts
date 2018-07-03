import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduttore } from 'app/shared/model/produttore.model';

@Component({
    selector: 'jhi-produttore-detail',
    templateUrl: './produttore-detail.component.html'
})
export class ProduttoreDetailComponent implements OnInit {
    produttore: IProduttore;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ produttore }) => {
            this.produttore = produttore;
        });
    }

    previousState() {
        window.history.back();
    }
}
