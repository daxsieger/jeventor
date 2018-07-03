import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JeventorSharedModule } from 'app/shared';
import {
    TransizioniComponent,
    TransizioniDetailComponent,
    TransizioniUpdateComponent,
    TransizioniDeletePopupComponent,
    TransizioniDeleteDialogComponent,
    transizioniRoute,
    transizioniPopupRoute
} from './';

const ENTITY_STATES = [...transizioniRoute, ...transizioniPopupRoute];

@NgModule({
    imports: [JeventorSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TransizioniComponent,
        TransizioniDetailComponent,
        TransizioniUpdateComponent,
        TransizioniDeleteDialogComponent,
        TransizioniDeletePopupComponent
    ],
    entryComponents: [TransizioniComponent, TransizioniUpdateComponent, TransizioniDeleteDialogComponent, TransizioniDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeventorTransizioniModule {}
