import { AbstractControl, Validators } from '@angular/forms';

export class ValidatorName {
  static validateFullName() {
    return (control: AbstractControl): Validators => {
      const name = control.value;

      if (!name) {
        return false;
      }

      const words = name.split(' ');

      if (words.length === 2 && words[0].length >= 1 && words[1].length >= 1) {
        return false;
      }

      return { lastName: true };
    };
  }
}
