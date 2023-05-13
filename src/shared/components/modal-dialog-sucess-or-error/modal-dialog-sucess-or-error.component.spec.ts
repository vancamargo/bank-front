/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogSucessOrErrorComponent } from './modal-dialog-sucess-or-error.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ButtonPrimaryModule } from '../button-primary/button-primary.module';
import { IconSucessModule } from '../svgs/icon-sucess/icon-sucess.module';

describe('ModalDialogSucessOrErrorComponent', () => {
  let component: ModalDialogSucessOrErrorComponent;
  let fixture: ComponentFixture<ModalDialogSucessOrErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDialogSucessOrErrorComponent],
      imports: [MatDialogModule, ButtonPrimaryModule, IconSucessModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogSucessOrErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
