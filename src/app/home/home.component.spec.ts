/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../services/client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarModule } from 'src/shared/components/navbar/navbar.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchSgvModule } from 'src/shared/components/svgs/search-sgv/search-sgv.module';
import { ButtonPrimaryModule } from 'src/shared/components/button-primary/button-primary.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        ClientService,
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        NavbarModule,
        MatFormFieldModule,
        SearchSgvModule,
        ButtonPrimaryModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
