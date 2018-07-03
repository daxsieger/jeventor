import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JeventorSharedModule } from 'app/shared';
import {
    ProduttoreComponent,
    ProduttoreDetailComponent,
    ProduttoreUpdateComponent,
    ProduttoreDeletePopupComponent,
    ProduttoreDeleteDialogComponent,
    produttoreRoute,
    produttorePopupRoute
} from './';

const ENTITY_STATES = [...produttoreRoute, ...produttorePopupRoute];

@NgModule({
    imports: [JeventorSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProduttoreComponent,
        ProduttoreDetailComponent,
        ProduttoreUpdateComponent,
        ProduttoreDeleteDialogComponent,
        ProduttoreDeletePopupComponent
    ],
    entryComponents: [ProduttoreComponent, ProduttoreUpdateComponent, ProduttoreDeleteDialogComponent, ProduttoreDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeventorProduttoreModule {}
