import { FormGroup, ValidationErrors } from '@angular/forms';

export default function sameUserPassword(
  formgroup: FormGroup
): ValidationErrors | null {
  let password = formgroup.get('password')?.value ?? '';
  let userName = formgroup.get('userName')?.value ?? '';
  if (userName.toLowerCase() === password.toLowerCase()) {
    return { sameUserPassword: true };
  }
  return null;
}
