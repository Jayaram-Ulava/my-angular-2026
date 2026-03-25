import { AbstractControl } from '@angular/forms';

export function googleemail(control: AbstractControl) {
  if (
    control.errors?.['email'] ||
    control.errors?.['required'] ||
    control.value?.includes('@gmail.com')
  ) {
    return null;
  } else {
    return { googleemails: true };
  }
}
