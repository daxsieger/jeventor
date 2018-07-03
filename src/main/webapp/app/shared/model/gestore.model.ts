export interface IGestore {
    id?: number;
    idGestore?: number;
}

export class Gestore implements IGestore {
    constructor(public id?: number, public idGestore?: number) {}
}
