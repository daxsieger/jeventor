import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JeventorSharedModule } from 'app/shared';
import {
    ProcessoComponent,
    ProcessoDetailComponent,
    ProcessoUpdateComponent,
    ProcessoDeletePopupComponent,
    ProcessoDeleteDialogComponent,
    processoRoute,
    processoPopupRoute
} from './';

const ENTITY_STATES = [...processoRoute, ...processoPopupRoute];

@NgModule({
    imports: [JeventorSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ProcessoComponent,
        ProcessoDetailComponent,
        ProcessoUpdateComponent,
        ProcessoDeleteDialogComponent,
        ProcessoDeletePopupComponent
    ],
    entryComponents: [ProcessoComponent, ProcessoUpdateComponent, ProcessoDeleteDialogComponent, ProcessoDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeventorProcessoModule {}
