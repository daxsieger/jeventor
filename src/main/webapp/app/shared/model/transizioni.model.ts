import { IProcesso } from 'app/shared/model//processo.model';
import { IStadio } from 'app/shared/model//stadio.model';

export interface ITransizioni {
    id?: number;
    idTransizione?: number;
    dsTransizione?: string;
    processo?: IProcesso;
    stadioIniziale?: IStadio;
    stadioFinale?: IStadio;
}

export class Transizioni implements ITransizioni {
    constructor(
        public id?: number,
        public idTransizione?: number,
        public dsTransizione?: string,
        public processo?: IProcesso,
        public stadioIniziale?: IStadio,
        public stadioFinale?: IStadio
    ) {}
}
