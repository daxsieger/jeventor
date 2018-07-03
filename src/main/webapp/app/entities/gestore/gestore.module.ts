import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JeventorSharedModule } from 'app/shared';
import {
    GestoreComponent,
    GestoreDetailComponent,
    GestoreUpdateComponent,
    GestoreDeletePopupComponent,
    GestoreDeleteDialogComponent,
    gestoreRoute,
    gestorePopupRoute
} from './';

const ENTITY_STATES = [...gestoreRoute, ...gestorePopupRoute];

@NgModule({
    imports: [JeventorSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        GestoreComponent,
        GestoreDetailComponent,
        GestoreUpdateComponent,
        GestoreDeleteDialogComponent,
        GestoreDeletePopupComponent
    ],
    entryComponents: [GestoreComponent, GestoreUpdateComponent, GestoreDeleteDialogComponent, GestoreDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeventorGestoreModule {}
