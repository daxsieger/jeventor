import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Processo } from 'app/shared/model/processo.model';
import { ProcessoService } from './processo.service';
import { ProcessoComponent } from './processo.component';
import { ProcessoDetailComponent } from './processo-detail.component';
import { ProcessoUpdateComponent } from './processo-update.component';
import { ProcessoDeletePopupComponent } from './processo-delete-dialog.component';
import { IProcesso } from 'app/shared/model/processo.model';

@Injectable({ providedIn: 'root' })
export class ProcessoResolve implements Resolve<IProcesso> {
    constructor(private service: ProcessoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((processo: HttpResponse<Processo>) => processo.body);
        }
        return Observable.of(new Processo());
    }
}

export const processoRoute: Routes = [
    {
        path: 'processo',
        component: ProcessoComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'jeventorApp.processo.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'processo/:id/view',
        component: ProcessoDetailComponent,
        resolve: {
            processo: ProcessoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.processo.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'processo/new',
        component: ProcessoUpdateComponent,
        resolve: {
            processo: ProcessoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.processo.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'processo/:id/edit',
        component: ProcessoUpdateComponent,
        resolve: {
            processo: ProcessoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.processo.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const processoPopupRoute: Routes = [
    {
        path: 'processo/:id/delete',
        component: ProcessoDeletePopupComponent,
        resolve: {
            processo: ProcessoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.processo.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
