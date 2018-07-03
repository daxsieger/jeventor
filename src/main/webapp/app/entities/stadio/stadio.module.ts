import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JeventorSharedModule } from 'app/shared';
import {
    StadioComponent,
    StadioDetailComponent,
    StadioUpdateComponent,
    StadioDeletePopupComponent,
    StadioDeleteDialogComponent,
    stadioRoute,
    stadioPopupRoute
} from './';

const ENTITY_STATES = [...stadioRoute, ...stadioPopupRoute];

@NgModule({
    imports: [JeventorSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [StadioComponent, StadioDetailComponent, StadioUpdateComponent, StadioDeleteDialogComponent, StadioDeletePopupComponent],
    entryComponents: [StadioComponent, StadioUpdateComponent, StadioDeleteDialogComponent, StadioDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeventorStadioModule {}
