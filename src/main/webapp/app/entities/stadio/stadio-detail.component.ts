import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IStadio } from 'app/shared/model/stadio.model';

@Component({
    selector: 'jhi-stadio-detail',
    templateUrl: './stadio-detail.component.html'
})
export class StadioDetailComponent implements OnInit {
    stadio: IStadio;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ stadio }) => {
            this.stadio = stadio;
        });
    }

    previousState() {
        window.history.back();
    }
}
