import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JeventorSharedModule } from 'app/shared';
import {
    TipoEventoComponent,
    TipoEventoDetailComponent,
    TipoEventoUpdateComponent,
    TipoEventoDeletePopupComponent,
    TipoEventoDeleteDialogComponent,
    tipoEventoRoute,
    tipoEventoPopupRoute
} from './';

const ENTITY_STATES = [...tipoEventoRoute, ...tipoEventoPopupRoute];

@NgModule({
    imports: [JeventorSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TipoEventoComponent,
        TipoEventoDetailComponent,
        TipoEventoUpdateComponent,
        TipoEventoDeleteDialogComponent,
        TipoEventoDeletePopupComponent
    ],
    entryComponents: [TipoEventoComponent, TipoEventoUpdateComponent, TipoEventoDeleteDialogComponent, TipoEventoDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeventorTipoEventoModule {}
