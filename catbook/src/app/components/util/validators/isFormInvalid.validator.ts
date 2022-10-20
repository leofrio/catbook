import { FormGroup } from '@angular/forms';

export default function isFormInvalid(formgroup: FormGroup): boolean {
  const controls = formgroup.controls;
  for (const name in controls) {
    if (controls[name].invalid) {
      return true;
    }
  }
  return false;
}
