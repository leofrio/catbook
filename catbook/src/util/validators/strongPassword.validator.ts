import { FormGroup, ValidationErrors } from '@angular/forms';

export default function strongPassword(
  formgroup: FormGroup
): ValidationErrors | null {
  let password = formgroup.get('password')?.value ?? '';
  if (
    !password.match(
      '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
    )
  ) {
    return { notStrongPassword: true };
  }
  return null;
}
