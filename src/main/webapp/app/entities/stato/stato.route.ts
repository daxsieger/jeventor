import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Stato } from 'app/shared/model/stato.model';
import { StatoService } from './stato.service';
import { StatoComponent } from './stato.component';
import { StatoDetailComponent } from './stato-detail.component';
import { StatoUpdateComponent } from './stato-update.component';
import { StatoDeletePopupComponent } from './stato-delete-dialog.component';
import { IStato } from 'app/shared/model/stato.model';

@Injectable({ providedIn: 'root' })
export class StatoResolve implements Resolve<IStato> {
    constructor(private service: StatoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((stato: HttpResponse<Stato>) => stato.body);
        }
        return Observable.of(new Stato());
    }
}

export const statoRoute: Routes = [
    {
        path: 'stato',
        component: StatoComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.stato.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'stato/:id/view',
        component: StatoDetailComponent,
        resolve: {
            stato: StatoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.stato.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'stato/new',
        component: StatoUpdateComponent,
        resolve: {
            stato: StatoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.stato.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'stato/:id/edit',
        component: StatoUpdateComponent,
        resolve: {
            stato: StatoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.stato.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const statoPopupRoute: Routes = [
    {
        path: 'stato/:id/delete',
        component: StatoDeletePopupComponent,
        resolve: {
            stato: StatoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.stato.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
