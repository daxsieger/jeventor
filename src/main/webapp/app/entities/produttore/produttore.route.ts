import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Produttore } from 'app/shared/model/produttore.model';
import { ProduttoreService } from './produttore.service';
import { ProduttoreComponent } from './produttore.component';
import { ProduttoreDetailComponent } from './produttore-detail.component';
import { ProduttoreUpdateComponent } from './produttore-update.component';
import { ProduttoreDeletePopupComponent } from './produttore-delete-dialog.component';
import { IProduttore } from 'app/shared/model/produttore.model';

@Injectable({ providedIn: 'root' })
export class ProduttoreResolve implements Resolve<IProduttore> {
    constructor(private service: ProduttoreService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((produttore: HttpResponse<Produttore>) => produttore.body);
        }
        return Observable.of(new Produttore());
    }
}

export const produttoreRoute: Routes = [
    {
        path: 'produttore',
        component: ProduttoreComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'jeventorApp.produttore.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'produttore/:id/view',
        component: ProduttoreDetailComponent,
        resolve: {
            produttore: ProduttoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.produttore.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'produttore/new',
        component: ProduttoreUpdateComponent,
        resolve: {
            produttore: ProduttoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.produttore.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'produttore/:id/edit',
        component: ProduttoreUpdateComponent,
        resolve: {
            produttore: ProduttoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.produttore.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const produttorePopupRoute: Routes = [
    {
        path: 'produttore/:id/delete',
        component: ProduttoreDeletePopupComponent,
        resolve: {
            produttore: ProduttoreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.produttore.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
