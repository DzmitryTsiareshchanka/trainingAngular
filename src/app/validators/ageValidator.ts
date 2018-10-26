import {FormControl, ValidationErrors} from '@angular/forms';

export function ageValidator(control: FormControl): ValidationErrors {
   const value = control.value;
   const errors = [];
   if (parseInt(value, 10) < 18 || parseInt(value, 10) > 65) {
      errors.push('Value must be in range 18 - 65');
   }
   if (!(isNumber(Number(value)))) {
     errors.push('Value must be positive integer');
   }
   if (errors.length === 0) {
     return null;
   } else { return {ageError: errors}; }
}

function isNumber(n): boolean {
  return n % 1 === 0 && n > 0;
}
