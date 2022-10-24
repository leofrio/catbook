import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import userAlreadyExists from 'src/util/asyncValidators/userAlreadyExists.validator';
import checkPasswords from 'src/util/validators/checkPasswords.validator';
import sameUserPassword from 'src/util/validators/sameUserPassword.validator';
import strongPassword from 'src/util/validators/strongPassword.validator';
import { User } from '../../models/user';
import { SingupService } from '../../services/signup/singup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  showSucessToast = false;
  showFailureToast = false;
  loading: boolean = false;
  passwordValue: string = '0';
  passwordMessage: string = 'weak';
  passwordType: string = 'bg-danger';
  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SingupService,
    private router: Router
  ) {}
  checkPValue(password: string): void {
    let valueInInt: number = 0;
    if (password.length <= 8) {
      valueInInt += password.length * 2.5;
    } else {
      valueInInt += 20;
    }
    if (password.match('(?=.*[A-Z])')) {
      valueInInt += 20;
    }
    if (password.match('(?=.*[0-9])')) {
      valueInInt += 20;
    }
    if (password.match('(?=.*[^A-Za-z0-9])')) {
      valueInInt += 20;
    }
    if (password.match('(?=.*[a-z])')) {
      valueInInt += 20;
    }
    this.changeProgressBar(valueInInt);
  }
  changeProgressBar(pvalue: number): void {
    if (pvalue > 100) {
      pvalue = 100;
    }
    if (pvalue < 33) {
      this.passwordValue = pvalue.toString();
      this.passwordType = 'bg-danger';
      this.passwordMessage = 'Weak';
    }
    if (pvalue >= 33 && pvalue < 66) {
      this.passwordValue = pvalue.toString();
      this.passwordType = 'bg-warning';
      this.passwordMessage = 'Okay';
    }
    if (pvalue >= 66 && pvalue < 99) {
      this.passwordValue = pvalue.toString();
      this.passwordType = 'bg-info';
      this.passwordMessage = 'Good';
    }
    if (pvalue > 99) {
      this.passwordValue = pvalue.toString();
      this.passwordType = 'bg-success';
      this.passwordMessage = 'Strong';
    }
  }

  @Output() goToLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeComponent() {
    this.goToLogin.emit(true);
  }
  signUp(): void {
    this.loading = true;
    const newUser = this.newUserForm.getRawValue() as User;
    this.signUpService.registerNewUser(newUser).subscribe((res) => {
      this.loading = false;
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
