import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default function checkPasswords(
  control: AbstractControl<any, any>
): ValidationErrors | null {
  let passwordu = control.parent?.get('password')?.value;
  console.log(passwordu);
  let passwordconf = control.parent?.get('passwordconf')?.value;
  if (passwordconf != passwordu || passwordu != passwordconf) {
    return { notEqualPasswords: true };
  }
  return null;
}
