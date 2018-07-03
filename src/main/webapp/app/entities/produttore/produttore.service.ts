import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IProduttore } from 'app/shared/model/produttore.model';

type EntityResponseType = HttpResponse<IProduttore>;
type EntityArrayResponseType = HttpResponse<IProduttore[]>;

@Injectable({ providedIn: 'root' })
export class ProduttoreService {
    private resourceUrl = SERVER_API_URL + 'api/produttores';

    constructor(private http: HttpClient) {}

    create(produttore: IProduttore): Observable<EntityResponseType> {
        return this.http.post<IProduttore>(this.resourceUrl, produttore, { observe: 'response' });
    }

    update(produttore: IProduttore): Observable<EntityResponseType> {
        return this.http.put<IProduttore>(this.resourceUrl, produttore, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IProduttore>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IProduttore[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
