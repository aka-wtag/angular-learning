import { Injectable } from '@angular/core';

@Injectable()
export class SubscribeService {
  OnSubscribeClicked() {
    alert('Thank you for your subscription. You can access the services now.');
  }
}
