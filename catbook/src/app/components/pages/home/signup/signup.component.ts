import { map, Observable, Subject } from 'rxjs';
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
import sameUserPassword from './validators/sameUserPassword.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SingupService,
    private router: Router
  ) {}

  signUp(): void {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    this.signUpService.registerNewUser(newUser).subscribe((res) => {
      console.log('user:');
      console.log(res);
      console.log(' was registered');
      this.router.navigate(['']);
    });
  }
  newUserForm: FormGroup = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      fname: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordconf: ['', [Validators.required]],
    },
    {
      validators: [checkPasswords, sameUserPassword],
      asyncValidators: [userAlreadyExists(this.signUpService)],
    }
  );
  ngOnInit(): void {}
}
