import { AbstractControl, Validators } from '@angular/forms';

export class ValidatorName {
  static spaceName() {
    return (control: AbstractControl): Validators => {
      const name = control.value;
      if (name) {
        let val = control.value;
        var nameSpace = val.split(' ');
        if (nameSpace.length >= 2) {
          return false;
        } else {
          return { lastName: true };
        }
      }
      return false;
    };
  }
}
