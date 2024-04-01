import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private authService: AuthService) {
    this.registrationForm = new FormGroup({
      userFullName: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userContact: new FormControl('', [Validators.required]),
      passengerPassport: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.registrationForm.value);
    // if (this.registrationForm.valid) {
    //   this.authService.onRegistration(this.registrationForm.value).subscribe({
    //     next: () => {
    //       this.router.navigate(['login']);
    //     }
    //   });
    // } else {
    //   this.registrationForm.markAllAsTouched();
    // }

    this.authService
      .onRegistration(this.registrationForm.value)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
