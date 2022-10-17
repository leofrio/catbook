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
import checkPasswords from './validators/checkPasswords.validator';
import userAlreadyExists from './asyncValidators/userAlreadyExists.validator';
import isFormInvalid from './validators/isFormInvalid.validator';
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

  signUp(): void {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    this.signUpService.registerNewUser(newUser).subscribe((res) => {
      console.log('user:');
      console.log(res);
      console.log(' was registered');
    });
  }
  newUserForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    fname: ['', [Validators.required, Validators.minLength(4)]],
    userName: ['', Validators.required, userAlreadyExists(this.signUpService)],
    password: ['', [Validators.required, checkPasswords]],
    passwordconf: ['', [Validators.required, checkPasswords]],
  });
  ngOnInit(): void {}
}
