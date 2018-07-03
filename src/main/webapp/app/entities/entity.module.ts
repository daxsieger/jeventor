import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JeventorEventoModule } from './evento/evento.module';
import { JeventorAssistitoModule } from './assistito/assistito.module';
import { JeventorGestoreModule } from './gestore/gestore.module';
import { JeventorTipoEventoModule } from './tipo-evento/tipo-evento.module';
import { JeventorProduttoreModule } from './produttore/produttore.module';
import { JeventorStatoModule } from './stato/stato.module';
import { JeventorStadioModule } from './stadio/stadio.module';
import { JeventorProcessoModule } from './processo/processo.module';
import { JeventorTransizioniModule } from './transizioni/transizioni.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JeventorEventoModule,
        JeventorAssistitoModule,
        JeventorGestoreModule,
        JeventorTipoEventoModule,
        JeventorProduttoreModule,
        JeventorStatoModule,
        JeventorStadioModule,
        JeventorProcessoModule,
        JeventorTransizioniModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeventorEntityModule {}
