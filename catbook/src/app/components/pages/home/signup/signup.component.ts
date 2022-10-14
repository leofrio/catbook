import { map, Observable, Subject } from 'rxjs';
import { UserExistsService } from './../../../../services/user-exists/user-exists.service';
import { NewUser } from './../../../../models/new-user';
import { SingupService } from './../../../../services/signup/singup.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SingupService
  ) {}
  newUserForm!: FormGroup;
  signUp(): void {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    this.signUpService.registerNewUser(newUser);
  }
  checkPasswords(control: AbstractControl): { [key: string]: boolean } | null {
    let passwordu = control.parent?.get('password')?.value;
    console.log(passwordu);
    let passwordconf = control.parent?.get('passwordconf')?.value;
    if (passwordconf != passwordu || passwordu != passwordconf) {
      return { notEqualPasswords: true };
    }
    return null;
  }
  createValidator(signupService: SingupService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      return signupService
        .verifyExistingUser(control.value)
        .pipe(map((result: boolean) => (result ? { userExists: true } : null)));
    };
  }
  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fname: ['', [Validators.required, Validators.minLength(4)]],
      userName: [
        '',
        [Validators.required],
        [this.createValidator(this.signUpService)],
      ],
      password: ['', [Validators.required, this.checkPasswords]],
      passwordconf: ['', [Validators.required, this.checkPasswords]],
    });
  }
}
