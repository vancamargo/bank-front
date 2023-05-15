import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client.interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = environment.apiUrl;
  constructor(public http: HttpClient) {}

  postClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/clientList`, client);
  }

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/clientList`);
  }
  putClient(client: Client, id: number) {
    return this.http.put<Client>(`${this.apiUrl}/clientList/${id}`, client);
  }
  deleteClient(id: number) {
    return this.http.delete<Client>(`${this.apiUrl}/clientList/${id}`);
  }
}
