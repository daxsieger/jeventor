import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Gestore } from 'app/shared/model/gestore.model';
import { GestoreService } from './gestore.service';
import { GestoreComponent } from './gestore.component';
import { GestoreDetailComponent } from './gestore-detail.component';
import { GestoreUpdateComponent } from './gestore-update.component';
import { GestoreDeletePopupComponent } from './gestore-delete-dialog.component';
import { IGestore } from 'app/shared/model/gestore.model';

@Injectable({ providedIn: 'root' })
export class GestoreResolve implements Resolve<IGestore> {
    constructor(private service: GestoreService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((gestore: HttpResponse<Gestore>) => gestore.body);
        }
        return Observable.of(new Gestore());
    }
}

export const gestoreRoute: Routes = [
    {
        path: 'gestore',
        component: GestoreComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.gestore.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'gestore/:id/view',
        component: GestoreDetailComponent,
        resolve: {
            gestore: GestoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.gestore.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'gestore/new',
        component: GestoreUpdateComponent,
        resolve: {
            gestore: GestoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.gestore.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'gestore/:id/edit',
        component: GestoreUpdateComponent,
        resolve: {
            gestore: GestoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.gestore.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const gestorePopupRoute: Routes = [
    {
        path: 'gestore/:id/delete',
        component: GestoreDeletePopupComponent,
        resolve: {
            gestore: GestoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.gestore.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
