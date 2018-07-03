import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Transizioni } from 'app/shared/model/transizioni.model';
import { TransizioniService } from './transizioni.service';
import { TransizioniComponent } from './transizioni.component';
import { TransizioniDetailComponent } from './transizioni-detail.component';
import { TransizioniUpdateComponent } from './transizioni-update.component';
import { TransizioniDeletePopupComponent } from './transizioni-delete-dialog.component';
import { ITransizioni } from 'app/shared/model/transizioni.model';

@Injectable({ providedIn: 'root' })
export class TransizioniResolve implements Resolve<ITransizioni> {
    constructor(private service: TransizioniService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((transizioni: HttpResponse<Transizioni>) => transizioni.body);
        }
        return Observable.of(new Transizioni());
    }
}

export const transizioniRoute: Routes = [
    {
        path: 'transizioni',
        component: TransizioniComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'jeventorApp.transizioni.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'transizioni/:id/view',
        component: TransizioniDetailComponent,
        resolve: {
            transizioni: TransizioniResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.transizioni.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'transizioni/new',
        component: TransizioniUpdateComponent,
        resolve: {
            transizioni: TransizioniResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.transizioni.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'transizioni/:id/edit',
        component: TransizioniUpdateComponent,
        resolve: {
            transizioni: TransizioniResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.transizioni.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const transizioniPopupRoute: Routes = [
    {
        path: 'transizioni/:id/delete',
        component: TransizioniDeletePopupComponent,
        resolve: {
            transizioni: TransizioniResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.transizioni.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
