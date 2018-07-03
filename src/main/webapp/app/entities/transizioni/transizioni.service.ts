import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITransizioni } from 'app/shared/model/transizioni.model';

type EntityResponseType = HttpResponse<ITransizioni>;
type EntityArrayResponseType = HttpResponse<ITransizioni[]>;

@Injectable({ providedIn: 'root' })
export class TransizioniService {
    private resourceUrl = SERVER_API_URL + 'api/transizionis';

    constructor(private http: HttpClient) {}

    create(transizioni: ITransizioni): Observable<EntityResponseType> {
        return this.http.post<ITransizioni>(this.resourceUrl, transizioni, { observe: 'response' });
    }

    update(transizioni: ITransizioni): Observable<EntityResponseType> {
        return this.http.put<ITransizioni>(this.resourceUrl, transizioni, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITransizioni>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITransizioni[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
