import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(public http: HttpClient) {}

  postClient(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:3000/clientList', client);
  }

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/clientList');
  }
  putClient(client: Client, id: number) {
    return this.http.put<Client>(
      'http://localhost:3000/clientList/' + id,
      client
    );
  }
  deleteClient(id: number) {
    return this.http.delete<Client>('http://localhost:3000/clientList/' + id);
  }
}
