import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  postClient(client: Cliente) {
    return this.http.post<Cliente>('http://localhost:3000/clientList', client);
  }

  getClient() {
    return this.http.get<Cliente>('http://localhost:3000/clientList');
  }
}
