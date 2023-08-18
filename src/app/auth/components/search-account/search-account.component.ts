import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css'],
})
export class SearchAccountComponent implements OnInit {
  searchForm: FormGroup;
  @Input() email!: string;
  @Output() setEmail = new EventEmitter<string>();
  @Output() setUserInfos = new EventEmitter<any>();
  @Output() setVisible = new EventEmitter<number>();
  setLoading: boolean = false;
  setError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.searchForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(50)],
      ],
    });
  }

  ngOnInit(): void {}

  handleSearch() {
    if (this.searchForm.valid) {
      const email = this.searchForm.value.email;
      this.setLoading = true;
      this.authService.searchAccount(email).subscribe({
        next: (userInfos: any) => {
          console.log(userInfos, 'search userInfo');

          this.setUserInfos.emit(userInfos);
          this.setVisible.emit(1);
          this.setError = '';
          this.setLoading = false;
        },
        error: (error: any) => {
          this.setLoading = false;

          this.setError = error.error.message;
          // this.setError.emit(error.response.data.message);
        },
      });
    }
  }
}
