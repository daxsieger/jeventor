import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IEvento } from 'app/shared/model/evento.model';

type EntityResponseType = HttpResponse<IEvento>;
type EntityArrayResponseType = HttpResponse<IEvento[]>;

@Injectable({ providedIn: 'root' })
export class EventoService {
    private resourceUrl = SERVER_API_URL + 'api/eventos';

    constructor(private http: HttpClient) {}

    create(evento: IEvento): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(evento);
        return this.http
            .post<IEvento>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    update(evento: IEvento): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(evento);
        return this.http
            .put<IEvento>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IEvento>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IEvento[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(evento: IEvento): IEvento {
        const copy: IEvento = Object.assign({}, evento, {
            tsEvento: evento.tsEvento != null && evento.tsEvento.isValid() ? evento.tsEvento.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.tsEvento = res.body.tsEvento != null ? moment(res.body.tsEvento) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((evento: IEvento) => {
            evento.tsEvento = evento.tsEvento != null ? moment(evento.tsEvento) : null;
        });
        return res;
    }
}
