import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoBankComponent } from './logo-bank.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LogoBankComponent],
  exports: [LogoBankComponent],
})
export class LogoBankModule {}
