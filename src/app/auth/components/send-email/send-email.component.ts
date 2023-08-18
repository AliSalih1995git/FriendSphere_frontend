import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
})
export class SendEmailComponent implements OnInit {
  ngOnInit(): void {}

  @Input() userInfos: any;
  setError: string = '';
  setLoading: boolean = false;
  @Output() setVisible = new EventEmitter<number>();

  constructor(private authService: AuthService) {}

  handleCancel() {
    this.setVisible.emit(0);
  }

  sendEmail() {
    this.setLoading = true;
    this.authService.sendEmail(this.userInfos.email).subscribe({
      next: () => {
        this.setError = '';
        this.setVisible.emit(2);
        this.setLoading = false;
      },
      error: (error: any) => {
        this.setLoading = false;
        this.setError = error.error.message;
      },
    });
  }
}
