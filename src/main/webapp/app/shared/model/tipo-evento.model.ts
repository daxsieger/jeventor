export interface ITipoEvento {
    id?: number;
    idTipoEvento?: number;
    dsTipoEvento?: string;
}

export class TipoEvento implements ITipoEvento {
    constructor(public id?: number, public idTipoEvento?: number, public dsTipoEvento?: string) {}
}
