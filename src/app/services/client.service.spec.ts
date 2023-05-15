import { TestBed, inject } from '@angular/core/testing';

import { ClientService } from './client.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Client } from 'src/shared/models/client.interface';

const environment = {
  production: false,
  base_url_home: 'http://localhost:5000',
};
describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  let clients: Client = {
    name: 'teste',
    category: 'novo',
    cpf: '656.655.545-0',
    dateRegister: new Date('1969-07-10T03:00:00.000Z'),
    birtDate: new Date('1969-07-10T03:00:00.000Z'),
    monthlyIncome: '5645,555',
  };

  let service: ClientService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClientService,
        {
          provide: 'env',
          useValue: environment,
        },
      ],
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
    let clients: Client[] = [
      {
        name: 'teste',
        category: 'novo',
        cpf: '656.655.545-0',
        dateRegister: new Date('1969-07-10T03:00:00.000Z'),
        birtDate: new Date('1969-07-10T03:00:00.000Z'),
        monthlyIncome: '5645,555',
      },
    ];
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

    service.deleteClient(id).subscribe((res) => {});

    const req = httpTestingController.expectOne(
      'http://localhost:3000/clientList/1'
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush({});
  });
});
