import {FormControl, ValidationErrors} from '@angular/forms';
import * as moment from 'moment';
export function birthdayValidator(control: FormControl): ValidationErrors {
  const value = control.value;
  const date = moment(value, 'YYYY/MM/DD', true).isValid();
  if (date) {
    return null;
  } else { return {birthdayError: 'invalid date'}; }
}
