import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(public http: HttpClient) {}

  postClient(client: Client) {
    return this.http.post<Client>('http://localhost:3000/clientList', client);
  }

  getClient() {
    return this.http.get<any>('http://localhost:3000/clientList');
  }
  putClient(client: any, id: number) {
    return this.http.put<any>('http://localhost:3000/clientList/' + id, client);
  }
  deleteClient(id: number) {
    return this.http.delete<any>('http://localhost:3000/clientList/' + id);
  }
}
