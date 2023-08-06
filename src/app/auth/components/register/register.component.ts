import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { UserModel } from '../../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  registerForm = this.fb.group({
    firstName: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    gender: ['', [Validators.required]],
  });
  get AllControles() {
    return this.registerForm.controls;
  }

  onSubmit(value: UserModel) {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const { firstName, surname, email, password, dob, gender } =
      this.registerForm.value;

    if (dob) {
      const datePipe = new DatePipe('en-US');
      const dobParts = datePipe.transform(dob, 'yyyy-MM-dd')?.split('-') || [];

      const requestBody = {
        first_name: firstName,
        last_name: surname,
        email,
        password,
        bYear: dobParts[0] || '',
        bMonth: dobParts[1] || '',
        bDay: dobParts[2] || '',
        gender,
      };

      console.log(requestBody, 'REGISTER');
      this.authService.register(requestBody).subscribe({
        next: (res) => {
          localStorage.setItem('user', JSON.stringify(res));
          this.toastr.success(res.message);
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          this.toastr.success(error.error.message);
          console.error('Error fetching profile data:', error);
        },
      });
    } else {
      console.error('Date of birth (dob) is null.');
    }
  }
}
