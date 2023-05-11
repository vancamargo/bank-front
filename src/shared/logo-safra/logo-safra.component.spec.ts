/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogoSafraComponent } from './logo-safra.component';

describe('LogoSafraComponent', () => {
  let component: LogoSafraComponent;
  let fixture: ComponentFixture<LogoSafraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoSafraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSafraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
