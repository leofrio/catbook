import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { SingupService } from 'src/app/services/signup/singup.service';

export default function userAlreadyExists(
  signupService: SingupService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<any> => {
    return signupService
      .verifyExistingUser(control.value)
      .pipe(map((result: boolean) => (result ? { userExists: true } : null)));
  };
}
