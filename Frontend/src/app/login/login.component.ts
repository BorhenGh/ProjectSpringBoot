import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedserviceService } from 'src/app/services/sharedservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error!: string;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private shared: SharedserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.shared.loginUser(this.loginForm.value)
      .subscribe(
        response => {
          this.loading = false;
          this.router.navigate(['/dashbord']);
        },
        error => {
          this.loading = false;
          this.error = error.error;
        }
      );
  }
}





