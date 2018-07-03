import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JeventorSharedModule } from 'app/shared';
import {
    AssistitoComponent,
    AssistitoDetailComponent,
    AssistitoUpdateComponent,
    AssistitoDeletePopupComponent,
    AssistitoDeleteDialogComponent,
    assistitoRoute,
    assistitoPopupRoute
} from './';

const ENTITY_STATES = [...assistitoRoute, ...assistitoPopupRoute];

@NgModule({
    imports: [JeventorSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        AssistitoComponent,
        AssistitoDetailComponent,
        AssistitoUpdateComponent,
        AssistitoDeleteDialogComponent,
        AssistitoDeletePopupComponent
    ],
    entryComponents: [AssistitoComponent, AssistitoUpdateComponent, AssistitoDeleteDialogComponent, AssistitoDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeventorAssistitoModule {}
