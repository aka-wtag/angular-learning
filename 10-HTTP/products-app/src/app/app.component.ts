import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showForm: boolean = false;
  showFromButtonTitle: string = 'Add Product';

  toggleProductForm() {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.showFromButtonTitle = 'Hide';
      return;
    }
    this.showFromButtonTitle = 'Add Product';
  }
}
