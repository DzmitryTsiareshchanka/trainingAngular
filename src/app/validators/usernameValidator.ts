import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {Observable, of, timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';
 export function usernameValidator(control: AbstractControl): Observable<ValidationErrors> {
    const value = control.value;
    const words = value.split(' ');
    const errors = [];
    for (let i = 0; i < words.length; i++) {
      if(words[i] === '' || words[i] === undefined) {
        errors.push('Value required');
      }
      if (!(isValidSymbol(words[i]))) {
        errors.push('Username contain banned symbols');
        break;
      } else if (words[i] !== '') {
        if (words[i][0].toLowerCase() === words[i][0]) {
          errors.push('Username should be in pascal case');
        }
      }
    }
    if (words.length > 2) {
      errors.push('Username should be with one or two word');
    }
    return timer(3000).pipe(switchMap(() => {
      if (errors.length > 0) {
        return of({usernameError: errors});
      } else { return of(null); }
    }));
}
function isValidSymbol(word) {
  let flag = true;
  for (let i = 0; i < word.length; i++) {
    if (!((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90)
      || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122))) {
      flag = false;
    }
  }
  return flag;
}
