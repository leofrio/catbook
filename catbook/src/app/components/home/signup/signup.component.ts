import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { SingupService } from '../../services/signup/singup.service';
import userAlreadyExists from '../../util/asyncValidators/userAlreadyExists.validator';
import checkPasswords from '../../util/validators/checkPasswords.validator';
import sameUserPassword from '../../util/validators/sameUserPassword.validator';
import strongPassword from '../../util/validators/strongPassword.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  showSucessToast = false;
  showFailureToast = false;
  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SingupService,
    private router: Router
  ) {}
  @Output() goToLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeComponent() {
    this.goToLogin.emit(true);
  }
  signUp(): void {
    const newUser = this.newUserForm.getRawValue() as User;
    this.signUpService.registerNewUser(newUser).subscribe((res) => {
      console.log('user:');
      console.log(res);
      console.log(' was registered');
      this.changeComponent();
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
      validators: [checkPasswords, sameUserPassword, strongPassword],
      asyncValidators: [userAlreadyExists(this.signUpService)],
    }
  );
  ngOnInit(): void {}
}
