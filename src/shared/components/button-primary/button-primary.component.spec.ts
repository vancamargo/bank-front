/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ButtonPrimaryComponent } from './button-primary.component';
import { MatButtonModule } from '@angular/material/button';

describe('ButtonPrimaryComponent', () => {
  let component: ButtonPrimaryComponent;
  let fixture: ComponentFixture<ButtonPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPrimaryComponent],
      imports: [MatButtonModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
