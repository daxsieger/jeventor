import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IProduttore } from 'app/shared/model/produttore.model';
import { ProduttoreService } from './produttore.service';

@Component({
    selector: 'jhi-produttore-delete-dialog',
    templateUrl: './produttore-delete-dialog.component.html'
})
export class ProduttoreDeleteDialogComponent {
    produttore: IProduttore;

    constructor(private produttoreService: ProduttoreService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.produttoreService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'produttoreListModification',
                content: 'Deleted an produttore'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-produttore-delete-popup',
    template: ''
})
export class ProduttoreDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ produttore }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(ProduttoreDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.produttore = produttore;
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
