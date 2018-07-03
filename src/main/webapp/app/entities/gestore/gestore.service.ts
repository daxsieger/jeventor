import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IGestore } from 'app/shared/model/gestore.model';

type EntityResponseType = HttpResponse<IGestore>;
type EntityArrayResponseType = HttpResponse<IGestore[]>;

@Injectable({ providedIn: 'root' })
export class GestoreService {
    private resourceUrl = SERVER_API_URL + 'api/gestores';

    constructor(private http: HttpClient) {}

    create(gestore: IGestore): Observable<EntityResponseType> {
        return this.http.post<IGestore>(this.resourceUrl, gestore, { observe: 'response' });
    }

    update(gestore: IGestore): Observable<EntityResponseType> {
        return this.http.put<IGestore>(this.resourceUrl, gestore, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IGestore>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IGestore[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
