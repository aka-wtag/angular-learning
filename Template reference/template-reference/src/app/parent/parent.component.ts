import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @ViewChild('child') childComponent: any; // returns first element with child reference
  @ViewChildren('child') childrenComponents: any; // returns all element with child reference

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Access child component's methods or properties
    console.log('--Child Decorator--');
    console.log(this.childComponent.temp);

    console.log('--Children Decorator--');
    this.childrenComponents.forEach((child: any) => {
      console.log(child.temp);
    });
  }
}
