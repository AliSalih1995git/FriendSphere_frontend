import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  password!: string;
  confPassword!: string;
  error!: string;
  @Input() userInfos: any;
  setError: string = '';
  @Output() setVisible = new EventEmitter<number>();
  setLoading: boolean = false;

  changePasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.changePasswordForm = this.formBuilder.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(36),
        ],
      ],
      confPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  changePassword() {
    if (this.changePasswordForm.valid) {
      const password = this.changePasswordForm.value.password;
      this.setLoading = true;
      this.authService
        .changePassword(this.userInfos.email, password)
        .subscribe({
          next: () => {
            console.log('update password');

            this.setError = '';
            this.setVisible.emit(0);
            this.setLoading = false;
          },
          error: (error: any) => {
            this.setLoading = false;
            this.setError = error.error.message;
          },
        });
    }
  }
}
