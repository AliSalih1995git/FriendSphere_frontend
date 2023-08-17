import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get AllControles() {
    return this.loginForm.controls;
  }

  onSubmit(value: any) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const formData = this.loginForm.value;

    this.authService.login(formData).subscribe({
      next: (res) => {
        localStorage.setItem('user', JSON.stringify(res));
        this.toastr.success(res.message);
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        this.toastr.error(error.error.message);
        console.error('Error fetching profile data:', error);
      },
    });
  }
}
