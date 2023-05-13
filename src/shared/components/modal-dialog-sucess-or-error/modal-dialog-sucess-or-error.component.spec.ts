/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogSucessOrErrorComponent } from './modal-dialog-sucess-or-error.component';

describe('ModalDialogSucessOrErrorComponent', () => {
  let component: ModalDialogSucessOrErrorComponent;
  let fixture: ComponentFixture<ModalDialogSucessOrErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDialogSucessOrErrorComponent],
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
