import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAssistito } from 'app/shared/model/assistito.model';

@Component({
    selector: 'jhi-assistito-detail',
    templateUrl: './assistito-detail.component.html'
})
export class AssistitoDetailComponent implements OnInit {
    assistito: IAssistito;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ assistito }) => {
            this.assistito = assistito;
        });
    }

    previousState() {
        window.history.back();
    }
}
