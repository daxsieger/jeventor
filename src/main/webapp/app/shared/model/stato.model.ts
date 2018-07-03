import { Moment } from 'moment';
import { IStadio } from 'app/shared/model//stadio.model';
import { IEvento } from 'app/shared/model//evento.model';

export interface IStato {
    id?: number;
    idStadio?: number;
    dsStadio?: string;
    tsCambioStato?: Moment;
    stadio?: IStadio;
    eventis?: IEvento[];
}

export class Stato implements IStato {
    constructor(
        public id?: number,
        public idStadio?: number,
        public dsStadio?: string,
        public tsCambioStato?: Moment,
        public stadio?: IStadio,
        public eventis?: IEvento[]
    ) {}
}
