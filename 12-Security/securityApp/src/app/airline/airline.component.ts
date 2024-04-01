import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../Service/airline.service';
import { TokenService } from '../Service/token.service';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css'],
})
export class AirlineComponent implements OnInit {
  airlines: any;

  constructor(
    private airlineService: AirlineService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.airlineService.getAllAirlines().subscribe((data) => {
      this.airlines = data;
      console.log(data);
    });
  }

  onLogoutClick() {
    this.authService.onLogout();
    this.router.navigate(['/login']);
  }
}
