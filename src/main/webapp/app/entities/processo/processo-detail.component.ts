import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProcesso } from 'app/shared/model/processo.model';

@Component({
    selector: 'jhi-processo-detail',
    templateUrl: './processo-detail.component.html'
})
export class ProcessoDetailComponent implements OnInit {
    processo: IProcesso;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ processo }) => {
            this.processo = processo;
        });
    }

    previousState() {
        window.history.back();
    }
}
