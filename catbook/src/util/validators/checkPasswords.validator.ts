import { FormGroup, ValidationErrors } from '@angular/forms';

export default function checkPasswords(
  formgroup: FormGroup
): ValidationErrors | null {
  let passwordu = formgroup.get('password')?.value ?? '';
  let passwordconf = formgroup.get('passwordconf')?.value ?? '';
  if (passwordconf != passwordu || passwordu != passwordconf) {
    return { notEqualPasswords: true };
  }
  return null;
}
