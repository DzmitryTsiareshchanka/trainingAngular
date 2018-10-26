import {FormControl} from '@angular/forms';
import * as moment from 'moment';
export function dateOfLoginValidator(control: FormControl) {
  const value = control.value;
  const date = moment(value, 'DD MMMM YYYY', true).format();
  if (date !== 'Invalid date') {
    return null;
  } else { return {dateOfLoginError: 'invalid date'}; }
}
