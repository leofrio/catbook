import { first, map, Observable, switchMap } from 'rxjs';
import { SingupService } from './../signup/singup.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private signUpService: SingupService) {}
  userExists() {
    return (control: AbstractControl) => {
      return (
        control.valueChanges.pipe(
          switchMap((username) =>
            this.signUpService.verifyExistingUser(username)
          )
        ),
        map((userExists) => (userExists ? { userExists: true } : null)),
        first()
      );
    };
  }
}
