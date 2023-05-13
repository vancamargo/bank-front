import { TestBed, inject } from '@angular/core/testing';

import { ClientService } from './client.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  const clients: any = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];

  let service: ClientService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(ClientService);
  });

  it('should service toBeTruthy', inject(
    [ClientService],
    (service: ClientService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should post a client', () => {
    service.postClient(clients).subscribe((res) => {
      expect(res).toEqual(clients);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/clientList'
    );
    expect(req.request.method).toEqual('POST');
    req.flush(clients);
  });

  it('should get clients', () => {
    service.getClient().subscribe((res) => {
      expect(res).toEqual(clients);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/clientList'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(clients);
  });

  it('should put a client', () => {
    const id = 1;

    service.putClient(clients, id).subscribe((res) => {
      expect(res).toEqual(clients);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/clientList/1'
    );
    expect(req.request.method).toEqual('PUT');
    req.flush(clients);
  });

  it('should delete a client', () => {
    const id = 1;

    service.deleteClient(id).subscribe((res) => {
      expect(res).toEqual({});
    });

    const req = httpTestingController.expectOne(
      'http://localhost:3000/clientList/1'
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  });
});
