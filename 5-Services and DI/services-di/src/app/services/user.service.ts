import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
  users: string[] = ['u1', 'u2', 'u3'];

  constructor(private logger: LoggerService) {}

  OnUserDetailsClicked: EventEmitter<string> = new EventEmitter<string>();

  OnShowUserDetails(user: string) {
    this.OnUserDetailsClicked.emit(user);
  }

  GetAllUsers() {
    return this.users;
  }

  CreateUser() {
    let user = 'new user';
    this.users.push(user);
    this.logger.log('User added');
  }
}
