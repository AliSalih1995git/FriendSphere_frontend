import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.css'],
})
export class CodeVerificationComponent implements OnInit {
  @Input() userInfos: any;
  error!: string;
  @Output() setVisible = new EventEmitter<number>();
  setLoading: boolean = false;
  code!: string;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {}
  verifyCode() {
    this.setLoading = true;
    this.authService.verifyCode(this.userInfos.email, this.code).subscribe({
      next: () => {
        this.error = '';
        this.setVisible.emit(3);
        this.setLoading = false;
      },
      error: (error: any) => {
        this.setLoading = false;
        this.error = error.error.message;
      },
    });
  }
}
