import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function spaceValidator(control: AbstractControl) {
  debugger;
  console.log(control.value);
  // if (control.value) {
  //   //  console.log([...val]);
  //   //var string = '1,0,true,yes, please';
  //   //console.log(val.split(/,(?! )/));
  //   // string.split(/,(?! )/)
  //   //let val = control.value!.length > 0 ? control.value!.join(',') : '';
  //   // console.log(control.value.length);
  // }

  if (control && control.value) {
    let val = control.value;
    var nameSpace = val.split(' ');
    console.log(nameSpace.length);
    if (nameSpace.length >= 2) {
    }
    return { required: true };
  } else {
    return { required: true };
  }
}

// export function spaceValidator(validOptions: Array<string>): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     debugger;
//     let val = control.value;
//     var nameSpace = val.split(' ');
//     console.log(nameSpace.length);
//     if (nameSpace.length >= 2) {
//       return null;
//     } else {
//       return { required: true };
//     }
//   };
// }

export class ValidatorName {
  constructor() {}

  /**
   * Valida se o CPF é valido. Deve-se ser informado o cpf sem máscara.
   */
  static spaceName() {
    return (control: AbstractControl): Validators => {
      const name = control.value;
      if (name) {
        let val = control.value;
        var nameSpace = val.split(' ');
        if (nameSpace.length >= 2) {
          return false;
        } else {
          return { required: true };
        }
      }
      return false;
    };
  }
}
