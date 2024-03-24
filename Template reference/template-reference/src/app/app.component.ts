import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLabel: boolean = false;
  condition: boolean = true;
  items: number[] = [1, 2, 3];

  callPhone(num: any) {
    this.showLabel = true;
    console.log(num);
  }
}
