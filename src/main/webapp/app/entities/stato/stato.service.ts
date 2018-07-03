import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IStato } from 'app/shared/model/stato.model';

type EntityResponseType = HttpResponse<IStato>;
type EntityArrayResponseType = HttpResponse<IStato[]>;

@Injectable({ providedIn: 'root' })
export class StatoService {
    private resourceUrl = SERVER_API_URL + 'api/statoes';

    constructor(private http: HttpClient) {}

    create(stato: IStato): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(stato);
        return this.http
            .post<IStato>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    update(stato: IStato): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(stato);
        return this.http
            .put<IStato>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IStato>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertDateFromServer(res));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IStato[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(stato: IStato): IStato {
        const copy: IStato = Object.assign({}, stato, {
            tsCambioStato: stato.tsCambioStato != null && stato.tsCambioStato.isValid() ? stato.tsCambioStato.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.tsCambioStato = res.body.tsCambioStato != null ? moment(res.body.tsCambioStato) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((stato: IStato) => {
            stato.tsCambioStato = stato.tsCambioStato != null ? moment(stato.tsCambioStato) : null;
        });
        return res;
    }
}
