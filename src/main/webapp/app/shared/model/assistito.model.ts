export interface IAssistito {
    id?: number;
    idAssistito?: number;
}

export class Assistito implements IAssistito {
    constructor(public id?: number, public idAssistito?: number) {}
}
