import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterRequest } from 'src/app/Models/register-request';
import { SharedserviceService } from 'src/app/services/sharedservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  loading: boolean = false;
  showSuccessMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private shared: SharedserviceService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log("echec")
      return;
    }

    const registerRequest: RegisterRequest = {
      firstname: this.registerForm.controls['firstname'].value,
      lastname: this.registerForm.controls['lastname'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
    };

    this.loading = true; // Afficher le spinner

    this.shared.registerUser(registerRequest).subscribe(() => {
      this.loading = false; // Masquer le spinner
      this.showSuccessMessage = true; // Afficher le message de succès
    });
  }
}


