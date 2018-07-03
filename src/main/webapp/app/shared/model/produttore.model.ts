export interface IProduttore {
    id?: number;
    idProduttore?: number;
    dsProduttore?: string;
}

export class Produttore implements IProduttore {
    constructor(public id?: number, public idProduttore?: number, public dsProduttore?: string) {}
}
