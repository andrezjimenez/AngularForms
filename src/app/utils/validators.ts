import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return {price_invalid: true};
    }
    return null;
  }
  
  static validPassword (control: AbstractControl){
    const value = control.value;
    if(!containNumber(value)){      
      return {invalid_password: true};
    }
    return null;
  }

  // static matchPassword (control: AbstractControl){
  //   const password = control.get('password').value;
  //   const confirmPasword = control.get('confirmPssword').value;
  //   if (password === confirmPasword){
  //     return null
  //   }
  //   return {match_password: true};
  // }


}

function containNumber (value:string){
  return value.split('').find(v => isNumber(v)) !== undefined;
}

function  isNumber (value: string) {
    return !isNaN(parseInt(value,10));
}