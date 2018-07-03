import { Moment } from 'moment';
import { IAssistito } from 'app/shared/model//assistito.model';
import { ITipoEvento } from 'app/shared/model//tipo-evento.model';
import { IGestore } from 'app/shared/model//gestore.model';
import { IProduttore } from 'app/shared/model//produttore.model';
import { IStato } from 'app/shared/model//stato.model';

export interface IEvento {
    id?: number;
    idEvento?: number;
    tsEvento?: Moment;
    note?: string;
    assistito?: IAssistito;
    tipo?: ITipoEvento;
    gestore?: IGestore;
    origine?: IProduttore;
    statis?: IStato[];
}

export class Evento implements IEvento {
    constructor(
        public id?: number,
        public idEvento?: number,
        public tsEvento?: Moment,
        public note?: string,
        public assistito?: IAssistito,
        public tipo?: ITipoEvento,
        public gestore?: IGestore,
        public origine?: IProduttore,
        public statis?: IStato[]
    ) {}
}
