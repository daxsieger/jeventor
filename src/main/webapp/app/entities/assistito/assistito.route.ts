import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable } from 'rxjs';
import { Assistito } from 'app/shared/model/assistito.model';
import { AssistitoService } from './assistito.service';
import { AssistitoComponent } from './assistito.component';
import { AssistitoDetailComponent } from './assistito-detail.component';
import { AssistitoUpdateComponent } from './assistito-update.component';
import { AssistitoDeletePopupComponent } from './assistito-delete-dialog.component';
import { IAssistito } from 'app/shared/model/assistito.model';

@Injectable({ providedIn: 'root' })
export class AssistitoResolve implements Resolve<IAssistito> {
    constructor(private service: AssistitoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).map((assistito: HttpResponse<Assistito>) => assistito.body);
        }
        return Observable.of(new Assistito());
    }
}

export const assistitoRoute: Routes = [
    {
        path: 'assistito',
        component: AssistitoComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.assistito.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'assistito/:id/view',
        component: AssistitoDetailComponent,
        resolve: {
            assistito: AssistitoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.assistito.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'assistito/new',
        component: AssistitoUpdateComponent,
        resolve: {
            assistito: AssistitoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.assistito.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'assistito/:id/edit',
        component: AssistitoUpdateComponent,
        resolve: {
            assistito: AssistitoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.assistito.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const assistitoPopupRoute: Routes = [
    {
        path: 'assistito/:id/delete',
        component: AssistitoDeletePopupComponent,
        resolve: {
            assistito: AssistitoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'jeventorApp.assistito.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
