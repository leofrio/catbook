import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { SingupService } from '../../services/signup/singup.service';
import userAlreadyExists from '../../util/asyncValidators/userAlreadyExists.validator';
import checkPasswords from '../../util/validators/checkPasswords.validator';
import sameUserPassword from '../../util/validators/sameUserPassword.validator';

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
    const newUser = this.newUserForm.getRawValue() as User;
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
