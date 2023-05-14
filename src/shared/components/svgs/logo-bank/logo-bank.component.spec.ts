/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoBankComponent } from './logo-bank.component';

describe('LogobankComponent', () => {
  let component: LogoBankComponent;
  let fixture: ComponentFixture<LogoBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoBankComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
