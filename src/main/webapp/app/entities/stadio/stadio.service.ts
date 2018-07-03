import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IStadio } from 'app/shared/model/stadio.model';

type EntityResponseType = HttpResponse<IStadio>;
type EntityArrayResponseType = HttpResponse<IStadio[]>;

@Injectable({ providedIn: 'root' })
export class StadioService {
    private resourceUrl = SERVER_API_URL + 'api/stadios';

    constructor(private http: HttpClient) {}

    create(stadio: IStadio): Observable<EntityResponseType> {
        return this.http.post<IStadio>(this.resourceUrl, stadio, { observe: 'response' });
    }

    update(stadio: IStadio): Observable<EntityResponseType> {
        return this.http.put<IStadio>(this.resourceUrl, stadio, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IStadio>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IStadio[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
