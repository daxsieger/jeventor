import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IProcesso } from 'app/shared/model/processo.model';

type EntityResponseType = HttpResponse<IProcesso>;
type EntityArrayResponseType = HttpResponse<IProcesso[]>;

@Injectable({ providedIn: 'root' })
export class ProcessoService {
    private resourceUrl = SERVER_API_URL + 'api/processos';

    constructor(private http: HttpClient) {}

    create(processo: IProcesso): Observable<EntityResponseType> {
        return this.http.post<IProcesso>(this.resourceUrl, processo, { observe: 'response' });
    }

    update(processo: IProcesso): Observable<EntityResponseType> {
        return this.http.put<IProcesso>(this.resourceUrl, processo, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IProcesso>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IProcesso[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
