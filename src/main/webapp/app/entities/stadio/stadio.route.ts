import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Stadio } from 'app/shared/model/stadio.model';
import { StadioService } from './stadio.service';
import { StadioComponent } from './stadio.component';
import { StadioDetailComponent } from './stadio-detail.component';
import { StadioUpdateComponent } from './stadio-update.component';
import { StadioDeletePopupComponent } from './stadio-delete-dialog.component';
import { IStadio } from 'app/shared/model/stadio.model';

@Injectable({ providedIn: 'root' })
export class StadioResolve implements Resolve<IStadio> {
    constructor(private service: StadioService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((stadio: HttpResponse<Stadio>) => stadio.body);
        }
        return Observable.of(new Stadio());
    }
}

export const stadioRoute: Routes = [
    {
        path: 'stadio',
        component: StadioComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'jeventorApp.stadio.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'stadio/:id/view',
        component: StadioDetailComponent,
        resolve: {
            stadio: StadioResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.stadio.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'stadio/new',
        component: StadioUpdateComponent,
        resolve: {
            stadio: StadioResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.stadio.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'stadio/:id/edit',
        component: StadioUpdateComponent,
        resolve: {
            stadio: StadioResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.stadio.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const stadioPopupRoute: Routes = [
    {
        path: 'stadio/:id/delete',
        component: StadioDeletePopupComponent,
        resolve: {
            stadio: StadioResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.stadio.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
