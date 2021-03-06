import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotificationsService } from '../../../core/services';
import { User } from '../../../core/models';
import { AuthService } from '../../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin = true;
  formGroup: FormGroup;
  errorToShow: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationsService: NotificationsService,
  ) { }

  async submitForm(): Promise<void> {
    try {
      if (this.isLogin) {
        await this.login();
      } else {
        await this.register();
      }
      this.router.navigate(['']);
    }
    catch (error) {
      this.formGroup.setErrors({error: error.message})
    }
  }

  changeForm(isLogin: boolean): void {
    this.isLogin = isLogin;
    this.initializeForm();
  }

  isFieldEmpty(field: string): boolean {
    return this.formGroup.get(field).hasError('required');
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', { validators: [Validators.email, Validators.required] }),
      password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
    }, { updateOn: 'blur' });

    if (!this.isLogin) {
      this.formGroup.addControl('name', new FormControl('', { validators: [Validators.required] }));
    }
  }

  private async login(): Promise<void> {
    const data = this.formGroup.value;

    await this.authService.login(data as User);
  }

  private async register(): Promise<void> {
    const data = this.formGroup.value;

    await this.authService.register(data as User);
  }
}
