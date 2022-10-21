import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { SingupService } from 'src/app/components/services/signup/singup.service';

export default function userAlreadyExists(
  signupService: SingupService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<any> => {
    return signupService
      .verifyExistingUser(control.get('userName')?.value)
      .pipe(map((result: boolean) => (result ? { userExists: true } : null)));
  };
}
