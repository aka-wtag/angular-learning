import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
})
export class GreetComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  greet() {
    this.logger.log('Hello from service method');
  }

  ngOnInit(): void {}
}
