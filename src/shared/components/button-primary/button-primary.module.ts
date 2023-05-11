import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './button-primary.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ButtonPrimaryComponent],
  exports: [ButtonPrimaryComponent],
})
export class ButtonPrimaryModule {}
