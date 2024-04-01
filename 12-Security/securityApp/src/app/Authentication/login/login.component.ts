import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  goToRegistration() {
    this.router.navigate(['/registration']);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.onLogin(this.loginForm.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/airlines']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
