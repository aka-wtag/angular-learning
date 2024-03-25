import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     h3 {
  //       color: blue;
  //     }
  //   `,
  // ], // inline style
})
export class AppComponent {
  name = 'your name';
}
