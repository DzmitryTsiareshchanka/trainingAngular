import {FormControl, ValidationErrors} from '@angular/forms';
import * as moment from 'moment';
export function dateOfNotificationValidator(control: FormControl): ValidationErrors {
  const value = control.value;
  const date = moment(value, 'DD-MMM-YY', true).isValid();
  if (date) {
    return null;
  } else { return {dateOfNotificationError: 'invalid date'}; }
}
