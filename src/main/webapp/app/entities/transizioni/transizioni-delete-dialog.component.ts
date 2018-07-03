import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ITransizioni } from 'app/shared/model/transizioni.model';
import { TransizioniService } from './transizioni.service';

@Component({
    selector: 'jhi-transizioni-delete-dialog',
    templateUrl: './transizioni-delete-dialog.component.html'
})
export class TransizioniDeleteDialogComponent {
    transizioni: ITransizioni;

    constructor(
        private transizioniService: TransizioniService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.transizioniService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'transizioniListModification',
                content: 'Deleted an transizioni'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-transizioni-delete-popup',
    template: ''
})
export class TransizioniDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ transizioni }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(TransizioniDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.transizioni = transizioni;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
