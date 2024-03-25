import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { SubscribeService } from './services/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UserService,
    private subscribeService: SubscribeService
  ) {}

  userList = this.userService.GetAllUsers();

  ngOnInit(): void {
    console.log(this.userList);
  }

  subscribed() {
    this.userService.CreateUser();
    this.subscribeService.OnSubscribeClicked();
  }
}
