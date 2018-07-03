import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JeventorSharedModule } from 'app/shared';
import {
    StatoComponent,
    StatoDetailComponent,
    StatoUpdateComponent,
    StatoDeletePopupComponent,
    StatoDeleteDialogComponent,
    statoRoute,
    statoPopupRoute
} from './';

const ENTITY_STATES = [...statoRoute, ...statoPopupRoute];

@NgModule({
    imports: [JeventorSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [StatoComponent, StatoDetailComponent, StatoUpdateComponent, StatoDeleteDialogComponent, StatoDeletePopupComponent],
    entryComponents: [StatoComponent, StatoUpdateComponent, StatoDeleteDialogComponent, StatoDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeventorStatoModule {}
