export interface IProcesso {
    id?: number;
    idProcesso?: number;
    dsProcesso?: string;
}

export class Processo implements IProcesso {
    constructor(public id?: number, public idProcesso?: number, public dsProcesso?: string) {}
}
