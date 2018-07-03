import { IProcesso } from 'app/shared/model//processo.model';

export interface IStadio {
    id?: number;
    idStadio?: number;
    dsStadio?: string;
    processo?: IProcesso;
}

export class Stadio implements IStadio {
    constructor(public id?: number, public idStadio?: number, public dsStadio?: string, public processo?: IProcesso) {}
}
